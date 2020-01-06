(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apptutorial-apptutorial-module"],{

/***/ "./src/app/apptutorial/apptutorial.module.ts":
/*!***************************************************!*\
  !*** ./src/app/apptutorial/apptutorial.module.ts ***!
  \***************************************************/
/*! exports provided: ApptutorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApptutorialPageModule", function() { return ApptutorialPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _apptutorial_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apptutorial.page */ "./src/app/apptutorial/apptutorial.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _apptutorial_page__WEBPACK_IMPORTED_MODULE_5__["ApptutorialPage"]
    }
];
var ApptutorialPageModule = /** @class */ (function () {
    function ApptutorialPageModule() {
    }
    ApptutorialPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_apptutorial_page__WEBPACK_IMPORTED_MODULE_5__["ApptutorialPage"]]
        })
    ], ApptutorialPageModule);
    return ApptutorialPageModule;
}());



/***/ }),

/***/ "./src/app/apptutorial/apptutorial.page.html":
/*!***************************************************!*\
  !*** ./src/app/apptutorial/apptutorial.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header color=\"medium\">-->\n<ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\">\n        <!-- <ion-back-button  text=\"\" defaultHref=\"home\" class=\"menubutton\">\n          </ion-back-button> -->\n        <ion-menu-button class=\"menubutton\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\" class=\"titleall\">App Tutorial</ion-title>\n</ion-toolbar>\n<!--</ion-header>-->\n\n<ion-content padding>\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide>\n            <img src=\"assets/icon/Tutorial1.png\" style=\"width: 90%;\">\n\n        </ion-slide>\n        <ion-slide>\n            <img src=\"assets/icon/Tutorial2.jpg\" style=\"width: 90%;\">\n\n        </ion-slide>\n        <ion-slide>\n            <img src=\"assets/icon/Tutorial3.jpg\" style=\"width: 90%;\">\n\n        </ion-slide>\n    </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/apptutorial/apptutorial.page.scss":
/*!***************************************************!*\
  !*** ./src/app/apptutorial/apptutorial.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcHR1dG9yaWFsL2FwcHR1dG9yaWFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/apptutorial/apptutorial.page.ts":
/*!*************************************************!*\
  !*** ./src/app/apptutorial/apptutorial.page.ts ***!
  \*************************************************/
/*! exports provided: ApptutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApptutorialPage", function() { return ApptutorialPage; });
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

var ApptutorialPage = /** @class */ (function () {
    function ApptutorialPage() {
        this.slideOpts = {
            effect: 'flip'
        };
    }
    ApptutorialPage.prototype.ngOnInit = function () {
    };
    ApptutorialPage.prototype.nextSlide = function () {
        this.nextSlide();
        // this.slides.slideNext();
    };
    ApptutorialPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apptutorial',
            template: __webpack_require__(/*! ./apptutorial.page.html */ "./src/app/apptutorial/apptutorial.page.html"),
            styles: [__webpack_require__(/*! ./apptutorial.page.scss */ "./src/app/apptutorial/apptutorial.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ApptutorialPage);
    return ApptutorialPage;
}());



/***/ })

}]);
//# sourceMappingURL=apptutorial-apptutorial-module.js.map