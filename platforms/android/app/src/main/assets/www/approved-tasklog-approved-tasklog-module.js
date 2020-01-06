(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["approved-tasklog-approved-tasklog-module"],{

/***/ "./src/app/approved-tasklog/approved-tasklog.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/approved-tasklog/approved-tasklog.module.ts ***!
  \*************************************************************/
/*! exports provided: ApprovedTasklogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedTasklogPageModule", function() { return ApprovedTasklogPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _approved_tasklog_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approved-tasklog.page */ "./src/app/approved-tasklog/approved-tasklog.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _approved_tasklog_page__WEBPACK_IMPORTED_MODULE_5__["ApprovedTasklogPage"]
    }
];
var ApprovedTasklogPageModule = /** @class */ (function () {
    function ApprovedTasklogPageModule() {
    }
    ApprovedTasklogPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_approved_tasklog_page__WEBPACK_IMPORTED_MODULE_5__["ApprovedTasklogPage"]]
        })
    ], ApprovedTasklogPageModule);
    return ApprovedTasklogPageModule;
}());



/***/ }),

/***/ "./src/app/approved-tasklog/approved-tasklog.page.html":
/*!*************************************************************!*\
  !*** ./src/app/approved-tasklog/approved-tasklog.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"app-page-home\" color=\"medium\">\n  <ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"home\" class=\"menubutton\">\n      </ion-back-button>\n      <ion-menu-button class=\"menubutton\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title margin-start=\"10px\" style=\"color: black\">Approved Task Log</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-toolbar color=\"medium\">\n  <ion-buttons slot=\"start\" style=\"color: black\">\n    <ion-back-button text=\"\" defaultHref=\"home\" class=\"menubutton\">\n    </ion-back-button>\n    <ion-menu-button class=\"menubuttonspace\"></ion-menu-button>\n  </ion-buttons>\n  <ion-title align=\"center\" class=\"titleall\">Approved Task Log</ion-title>\n</ion-toolbar>\n<ion-content>\n  <ion-grid>\n    <ion-list>\n      <ion-item>\n        <ion-col size=\"4\">\n          <ion-label class=\"h4-text\">Event:</ion-label>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"h4-text\">{{Event}}</ion-label>\n        </ion-col>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-col size=\"4\">\n          <ion-label class=\"h4-text\">Yard:</ion-label>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"h4-text\">{{Yard}}</ion-label>\n        </ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-col size=\"4\">\n          <ion-label class=\"h4-text\">Date:</ion-label>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"h4-text\">{{Date}}</ion-label>\n        </ion-col>\n      </ion-item>\n      <ion-item>\n        <ion-col size=\"4\">\n          <ion-label class=\"h4-text\">LOG:</ion-label>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"h4-text\">{{LOG}}</ion-label>\n        </ion-col>\n      </ion-item>\n      <ion-item>\n        <ion-col size=\"4\">\n          <ion-row>\n            <ion-label class=\"h4-text\">Labor Code:</ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"h4-text\">{{Labor_Code}}</ion-label>\n        </ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-col size=\"4\">\n          <ion-row>\n            <ion-label class=\"h4-text\">Start Time:</ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"h4-text\">{{Start_Time}}</ion-label>\n        </ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-col size=\"4\">\n          <ion-row>\n            <ion-label class=\"h4-text\">Stop Time:</ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"h4-text\">{{Stop_Time}}</ion-label>\n        </ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-col size=\"4\">\n          <ion-row>\n            <ion-label class=\"h4-text\">Hours:</ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"h4-text\">{{Hours}}</ion-label>\n        </ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-col size=\"4\">\n          <ion-row>\n            <ion-label class=\"h4-text\">State:</ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"h4-text\">{{State}}</ion-label>\n        </ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-row>\n          <ion-col>\n            <ion-row>\n              <ion-label class=\"h4-text\">Comments:</ion-label>\n            </ion-row>\n            <ion-textarea style=\"padding-left: 6px;padding-top: 4px;margin-bottom: 2px\" [readonly]=\"readonly()\"\n              class=\"border h4-text\">{{Comment}}</ion-textarea>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n      <ion-item>\n        <ion-col size=\"6\">\n          <ion-row>\n            <ion-label class=\"h4-text\">RLI Office Update:</ion-label>\n          </ion-row>\n        </ion-col>\n\n      </ion-item>\n\n      <ion-item>\n        <ion-col size=\"4\">\n          <ion-row>\n            <ion-label class=\"h4-text\">Status:</ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"h4-text\">{{Status}}</ion-label>\n        </ion-col>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/approved-tasklog/approved-tasklog.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/approved-tasklog/approved-tasklog.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-inner {\n  height: 60px !important; }\n\n.border {\n  border: 0.5px solid black;\n  border-radius: 1px;\n  min-height: 40px !important;\n  width: 320px !important;\n  margin-top: 5px;\n  alignment: center; }\n\n.h4-text {\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNhZG1pbi9Eb2N1bWVudHMvZ2l0bGFiL3JsaS1jb21tYW5kZXItYW5kcm9pZC1pb25pYzQvc3JjL2FwcC9hcHByb3ZlZC10YXNrbG9nL2FwcHJvdmVkLXRhc2tsb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFHM0IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFFZixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHByb3ZlZC10YXNrbG9nL2FwcHJvdmVkLXRhc2tsb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0taW5uZXIge1xuICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuLmJvcmRlcntcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICBtaW4taGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgLy9tYXJnaW4tcmlnaHQ6IDVweCFpbXBvcnRhbnQ7XG4gICAgLy9tYXJnaW4tbGVmdDogNXB4IWltcG9ydGFudDtcbiAgICB3aWR0aDogMzIwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgLy9tYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgYWxpZ25tZW50OiBjZW50ZXI7XG59XG4gICAgXG4uaDQtdGV4dHtcbiAgICBmb250LXNpemU6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/approved-tasklog/approved-tasklog.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/approved-tasklog/approved-tasklog.page.ts ***!
  \***********************************************************/
/*! exports provided: ApprovedTasklogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedTasklogPage", function() { return ApprovedTasklogPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApprovedTasklogPage = /** @class */ (function () {
    function ApprovedTasklogPage(router, actrouter, alertCtrl) {
        this.router = router;
        this.actrouter = actrouter;
        this.alertCtrl = alertCtrl;
        this.getValue = [];
        this.MainArr = [];
    }
    ApprovedTasklogPage.prototype.ngOnInit = function () {
        this.getValue = this.actrouter.snapshot.paramMap.get("item");
        console.log('DATA GET:-', JSON.parse(this.getValue));
        this.MainArr = JSON.parse(this.getValue);
        this.Event = this.MainArr.event_name;
        this.Yard = this.MainArr.yard_name;
        this.Date = this.MainArr.taskLogDate;
        this.LOG = this.MainArr.log;
        this.Labor_Code = this.MainArr.labor_code;
        this.Start_Time = this.MainArr.start_time;
        this.Stop_Time = this.MainArr.stop_time;
        this.Hours = this.MainArr.hours;
        this.State = this.MainArr.state;
        this.Comment = this.MainArr.comments;
        this.Status = this.MainArr.status;
    };
    ApprovedTasklogPage.prototype.readonly = function () {
        return true;
    };
    ApprovedTasklogPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approved-tasklog',
            template: __webpack_require__(/*! ./approved-tasklog.page.html */ "./src/app/approved-tasklog/approved-tasklog.page.html"),
            styles: [__webpack_require__(/*! ./approved-tasklog.page.scss */ "./src/app/approved-tasklog/approved-tasklog.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], ApprovedTasklogPage);
    return ApprovedTasklogPage;
}());



/***/ })

}]);
//# sourceMappingURL=approved-tasklog-approved-tasklog-module.js.map