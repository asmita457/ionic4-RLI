(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_5__["NotificationsPage"]]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.page.html":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header color=\"medium\">-->\n<ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\" style=\"color: black\">\n        <!-- <ion-back-button text=\"\" defaultHref=\"home\" class=\"menubutton\">\n        </ion-back-button> -->\n        <ion-menu-button class=\"menubutton\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\" class=\"titleall\">Notifications</ion-title>\n</ion-toolbar>\n<!--</ion-header>-->\n\n<ion-content>\n    <ion-segment (ionChange)=\"tabChanged($event)\" scrollable>\n        <ion-segment-button value=\"Unread\" checked layout=\"icon-end\" class=\"segmentwidth\">\n            <ion-label style=\"text-transform: capitalize;font-size: 14px\">Unread</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Read\" class=\"segmentwidth\">\n            <ion-label style=\"text-transform: capitalize;font-size: 14px\">Read</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n\n    <div *ngIf=\"isSelected=='Unread'\" align=\"center\" margin-top=\"8px\">\n        <div style=\"margin-top: 20px;\">\n            <ion-label *ngIf=\"unreadNotificationsList.length == 0 && noDocsNotifications == true\"\n                style=\"font-size: 16px; font-weight: bold; margin-top: 10px;\">You Don't Have Any Notification\n                Yet\n            </ion-label>\n            <ion-label *ngIf=\"unreadNotificationsList.length == 0 && noDocsNotifications == false\"\n                style=\"font-size: 16px; font-weight: bold; margin-top: 10px;\">No New Notifications</ion-label>\n        </div>\n        <ion-card *ngFor=\"let notification of unreadNotificationsList\">\n            <div id='num1'>\n                <ion-row>\n                    <ion-col size=\"3\">\n                        <ion-label class=\"notificationTitle\">Type: </ion-label>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <ion-label class=\"notificationContent\">{{notification.type_value}}</ion-label>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"3\">\n                        <ion-label class=\"notificationTitle\">Date: </ion-label>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <ion-label class=\"notificationContent\">{{notification.created_on}}</ion-label>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"3\">\n                        <ion-label class=\"notificationTitle\">From: </ion-label>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <ion-label class=\"notificationContent\">{{notification.username}}</ion-label>\n                    </ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"notification.event_name != null\">\n                    <ion-col size=\"3\">\n                        <ion-label class=\"notificationTitle\">Event: </ion-label>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <ion-label class=\"notificationContent\">{{notification.event_name}}</ion-label>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div id='num2'>\n                <ion-label class=\"notificationDescription\">\n                    {{notification.announcement}}\n                </ion-label>\n                <button class=\"confirmBtn\" align=\"center\" padding=\"2px\"\n                    (click)=\"onClickConfirm(notification)\">Confirm</button>\n            </div>\n        </ion-card>\n    </div>\n\n    <div *ngIf=\"isSelected=='Read'\" align=\"center\" margin-top=\"8px\">\n        <div style=\"margin-top: 20px;\">\n            <ion-label *ngIf=\"readNotificationsList.length == 0\"\n                style=\"font-size: 16px; font-weight: bold; margin-top: 10px;\">No New\n                Notification</ion-label>\n        </div>\n        <ion-card *ngFor=\"let notification of readNotificationsList\">\n            <div id='num1'>\n                <ion-row>\n                    <ion-col size=\"3\">\n                        <ion-label class=\"notificationTitle\">Type: </ion-label>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <ion-label class=\"notificationContent\">{{notification.type_value}}</ion-label>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"3\">\n                        <ion-label class=\"notificationTitle\">Date: </ion-label>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <ion-label class=\"notificationContent\">{{notification.created_on}}</ion-label>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"3\">\n                        <ion-label class=\"notificationTitle\">From: </ion-label>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <ion-label class=\"notificationContent\">{{notification.username}}</ion-label>\n                    </ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"notification.event_name != null\">\n                    <ion-col size=\"3\">\n                        <ion-label class=\"notificationTitle\">Event: </ion-label>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                        <ion-label class=\"notificationContent\">{{notification.event_name}}</ion-label>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div id='num2'>\n                <ion-label class=\"notificationDescription\">\n                    {{notification.announcement}}\n                </ion-label>\n                <!-- <button class=\"confirmBtn\" align=\"center\" padding=\"2px\" (click)=\"onClickConfirm()\">Confirm</button> -->\n            </div>\n        </ion-card>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sc-ion-segment-md-h {\n  --background: transparent;\n  --background-hover: rgba(var(--ion-color-primary-rgb,56,128,255),0.1);\n  --background-activated: rgba(var(--ion-color-primary-rgb,56,128,255),0.16);\n  --background-checked: #3880ff00;\n  --color-checked: var(--ion-color-primary-contrast,#fff);\n  --color-disabled: rgba(var(--ion-color-primary-rgb,56,128,255),0.3);\n  --color-checked-disabled: rgba(var(--ion-color-primary-contrast-rgb,255,255,255),0.3);\n  --border-color: transparent;\n  --indicator-color: black;\n  background-color: gray;\n  height: 50px;\n  --color: #000000; }\n\n.segmentwidth {\n  width: 50%; }\n\n#num1 {\n  min-height: 30px;\n  background-color: rgba(227, 162, 20, 0.7);\n  padding: 5px;\n  margin-bottom: 10px;\n  text-align: justify; }\n\n#num2 {\n  margin-top: -10px;\n  min-height: 30px;\n  background-color: white;\n  padding: 8px;\n  text-align: justify; }\n\n.confirmBtn {\n  background-color: #E3A214;\n  cursor: pointer;\n  border: none;\n  width: 100%;\n  margin-top: 5px;\n  font-size: 15px;\n  color: black; }\n\n.ion-margin-top, [margin-top] {\n  margin-top: var(--ion-margin, 0px); }\n\n.notificationTitle {\n  color: black;\n  font-size: 15px;\n  font-weight: bold; }\n\n.notificationContent {\n  color: black;\n  font-size: 15px; }\n\n.notificationDescription {\n  color: black;\n  font-size: 15px; }\n\nion-content {\n  --ion-background-color:#F0F0F0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNhZG1pbi9Eb2N1bWVudHMvZ2l0bGFiL3JsaS1jb21tYW5kZXItYW5kcm9pZC1pb25pYzQvc3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUseUJBQWE7RUFDYixxRUFBbUI7RUFDbkIsMEVBQXVCO0VBQ3ZCLCtCQUFxQjtFQUVyQix1REFBZ0I7RUFDaEIsbUVBQWlCO0VBQ2pCLHFGQUF5QjtFQUN6QiwyQkFBZTtFQUNmLHdCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFRLEVBQUE7O0FBR1Y7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxnQkFBZ0I7RUFDaEIseUNBQXNDO0VBQ3RDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHlCQUF5QjtFQUN6QixlQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLFlBQVc7RUFDWCxlQUFjO0VBQ2QsaUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBVztFQUNYLGVBQWMsRUFBQTs7QUFHaEI7RUFDRSxZQUFXO0VBQ1gsZUFBYyxFQUFBOztBQUdoQjtFQUNFLDhCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYy1pb24tc2VnbWVudC1tZC1oIHtcbiAgLy8uc2MtaW9uLXNlZ21lbnQtaW9zLWgge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMTYpO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzM4ODBmZjAwO1xuICAvLyAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMDAwMDAwKSAhaW1wb3J0YW50O1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCNmZmYpO1xuICAtLWNvbG9yLWRpc2FibGVkOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjMpO1xuICAtLWNvbG9yLWNoZWNrZWQtZGlzYWJsZWQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiLDI1NSwyNTUsMjU1KSwwLjMpO1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uc2VnbWVudHdpZHRoe1xuICB3aWR0aDogNTAlO1xufVxuXG4jbnVtMXtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjcsMTYyLDIwLDAuNyk7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuI251bTJ7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uY29uZmlybUJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UzQTIxNDtcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pb24tbWFyZ2luLXRvcCwgW21hcmdpbi10b3BdIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMHB4KTtcbn1cblxuLm5vdGlmaWNhdGlvblRpdGxlIHtcbiAgY29sb3I6YmxhY2s7IFxuICBmb250LXNpemU6MTVweDsgXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG5cbi5ub3RpZmljYXRpb25Db250ZW50IHtcbiAgY29sb3I6YmxhY2s7IFxuICBmb250LXNpemU6MTVweDsgXG59XG5cbi5ub3RpZmljYXRpb25EZXNjcmlwdGlvbiB7XG4gIGNvbG9yOmJsYWNrOyBcbiAgZm9udC1zaXplOjE1cHg7IFxufVxuXG5pb24tY29udGVudHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojRjBGMEYwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_Data_Services_data_sevices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/Data-Services/data-sevices.service */ "./src/app/providers/Data-Services/data-sevices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(loadingController, dataServices, alertController, router) {
        this.loadingController = loadingController;
        this.dataServices = dataServices;
        this.alertController = alertController;
        this.router = router;
        this.isSelected = 'Read';
        this.readNotificationsList = [];
        this.unreadNotificationsList = [];
        this.noDocsNotifications = true;
    }
    NotificationsPage.prototype.ngOnInit = function () {
    };
    NotificationsPage.prototype.tabChanged = function (data) {
        if (data.detail.value == 'Unread') {
            this.isSelected = 'Unread';
            this.getUnreadNotifications();
        }
        else {
            this.isSelected = 'Read';
            this.getReadNotifications();
        }
    };
    NotificationsPage.prototype.getReadNotifications = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.getReadNotificationsApi().then(function (result) {
            _this.resultData = result;
            console.log('readNotifications : ' + _this.resultData);
            _this.readNotificationsList = [];
            _this.readNotificationsList = _this.resultData;
            _this.loadingController.dismiss();
        }, function (error) {
            if (error.url == null) {
                // alert('No internet connection.')  
                _this.loadingController.dismiss();
            }
            _this.loadingController.dismiss();
            if (error.status == 401) {
                // this.dataServices.DeleteSqliteDB_Tables()
                _this.displayUnauthoriesdAlert();
            }
        });
    };
    NotificationsPage.prototype.getUnreadNotifications = function () {
        var _this = this;
        this.presentLoading();
        this.dataServices.getUnreadNotificationsApi().then(function (result) {
            _this.resultData = result;
            console.log('unreadNotification : ' + _this.resultData);
            _this.unreadNotificationsList = [];
            _this.unreadNotificationsList = _this.resultData;
            _this.noDocsNotifications = false;
            _this.loadingController.dismiss();
        }, function (error) {
            if (error.url == null) {
                // alert('No internet connection.')  
                _this.loadingController.dismiss();
            }
            _this.loadingController.dismiss();
            if (error.status == 401) {
                // this.dataServices.DeleteSqliteDB_Tables()
                _this.displayUnauthoriesdAlert();
            }
        });
    };
    NotificationsPage.prototype.onClickConfirm = function (notification) {
        console.log('notification: ' + JSON.stringify(notification) + '\nannouncement_id: ' + notification.announcement_id);
        this.postConfirmedUnreadNotifications(notification.announcement_id);
    };
    NotificationsPage.prototype.postConfirmedUnreadNotifications = function (notificationID) {
        var _this = this;
        this.dataServices.postConfirmedUnreadNotifications(notificationID).then(function (response) {
            console.log('response: ' + response);
            _this.getUnreadNotifications();
        }, function (error) {
            if (error.url == null) {
                // alert('No internet connection.')  
                _this.loadingController.dismiss();
            }
            _this.loadingController.dismiss();
            if (error.status == 401) {
                // this.dataServices.DeleteSqliteDB_Tables()
                _this.displayUnauthoriesdAlert();
            }
        });
    };
    NotificationsPage.prototype.presentLoading = function () {
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
                        setTimeout(function () {
                            loading.dismiss();
                        }, 2000);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationsPage.prototype.displayUnauthoriesdAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Unauthorized',
                            subHeader: '',
                            buttons: [{
                                    text: 'ok',
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
    NotificationsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.page.html */ "./src/app/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _providers_Data_Services_data_sevices_service__WEBPACK_IMPORTED_MODULE_2__["DataSevicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module.js.map