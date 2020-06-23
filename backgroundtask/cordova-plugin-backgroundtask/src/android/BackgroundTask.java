package com.zijin.plugin;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.IBinder;
import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * 负责后台服务插件的调度
 *
 * @author wangke
 * @date 2020-06-18
 */
public class BackgroundTask extends CordovaPlugin {
    private static final String TAG = "wk";
    private CallbackContext callbackContext;
    private BackgroundService backgroundService;
    private Context context;
    // 任务间隔执行的时间
    private long taskExtInterval = 3 * 1000;


    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        this.context = cordova.getContext();
        super.initialize(cordova, webView);
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Log.i(TAG, "execute: " + action);
        this.callbackContext = callbackContext;
        if ("startService".equals(action)) {
            PluginResult pr = new PluginResult(PluginResult.Status.NO_RESULT);
            pr.setKeepCallback(true);
            this.callbackContext.sendPluginResult(pr);
            // 任务间隔执行的时间
            taskExtInterval = args.getLong(0);
            startService();
            return true;
        } else if ("stopService".equals(action)) {
            stopService();
            return true;
        } else if ("pauseTask".equals(action)) {
            pauseTask();
            return true;
        } else if ("resumeTask".equals(action)) {
            resumeTask();
            return true;
        }
        return false;
    }

    /**
     * 恢复任务执行
     */
    private void resumeTask() {
        backgroundService.resumeTask(null);
    }

    /**
     * 暂停任务执行
     */
    private void pauseTask() {
        backgroundService.pauseTask();
    }

    /**
     * 停止服务
     */
    private void stopService() {
        Intent intent = new Intent(context, BackgroundService.class);
        context.unbindService(connection);
        context.stopService(intent);
    }

    /**
     * 开启服务
     */
    private void startService() {
        Intent intent = new Intent(context, BackgroundService.class);
        context.bindService(intent, connection, Context.BIND_AUTO_CREATE);
        context.startService(intent);
    }

    private final ServiceConnection connection = new ServiceConnection() {
        @Override
        public void onServiceConnected(ComponentName name, IBinder service) {
            BackgroundService.ForegroundBinder binder = (BackgroundService.ForegroundBinder) service;
            backgroundService = binder.getService();
            // 设置任务执行的间隔时间
            backgroundService.setTaskExtInterval(taskExtInterval);
            // 执行任务
            backgroundService.resumeTask(callbackContext);
        }

        @Override
        public void onServiceDisconnected(ComponentName name) {
        }
    };
}
