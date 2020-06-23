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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var BackgroundTask = /** @class */ (function (_super) {
    __extends(BackgroundTask, _super);
    function BackgroundTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundTask.prototype.startService = function (interval) { return cordova(this, "startService", {"observable": true}, arguments); };
    BackgroundTask.prototype.stopService = function () { return cordova(this, "stopService", {}, arguments); };
    BackgroundTask.prototype.pauseTask = function () { return cordova(this, "pauseTask", {}, arguments); };
    BackgroundTask.prototype.resumeTask = function () { return cordova(this, "resumeTask", {}, arguments); };
    BackgroundTask.pluginName = "BackgroundTask";
    BackgroundTask.plugin = "cordova-plugin-backgroundtask";
    BackgroundTask.pluginRef = "cordova.plugins.BackgroundTask";
    BackgroundTask.platforms = ["Android"];
    BackgroundTask = __decorate([
        Injectable()
    ], BackgroundTask);
    return BackgroundTask;
}(IonicNativePlugin));
export { BackgroundTask };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhY2tncm91bmQtdGFzay9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7QUFDNUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUE4QkUsa0NBQWlCOzs7O0lBT25ELHFDQUFZLGFBQUMsUUFBZ0I7SUFRN0Isb0NBQVc7SUFRWCxrQ0FBUztJQVFULG1DQUFVOzs7OztJQS9CQyxjQUFjO1FBRDFCLFVBQVUsRUFBRTtPQUNBLGNBQWM7eUJBM0MzQjtFQTJDb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBCYWNrZ3JvdW5kIFRhc2tcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhY2tncm91bmRUYXNrIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYWNrZ3JvdW5kLXRhc2snO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tncm91bmRUYXNrOiBCYWNrZ3JvdW5kVGFzaykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYmFja2dyb3VuZFRhc2suZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYWNrZ3JvdW5kVGFzaycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmR0YXNrJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkJhY2tncm91bmRUYXNrJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kVGFzayBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICog5ZCv5YqoIFNlcnZpY2Ug5bm25byA5aeL5a6a5pe25omn6KGM5Lu75YqhXG4gICAqIEBwYXJhbSBpbnRlcnZhbCDku7vliqHmiafooYznmoTpl7TpmpTml7bpl7TvvIjljZXkvY3vvJrmr6vnp5LvvIlcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRTZXJ2aWNlKGludGVydmFsOiBudW1iZXIpOk9ic2VydmFibGU8c3RyaW5nPntcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICog5YGc5q2iIFNlcnZpY2Ug5bm257uI5q2i5a6a5pe25Lu75YqhXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BTZXJ2aWNlKCk6dm9pZHtcbiAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiDmmoLlgZzlrprml7bku7vliqHnmoTmiafooYxcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF1c2VUYXNrKCk6dm9pZHtcblxuICB9XG5cbiAgLyoqXG4gICAqIOaBouWkjeWumuaXtuS7u+WKoeeahOaJp+ihjFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZXN1bWVUYXNrKCk6dm9pZHtcblxuICB9XG4gIFxufVxuIl19