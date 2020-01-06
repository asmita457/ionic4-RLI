(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["approved-receipt-approved-receipt-module"],{

/***/ "./src/app/approved-receipt/approved-receipt.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/approved-receipt/approved-receipt.module.ts ***!
  \*************************************************************/
/*! exports provided: ApprovedReceiptPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedReceiptPageModule", function() { return ApprovedReceiptPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _approved_receipt_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approved-receipt.page */ "./src/app/approved-receipt/approved-receipt.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _approved_receipt_page__WEBPACK_IMPORTED_MODULE_5__["ApprovedReceiptPage"]
    }
];
var ApprovedReceiptPageModule = /** @class */ (function () {
    function ApprovedReceiptPageModule() {
    }
    ApprovedReceiptPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_approved_receipt_page__WEBPACK_IMPORTED_MODULE_5__["ApprovedReceiptPage"]]
        })
    ], ApprovedReceiptPageModule);
    return ApprovedReceiptPageModule;
}());



/***/ }),

/***/ "./src/app/approved-receipt/approved-receipt.page.html":
/*!*************************************************************!*\
  !*** ./src/app/approved-receipt/approved-receipt.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar color=\"medium\">\n  <ion-buttons slot=\"start\" style=\"color: black\">\n    <ion-back-button text=\"\" defaultHref=\"home\" class=\"menubutton\">\n    </ion-back-button>\n    <ion-menu-button class=\"menubutton space\"></ion-menu-button>\n  </ion-buttons>\n  <ion-title class=\"titleall\">Approved Receipt</ion-title>\n</ion-toolbar>\n\n<ion-content>\n  <ion-grid>\n    <div *ngIf='isPayout'>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-label class=\"h4-text\">Event:</ion-label>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"h4-text\">{{eventName}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-label class=\"h4-text\">Yard:</ion-label>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"h4-text\">{{yardName}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-label class=\"h4-text\">Date:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label class=\"h4-text\">{{date}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-label class=\"h4-text\">Category:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label class=\"h4-text\">{{category}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-label class=\"h4-text\">Amount($):</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label class=\"h4-text\">{{amount}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-label class=\"h4-text\">Transaction ID:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label class=\"h4-text\">{{transaction}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-row>\n          <ion-label class=\"h4-text\">Comments:</ion-label>\n        </ion-row>\n        <ion-textarea style=\"padding-left: 6px;padding-top: 4px;margin-bottom: 2px\" [readonly]=\"readonly()\"\n          class=\"border h4-text\">{{comments}}</ion-textarea>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/approved-receipt/approved-receipt.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/approved-receipt/approved-receipt.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 0.5px solid black;\n  border-radius: 1px;\n  min-height: 40px !important;\n  width: 100% !important;\n  margin-top: 5px;\n  alignment: center; }\n\n.h4-text {\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNhZG1pbi9Eb2N1bWVudHMvZ2l0bGFiL3JsaS1jb21tYW5kZXItYW5kcm9pZC1pb25pYzQvc3JjL2FwcC9hcHByb3ZlZC1yZWNlaXB0L2FwcHJvdmVkLXJlY2VpcHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFHM0Isc0JBQXFCO0VBQ3JCLGVBQWU7RUFFZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHByb3ZlZC1yZWNlaXB0L2FwcHJvdmVkLXJlY2VpcHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlcntcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICBtaW4taGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgLy9tYXJnaW4tcmlnaHQ6IDVweCFpbXBvcnRhbnQ7XG4gICAgLy9tYXJnaW4tbGVmdDogNXB4IWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIC8vbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGFsaWdubWVudDogY2VudGVyO1xuICB9XG5cbiAgLmg0LXRleHR7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/approved-receipt/approved-receipt.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/approved-receipt/approved-receipt.page.ts ***!
  \***********************************************************/
/*! exports provided: ApprovedReceiptPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedReceiptPage", function() { return ApprovedReceiptPage; });
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


var ApprovedReceiptPage = /** @class */ (function () {
    function ApprovedReceiptPage(activatedRouter) {
        this.activatedRouter = activatedRouter;
        this.isPayout = true;
        this.eventName = '';
        this.yardName = '';
        this.date = '';
        this.category = '';
        this.amount = '';
        this.transaction = '';
        this.comments = '';
    }
    ApprovedReceiptPage.prototype.ngOnInit = function () {
        var type = this.activatedRouter.snapshot.paramMap.get("type");
        if (type == 'receipt') {
            this.isPayout = true;
            var getValue = this.activatedRouter.snapshot.paramMap.get("item");
            console.log('DATA GET:-', JSON.parse(getValue));
            var mainArr = JSON.parse(getValue);
            this.eventName = mainArr.event_name;
            this.yardName = mainArr.yard_name;
            this.date = mainArr.date;
            this.category = mainArr.category_name;
            this.amount = mainArr.amount;
            this.transaction = mainArr.transaction_id;
            this.comments = mainArr.comments;
        }
        else {
            this.isPayout = false;
            var getValue = this.activatedRouter.snapshot.paramMap.get("item");
            console.log('DATA GET:-', JSON.parse(getValue));
            var mainArr = JSON.parse(getValue);
            // this.eventName = mainArr.event_name
            // this.yardName = mainArr.yard_name
            this.date = mainArr.date;
            this.category = mainArr.category;
            this.amount = mainArr.amount;
            this.transaction = mainArr.transaction_id;
            this.comments = mainArr.comments;
        }
    };
    ApprovedReceiptPage.prototype.readonly = function () {
        return true;
    };
    ApprovedReceiptPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approved-receipt',
            template: __webpack_require__(/*! ./approved-receipt.page.html */ "./src/app/approved-receipt/approved-receipt.page.html"),
            styles: [__webpack_require__(/*! ./approved-receipt.page.scss */ "./src/app/approved-receipt/approved-receipt.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ApprovedReceiptPage);
    return ApprovedReceiptPage;
}());



/***/ })

}]);
//# sourceMappingURL=approved-receipt-approved-receipt-module.js.map