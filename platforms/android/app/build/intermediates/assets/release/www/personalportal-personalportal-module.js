(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personalportal-personalportal-module"],{

/***/ "./src/app/personalportal/personalportal.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/personalportal/personalportal.module.ts ***!
  \*********************************************************/
/*! exports provided: PersonalportalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalportalPageModule", function() { return PersonalportalPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _personalportal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personalportal.page */ "./src/app/personalportal/personalportal.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _personalportal_page__WEBPACK_IMPORTED_MODULE_5__["PersonalportalPage"]
    }
];
var PersonalportalPageModule = /** @class */ (function () {
    function PersonalportalPageModule() {
    }
    PersonalportalPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_personalportal_page__WEBPACK_IMPORTED_MODULE_5__["PersonalportalPage"]]
        })
    ], PersonalportalPageModule);
    return PersonalportalPageModule;
}());



/***/ }),

/***/ "./src/app/personalportal/personalportal.page.html":
/*!*********************************************************!*\
  !*** ./src/app/personalportal/personalportal.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header>-->\n  <ion-toolbar>\n    <ion-title>personalportal</ion-title>\n  </ion-toolbar>\n<!--</ion-header>-->\n\n<ion-content padding>\n<ion-label href=\"http://rlicommander.com/contractors/\">next</ion-label>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/personalportal/personalportal.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/personalportal/personalportal.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFscG9ydGFsL3BlcnNvbmFscG9ydGFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/personalportal/personalportal.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/personalportal/personalportal.page.ts ***!
  \*******************************************************/
/*! exports provided: PersonalportalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalportalPage", function() { return PersonalportalPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonalportalPage = /** @class */ (function () {
    function PersonalportalPage(router, iab) {
        this.router = router;
        this.iab = iab;
    }
    // browser = this.iab.create('http://rlicommander.com/contractors/');
    PersonalportalPage.prototype.ngOnInit = function () {
    };
    PersonalportalPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personalportal',
            template: __webpack_require__(/*! ./personalportal.page.html */ "./src/app/personalportal/personalportal.page.html"),
            styles: [__webpack_require__(/*! ./personalportal.page.scss */ "./src/app/personalportal/personalportal.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]])
    ], PersonalportalPage);
    return PersonalportalPage;
}());



/***/ })

}]);
//# sourceMappingURL=personalportal-personalportal-module.js.map