(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactus-contactus-module"],{

/***/ "./src/app/contactus/contactus.module.ts":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.module.ts ***!
  \***********************************************/
/*! exports provided: ContactusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactus.page */ "./src/app/contactus/contactus.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _contactus_page__WEBPACK_IMPORTED_MODULE_5__["ContactusPage"]
    }
];
var ContactusPageModule = /** @class */ (function () {
    function ContactusPageModule() {
    }
    ContactusPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_5__["ContactusPage"]]
        })
    ], ContactusPageModule);
    return ContactusPageModule;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.page.html":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header color=\"medium\">-->\n<ion-toolbar color=\"medium\">\n  <ion-buttons slot=\"start\" style=\"color: black\">\n    <!-- <ion-back-button text=\"\" defaultHref=\"home\" class=\"menubutton\">\n    </ion-back-button> -->\n    <ion-menu-button class=\"menubutton\"></ion-menu-button>\n  </ion-buttons>\n  <ion-title class=\"titleall\">Contact Us</ion-title>\n</ion-toolbar>\n<!--</ion-header>-->\n\n<ion-content padding=\"=5px\">\n  <p class=\"h5-text padding\">Phone: <a href=tel:919-469-4141>919-469-4141</a></p>\n  <p class=\"h5-text padding\">Email: <a href=mailto:info@recoverylogistics.net>info@recoverylogistics.net</a></p>\n</ion-content>"

/***/ }),

/***/ "./src/app/contactus/contactus.page.scss":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/contactus/contactus.page.ts":
/*!*********************************************!*\
  !*** ./src/app/contactus/contactus.page.ts ***!
  \*********************************************/
/*! exports provided: ContactusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPage", function() { return ContactusPage; });
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

var ContactusPage = /** @class */ (function () {
    function ContactusPage() {
    }
    ContactusPage.prototype.ngOnInit = function () {
    };
    ContactusPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.page.html */ "./src/app/contactus/contactus.page.html"),
            styles: [__webpack_require__(/*! ./contactus.page.scss */ "./src/app/contactus/contactus.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusPage);
    return ContactusPage;
}());



/***/ })

}]);
//# sourceMappingURL=contactus-contactus-module.js.map