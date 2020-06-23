import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * @name Background Task
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { BackgroundTask } from '@ionic-native/background-task';
 *
 *
 * constructor(private backgroundTask: BackgroundTask) { }
 *
 * ...
 *
 *
 * this.backgroundTask.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class BackgroundTask extends IonicNativePlugin {
    /**
     * 启动 Service 并开始定时执行任务
     * @param interval 任务执行的间隔时间（单位：毫秒）
     */
    startService(interval: number): Observable<string>;
    /**
     * 停止 Service 并终止定时任务
     */
    stopService(): void;
    /**
     * 暂停定时任务的执行
     */
    pauseTask(): void;
    /**
     * 恢复定时任务的执行
     */
    resumeTask(): void;
}
