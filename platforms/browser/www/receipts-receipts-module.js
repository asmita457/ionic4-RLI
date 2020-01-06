(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["receipts-receipts-module"],{

/***/ "./src/app/receipts/receipts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/receipts/receipts.module.ts ***!
  \*********************************************/
/*! exports provided: ReceiptsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsPageModule", function() { return ReceiptsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _receipts_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receipts.page */ "./src/app/receipts/receipts.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import {ReceiptsRouterModules} from './receipts.router.modules';
var routes = [
    {
        path: '',
        component: _receipts_page__WEBPACK_IMPORTED_MODULE_5__["ReceiptsPage"]
    }
];
var ReceiptsPageModule = /** @class */ (function () {
    function ReceiptsPageModule() {
    }
    ReceiptsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_receipts_page__WEBPACK_IMPORTED_MODULE_5__["ReceiptsPage"]]
        })
    ], ReceiptsPageModule);
    return ReceiptsPageModule;
}());



/***/ }),

/***/ "./src/app/receipts/receipts.page.html":
/*!*********************************************!*\
  !*** ./src/app/receipts/receipts.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header class=\"app-page-home\" color=\"medium\">-->\n<ion-toolbar color=\"medium\">\n  <ion-buttons slot=\"start\" style=\"color: black\">\n    <ion-back-button text=\"\" defaultHref=\"home\" class=\"menubutton\">\n    </ion-back-button>\n    <ion-menu-button class=\"menubutton space\"></ion-menu-button>\n  </ion-buttons>\n  <ion-title align=\"start\" class=\"titleall\">Receipts</ion-title>\n  <ion-icon style=\"width: 30px;height: 30px;color: black\" slot=\"end\" name=\"help-circle-outline\"\n    (click)=\"presentAlert()\"></ion-icon>\n</ion-toolbar>\n<!--</ion-header>-->\n<ion-content align=\"center\">\n\n  <button align=\"center\" style=\"margin-top: 10px\" class=\"receipts-buttonclass\" (click)=\"newReceipt()\" type=\"submit\">ADD\n    RECEIPTS</button>\n\n  <br>\n\n  <ion-segment style=\"margin-top: 5px\" (ionChange)=\"tabChanged($event)\" scrollable>\n    <ion-segment-button value=\"Approved\" checked layout=\"icon-end\" class=\"segmentwidth\">\n      <ion-label style=\"text-transform: capitalize;font-size: 14px\">Approved</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Request\" class=\"segmentwidth\">\n      <ion-label style=\"text-transform: capitalize;font-size: 14px\">Audit Req/Declined</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div *ngIf=\"isSelected=='Approved'\" style=\"margin-top: 15px\">\n    <div *ngIf=\"isApprovedDataBlank=='Data'\" style=\"margin-top: 15px; margin-bottom: 10px\">\n      <ion-label style=\"font-size: 16px;font-weight: bold;margin: 10px\">Below details only for current active event\n        \"{{activeEvent}}\"</ion-label>\n    </div>\n    <div *ngIf=\"isApprovedDataBlank=='Blank'\" style=\"margin-top: 15px; padding: 10px\">\n      <ion-label style=\"font-size: 16px;font-weight: bold\">No Approved Receipts</ion-label>\n    </div>\n    <ion-list *ngFor=\"let item of approvedResultData let j = index\">\n      <ion-list-header class=\"headerlist\" padding-end=\"5px\">\n        <ion-label style=\"font-size: 14px; font-weight: bold;\">{{item.date}}</ion-label>\n        <!-- <ion-label style=\"font-size: 13px\">Total Hrs:1.47</ion-label> -->\n      </ion-list-header>\n      <ion-item (click)=\"acceptReceipt(j,i)\" *ngFor=\"let data of item.receiptListArray; let i = index\">\n        <ion-label class=\"h4-text\">\n          {{data.category_name}}: ${{data.amount}}\n        </ion-label>\n        <ion-icon (click)=\"acceptReceipt(j,i)\" slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      </ion-item>\n      <ion-item (click)=\"payoutClicked(j)\">\n        <ion-label class=\"payout\">\n          Payout: $({{item.payout}})\n        </ion-label>\n        <ion-icon (click)=\"payoutClicked(j)\" slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"receiptTotal\">\n          Receipt Total: ${{item.total}}\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"isSelected=='Request'\" style=\"margin-top: 15px\">\n    <div *ngIf=\"isAuditdataBlank=='Data'\" style=\"margin-top: 15px; margin-bottom: 10px\">\n      <ion-label style=\"font-size: 16px;font-weight: bold;margin: 10px\">Below details only for current active event\n        \"{{activeEvent}}\"</ion-label>\n    </div>\n    <div *ngIf=\"isAuditdataBlank=='Blank'\" style=\"margin-top: 15px; padding: 10px\">\n      <ion-label style=\"font-size: 16px;font-weight: bold\">No Audit Required or Declined Receipts</ion-label>\n    </div>\n\n    <ion-list *ngFor=\"let item of auditResultData let j = index\">\n      <ion-list-header class=\"headerlist\" padding-end=\"5px\">\n        <ion-label style=\"font-size: 14px; font-weight: bold\">{{item.date}}</ion-label>\n        <!--<ion-label style=\"font-size: 13px\">Total Hrs:1.47</ion-label>-->\n      </ion-list-header>\n      <ion-item (click)=\"declineReceipt(j,i)\" *ngFor=\"let data of item.data; let i = index\">\n        <ion-label class=\"h4-text\">\n          {{data.category_name}}: ${{data.amount}}<span ng-if=\"data.auditStatus == 'Audit Completed'\" style=\"color: red;float:right\">Declined</span>\n        </ion-label>\n        <ion-icon (click)=\"declineReceipt(j,i)\" slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer class=\"footer-bg\">\n  <ion-label align=\"bottom\" style=\"font-size: 16px;font-weight: bold\">Balance:${{balanceData}}</ion-label>\n</ion-footer>"

/***/ }),

/***/ "./src/app/receipts/receipts.page.scss":
/*!*********************************************!*\
  !*** ./src/app/receipts/receipts.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".receipts-buttonclass {\n  background-color: #E3A214;\n  cursor: pointer;\n  border: none;\n  width: 60%;\n  height: 35px;\n  padding: 5px; }\n\n.footer-bg {\n  height: 5%;\n  padding: 5px;\n  background-color: #9AB7BC; }\n\n.menubutton {\n  color: black !important; }\n\n.sc-ion-segment-md-h {\n  --background: transparent;\n  --background-hover: rgba(var(--ion-color-primary-rgb,56,128,255),0.1);\n  --background-activated: rgba(var(--ion-color-primary-rgb,56,128,255),0.16);\n  --background-checked: #3880ff00;\n  --color-checked: var(--ion-color-primary-contrast,#fff);\n  --color-disabled: rgba(var(--ion-color-primary-rgb,56,128,255),0.3);\n  --color-checked-disabled: rgba(var(--ion-color-primary-contrast-rgb,255,255,255),0.3);\n  --border-color: transparent;\n  --indicator-color: black;\n  background-color: gray;\n  height: 50px;\n  --color: #000000; }\n\n.border {\n  border: 0.5px solid black;\n  border-radius: 1px;\n  min-height: 40px !important;\n  width: 100% !important;\n  margin-top: 5px;\n  alignment: center; }\n\n.headerlist {\n  background-color: #DCDCDC;\n  color: black;\n  height: 10px !important;\n  width: 100%; }\n\n.h4-text {\n  font-size: 15px; }\n\n.payout {\n  font-size: 15px;\n  color: red; }\n\n.receiptTotal {\n  font-size: 15px;\n  text-align: end;\n  font-weight: bold; }\n\n.segmentwidth {\n  width: 50%; }\n\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNhZG1pbi9Eb2N1bWVudHMvZ2l0bGFiL3JsaS1jb21tYW5kZXItYW5kcm9pZC1pb25pYzQvc3JjL2FwcC9yZWNlaXB0cy9yZWNlaXB0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFFZDtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsdUJBQXVCLEVBQUE7O0FBUXpCO0VBRUUseUJBQWE7RUFDYixxRUFBbUI7RUFDbkIsMEVBQXVCO0VBQ3ZCLCtCQUFxQjtFQUVyQix1REFBZ0I7RUFDaEIsbUVBQWlCO0VBQ2pCLHFGQUF5QjtFQUN6QiwyQkFBZTtFQUNmLHdCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFRLEVBQUE7O0FBR1Y7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUczQixzQkFBcUI7RUFDckIsZUFBZTtFQUVmLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlO0VBQ2YsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFNbkI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWNlaXB0cy9yZWNlaXB0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjZWlwdHMtYnV0dG9uY2xhc3N7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFM0EyMTQ7XG4gIGN1cnNvcjpwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmZvb3Rlci1iZ3tcbiAgaGVpZ2h0OiA1JTtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUFCN0JDO1xufVxuXG4ubWVudWJ1dHRvbntcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4vLy50aXRsZWFsbHtcbi8vICBtYXJnaW4tdG9wOiA3cHg7XG4vLyAgLy9mb250LXNpemU6IDE1cHg7XG4vLyAgLy9hbGlnbi1jb250ZW50OiBzdGFydDtcbi8vfVxuXG4uc2MtaW9uLXNlZ21lbnQtbWQtaCB7XG4vLy5zYy1pb24tc2VnbWVudC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsNTYsMTI4LDI1NSksMC4xKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsNTYsMTI4LDI1NSksMC4xNik7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMzg4MGZmMDA7XG4gIC8vIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMwMDAwMDApICFpbXBvcnRhbnQ7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsI2ZmZik7XG4gIC0tY29sb3ItZGlzYWJsZWQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLDU2LDEyOCwyNTUpLDAuMyk7XG4gIC0tY29sb3ItY2hlY2tlZC1kaXNhYmxlZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsMjU1LDI1NSwyNTUpLDAuMyk7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tY29sb3I6ICMwMDAwMDA7XG59XG5cbi5ib3JkZXJ7XG4gIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAvL21hcmdpbi1yaWdodDogNXB4IWltcG9ydGFudDtcbiAgLy9tYXJnaW4tbGVmdDogNXB4IWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIC8vbWFyZ2luLWJvdHRvbTogNXB4O1xuICBhbGlnbm1lbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlcmxpc3R7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQ0RDREM7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAxMHB4IWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIH1cblxuLmg0LXRleHR7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnBheW91dHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4ucmVjZWlwdFRvdGFsIHtcbiAgZm9udC1zaXplOiAxNXB4OyBcbiAgdGV4dC1hbGlnbjogZW5kOyBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4vL1xuLy86aG9zdCguYWN0aXZhdGVkKSwgOmhvc3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpIHtcbi8vICB3aWR0aDogNTAlO1xuLy99XG4uc2VnbWVudHdpZHRoe1xuICB3aWR0aDogNTAlO1xufVxuXG4ubGlzdC1tZCB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/receipts/receipts.page.ts":
/*!*******************************************!*\
  !*** ./src/app/receipts/receipts.page.ts ***!
  \*******************************************/
/*! exports provided: ReceiptsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsPage", function() { return ReceiptsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_Data_Services_data_sevices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/Data-Services/data-sevices.service */ "./src/app/providers/Data-Services/data-sevices.service.ts");
/* harmony import */ var _providers_NetworkProvider_network_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/NetworkProvider/network-provider.service */ "./src/app/providers/NetworkProvider/network-provider.service.ts");
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





var ReceiptsPage = /** @class */ (function () {
    function ReceiptsPage(router, navCtrl, alertController, dataServices, loadingController, networkProvider) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.dataServices = dataServices;
        this.loadingController = loadingController;
        this.networkProvider = networkProvider;
        this.isSelected = 'Approved';
        this.isAuditdataBlank = 'Blank';
        this.isApprovedDataBlank = 'Blank';
        this.balanceData = 0.00;
        this.isAuditdataBlank = 'Blank';
        this.isApprovedDataBlank = 'Blank';
        this.getBalanceFromReceipt();
        this.getApprovedReceiptsData();
    }
    ReceiptsPage.prototype.newReceipt = function () {
        this.router.navigate(['/newreceipts']);
    };
    ReceiptsPage.prototype.getApprovedReceiptsData = function () {
        var _this = this;
        if (this.networkProvider.getNetworkStatus() == 'Online') {
            this.presentLoading();
            var eventid = localStorage.getItem('EventId');
            var contractorid = localStorage.getItem('UserID');
            this.dataServices.getApprovedReceiptList(eventid, contractorid).then(function (result) {
                _this.approvedResultData = result.dateArray;
                console.log("Approved Receipt DATA:-", _this.approvedResultData);
                _this.isApprovedDataBlank = 'Data';
                _this.loadingController.dismiss();
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
    ReceiptsPage.prototype.getAuditReceiptListData = function () {
        var _this = this;
        if (this.networkProvider.getNetworkStatus() == 'Online') {
            this.presentLoading();
            this.dataServices.getAuditReceiptList().then(function (result) {
                _this.auditResultData = result;
                console.log("Audit Receipt DATA:-", _this.auditResultData);
                _this.isAuditdataBlank = 'Data';
                _this.loadingController.dismiss();
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
    ReceiptsPage.prototype.getBalanceFromReceipt = function () {
        var _this = this;
        if (this.networkProvider.getNetworkStatus() == 'Online') {
            this.presentLoading();
            this.uId = localStorage.getItem('UserID');
            this.eventId = localStorage.getItem('EventId');
            this.dataServices.getBalanceFromReceiptApi(this.uId, this.eventId).then(function (result) {
                _this.balanceData = result.data;
                console.log('Balance : ' + _this.balanceData);
                _this.loadingController.dismiss();
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
    ReceiptsPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '',
                            subHeader: '',
                            message: 'The details listed and the balance are only for your active event.  Note that each client during a deployment is considered to be a separate event. To see balances from other events, please go to your portal using this app.  Receipts must be approved by the Finance/Admin Section for you to be reimbursed. Review declined receipts and resubmit if you disagree with the decision as you will not be reimbursed for declined receipts.',
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
    ReceiptsPage.prototype.ngOnInit = function () {
        this.activeEvent = localStorage.getItem('EventName');
    };
    ReceiptsPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            spinner: null,
                            duration: 5000
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
    ReceiptsPage.prototype.displayUnauthoriesdAlert = function () {
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
    ReceiptsPage.prototype.acceptReceipt = function (section, index) {
        console.log('Section: ', section);
        console.log('Index: ', index);
        console.log('acceptReceipt: ' + JSON.stringify(this.approvedResultData[section].receiptListArray[index]));
        this.router.navigate(['approved-receipt', { type: 'receipt', item: JSON.stringify(this.approvedResultData[section].receiptListArray[index]) }]);
    };
    ReceiptsPage.prototype.payoutClicked = function (section) {
        console.log('Section of payout: ', section);
        this.router.navigate(['approved-receipt', { type: 'payout', item: JSON.stringify(this.approvedResultData[section].payoutData) }]);
    };
    ReceiptsPage.prototype.declineReceipt = function (section, index) {
        console.log('Section: ', section);
        console.log('Index: ', index);
        this.router.navigate(['declinedreceipt', { item: JSON.stringify(this.auditResultData[section].data[index]) }]);
    };
    ReceiptsPage.prototype.tabChanged = function (data) {
        console.log('tab: ' + data.detail.value);
        if (data.detail.value == 'Approved') {
            console.log('Approved.');
            this.getApprovedReceiptsData();
            this.isSelected = 'Approved';
        }
        else {
            console.log('Request.');
            this.getAuditReceiptListData();
            this.isSelected = 'Request';
        }
    };
    ReceiptsPage.prototype.readonly = function () {
        return true;
    };
    ReceiptsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receipts',
            template: __webpack_require__(/*! ./receipts.page.html */ "./src/app/receipts/receipts.page.html"),
            styles: [__webpack_require__(/*! ./receipts.page.scss */ "./src/app/receipts/receipts.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _providers_Data_Services_data_sevices_service__WEBPACK_IMPORTED_MODULE_3__["DataSevicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_NetworkProvider_network_provider_service__WEBPACK_IMPORTED_MODULE_4__["NetworkProviderService"]])
    ], ReceiptsPage);
    return ReceiptsPage;
}());



/***/ })

}]);
//# sourceMappingURL=receipts-receipts-module.js.map