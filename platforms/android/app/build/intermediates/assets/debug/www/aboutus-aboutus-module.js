(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aboutus-aboutus-module"],{

/***/ "./src/app/aboutus/aboutus.module.ts":
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.module.ts ***!
  \*******************************************/
/*! exports provided: AboutusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function() { return AboutusPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutus.page */ "./src/app/aboutus/aboutus.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _aboutus_page__WEBPACK_IMPORTED_MODULE_5__["AboutusPage"]
    }
];
var AboutusPageModule = /** @class */ (function () {
    function AboutusPageModule() {
    }
    AboutusPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_aboutus_page__WEBPACK_IMPORTED_MODULE_5__["AboutusPage"]]
        })
    ], AboutusPageModule);
    return AboutusPageModule;
}());



/***/ }),

/***/ "./src/app/aboutus/aboutus.page.html":
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header color=\"medium\">-->\n\n<ion-toolbar color=\"medium\">\n  <ion-buttons slot=\"start\">\n    <!-- <ion-back-button text=\"\" defaultHref=\"home\" class=\"menubutton\">\n    </ion-back-button> -->\n    <ion-menu-button class=\"menubutton\"></ion-menu-button>\n  </ion-buttons>\n  <ion-title align=\"center\" class=\"titleall\">About Us</ion-title>\n</ion-toolbar>\n<!--</ion-header>-->\n\n<ion-content style=\"text-align: justify;\" padding>\n  <p style=\"text-align: justify;\" class=\"h5-text\">Recovery Logistics is a national leader in busciness continuity and\n    disaster recovery operations. We help buscinesses recover from hurricanes, winter storms,floods, labor strikes and\n    other unplanned events. Our \"whatever it takes\" attitude earned us our reputation for getting the job done - even\n    when others could not. Our clients trust us to help get their busciness back up and operating when things go wrong.\n  </p>\n</ion-content>"

/***/ }),

/***/ "./src/app/aboutus/aboutus.page.scss":
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h45-text {\n  text-align: left;\n  padding-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNhZG1pbi9Eb2N1bWVudHMvZ2l0bGFiL3JsaS1jb21tYW5kZXItYW5kcm9pZC1pb25pYzQvc3JjL2FwcC9hYm91dHVzL2Fib3V0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBRUUsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLnRpdGxlYWxse1xuLy8gIG1hcmdpbi10b3A6IDdweDtcbi8vICAvL2ZvbnQtc2l6ZTogMTVweDtcbi8vICAvL2FsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuLy99XG4uaDQ1LXRleHR7XG5cbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/aboutus/aboutus.page.ts":
/*!*****************************************!*\
  !*** ./src/app/aboutus/aboutus.page.ts ***!
  \*****************************************/
/*! exports provided: AboutusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPage", function() { return AboutusPage; });
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

var AboutusPage = /** @class */ (function () {
    function AboutusPage() {
    }
    AboutusPage.prototype.ngOnInit = function () {
    };
    AboutusPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.page.html */ "./src/app/aboutus/aboutus.page.html"),
            styles: [__webpack_require__(/*! ./aboutus.page.scss */ "./src/app/aboutus/aboutus.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusPage);
    return AboutusPage;
}());



/***/ })

}]);
//# sourceMappingURL=aboutus-aboutus-module.js.map