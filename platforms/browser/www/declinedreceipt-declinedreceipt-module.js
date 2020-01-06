(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["declinedreceipt-declinedreceipt-module"],{

/***/ "./src/app/declinedreceipt/declinedreceipt.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/declinedreceipt/declinedreceipt.module.ts ***!
  \***********************************************************/
/*! exports provided: DeclinedreceiptPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclinedreceiptPageModule", function() { return DeclinedreceiptPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _declinedreceipt_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./declinedreceipt.page */ "./src/app/declinedreceipt/declinedreceipt.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _declinedreceipt_page__WEBPACK_IMPORTED_MODULE_5__["DeclinedreceiptPage"]
    }
];
var DeclinedreceiptPageModule = /** @class */ (function () {
    function DeclinedreceiptPageModule() {
    }
    DeclinedreceiptPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_declinedreceipt_page__WEBPACK_IMPORTED_MODULE_5__["DeclinedreceiptPage"]]
        })
    ], DeclinedreceiptPageModule);
    return DeclinedreceiptPageModule;
}());



/***/ }),

/***/ "./src/app/declinedreceipt/declinedreceipt.page.html":
/*!***********************************************************!*\
  !*** ./src/app/declinedreceipt/declinedreceipt.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header>-->\n<ion-toolbar color=\"medium\">\n  <ion-buttons slot=\"start\" style=\"color: black\">\n    <ion-back-button text=\"\" defaultHref=\"home\" class=\"menubutton\">\n    </ion-back-button>\n    <ion-menu-button class=\"menubutton space\"></ion-menu-button>\n  </ion-buttons>\n  <ion-title class=\"titleall\">Audit Req/Declined Receipt</ion-title>\n</ion-toolbar>\n<!--</ion-header>-->\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-label class=\"h4-text\">Date:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label class=\"h4-text\">{{date}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-label class=\"h4-text\">Category:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label class=\"h4-text\">{{category}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-label class=\"h4-text\">Amount($):</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label class=\"h4-text\">{{amount}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-label class=\"h4-text\">Transaction ID:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label class=\"h4-text\">{{transaction}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-label class=\"h4-text\">Comments:</ion-label>\n        </ion-row>\n        <ion-textarea style=\"padding-left: 6px;padding-top: 4px;margin-bottom: 2px\" [readonly]=\"readonly()\"\n          class=\"border h4-text\">{{comments}}</ion-textarea>\n      </ion-col>\n    </ion-row>\n    <hr>\n    <ion-row>\n      <ion-col>\n        <ion-label style=\"font-size: 15px;font-weight: bold\">RLI office Update:</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-label class=\"h4-text\">Audit Status:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label class=\"h4-text\">{{auditStatus}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <div nf-if='auditStatus==\"Audit Completed\"'>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-label class=\"h4-text\">Date:</ion-label>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"h4-text\">{{date}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-label class=\"h4-text\">Transaction ID:</ion-label>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"h4-text\">{{transaction}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-label class=\"h4-text\">Status:</ion-label>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"h4-text\">{{receiptStatus}}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-row>\n            <ion-label class=\"h4-text\">Reason:</ion-label>\n          </ion-row>\n          <ion-textarea style=\"padding-left: 6px;padding-top: 4px;margin-bottom: 2px\" [readonly]=\"readonly()\"\n            class=\"border h4-text\">{{reason}}</ion-textarea>\n        </ion-col>\n      </ion-row>\n      <button align=\"center\" style=\"margin-top: 10px\" class=\"receipts-buttonclass\" (click)=\"newReceipt()\" type=\"submit\">Resubmit as New Receipt</button>\n    </div>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/declinedreceipt/declinedreceipt.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/declinedreceipt/declinedreceipt.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 0.5px solid black;\n  border-radius: 1px;\n  min-height: 40px !important;\n  width: 100% !important;\n  margin-top: 5px;\n  alignment: center; }\n\n.h4-text {\n  font-size: 15px; }\n\nhr {\n  background-color: black; }\n\n.receipts-buttonclass {\n  background-color: #E3A214;\n  cursor: pointer;\n  border: none;\n  width: 100%;\n  height: 40px;\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNhZG1pbi9Eb2N1bWVudHMvZ2l0bGFiL3JsaS1jb21tYW5kZXItYW5kcm9pZC1pb25pYzQvc3JjL2FwcC9kZWNsaW5lZHJlY2VpcHQvZGVjbGluZWRyZWNlaXB0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBRzNCLHNCQUFxQjtFQUNyQixlQUFlO0VBRWYsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLHlCQUF5QjtFQUN6QixlQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGVjbGluZWRyZWNlaXB0L2RlY2xpbmVkcmVjZWlwdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ib3JkZXJ7XG4gIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAvL21hcmdpbi1yaWdodDogNXB4IWltcG9ydGFudDtcbiAgLy9tYXJnaW4tbGVmdDogNXB4IWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIC8vbWFyZ2luLWJvdHRvbTogNXB4O1xuICBhbGlnbm1lbnQ6IGNlbnRlcjtcbn1cblxuLmg0LXRleHR7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnJlY2VpcHRzLWJ1dHRvbmNsYXNze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNBMjE0O1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/declinedreceipt/declinedreceipt.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/declinedreceipt/declinedreceipt.page.ts ***!
  \*********************************************************/
/*! exports provided: DeclinedreceiptPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclinedreceiptPage", function() { return DeclinedreceiptPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeclinedreceiptPage = /** @class */ (function () {
    function DeclinedreceiptPage(activatedRouter, router) {
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.getValue = [];
        this.mainArr = [];
    }
    DeclinedreceiptPage.prototype.ngOnInit = function () {
        this.getValue = this.activatedRouter.snapshot.paramMap.get("item");
        console.log('DATA GET:-', JSON.parse(this.getValue));
        this.mainArr = JSON.parse(this.getValue);
        this.date = this.mainArr.receiptDate;
        this.category = this.mainArr.category_name;
        this.amount = this.mainArr.amount;
        this.transaction = this.mainArr.transaction_id; // Transaction_id use checking remaining
        this.comments = this.mainArr.comments;
        this.auditStatus = this.mainArr.rliOfficeUpdateArray.audit_status;
        this.receiptStatus = this.mainArr.rliOfficeUpdateArray.status;
        this.reason = this.mainArr.rliOfficeUpdateArray.reason;
    };
    DeclinedreceiptPage.prototype.readonly = function () {
        return true;
    };
    DeclinedreceiptPage.prototype.newReceipt = function () {
        this.router.navigate(['/newreceipts']);
    };
    DeclinedreceiptPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-declinedreceipt',
            template: __webpack_require__(/*! ./declinedreceipt.page.html */ "./src/app/declinedreceipt/declinedreceipt.page.html"),
            styles: [__webpack_require__(/*! ./declinedreceipt.page.scss */ "./src/app/declinedreceipt/declinedreceipt.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DeclinedreceiptPage);
    return DeclinedreceiptPage;
}());



/***/ })

}]);
//# sourceMappingURL=declinedreceipt-declinedreceipt-module.js.map