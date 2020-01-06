(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@ionic-native/app-version/ngx/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic-native/app-version/ngx/index.js ***!
  \*************************************************************/
/*! exports provided: AppVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppVersion", function() { return AppVersion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppVersion = /** @class */ (function (_super) {
    __extends(AppVersion, _super);
    function AppVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppVersion.prototype.getAppName = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getAppName", {}, arguments); };
    AppVersion.prototype.getPackageName = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getPackageName", {}, arguments); };
    AppVersion.prototype.getVersionCode = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getVersionCode", {}, arguments); };
    AppVersion.prototype.getVersionNumber = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getVersionNumber", {}, arguments); };
    AppVersion.pluginName = "AppVersion";
    AppVersion.plugin = "cordova-plugin-app-version";
    AppVersion.pluginRef = "cordova.getAppVersion";
    AppVersion.repo = "https://github.com/whiteoctober/cordova-plugin-app-version";
    AppVersion.platforms = ["Android", "iOS", "Windows"];
    AppVersion = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AppVersion);
    return AppVersion;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcC12ZXJzaW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW9DeEMsOEJBQWlCOzs7O0lBTy9DLCtCQUFVO0lBT1YsbUNBQWM7SUFTZCxtQ0FBYztJQU9kLHFDQUFnQjs7Ozs7O0lBOUJMLFVBQVU7UUFIdEIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLFVBQVU7cUJBckN2QjtFQXFDZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuXG4vKipcbiAqIEBuYW1lIEFwcCBWZXJzaW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJlYWRzIHRoZSB2ZXJzaW9uIG9mIHlvdXIgYXBwIGZyb20gdGhlIHRhcmdldCBidWlsZCBzZXR0aW5ncy5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWFwcC12ZXJzaW9uYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQXBwIFZlcnNpb24gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL3doaXRlb2N0b2Jlci9jb3Jkb3ZhLXBsdWdpbi1hcHAtdmVyc2lvbikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBcHBWZXJzaW9uIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hcHAtdmVyc2lvbi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwVmVyc2lvbjogQXBwVmVyc2lvbikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYXBwVmVyc2lvbi5nZXRBcHBOYW1lKCk7XG4gKiB0aGlzLmFwcFZlcnNpb24uZ2V0UGFja2FnZU5hbWUoKTtcbiAqIHRoaXMuYXBwVmVyc2lvbi5nZXRWZXJzaW9uQ29kZSgpO1xuICogdGhpcy5hcHBWZXJzaW9uLmdldFZlcnNpb25OdW1iZXIoKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBcHBWZXJzaW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwLXZlcnNpb24nLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLmdldEFwcFZlcnNpb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3doaXRlb2N0b2Jlci9jb3Jkb3ZhLXBsdWdpbi1hcHAtdmVyc2lvbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBcHBWZXJzaW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBhcHAsIGUuZy46IFwiTXkgQXdlc29tZSBBcHBcIlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBcHBOYW1lKCk6IFByb21pc2U8c3RyaW5nPiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYWNrYWdlIG5hbWUgb2YgdGhlIGFwcCwgZS5nLjogXCJjb20uZXhhbXBsZS5teWF3ZXNvbWVhcHBcIlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRQYWNrYWdlTmFtZSgpOiBQcm9taXNlPHN0cmluZz4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYnVpbGQgaWRlbnRpZmllciBvZiB0aGUgYXBwLlxuICAgKiBJbiBpT1MgYSBzdHJpbmcgd2l0aCB0aGUgYnVpbGQgdmVyc2lvbiBsaWtlIFwiMS42MDk1XCJcbiAgICogSW4gQW5kcm9pZCBhIG51bWJlciBnZW5lcmF0ZWQgZnJvbSB0aGUgdmVyc2lvbiBzdHJpbmcsIGxpa2UgMTAyMDMgZm9yIHZlcnNpb24gXCIxLjIuM1wiXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZyB8IG51bWJlcj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFZlcnNpb25Db2RlKCk6IFByb21pc2U8c3RyaW5nIHwgbnVtYmVyPiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2ZXJzaW9uIG9mIHRoZSBhcHAsIGUuZy46IFwiMS4yLjNcIlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRWZXJzaW9uTnVtYmVyKCk6IFByb21pc2U8c3RyaW5nPiB7IHJldHVybjsgfVxuXG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@ionic-native/device/ngx/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@ionic-native/device/ngx/index.js ***!
  \********************************************************/
/*! exports provided: Device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Device.prototype, "cordova", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "cordova"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "cordova", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "model", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "model"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "model", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "platform", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "platform"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "platform", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "uuid", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "uuid"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "uuid", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "version", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "version"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "version", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "manufacturer", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "manufacturer"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "manufacturer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "isVirtual", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "isVirtual"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "isVirtual", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "serial", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "serial"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "serial", value); },
        enumerable: true,
        configurable: true
    });
    Device.pluginName = "Device";
    Device.plugin = "cordova-plugin-device";
    Device.pluginRef = "device";
    Device.repo = "https://github.com/apache/cordova-plugin-device";
    Device.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    Device = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], Device);
    return Device;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldmljZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw2REFBOEMsTUFBTSxvQkFBb0IsQ0FBQzs7SUE4QnBELDBCQUFpQjs7OzswQkFJM0MsMkJBQU87Ozs7OzswQkFPUCx5QkFBSzs7Ozs7OzBCQUlMLDRCQUFROzs7Ozs7MEJBSVIsd0JBQUk7Ozs7OzswQkFJSiwyQkFBTzs7Ozs7OzBCQUlQLGdDQUFZOzs7Ozs7MEJBSVosNkJBQVM7Ozs7OzswQkFJVCwwQkFBTTs7Ozs7Ozs7Ozs7SUFuQ0ssTUFBTTtRQUhsQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csTUFBTTtpQkEvQm5CO0VBK0I0QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XG5cbi8qKlxuICogQG5hbWUgRGV2aWNlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFjY2VzcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdW5kZXJseWluZyBkZXZpY2UgYW5kIHBsYXRmb3JtLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZXZpY2Uvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRldmljZTogRGV2aWNlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zb2xlLmxvZygnRGV2aWNlIFVVSUQgaXM6ICcgKyB0aGlzLmRldmljZS51dWlkKTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0RldmljZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRldmljZScsXG4gIHBsdWdpblJlZjogJ2RldmljZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWRldmljZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ21hY09TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERldmljZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKiogR2V0IHRoZSB2ZXJzaW9uIG9mIENvcmRvdmEgcnVubmluZyBvbiB0aGUgZGV2aWNlLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgY29yZG92YTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZGV2aWNlLm1vZGVsIHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGRldmljZSdzIG1vZGVsIG9yIHByb2R1Y3QuIFRoZSB2YWx1ZSBpcyBzZXRcbiAgICogYnkgdGhlIGRldmljZSBtYW51ZmFjdHVyZXIgYW5kIG1heSBiZSBkaWZmZXJlbnQgYWNyb3NzIHZlcnNpb25zIG9mIHRoZSBzYW1lIHByb2R1Y3QuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgbW9kZWw6IHN0cmluZztcblxuICAvKiogR2V0IHRoZSBkZXZpY2UncyBvcGVyYXRpbmcgc3lzdGVtIG5hbWUuICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBwbGF0Zm9ybTogc3RyaW5nO1xuXG4gIC8qKiBHZXQgdGhlIGRldmljZSdzIFVuaXZlcnNhbGx5IFVuaXF1ZSBJZGVudGlmaWVyIChVVUlEKS4gKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHV1aWQ6IHN0cmluZztcblxuICAvKiogR2V0IHRoZSBvcGVyYXRpbmcgc3lzdGVtIHZlcnNpb24uICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB2ZXJzaW9uOiBzdHJpbmc7XG5cbiAgLyoqIEdldCB0aGUgZGV2aWNlJ3MgbWFudWZhY3R1cmVyLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGRldmljZSBpcyBydW5uaW5nIG9uIGEgc2ltdWxhdG9yLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgaXNWaXJ0dWFsOiBib29sZWFuO1xuXG4gIC8qKiBHZXQgdGhlIGRldmljZSBoYXJkd2FyZSBzZXJpYWwgbnVtYmVyLiAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgc2VyaWFsOiBzdHJpbmc7XG5cbn1cbiJdfQ==

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header color=\"medium\">-->\n<ion-toolbar color=\"medium\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button class=\"menubutton\"></ion-menu-button>\n  </ion-buttons>\n  <ion-title style=\"color: black\" slot=\"start\" class=\"titleall\">\n    Dashboard\n  </ion-title>\n  <ion-icon style=\"width: 30px;height: 30px;color: black\" slot=\"end\" name=\"help-circle-outline\"\n    (click)=\"presentAlert()\"></ion-icon>\n</ion-toolbar>\n<!--</ion-header>-->\n\n<ion-content align=\"center\">\n  <div style=\"padding-bottom: 10px;padding-left: 15px\">\n    <h4 style=\"font-size: 15px;text-align: left;font-weight: bold\">Active Event: {{eventName}}</h4>\n    <h4 style=\"font-size: 15px;text-align: left;font-weight: bold\">Yard: {{yardName}}</h4>\n    <h4 style=\"font-size: 15px;text-align: left;font-weight: bold\">Status: {{status}}</h4>\n  </div>\n\n  <ion-row>\n    <ion-col size=\"6\" *ngIf=\"activeshow\">\n      <ion-card (click)=\"receipts()\" class=\"welcome-card\">\n        <ion-card-content style=\"font-size: 15px; color: black;\">Receipts</ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\" *ngIf=\"deActiveshow\">\n      <ion-card>\n        <ion-card-content style=\"font-size: 15px; color: black;\">Receipts</ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col size=\"6\" *ngIf=\"activeshow\">\n      <ion-card class=\"welcome-card\" (click)=\"tasklogs()\">\n        <ion-card-content style=\"font-size: 15px; color: black\">Task Logs</ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\" *ngIf=\"deActiveshow\">\n      <ion-card>\n        <ion-card-content style=\"font-size: 15px; color: black\">Task Logs</ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card {\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  border-radius: 2%;\n  justify-content: center; }\n\n.background-color {\n  background-color: #E3A214;\n  cursor: pointer;\n  border: none;\n  width: 100%; }\n\n.h4-text {\n  text-align: left;\n  padding-left: 10px; }\n\n.row {\n  display: -moz-flex;\n  display: flex;\n  padding: 5px;\n  width: 100%; }\n\n.menubutton {\n  color: black !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNhZG1pbi9Eb2N1bWVudHMvZ2l0bGFiL3JsaS1jb21tYW5kZXItYW5kcm9pZC1pb25pYzQvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLHlCQUF5QjtFQUN6QixlQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFJRSxrQkFBaUI7RUFFakIsYUFBWTtFQUNaLFlBQVc7RUFDWCxXQUNGLEVBQUE7O0FBRUE7RUFDRSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJke1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5iYWNrZ3JvdW5kLWNvbG9ye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNBMjE0O1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmg0LXRleHR7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnJvd3tcbiAgZGlzcGxheTotd2Via2l0LWJveDtcbiAgZGlzcGxheTotd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6LW1vei1ib3g7XG4gIGRpc3BsYXk6LW1vei1mbGV4O1xuICBkaXNwbGF5Oi1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OmZsZXg7XG4gIHBhZGRpbmc6NXB4O1xuICB3aWR0aDoxMDAlXG59XG5cbi5tZW51YnV0dG9ue1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_Data_Services_data_sevices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/Data-Services/data-sevices.service */ "./src/app/providers/Data-Services/data-sevices.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _providers_NetworkProvider_network_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/NetworkProvider/network-provider.service */ "./src/app/providers/NetworkProvider/network-provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var HomePage = /** @class */ (function () {
    function HomePage(router, navCtrl, alertController, dataServices, loadingController, iab, sqlite, appVersion, platform, device, networkProvider, menuCtrl) {
        // this.appVersion.getAppName();
        // this.appVersion.getPackageName();
        // this.appVersion.getVersionCode();
        // this.appVersion.getVersionNumber();
        // console.log('package Name : ' + this.appVersion.getAppName())
        // console.log('appversion Name : ' + this.appVersion.getPackageName())
        // console.log('getVersionCode Name : ' + this.appVersion.getVersionCode())
        // console.log('getVersionNumber Name : ' + this.appVersion.getVersionNumber())
        this.router = router;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.iab = iab;
        this.sqlite = sqlite;
        this.appVersion = appVersion;
        this.platform = platform;
        this.device = device;
        this.networkProvider = networkProvider;
        this.menuCtrl = menuCtrl;
        if (this.platform.is('android')) {
            this.platformName = "Android";
            console.log('I am an android device!: ' + this.platformName);
        }
        console.log('Device version is: ' + JSON.stringify(this.device.version));
        localStorage.setItem('DeviceVersion', JSON.stringify(this.device.version));
        // this.Sqlite();
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        if (localStorage.getItem('login') == 'yes') {
            this.getActiveEvent();
        }
    };
    HomePage.prototype.getActiveEvent = function () {
        var _this = this;
        // let that = this;
        if (this.networkProvider.getNetworkStatus() == 'Online') {
            this.presentLoading();
            this.dataServices.getActiveEventsApi(localStorage.getItem('UserID')).then(function (result) {
                console.log(localStorage.getItem('UserID'));
                console.log(result);
                _this.resultData = result;
                if (_this.resultData.length != 0) {
                    var oldEventName = localStorage.getItem('EventName');
                    if (oldEventName != null || oldEventName != undefined) {
                        var newEventName = _this.resultData[0].event_name;
                        _this.loadingController.dismiss();
                        if (oldEventName != newEventName) {
                            localStorage.setItem('EventName', _this.resultData[0].event_name);
                            console.log('EventName' + _this.resultData[0].event_name);
                            _this.eventNotMatchAlert();
                            return;
                        }
                    }
                    localStorage.setItem('EventName', _this.resultData[0].event_name);
                    localStorage.setItem('EventId', _this.resultData[0].event_id);
                    localStorage.setItem('YardId', _this.resultData[0].yard_id);
                    localStorage.setItem('YardName', _this.resultData[0].yard_name);
                    localStorage.setItem('ActiveEventStatus', _this.resultData[0].status);
                    _this.eventName = _this.resultData[0].event_name;
                    _this.yardName = _this.resultData[0].yard_name;
                    _this.status = _this.resultData[0].status;
                    _this.yardArray = _this.resultData[0].yardArray;
                    localStorage.setItem('YardArray', JSON.stringify(_this.yardArray));
                    console.log('yard Array : ' + JSON.stringify(_this.yardArray));
                    // alert('Device Version : ' + JSON.stringify(this.device.version) + 'Platform Name :' + this.platformName)
                    if (_this.status == 'active') {
                        _this.activeshow = true;
                        _this.deActiveshow = false;
                    }
                    else {
                        _this.activeshow = false;
                        _this.deActiveshow = true;
                        _this.eventNotActiveAlert();
                    }
                    _this.loadingController.dismiss();
                }
                else {
                    _this.activeshow = true;
                    _this.deActiveshow = false;
                    _this.loadingController.dismiss();
                    _this.eventNotActiveAlert();
                }
            }, function (error) {
                _this.loadingController.dismiss();
                if (error.status == 401) {
                    _this.displayUnauthoriesdAlert();
                }
            });
        }
        else {
            alert('No internet connection.');
        }
    };
    HomePage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            spinner: null
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.displayUnauthoriesdAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Unauthorized',
                            subHeader: '',
                            buttons: [{
                                    text: 'OK',
                                    handler: function () {
                                        _this.router.navigate(['/login']);
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.eventNotMatchAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Sorry',
                            subHeader: 'Your Event Has Been Changed. Session Out!',
                            buttons: [{
                                    text: 'OK',
                                    handler: function () {
                                        _this.router.navigate(['/login']);
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.eventNotActiveAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'You are not currently active in any events and therefore do not have any access to app functions. If you need to check balances, please log in to your "Personal Portal"',
                            buttons: [{
                                    text: 'Cancel'
                                }, {
                                    text: 'Personal Portal',
                                    handler: function () {
                                        var browser = _this.iab.create('http://rlicommander.com/contractors/', '_system');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '',
                            subHeader: '',
                            message: 'This app allows you to clock in and out, enter receipts, enter task logs, receive work orders, view your portal and chat with RLI.  Note that when the App refers to the “Event”, it means a particular client during the deployment. One deployment may have multiple “Events” if there are multiple clients.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.receipts = function () {
        this.router.navigate(['/receipts']);
    };
    HomePage.prototype.tasklogs = function () {
        this.router.navigate(['/tasklogslist']);
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _providers_Data_Services_data_sevices_service__WEBPACK_IMPORTED_MODULE_3__["DataSevicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"],
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"],
            _providers_NetworkProvider_network_provider_service__WEBPACK_IMPORTED_MODULE_8__["NetworkProviderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map