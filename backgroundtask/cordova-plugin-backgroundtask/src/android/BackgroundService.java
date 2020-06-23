package com.zijin.plugin;

import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.Binder;
import android.os.IBinder;
import android.os.PowerManager;
import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;

public class BackgroundService extends Service {
    private static final String TAG = "wk";
    private static final String WAKE_LOCK_TAG = "backgroundservice: mywakelocktag";
    /**
     * binder提供给客户端调用
     */
    private final IBinder binder = new ForegroundBinder();
    private CallbackContext callbackContext;
    private boolean isDestroy = false;
    private boolean isPauseTask = true;
    private long taskExtInterval = 3 * 1000;
    private Context context;
    private Thread thread;
    private PowerManager.WakeLock wakeLock;

    public BackgroundService() {
    }

    @Override
    public void onCreate() {
        super.onCreate();
        this.context = getApplicationContext();
        // 持有锁，避免CPU休眠导致定时任务被暂停
        PowerManager pm = (PowerManager) this.context.getSystemService(Context.POWER_SERVICE);
        wakeLock = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, WAKE_LOCK_TAG);
        wakeLock.acquire();
        Log.i(TAG, "服务创建&线程启动了");
        thread = new Thread(new Runnable() {
            @Override
            public void run() {
                while (isDestroy == false) {
                    Log.i(TAG, "线程执行中...");
                    if (isPauseTask == false) {
                        Log.i(TAG, "任务执行任务通知发送中...");
                        PluginResult pr = new PluginResult(PluginResult.Status.OK, "runing...");
                        pr.setKeepCallback(true);
                        callbackContext.sendPluginResult(pr);
                    }
                    try {
                        Thread.sleep(taskExtInterval);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        });
        thread.start();
    }

    /**
     * 阻止 Android 自动停止后台任务
     */
    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        return START_STICKY;
    }


    @Override
    public IBinder onBind(Intent intent) {
        return binder;
    }

    /**
     * 设置任务执行的间隔时间
     *
     * @param taskExtInterval
     */
    public void setTaskExtInterval(long taskExtInterval) {
        this.taskExtInterval = taskExtInterval;
    }

    /**
     * 恢复任务执行
     *
     * @param callbackContext
     */
    public void resumeTask(CallbackContext callbackContext) {
        this.isPauseTask = false;
        if (callbackContext == null) {
            return;
        }
        this.callbackContext = callbackContext;
    }

    /**
     * 暂停任务执行
     */
    public void pauseTask() {
        this.isPauseTask = true;
    }

    @Override
    public void onDestroy() {
        this.isDestroy = true;
        if (wakeLock != null) {
            wakeLock.release();
            wakeLock = null;
        }
        super.onDestroy();
    }


    class ForegroundBinder extends Binder {
        public BackgroundService getService() {
            return BackgroundService.this;
        }
    }
}
