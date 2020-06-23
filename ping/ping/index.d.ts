import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name ping
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { ping } from '@ionic-native/ping';
 *
 *
 * constructor(private ping: ping) { }
 *
 * ...
 *
 *
 * this.ping.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class PingOriginal extends IonicNativePlugin {
    /**
     * 获取Ping命令的执行结果
     * @param ipList 需要执行ping命令的目标主机的列表
     */
    getPingInfo(ipList: Array<TargetInfo>): Promise<any>;
}
export interface TargetInfo {
    query: string;
    timeout: number;
    retry: number;
    version: string;
}

export declare const Ping: PingOriginal;