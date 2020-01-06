(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-log-help-task-log-help-module"],{

/***/ "./src/app/task-log-help/task-log-help.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/task-log-help/task-log-help.module.ts ***!
  \*******************************************************/
/*! exports provided: TaskLogHelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskLogHelpPageModule", function() { return TaskLogHelpPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _task_log_help_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-log-help.page */ "./src/app/task-log-help/task-log-help.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _task_log_help_page__WEBPACK_IMPORTED_MODULE_5__["TaskLogHelpPage"]
    }
];
var TaskLogHelpPageModule = /** @class */ (function () {
    function TaskLogHelpPageModule() {
    }
    TaskLogHelpPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_task_log_help_page__WEBPACK_IMPORTED_MODULE_5__["TaskLogHelpPage"]]
        })
    ], TaskLogHelpPageModule);
    return TaskLogHelpPageModule;
}());



/***/ }),

/***/ "./src/app/task-log-help/task-log-help.page.html":
/*!*******************************************************!*\
  !*** ./src/app/task-log-help/task-log-help.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header color=\"medium\">-->\n<ion-toolbar color=\"medium\">\n  <ion-buttons slot=\"start\" style=\"color: black\">\n    <ion-back-button text=\"\" defaultHref=\"home\" class=\"menubutton\">\n    </ion-back-button>\n    <ion-menu-button class=\"menubutton space\"></ion-menu-button>\n  </ion-buttons>\n  <ion-title slot=\"start\" class=\"titleall\">Help</ion-title>\n</ion-toolbar>\n<!--</ion-header>-->\n<ion-content padding-start=\"5px\" padding-bottom=\"10px\">\n  <br>\n  <p class=\"h5-text padding\">Enter one task log per client per day. The total hours per day on your task logs must be\n    the same as your total clocked-in time for the day. The following are definitions of the Labor Codes:</p>\n  <p class=\"h5-text padding\">MOB : Mobilizing to and from the event</p>\n  <p class=\"h5-text padding\">CMD : Command (higher management only)</p>\n  <p class=\"h5-text padding\">OPS : Operations (dispatch & tracking work)</p>\n  <p class=\"h5-text padding\">LOG : Logistics (assigned logistics workers)</p>\n  <p class=\"h5-text padding\">ADM : Administration (Includes Finance)</p>\n  <p class=\"h5-text padding\">FIN : Finance </p>\n  <p class=\"h5-text padding\">DRG : Deploy/Recover Generator</p>\n  <p class=\"h5-text padding\">RFG : Refuel Generator</p>\n  <p class=\"h5-text padding\">FMT : Fleet Maintenance</p>\n  <p class=\"h5-text padding\">CTR : Catering </p>\n  <p class=\"h5-text padding\">SEC : Security</p>\n  <p class=\"h5-text padding\">OTH : Other (describe in comments)</p>\n</ion-content>"

/***/ }),

/***/ "./src/app/task-log-help/task-log-help.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/task-log-help/task-log-help.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stbG9nLWhlbHAvdGFzay1sb2ctaGVscC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/task-log-help/task-log-help.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/task-log-help/task-log-help.page.ts ***!
  \*****************************************************/
/*! exports provided: TaskLogHelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskLogHelpPage", function() { return TaskLogHelpPage; });
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

var TaskLogHelpPage = /** @class */ (function () {
    function TaskLogHelpPage() {
    }
    TaskLogHelpPage.prototype.ngOnInit = function () {
    };
    TaskLogHelpPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-log-help',
            template: __webpack_require__(/*! ./task-log-help.page.html */ "./src/app/task-log-help/task-log-help.page.html"),
            styles: [__webpack_require__(/*! ./task-log-help.page.scss */ "./src/app/task-log-help/task-log-help.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskLogHelpPage);
    return TaskLogHelpPage;
}());



/***/ })

}]);
//# sourceMappingURL=task-log-help-task-log-help-module.js.map