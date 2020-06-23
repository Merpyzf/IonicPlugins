var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var BackgroundTaskOriginal = /** @class */ (function (_super) {
    __extends(BackgroundTaskOriginal, _super);
    function BackgroundTaskOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundTaskOriginal.prototype.startService = function (interval) { return cordova(this, "startService", {"observable": true}, arguments); };
    BackgroundTaskOriginal.prototype.stopService = function () { return cordova(this, "stopService", {}, arguments); };
    BackgroundTaskOriginal.prototype.pauseTask = function () { return cordova(this, "pauseTask", {}, arguments); };
    BackgroundTaskOriginal.prototype.resumeTask = function () { return cordova(this, "resumeTask", {}, arguments); };
    BackgroundTaskOriginal.pluginName = "BackgroundTask";
    BackgroundTaskOriginal.plugin = "cordova-plugin-backgroundtask";
    BackgroundTaskOriginal.pluginRef = "cordova.plugins.BackgroundTask";
    BackgroundTaskOriginal.platforms = ["Android"];
    return BackgroundTaskOriginal;
}(IonicNativePlugin));
var BackgroundTask = new BackgroundTaskOriginal();
export { BackgroundTask };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhY2tncm91bmQtdGFzay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQztBQUM1SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQThCRSxrQ0FBaUI7Ozs7SUFPbkQscUNBQVksYUFBQyxRQUFnQjtJQVE3QixvQ0FBVztJQVFYLGtDQUFTO0lBUVQsbUNBQVU7Ozs7O3lCQTFFWjtFQTJDb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBCYWNrZ3JvdW5kIFRhc2tcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhY2tncm91bmRUYXNrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYWNrZ3JvdW5kLXRhc2snO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tncm91bmRUYXNrOiBCYWNrZ3JvdW5kVGFzaykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYmFja2dyb3VuZFRhc2suZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYWNrZ3JvdW5kVGFzaycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmR0YXNrJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkJhY2tncm91bmRUYXNrJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kVGFzayBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICog5ZCv5YqoIFNlcnZpY2Ug5bm25byA5aeL5a6a5pe25omn6KGM5Lu75YqhXG4gICAqIEBwYXJhbSBpbnRlcnZhbCDku7vliqHmiafooYznmoTpl7TpmpTml7bpl7TvvIjljZXkvY3vvJrmr6vnp5LvvIlcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRTZXJ2aWNlKGludGVydmFsOiBudW1iZXIpOk9ic2VydmFibGU8c3RyaW5nPntcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICog5YGc5q2iIFNlcnZpY2Ug5bm257uI5q2i5a6a5pe25Lu75YqhXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BTZXJ2aWNlKCk6dm9pZHtcbiAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiDmmoLlgZzlrprml7bku7vliqHnmoTmiafooYxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF1c2VUYXNrKCk6dm9pZHtcblxuICB9XG5cbiAgLyoqXG4gICAqIOaBouWkjeWumuaXtuS7u+WKoeeahOaJp+ihjFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXN1bWVUYXNrKCk6dm9pZHtcblxuICB9XG4gIFxufVxuIl19