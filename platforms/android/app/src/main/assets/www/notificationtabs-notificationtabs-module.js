(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificationtabs-notificationtabs-module"],{

/***/ "./src/app/notificationtabs/notificationtabs-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/notificationtabs/notificationtabs-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationtabsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationtabsRoutingModule", function() { return NotificationtabsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notificationtabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notificationtabs.component */ "./src/app/notificationtabs/notificationtabs.component.ts");
/* harmony import */ var _aboutus_aboutus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aboutus/aboutus.page */ "./src/app/aboutus/aboutus.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'notificationtabs',
        component: _notificationtabs_component__WEBPACK_IMPORTED_MODULE_2__["NotificationtabsComponent"],
        children: [{
                path: '',
                redirectTo: '/notificationtabs/(aboutus:aboutus)',
                pathMatch: 'full',
            },
            {
                path: 'aboutus',
                outlet: 'aboutus',
                component: _aboutus_aboutus_page__WEBPACK_IMPORTED_MODULE_3__["AboutusPage"]
            }]
    },
    {
        path: '',
        redirectTo: '/notificationtabs/(aboutus:aboutus)',
        pathMatch: 'full',
    }
];
var NotificationtabsRoutingModule = /** @class */ (function () {
    function NotificationtabsRoutingModule() {
    }
    NotificationtabsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NotificationtabsRoutingModule);
    return NotificationtabsRoutingModule;
}());



/***/ }),

/***/ "./src/app/notificationtabs/notificationtabs.component.html":
/*!******************************************************************!*\
  !*** ./src/app/notificationtabs/notificationtabs.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notificationtabs/notificationtabs.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/notificationtabs/notificationtabs.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnRhYnMvbm90aWZpY2F0aW9udGFicy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/notificationtabs/notificationtabs.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/notificationtabs/notificationtabs.component.ts ***!
  \****************************************************************/
/*! exports provided: NotificationtabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationtabsComponent", function() { return NotificationtabsComponent; });
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

var NotificationtabsComponent = /** @class */ (function () {
    function NotificationtabsComponent() {
    }
    NotificationtabsComponent.prototype.ngOnInit = function () {
    };
    NotificationtabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notificationtabs',
            template: __webpack_require__(/*! ./notificationtabs.component.html */ "./src/app/notificationtabs/notificationtabs.component.html"),
            styles: [__webpack_require__(/*! ./notificationtabs.component.scss */ "./src/app/notificationtabs/notificationtabs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationtabsComponent);
    return NotificationtabsComponent;
}());



/***/ }),

/***/ "./src/app/notificationtabs/notificationtabs.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/notificationtabs/notificationtabs.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationtabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationtabsModule", function() { return NotificationtabsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notificationtabs_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notificationtabs-routing.module */ "./src/app/notificationtabs/notificationtabs-routing.module.ts");
/* harmony import */ var _notificationtabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notificationtabs.component */ "./src/app/notificationtabs/notificationtabs.component.ts");
/* harmony import */ var _aboutus_aboutus_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../aboutus/aboutus.module */ "./src/app/aboutus/aboutus.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NotificationtabsModule = /** @class */ (function () {
    function NotificationtabsModule() {
    }
    NotificationtabsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_notificationtabs_component__WEBPACK_IMPORTED_MODULE_3__["NotificationtabsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _notificationtabs_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotificationtabsRoutingModule"],
                _aboutus_aboutus_module__WEBPACK_IMPORTED_MODULE_4__["AboutusPageModule"],
            ]
        })
    ], NotificationtabsModule);
    return NotificationtabsModule;
}());



/***/ })

}]);
//# sourceMappingURL=notificationtabs-notificationtabs-module.js.map