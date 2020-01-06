(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["approvedtasklog-approvedtasklog-module"],{

/***/ "./src/app/approvedtasklog/approvedtasklog.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/approvedtasklog/approvedtasklog.module.ts ***!
  \***********************************************************/
/*! exports provided: ApprovedtasklogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedtasklogPageModule", function() { return ApprovedtasklogPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _approvedtasklog_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approvedtasklog.page */ "./src/app/approvedtasklog/approvedtasklog.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _approvedtasklog_page__WEBPACK_IMPORTED_MODULE_5__["ApprovedtasklogPage"]
    }
];
var ApprovedtasklogPageModule = /** @class */ (function () {
    function ApprovedtasklogPageModule() {
    }
    ApprovedtasklogPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_approvedtasklog_page__WEBPACK_IMPORTED_MODULE_5__["ApprovedtasklogPage"]]
        })
    ], ApprovedtasklogPageModule);
    return ApprovedtasklogPageModule;
}());



/***/ }),

/***/ "./src/app/approvedtasklog/approvedtasklog.page.html":
/*!***********************************************************!*\
  !*** ./src/app/approvedtasklog/approvedtasklog.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header color=\"medium\">-->\n  <ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\" style=\"color: black\">\n      <ion-back-button   text=\"\" defaultHref=\"home\" class=\"menubutton\">\n      </ion-back-button>\n      <ion-menu-button class=\"menubutton space\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"titleall\">Approved Task Log</ion-title>\n  </ion-toolbar>\n<!--</ion-header>-->\n\n<ion-content>\n\n  <ion-list >\n    <ion-list-header class=\"headerlist\" padding-end=\"5px\">\n      <ion-label style=\"font-size: 13px;height: 10px\">02-12-2019</ion-label>\n      <ion-label style=\"font-size: 13px;height: 10px\">Total Hrs:3.08</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label class=\"textsize\">\n        MOBL\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"textsize\">\n        TCL\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"textsize\">\n        TCL\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <ion-list >\n    <ion-list-header class=\"headerlist\" padding-end=\"5px\">\n      <ion-label style=\"font-size: 13px\">02-12-2019</ion-label>\n      <ion-label style=\"font-size: 13px\">Total Hrs:1.47</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label class=\"textsize\">\n        LOG\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"textsize\">\n        CTR\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"textsize\">\n        OPS\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"textsize\">\n        OTH\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/approvedtasklog/approvedtasklog.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/approvedtasklog/approvedtasklog.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerlist {\n  background-color: #DCDCDC;\n  color: black;\n  height: 10px !important;\n  width: 100%; }\n\n.textsize {\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNhZG1pbi9Eb2N1bWVudHMvZ2l0bGFiL3JsaS1jb21tYW5kZXItYW5kcm9pZC1pb25pYzQvc3JjL2FwcC9hcHByb3ZlZHRhc2tsb2cvYXBwcm92ZWR0YXNrbG9nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLHlCQUF5QjtFQUN2QixZQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcHJvdmVkdGFza2xvZy9hcHByb3ZlZHRhc2tsb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcmxpc3R7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjRENEQ0RDO1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMTBweCFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRleHRzaXple1xuICBmb250LXNpemU6IDEzcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/approvedtasklog/approvedtasklog.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/approvedtasklog/approvedtasklog.page.ts ***!
  \*********************************************************/
/*! exports provided: ApprovedtasklogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedtasklogPage", function() { return ApprovedtasklogPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApprovedtasklogPage = /** @class */ (function () {
    function ApprovedtasklogPage() {
    }
    ApprovedtasklogPage.prototype.ngOnInit = function () {
    };
    ApprovedtasklogPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approvedtasklog',
            template: __webpack_require__(/*! ./approvedtasklog.page.html */ "./src/app/approvedtasklog/approvedtasklog.page.html"),
            styles: [__webpack_require__(/*! ./approvedtasklog.page.scss */ "./src/app/approvedtasklog/approvedtasklog.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ApprovedtasklogPage);
    return ApprovedtasklogPage;
}());



/***/ })

}]);
//# sourceMappingURL=approvedtasklog-approvedtasklog-module.js.map