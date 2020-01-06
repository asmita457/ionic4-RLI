(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasklogslist-tasklogslist-module"],{

/***/ "./src/app/tasklogslist/tasklogslist.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/tasklogslist/tasklogslist.module.ts ***!
  \*****************************************************/
/*! exports provided: TasklogslistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklogslistPageModule", function() { return TasklogslistPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tasklogslist_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasklogslist.page */ "./src/app/tasklogslist/tasklogslist.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _tasklogslist_page__WEBPACK_IMPORTED_MODULE_5__["TasklogslistPage"]
    }
];
var TasklogslistPageModule = /** @class */ (function () {
    function TasklogslistPageModule() {
    }
    TasklogslistPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tasklogslist_page__WEBPACK_IMPORTED_MODULE_5__["TasklogslistPage"]]
        })
    ], TasklogslistPageModule);
    return TasklogslistPageModule;
}());



/***/ }),

/***/ "./src/app/tasklogslist/tasklogslist.page.html":
/*!*****************************************************!*\
  !*** ./src/app/tasklogslist/tasklogslist.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header class=\"app-page-home\" color=\"medium\">-->\n<ion-toolbar color=\"medium\">\n    <ion-item lines=\"none\" color=\"medium\">\n  <ion-buttons>\n    <ion-back-button text=\"\" defaultHref=\"home\" class=\"menubutton\">\n    </ion-back-button>\n    <ion-menu-button class=\"menubuttonspace\"></ion-menu-button>\n  </ion-buttons>\n  <ion-title align=\"center\" class=\"titleall\">Task Logs</ion-title>\n  <ion-icon style=\"width: 30px;height: 30px;color: black\" slot=\"end\" name=\"help-circle-outline\"\n    (click)=\"presentAlert()\"></ion-icon>\n    </ion-item>\n</ion-toolbar>\n<!--</ion-header>-->\n\n\n<ion-content align=\"center\">\n\n  <button align=\"center\" style=\"margin-top: 10px\" class=\"receipts-buttonclass\" (click)=\"newtasklogs()\" padding=\"10px\"\n    type=\"submit\">ADD TASK LOGS</button>\n\n  <br>\n\n  <ion-segment style=\"margin-top: 5px\" (ionChange)=\"tabChanged($event)\" scrollable>\n    <ion-segment-button value=\"Approved\" checked layout=\"icon-end\" class=\"segmentwidth\">\n      <ion-label style=\"text-transform: capitalize;font-size: 14px\">Approved</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Request\" class=\"segmentwidth\">\n      <ion-label style=\"text-transform: capitalize;font-size: 14px\">Audit Req/Declined</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div *ngIf=\"isSelected=='Approved'\" style=\"margin-top: 15px\">\n    <ion-label *ngIf=\"AuditData\" style=\"font-size: 16px;font-weight: bold\">No Approved Task Log\n    </ion-label>\n    <ion-list *ngFor=\"let item of ApprovedTaskLogsData; let j = index\">\n      <ion-list-header class=\"headerlist\" padding-end=\"5px\">\n        <ion-label style=\"font-size: 15px;font-weight: bold\">{{item.date}}</ion-label>\n        <ion-label style=\"text-transform: capitalize;font-size: 13px;font-weight: bold\">Total\n          Hrs:{{item.totalHrs | number:'1.2-2'}}\n        </ion-label>\n      </ion-list-header>\n      <ion-item (click)=\"approvedTaskLog(j, i)\" *ngFor=\"let eventName of item.taskLogArray; let i = index\">\n        <ion-label class=\"h4-text\">\n          {{eventName.labor_code}}\n        </ion-label>\n        <ion-icon (click)=\"approvedTaskLog(j, i)\" slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"isSelected=='Request'\" style=\"margin-top: 15px\">\n    <ion-label *ngIf=\"noAuditData\" style=\"font-size: 16px;font-weight: bold\">No Audit Required or Declined Task Log\n    </ion-label>\n\n    <ion-list *ngFor=\"let item of nonApprovedTaskLogsData let j = index\">\n      <ion-list-header class=\"headerlist\" padding-end=\"5px\">\n        <ion-label style=\"font-size: 15px;font-weight: bold\">{{item.date}}</ion-label>\n        <ion-label style=\"text-transform: capitalize;font-size: 13px;font-weight: bold\">Total\n          Hrs:{{item.totalHrs | number:'1.2-2'}}\n        </ion-label>\n      </ion-list-header>\n      <ion-item (click)=\"declinetasklog(j,i)\" *ngFor=\"let eventName of item.taskLogArray ;let i = index\">\n        <ion-label class=\"h4-text\">\n          {{eventName.labor_code}}\n          <span *ngIf=\"eventName.status=='Audit Completed'\" style=\"color: red;float:right\">Declined</span>\n        </ion-label>\n        <ion-icon (click)=\"declinetasklog(j,i)\" slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/tasklogslist/tasklogslist.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/tasklogslist/tasklogslist.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menubutton {\n  color: black !important;\n  alignment: left; }\n\n.receipts-buttonclass {\n  background-color: #E3A214;\n  cursor: pointer;\n  border: none;\n  width: 60%; }\n\n.sc-ion-segment-md-h {\n  --background: transparent;\n  --background-hover: rgba(var(--ion-color-primary-rgb,56,128,255),0.1);\n  --background-activated: rgba(var(--ion-color-primary-rgb,56,128,255),0.16);\n  --background-checked: #3880ff00;\n  --color-checked: var(--ion-color-primary-contrast,#fff);\n  --color-disabled: rgba(var(--ion-color-primary-rgb,56,128,255),0.3);\n  --color-checked-disabled: rgba(var(--ion-color-primary-contrast-rgb,255,255,255),0.3);\n  --border-color: transparent;\n  --indicator-color: black;\n  background-color: gray;\n  height: 50px;\n  --color: #000000; }\n\n.border {\n  border: 0.5px solid black;\n  border-radius: 1px;\n  min-height: 40px !important;\n  width: 100% !important;\n  margin-top: 5px;\n  alignment: center; }\n\n.h4-text {\n  font-size: 15px; }\n\n.segmentwidth {\n  width: 50%; }\n\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important; }\n\n.menubutton {\n  color: black !important; }\n\n.titleclass {\n  color: black !important; }\n\n.Helpclass {\n  color: black !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNhZG1pbi9Eb2N1bWVudHMvZ2l0bGFiL3JsaS1jb21tYW5kZXItYW5kcm9pZC1pb25pYzQvc3JjL2FwcC90YXNrbG9nc2xpc3QvdGFza2xvZ3NsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxZQUFZO0VBRVosVUFBVSxFQUFBOztBQVNaO0VBRUUseUJBQWE7RUFDYixxRUFBbUI7RUFDbkIsMEVBQXVCO0VBQ3ZCLCtCQUFxQjtFQUVyQix1REFBZ0I7RUFDaEIsbUVBQWlCO0VBQ2pCLHFGQUF5QjtFQUN6QiwyQkFBZTtFQUNmLHdCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFRLEVBQUE7O0FBR1Y7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUczQixzQkFBcUI7RUFDckIsZUFBZTtFQUVmLGlCQUFpQixFQUFBOztBQUluQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsdUJBQXVCLEVBQUE7O0FBRXZCO0VBQ0EsdUJBQXVCLEVBQUE7O0FBRXZCO0VBQ0EsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YXNrbG9nc2xpc3QvdGFza2xvZ3NsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1lbnVidXR0b257XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBhbGlnbm1lbnQ6IGxlZnQ7XG59XG4ucmVjZWlwdHMtYnV0dG9uY2xhc3N7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFM0EyMTQ7XG4gIGN1cnNvcjpwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgd2lkdGg6IDYwJTtcbn1cbi8vLnRpdGxlYWxse1xuLy8gIGNvbG9yOiBibGFjaztcbi8vICBtYXJnaW4tdG9wOiA3cHg7XG4vLyAgLy9mb250LXNpemU6IDE1cHg7XG4vLyAgLy9hbGlnbi1jb250ZW50OiBzdGFydDtcbi8vfVxuXG4uc2MtaW9uLXNlZ21lbnQtbWQtaCB7XG4gIC8vLnNjLWlvbi1zZWdtZW50LWlvcy1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjEpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiw1NiwxMjgsMjU1KSwwLjE2KTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMzODgwZmYwMDtcbiAgLy8gLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzAwMDAwMCkgIWltcG9ydGFudDtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwjZmZmKTtcbiAgLS1jb2xvci1kaXNhYmxlZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsNTYsMTI4LDI1NSksMC4zKTtcbiAgLS1jb2xvci1jaGVja2VkLWRpc2FibGVkOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwyNTUsMjU1LDI1NSksMC4zKTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWluZGljYXRvci1jb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGhlaWdodDogNTBweDtcbiAgLS1jb2xvcjogIzAwMDAwMDtcbn1cblxuLmJvcmRlcntcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBtaW4taGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIC8vbWFyZ2luLXJpZ2h0OiA1cHghaW1wb3J0YW50O1xuICAvL21hcmdpbi1sZWZ0OiA1cHghaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgLy9tYXJnaW4tYm90dG9tOiA1cHg7XG4gIGFsaWdubWVudDogY2VudGVyO1xufVxuXG5cbi5oNC10ZXh0e1xuICBmb250LXNpemU6IDE1cHg7XG5cbn1cbi5zZWdtZW50d2lkdGh7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5saXN0LW1kIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51YnV0dG9ue1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgfVxuICAudGl0bGVjbGFzc3tcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLkhlbHBjbGFzc3tcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/tasklogslist/tasklogslist.page.ts":
/*!***************************************************!*\
  !*** ./src/app/tasklogslist/tasklogslist.page.ts ***!
  \***************************************************/
/*! exports provided: TasklogslistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklogslistPage", function() { return TasklogslistPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_Data_Services_data_sevices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/Data-Services/data-sevices.service */ "./src/app/providers/Data-Services/data-sevices.service.ts");
/* harmony import */ var _providers_NetworkProvider_network_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/NetworkProvider/network-provider.service */ "./src/app/providers/NetworkProvider/network-provider.service.ts");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
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






var TasklogslistPage = /** @class */ (function () {
    function TasklogslistPage(router, navCtrl, alertController, dataServices, loadingController, networkProvider, sqlite, platform) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.networkProvider = networkProvider;
        this.sqlite = sqlite;
        this.platform = platform;
        this.isSelected = 'Approved';
        this.noAuditData = true;
        this.AuditData = true;
        this.taskLogsInDB = [];
        this.conflictTasklogData = [];
        this.conflictTasklogID = [];
        this.i = 0;
        this.j = 0;
        this.k = 0;
        this.approvedTaskLogsDataFromDB = [];
        this.nonApprovedTaskLogsDataFromDB = [];
        this.serverIdsString = '';
        this.taskLogGeoLocation = [];
        this.geoCounter = 0;
        this.isSelected = 'Approved';
        this.getApprovedTaskLogs();
        // this.getApprovedTaskLogs()
        //   this.getNonApprovedTaskLogs().then(_ => {
        //     this.displayTaskLogFromDB().then(_ => {
        //       this.syncTaskLogs().then(_ => {
        //         this.loadingController.dismiss()
        //       })
        //     })
        //   })
        // })
    }
    TasklogslistPage.prototype.ngOnInit = function () {
    };
    TasklogslistPage.prototype.newtasklogs = function () {
        this.router.navigate(['/addtasklogs']);
    };
    TasklogslistPage.prototype.tabChanged = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (data.detail.value == 'Approved') {
                    this.isSelected = 'Approved';
                    this.presentLoading().then(function (_) {
                        _this.displayTaskLogFromDB().then(function (_) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                // await delay(5000);
                                this.loadingController.dismiss();
                                return [2 /*return*/];
                            });
                        }); });
                    });
                }
                else {
                    this.isSelected = 'Request';
                    this.nonApprovedTaskLogsData = [];
                    this.nonApprovedTaskLogsDataFromDB = [];
                    this.presentLoading().then(function (_) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            // await delay(5000);
                            this.nonApprovedTaskLogsData = [];
                            this.nonApprovedTaskLogsDataFromDB = [];
                            this.displayTaskLogFromDB().then(function (_) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    this.loadingController.dismiss();
                                    return [2 /*return*/];
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        });
    };
    TasklogslistPage.prototype.getApprovedTaskLogs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // this.presentLoading()
                this.userId = localStorage.getItem('UserID');
                this.eventId = localStorage.getItem('EventId');
                if (this.networkProvider.getNetworkStatus() == 'Online') {
                    this.presentLoading();
                    this.dataServices.getApprovedTaskLogsApi(this.userId, this.eventId).then(function (result) {
                        var approvedTaskLogsData = result;
                        if (approvedTaskLogsData.success) {
                            var serverIds = [];
                            if (approvedTaskLogsData.dateArray.length > 0) {
                                var _loop_1 = function (i) {
                                    var _loop_2 = function (j) {
                                        serverIds.push(approvedTaskLogsData.dateArray[i].taskLogArray[j].log_id);
                                        _this.sqlite.create({
                                            name: 'Commander.db',
                                            location: 'default'
                                        }).then(function (db) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, db.executeSql('UPDATE tasklogs SET auditStatus=?, status=? WHERE server_id=?', [approvedTaskLogsData.dateArray[i].taskLogArray[j].status, approvedTaskLogsData.dateArray[i].taskLogArray[j].status, approvedTaskLogsData.dateArray[i].taskLogArray[j].log_id])
                                                            .then(function (res) {
                                                            console.log('Update: ' + res);
                                                        }).catch(function (e) { return console.log(e); })];
                                                    case 1:
                                                        _a.sent();
                                                        return [4 /*yield*/, db.executeSql('INSERT INTO tasklogs (userID, eventTitle, eventID, date, LOG, ticket, laborCode, laborCodeID, startTime, endTime, hours, state, stateName, yardID, yardName, comment, transactionId, auditStatus, auditDate, status , reason, server_id) Select ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? WHERE NOT EXISTS(SELECT * FROM tasklogs WHERE server_id=?)', [localStorage.getItem('UserID'), approvedTaskLogsData.dateArray[i].taskLogArray[j].event_name, '', approvedTaskLogsData.dateArray[i].taskLogArray[j].taskLogDate, approvedTaskLogsData.dateArray[i].taskLogArray[j].log, 'None', approvedTaskLogsData.dateArray[i].taskLogArray[j].labor_code, approvedTaskLogsData.dateArray[i].taskLogArray[j].laborCodeID, approvedTaskLogsData.dateArray[i].taskLogArray[j].start_time, approvedTaskLogsData.dateArray[i].taskLogArray[j].stop_time, approvedTaskLogsData.dateArray[i].taskLogArray[j].hours, approvedTaskLogsData.dateArray[i].taskLogArray[j].state, approvedTaskLogsData.dateArray[i].taskLogArray[j].state, '', approvedTaskLogsData.dateArray[i].taskLogArray[j].yard_name, approvedTaskLogsData.dateArray[i].taskLogArray[j].comments, '', approvedTaskLogsData.dateArray[i].taskLogArray[j].status, '', approvedTaskLogsData.dateArray[i].taskLogArray[j].status, '', approvedTaskLogsData.dateArray[i].taskLogArray[j].log_id, approvedTaskLogsData.dateArray[i].taskLogArray[j].log_id])
                                                                .then(function (res) {
                                                                console.log('Insert: ' + res);
                                                            }).catch(function (e) { console.log(e); })];
                                                    case 2:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }).catch(function (e) { return console.log(e); });
                                    };
                                    for (var j = 0; j < approvedTaskLogsData.dateArray[i].taskLogArray.length; j++) {
                                        _loop_2(j);
                                    }
                                };
                                for (var i = 0; i < approvedTaskLogsData.dateArray.length; i++) {
                                    _loop_1(i);
                                }
                                console.log('serverIds: ' + serverIds);
                                var string = void 0;
                                string = JSON.stringify(serverIds).replace('[', '').replace(']', '');
                                console.log('String approved: ' + string);
                                _this.serverIdsString = _this.serverIdsString + ',' + string;
                                console.log('String in Approved: ' + _this.serverIdsString);
                            }
                        }
                        _this.getNonApprovedTaskLogs();
                    }, function (error) {
                        if (error.url == null) {
                            _this.loadingController.dismiss();
                            // alert('No internet connection.')
                        }
                        console.log('error: ' + error);
                        _this.loadingController.dismiss();
                        if (error.status == 401) {
                            // this.dataServices.DeleteSqliteDB_Tables()
                            _this.displayUnauthoriesdAlert();
                        }
                    });
                }
                else {
                    this.loadingController.dismiss();
                    // alert('No internet connection.')
                }
                return [2 /*return*/];
            });
        });
    };
    TasklogslistPage.prototype.getNonApprovedTaskLogs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.networkProvider.getNetworkStatus() == 'Online') {
                    this.dataServices.getNonApprovedTaskLogs().then(function (response) {
                        console.log('response: ' + response);
                        var nonApprovedTaskLogsData = response;
                        var serverIds = [];
                        if (nonApprovedTaskLogsData.length > 0) {
                            var _loop_3 = function (i) {
                                var _loop_4 = function (j) {
                                    serverIds.push(nonApprovedTaskLogsData[i].taskLogArray[j].log_id);
                                    _this.sqlite.create({
                                        name: 'Commander.db',
                                        location: 'default'
                                    }).then(function (db) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, db.executeSql('UPDATE tasklogs SET auditStatus=?, status=? WHERE server_id=?', [nonApprovedTaskLogsData[i].taskLogArray[j].audit, nonApprovedTaskLogsData[i].taskLogArray[j].audit, nonApprovedTaskLogsData[i].taskLogArray[j].log_id])
                                                        .then(function (res) {
                                                        console.log('Update: ' + res);
                                                    }).catch(function (e) { return console.log(e); })];
                                                case 1:
                                                    _a.sent();
                                                    return [4 /*yield*/, db.executeSql('INSERT INTO tasklogs (userID, eventTitle, eventID, date, LOG, ticket, laborCode, laborCodeID, startTime, endTime, hours, state, stateName, yardID, yardName, comment, transactionId, auditStatus, auditDate, status , reason, server_id) Select ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? WHERE NOT EXISTS(SELECT * FROM tasklogs WHERE server_id=?)', [nonApprovedTaskLogsData[i].taskLogArray[j].user_id, nonApprovedTaskLogsData[i].taskLogArray[j].event_name, nonApprovedTaskLogsData[i].taskLogArray[j].event_id, nonApprovedTaskLogsData[i].taskLogArray[j].taskLogDate, nonApprovedTaskLogsData[i].taskLogArray[j].log, 'None', nonApprovedTaskLogsData[i].taskLogArray[j].labor_code, nonApprovedTaskLogsData[i].taskLogArray[j].laborCodeID, nonApprovedTaskLogsData[i].taskLogArray[j].start_time, nonApprovedTaskLogsData[i].taskLogArray[j].stop_time, nonApprovedTaskLogsData[i].taskLogArray[j].hours, nonApprovedTaskLogsData[i].taskLogArray[j].state, nonApprovedTaskLogsData[i].taskLogArray[j].stateName, nonApprovedTaskLogsData[i].taskLogArray[j].yard_id, nonApprovedTaskLogsData[i].taskLogArray[j].yard_name, nonApprovedTaskLogsData[i].taskLogArray[j].comments, '', nonApprovedTaskLogsData[i].taskLogArray[j].audit, nonApprovedTaskLogsData[i].taskLogArray[j].date, nonApprovedTaskLogsData[i].taskLogArray[j].audit, nonApprovedTaskLogsData[i].taskLogArray[j].reason, nonApprovedTaskLogsData[i].taskLogArray[j].log_id, nonApprovedTaskLogsData[i].taskLogArray[j].log_id])
                                                            .then(function (res) {
                                                            console.log('Insert: ' + res);
                                                        }).catch(function (e) { console.log(e); })
                                                        // 'userID, eventTitle, eventID, date, LOG, ticket, laborCode, laborCodeID, startTime, endTime, hours, state, stateName, yardID, yardName, comment, transactionId, auditStatus, auditDate, status , reason, server_id'
                                                    ];
                                                case 2:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }).catch(function (e) { return console.log(e); });
                                };
                                for (var j = 0; j < nonApprovedTaskLogsData[i].taskLogArray.length; j++) {
                                    _loop_4(j);
                                }
                            };
                            for (var i = 0; i < nonApprovedTaskLogsData.length; i++) {
                                _loop_3(i);
                            }
                            console.log('serverIds: ' + serverIds);
                            var string = void 0;
                            string = JSON.stringify(serverIds).replace('[', '').replace(']', '');
                            console.log('String nonApproved: ' + string);
                            _this.serverIdsString = _this.serverIdsString + ',' + string;
                            console.log('String in nonApproved: ' + _this.serverIdsString);
                        }
                        _this.syncTaskLogs();
                    }, function (error) {
                        _this.loadingController.dismiss();
                        if (error.status == 401) {
                            // this.dataServices.DeleteSqliteDB_Tables()
                            _this.displayUnauthoriesdAlert();
                        }
                    });
                }
                else {
                    this.loadingController.dismiss();
                    // alert('No internet connection.')
                }
                return [2 /*return*/];
            });
        });
    };
    TasklogslistPage.prototype.approvedTaskLog = function (section, index) {
        console.log('Section', section);
        console.log('Index', index);
        this.router.navigate(['approved-tasklog', { item: JSON.stringify(this.ApprovedTaskLogsData[section].taskLogArray[index]) }]);
    };
    TasklogslistPage.prototype.declinetasklog = function (section, index) {
        console.log('Section', section);
        console.log('Index', index);
        this.router.navigate(['declinetasklog', { item: JSON.stringify(this.nonApprovedTaskLogsData[section].taskLogArray[index]) }]);
    };
    TasklogslistPage.prototype.presentLoading = function () {
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
                        setTimeout(function () {
                            loading.dismiss();
                        }, 20000);
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
    TasklogslistPage.prototype.displayUnauthoriesdAlert = function () {
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
    TasklogslistPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '',
                            subHeader: '',
                            message: 'Only task logs for your active event are shown.  Note that each client during a deployment is considered to be a separate event. To see other events, go to your portal using this app.  Task logs must be approved by the Finance/Admin Section for you to be paid. Review declined task logs and resubmit as you will not be paid for declined task log hours.',
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
    TasklogslistPage.prototype.readonly = function () {
        return true;
    };
    TasklogslistPage.prototype.syncTaskLogs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.taskLogsInDB = [];
                this.sqlite.create({
                    name: 'Commander.db',
                    location: 'default'
                }).then(function (db) {
                    db.executeSql('SELECT * FROM tasklogs WHERE server_id=0', [])
                        .then(function (res) {
                        console.log("Task log:-", JSON.stringify(res));
                        console.log("Task log length:-", JSON.stringify(res.rows.length));
                        if (res.rows.length > 0) {
                            for (var i = 0; i < res.rows.length; i++) {
                                _this.taskLogsInDB.push(res.rows.item(i));
                            }
                        }
                        console.log("DATA ARRAY:-", _this.taskLogsInDB);
                        if (_this.taskLogsInDB.length != 0) {
                            _this.k = 0;
                            _this.detectConflictInPreviousTasks(_this.taskLogsInDB[_this.k].date);
                        }
                    })
                        .catch(function (e) { return console.log(e); });
                }).catch(function (e) { return console.log(e); });
                return [2 /*return*/];
            });
        });
    };
    TasklogslistPage.prototype.detectConflictInPreviousTasks = function (Date) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.taskLogsInDB.length > this.k) {
                    this.sqlite.create({
                        name: 'Commander.db',
                        location: 'default'
                    }).then(function (db) {
                        _this.conflictTasklogData = [];
                        db.executeSql('SELECT * FROM tasklogs WHERE date=? AND server_id!=0', [Date])
                            .then(function (res) {
                            console.log("DATA:-", JSON.stringify(res));
                            console.log("Actual DATA:-", JSON.stringify(res.rows.length));
                            if (res.rows.length > 0) {
                                for (var i = 0; i < res.rows.length; i++) {
                                    _this.conflictTasklogData.push(res.rows.item(i));
                                }
                            }
                            console.log("Detected conflict TasLog DATA ARRAY INSIDE:-", JSON.stringify(_this.conflictTasklogData));
                            _this.validateConflict();
                        })
                            .catch(function (e) { return console.log(e); });
                    }).catch(function (e) { return console.log(e); });
                }
                else {
                    this.syncTaskLogs();
                }
                return [2 /*return*/];
            });
        });
    };
    TasklogslistPage.prototype.validateConflict = function () {
        console.log("Detected conflict TasLog DATA ARRAY VALIDATE CONFLICT:-", JSON.stringify(this.conflictTasklogData));
        for (var j = 0; j < this.taskLogsInDB.length; j++) {
            for (var i = 0; i < this.conflictTasklogData.length; i++) {
                if (this.taskLogsInDB[j].startTime > this.conflictTasklogData[i].startTime && this.taskLogsInDB[j].startTime < this.conflictTasklogData[i].endTime || this.taskLogsInDB[j].endTime < this.conflictTasklogData[i].endTime && this.taskLogsInDB[j].endTime > this.conflictTasklogData[i].startTime || (this.taskLogsInDB[j].startTime <= this.conflictTasklogData[i].startTime && this.conflictTasklogData[i].startTime < this.taskLogsInDB[j].endTime) && (this.taskLogsInDB[j].startTime < this.conflictTasklogData[i].endTime && this.conflictTasklogData[i].endTime <= this.taskLogsInDB[j].endTime)) {
                    // if (this.taskLogsInDB[j].startTime == this.conflictTasklogData[i].startTime || this.taskLogsInDB[j].startTime > this.conflictTasklogData[i].startTime && this.taskLogsInDB[j].startTime < this.conflictTasklogData[i].endTime || this.taskLogsInDB[j].endTime < this.conflictTasklogData[i].endTime && this.taskLogsInDB[j].endTime > this.conflictTasklogData[i].startTime || this.taskLogsInDB[j].endTime == this.conflictTasklogData[i].endTime) {
                    // this.deleteConflictOfflineTaskLogs(this.taskLogsInDB[j].ID)
                    this.conflictTasklogID.push(this.taskLogsInDB[j].ID);
                    this.taskLogsInDB.splice(j, 1);
                    if (this.taskLogsInDB.length == 0) {
                        break;
                    }
                }
            }
        }
        if (this.conflictTasklogID.length == 0) {
            this.i = 0;
            this.postTaskLog();
            this.taskLogGeoLocation = JSON.parse(localStorage.getItem('taskLogGeoLocation'));
            if (this.taskLogGeoLocation.length != 0) {
                this.geoCounter = 0;
                this.postTaskLogGeoLocation();
            }
        }
        else {
            this.j = 0;
            this.deleteConflictOfflineTaskLogs();
        }
    };
    TasklogslistPage.prototype.postTaskLogGeoLocation = function () {
        var _this = this;
        this.dataServices.postGeoLocation(this.taskLogGeoLocation[this.geoCounter].split(',')[0], this.taskLogGeoLocation[this.geoCounter].split(',')[1], this.taskLogGeoLocation[this.geoCounter].split(',')[2], this.taskLogGeoLocation[this.geoCounter].split(',')[3], this.taskLogGeoLocation[this.geoCounter].split(',')[4], this.taskLogGeoLocation[this.geoCounter].split(',')[5])
            .then(function (result) {
            console.log('Location post successfully on add task logs: ' + JSON.stringify(result));
            if (_this.geoCounter < _this.taskLogGeoLocation.length) {
                _this.geoCounter += 1;
                _this.postTaskLogGeoLocation();
            }
            else {
                localStorage.removeItem('taskLogGeoLocation');
            }
        }, function (error) {
            console.log('Error in post location: ' + JSON.stringify(error));
        });
    };
    TasklogslistPage.prototype.deleteConflictOfflineTaskLogs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.conflictTasklogID.length > this.j) {
                    this.sqlite.create({
                        name: 'Commander.db',
                        location: 'default'
                    }).then(function (db) {
                        db.executeSql('DELETE FROM tasklogs WHERE ID=?', [_this.conflictTasklogID[_this.j]])
                            .then(function (res) {
                            console.log("Delete Response:-", JSON.stringify(res));
                            _this.j++;
                            _this.deleteConflictOfflineTaskLogs();
                        })
                            .catch(function (e) { return console.log(e); });
                    }).catch(function (e) { return console.log(e); });
                }
                else {
                    if (this.taskLogsInDB.length > this.k) {
                        // if(this.taskLogsInDB.length == 1){
                        // this.conflictTasklogID = []
                        // this.detectConflictInPreviousTasks(this.taskLogsInDB[this.k].date) 
                        // }else{
                        this.k++;
                        this.conflictTasklogID = [];
                        this.detectConflictInPreviousTasks(this.taskLogsInDB[this.k - 1].date);
                        // }
                    }
                    else {
                        this.taskLogsInDB = [];
                        this.syncTaskLogs();
                    }
                    // this.conflictTasklogData = []
                    // this.validateConflict()
                    // this.syncTaskLogs()
                }
                return [2 /*return*/];
            });
        });
    };
    TasklogslistPage.prototype.postTaskLog = function () {
        var _this = this;
        if (this.taskLogsInDB.length > this.i) {
            if (this.networkProvider.getNetworkStatus() == 'Online') {
                this.dataServices.postTaskLog(this.taskLogsInDB[this.i].ID, this.taskLogsInDB[this.i].eventID, this.taskLogsInDB[this.i].userID, this.taskLogsInDB[this.i].yardID, this.taskLogsInDB[this.i].laborCodeID, this.taskLogsInDB[this.i].ticket, this.taskLogsInDB[this.i].date, this.taskLogsInDB[this.i].LOG, this.taskLogsInDB[this.i].startTime, this.taskLogsInDB[this.i].endTime, this.taskLogsInDB[this.i].hours, this.taskLogsInDB[this.i].state, this.taskLogsInDB[this.i].comment, this.taskLogsInDB[this.i].auditDate, this.taskLogsInDB[this.i].auditStatus, this.taskLogsInDB[this.i].reason).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("Sucess Status: ", result);
                                console.log("Response Data", result.success);
                                if (!(result.success == true)) return [3 /*break*/, 4];
                                this.sqlite.create({
                                    name: 'Commander.db',
                                    location: 'default'
                                }).then(function (db) {
                                    db.executeSql('UPDATE tasklogs SET server_id= ? WHERE ID= ?', [result.server_id, result.local_id])
                                        .then(function (res) {
                                        console.log(res);
                                    }).catch(function (e) { return console.log(e); });
                                }).catch(function (e) { return console.log(e); });
                                this.i++;
                                if (!(this.taskLogsInDB.length == this.i)) return [3 /*break*/, 2];
                                this.taskLogsInDB = [];
                                // this.TaskLogSaved("Task Log Saved Successfully")
                                this.nonApprovedTaskLogsData = [];
                                this.nonApprovedTaskLogsDataFromDB = [];
                                return [4 /*yield*/, this.displayTaskLogFromDB()];
                            case 1:
                                _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                this.postTaskLog();
                                _a.label = 3;
                            case 3: return [3 /*break*/, 7];
                            case 4:
                                this.i++;
                                if (!(this.taskLogsInDB.length == this.i)) return [3 /*break*/, 6];
                                this.taskLogsInDB = [];
                                this.nonApprovedTaskLogsData = [];
                                this.nonApprovedTaskLogsDataFromDB = [];
                                return [4 /*yield*/, this.displayTaskLogFromDB()
                                    // this.taskLogSaved("Task Log Saved Successfully")
                                ];
                            case 5:
                                _a.sent();
                                return [3 /*break*/, 7];
                            case 6:
                                this.postTaskLog();
                                _a.label = 7;
                            case 7: return [2 /*return*/];
                        }
                    });
                }); });
            }
            else {
                this.loadingController.dismiss();
                // alert('No internet connection.')
            }
        }
    };
    TasklogslistPage.prototype.displayTaskLogFromDB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sqlite.create({
                    name: 'Commander.db',
                    location: 'default'
                }).then(function (db) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: 
                            // if (this.networkProvider.getNetworkStatus() == 'Online') {
                            //   this.presentLoading()
                            // }
                            return [4 /*yield*/, db.executeSql('SELECT * FROM tasklogs GROUP BY date ORDER BY date DESC', [])
                                    .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                    var _loop_5, i;
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                console.log("Task log:-", JSON.stringify(res));
                                                console.log("Task log length:-", JSON.stringify(res.rows.length));
                                                if (!(res.rows.length > 0)) return [3 /*break*/, 4];
                                                this.approvedTaskLogsDataFromDB = [];
                                                this.nonApprovedTaskLogsDataFromDB = [];
                                                _loop_5 = function (i) {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                //Approved
                                                                db.executeSql('SELECT * FROM tasklogs WHERE date = ? AND status = "Approved"', [res.rows.item(i).date]).then(function (res1) {
                                                                    console.log('Data of Date: ' + res1);
                                                                    if (res1.rows.length > 0) {
                                                                        var taskLogArr = [];
                                                                        var totalHrs = 0.0;
                                                                        for (var j = 0; j < res1.rows.length; j++) {
                                                                            var taskLogDataObj = void 0;
                                                                            taskLogDataObj = {
                                                                                "log_id": res1.rows.item(j).LOG,
                                                                                "event_name": res1.rows.item(j).eventTitle,
                                                                                "taskLogDate": res1.rows.item(j).date,
                                                                                "log": res1.rows.item(j).LOG,
                                                                                "labor_code": res1.rows.item(j).laborCode,
                                                                                "laborCodeID": res1.rows.item(j).laborCodeID,
                                                                                "start_time": res1.rows.item(j).startTime,
                                                                                "stop_time": res1.rows.item(j).endTime,
                                                                                "hours": res1.rows.item(j).hours,
                                                                                "state": res1.rows.item(j).state,
                                                                                "comments": res1.rows.item(j).comment,
                                                                                "yard_name": res1.rows.item(j).yardName,
                                                                                "status": res1.rows.item(j).status,
                                                                            };
                                                                            taskLogArr.push(taskLogDataObj);
                                                                            totalHrs += parseFloat((res1.rows.item(j).hours).replace(':', '.')); //res1.rows.item(j).hours
                                                                        }
                                                                        console.log(res.rows.item(i).date + ': ' + taskLogArr.length + ' totalHrs: ' + totalHrs);
                                                                        var taskLog = void 0;
                                                                        taskLog = {
                                                                            "date": res.rows.item(i).date,
                                                                            "totalHrs": totalHrs,
                                                                            "taskLogArray": taskLogArr
                                                                        };
                                                                        _this.approvedTaskLogsDataFromDB.push(taskLog);
                                                                    }
                                                                    console.log('approvedTaskLogsDataFromDB: ' + JSON.stringify(_this.approvedTaskLogsDataFromDB));
                                                                    _this.ApprovedTaskLogsData = _this.approvedTaskLogsDataFromDB;
                                                                    if (_this.ApprovedTaskLogsData.length > 0) {
                                                                        _this.AuditData = false;
                                                                    }
                                                                    else {
                                                                        _this.AuditData = true;
                                                                    }
                                                                }).catch(function (e) { return console.log('Error in Date DB: ' + e); });
                                                                //Audit Required AND status = "Audit Required" OR status = "Audit Completed"
                                                                return [4 /*yield*/, db.executeSql('SELECT * FROM tasklogs WHERE date = ? AND status = "Audit Required" OR status = "Audit Completed"', [res.rows.item(i).date]).then(function (res1) {
                                                                        if (res1.rows.length > 0) {
                                                                            var taskLogArr = [];
                                                                            var totalHrs = 0.0;
                                                                            for (var j = 0; j < res1.rows.length; j++) {
                                                                                var taskLogDataObj = void 0;
                                                                                taskLogDataObj = {
                                                                                    "log_id": res1.rows.item(j).LOG,
                                                                                    "event_name": res1.rows.item(j).eventTitle,
                                                                                    "taskLogDate": res1.rows.item(j).date,
                                                                                    "log": res1.rows.item(j).LOG,
                                                                                    "labor_code": res1.rows.item(j).laborCode,
                                                                                    "laborCodeID": res1.rows.item(j).laborCodeID,
                                                                                    "start_time": res1.rows.item(j).startTime,
                                                                                    "stop_time": res1.rows.item(j).endTime,
                                                                                    "hours": res1.rows.item(j).hours,
                                                                                    "state": res1.rows.item(j).state,
                                                                                    "comments": res1.rows.item(j).comment,
                                                                                    "yard_name": res1.rows.item(j).yardName,
                                                                                    "status": res1.rows.item(j).status,
                                                                                };
                                                                                taskLogArr.push(taskLogDataObj);
                                                                                totalHrs += parseFloat((res1.rows.item(j).hours).replace(':', '.')); //res1.rows.item(j).hours
                                                                            }
                                                                            console.log(res.rows.item(i).date + ': ' + taskLogArr.length + ' totalHrs: ' + totalHrs);
                                                                            var taskLog = void 0;
                                                                            taskLog = {
                                                                                "date": res.rows.item(i).date,
                                                                                "totalHrs": totalHrs,
                                                                                "taskLogArray": taskLogArr
                                                                            };
                                                                            _this.nonApprovedTaskLogsDataFromDB.push(taskLog);
                                                                        }
                                                                        console.log('nonApprovedTaskLogsDataFromDB: ' + JSON.stringify(_this.nonApprovedTaskLogsDataFromDB));
                                                                        _this.nonApprovedTaskLogsData = _this.nonApprovedTaskLogsDataFromDB;
                                                                        if (_this.nonApprovedTaskLogsData.length > 0) {
                                                                            _this.noAuditData = false;
                                                                        }
                                                                        else {
                                                                            _this.noAuditData = true;
                                                                        }
                                                                    }).catch(function (e) { return console.log('Error in Date DB: ' + e); })];
                                                            case 1:
                                                                //Audit Required AND status = "Audit Required" OR status = "Audit Completed"
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                };
                                                i = 0;
                                                _a.label = 1;
                                            case 1:
                                                if (!(i < res.rows.length)) return [3 /*break*/, 4];
                                                return [5 /*yield**/, _loop_5(i)];
                                            case 2:
                                                _a.sent();
                                                _a.label = 3;
                                            case 3:
                                                i++;
                                                return [3 /*break*/, 1];
                                            case 4: return [2 /*return*/];
                                        }
                                    });
                                }); }).catch(function (e) { return console.log(e); })];
                            case 1:
                                // if (this.networkProvider.getNetworkStatus() == 'Online') {
                                //   this.presentLoading()
                                // }
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }).catch(function (e) { return console.log(e); });
                return [2 /*return*/];
            });
        });
    };
    TasklogslistPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasklogslist',
            template: __webpack_require__(/*! ./tasklogslist.page.html */ "./src/app/tasklogslist/tasklogslist.page.html"),
            styles: [__webpack_require__(/*! ./tasklogslist.page.scss */ "./src/app/tasklogslist/tasklogslist.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _providers_Data_Services_data_sevices_service__WEBPACK_IMPORTED_MODULE_3__["DataSevicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_NetworkProvider_network_provider_service__WEBPACK_IMPORTED_MODULE_4__["NetworkProviderService"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], TasklogslistPage);
    return TasklogslistPage;
}());



/***/ })

}]);
//# sourceMappingURL=tasklogslist-tasklogslist-module.js.map