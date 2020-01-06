(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasklogaudit-tasklogaudit-module"],{

/***/ "./src/app/tasklogaudit/tasklogaudit.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/tasklogaudit/tasklogaudit.module.ts ***!
  \*****************************************************/
/*! exports provided: TasklogauditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklogauditPageModule", function() { return TasklogauditPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tasklogaudit_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasklogaudit.page */ "./src/app/tasklogaudit/tasklogaudit.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _tasklogaudit_page__WEBPACK_IMPORTED_MODULE_5__["TasklogauditPage"]
    }
];
var TasklogauditPageModule = /** @class */ (function () {
    function TasklogauditPageModule() {
    }
    TasklogauditPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tasklogaudit_page__WEBPACK_IMPORTED_MODULE_5__["TasklogauditPage"]]
        })
    ], TasklogauditPageModule);
    return TasklogauditPageModule;
}());



/***/ }),

/***/ "./src/app/tasklogaudit/tasklogaudit.page.html":
/*!*****************************************************!*\
  !*** ./src/app/tasklogaudit/tasklogaudit.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header color=\"medium\">-->\n  <ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\" style=\"color: black\">\n      <ion-back-button  text=\"\" defaultHref=\"home\" class=\"menubutton\">\n      </ion-back-button>\n      <ion-menu-button class=\"menubutton space\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"titleall\">Audit Req/Declined Task Log</ion-title>\n  </ion-toolbar>\n<!--</ion-header>-->\n\n<ion-content padding=\"4px\">\n  <ion-list>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Event:</ion-label>\n      <ion-label class=\"h4-text\">RLI 2019 Credit Cards</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Yard:</ion-label>\n      <ion-label class=\"h4-text\">Apex-Tower Maintenance</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Date:</ion-label>\n      <ion-label class=\"h4-text\">02-12-2019</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">LOG:</ion-label>\n      <ion-label class=\"h4-text\">SEG1001-20190212</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Labor Code:</ion-label>\n      <ion-label class=\"h4-text\">MOBL</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Start Time:</ion-label>\n      <ion-label class=\"h4-text\">04:00</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Stop Time:</ion-label>\n      <ion-label class=\"h4-text\">04:05</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Hours:</ion-label>\n      <ion-label class=\"h4-text\">0.08</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">State:</ion-label>\n      <ion-label class=\"h4-text\">AR</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-list style=\"width: 100%!important; margin-bottom: 4px\">\n        <ion-label style=\"margin-top: 5px\" class=\"h4-text\">Comment:</ion-label>\n        <ion-textarea style=\"padding-left: 6px;padding-top: 4px;margin-bottom: 2px\" [readonly]=\"readonly()\" class=\"border h4-text\">test ar</ion-textarea>\n      </ion-list>\n\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label class=\"h4-text\">RLI Office Update:</ion-label>\n      <ion-label class=\"h4-text\"></ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Status:</ion-label>\n      <ion-label class=\"h4-text\">Audit Required</ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tasklogaudit/tasklogaudit.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/tasklogaudit/tasklogaudit.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 0.5px solid black;\n  border-radius: 1px;\n  min-height: 40px !important;\n  width: 100% !important;\n  margin-top: 5px;\n  alignment: center; }\n\n.h4-text {\n  font-size: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNhZG1pbi9Eb2N1bWVudHMvZ2l0bGFiL3JsaS1jb21tYW5kZXItYW5kcm9pZC1pb25pYzQvc3JjL2FwcC90YXNrbG9nYXVkaXQvdGFza2xvZ2F1ZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBRzNCLHNCQUFxQjtFQUNyQixlQUFlO0VBRWYsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFza2xvZ2F1ZGl0L3Rhc2tsb2dhdWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ib3JkZXJ7XG4gIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgbWluLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAvL21hcmdpbi1yaWdodDogNXB4IWltcG9ydGFudDtcbiAgLy9tYXJnaW4tbGVmdDogNXB4IWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIC8vbWFyZ2luLWJvdHRvbTogNXB4O1xuICBhbGlnbm1lbnQ6IGNlbnRlcjtcbn1cbi5oNC10ZXh0e1xuICBmb250LXNpemU6IDE1cHg7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tasklogaudit/tasklogaudit.page.ts":
/*!***************************************************!*\
  !*** ./src/app/tasklogaudit/tasklogaudit.page.ts ***!
  \***************************************************/
/*! exports provided: TasklogauditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklogauditPage", function() { return TasklogauditPage; });
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

var TasklogauditPage = /** @class */ (function () {
    function TasklogauditPage() {
    }
    TasklogauditPage.prototype.ngOnInit = function () {
    };
    TasklogauditPage.prototype.readonly = function () {
        return true;
    };
    TasklogauditPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasklogaudit',
            template: __webpack_require__(/*! ./tasklogaudit.page.html */ "./src/app/tasklogaudit/tasklogaudit.page.html"),
            styles: [__webpack_require__(/*! ./tasklogaudit.page.scss */ "./src/app/tasklogaudit/tasklogaudit.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TasklogauditPage);
    return TasklogauditPage;
}());



/***/ })

}]);
//# sourceMappingURL=tasklogaudit-tasklogaudit-module.js.map