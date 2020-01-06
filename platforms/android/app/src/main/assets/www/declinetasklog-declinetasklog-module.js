(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["declinetasklog-declinetasklog-module"],{

/***/ "./src/app/declinetasklog/declinetasklog.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/declinetasklog/declinetasklog.module.ts ***!
  \*********************************************************/
/*! exports provided: DeclinetasklogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclinetasklogPageModule", function() { return DeclinetasklogPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _declinetasklog_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./declinetasklog.page */ "./src/app/declinetasklog/declinetasklog.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _declinetasklog_page__WEBPACK_IMPORTED_MODULE_5__["DeclinetasklogPage"]
    }
];
var DeclinetasklogPageModule = /** @class */ (function () {
    function DeclinetasklogPageModule() {
    }
    DeclinetasklogPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_declinetasklog_page__WEBPACK_IMPORTED_MODULE_5__["DeclinetasklogPage"]]
        })
    ], DeclinetasklogPageModule);
    return DeclinetasklogPageModule;
}());



/***/ }),

/***/ "./src/app/declinetasklog/declinetasklog.page.html":
/*!*********************************************************!*\
  !*** ./src/app/declinetasklog/declinetasklog.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header color=\"medium\">-->\n  <ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\" style=\"color: black\">\n      <ion-back-button  text=\"\" defaultHref=\"home\" class=\"menubutton\">\n      </ion-back-button>\n      <ion-menu-button class=\"menubuttonspace\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title align=\"center\" style=\"color: black\" class=\"titleall\">Audit Req/Declined Task Log</ion-title>\n  </ion-toolbar>\n<!--</ion-header>-->\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Event:</ion-label>\n      <ion-label class=\"h4-text\">{{Event}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Yard:</ion-label>\n      <ion-label class=\"h4-text\">{{Yard}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Date:</ion-label>\n      <ion-label class=\"h4-text\">{{Date}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">LOG:</ion-label>\n      <ion-label class=\"h4-text\">{{Log}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Labor Code:</ion-label>\n      <ion-label class=\"h4-text\">{{LaborCode}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Start Time:</ion-label>\n      <ion-label class=\"h4-text\">{{StartTime}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Stop Time:</ion-label>\n      <ion-label class=\"h4-text\">{{StopTime}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Hours:</ion-label>\n      <ion-label class=\"h4-text\">{{Hours}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">State:</ion-label>\n      <ion-label class=\"h4-text\">{{State}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-list style=\"width: 100%!important; margin-bottom: 4px\">\n        <ion-label style=\"margin-top: 5px\" class=\"h4-text\">Comment:</ion-label>\n        <ion-textarea style=\"padding-left: 6px;padding-top: 4px;margin-bottom: 2px\" [readonly]=\"readonly()\" class=\"border h4-text\">{{Comment}}</ion-textarea>\n      </ion-list>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">RLI Office Update:</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"h4-text\">Status:</ion-label>\n      <ion-label class=\"h4-text\">{{Status}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/declinetasklog/declinetasklog.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/declinetasklog/declinetasklog.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  border: 0.5px solid black;\n  border-radius: 1px;\n  min-height: 40px !important;\n  width: 100% !important;\n  margin-top: 5px;\n  alignment: center; }\n\n.h4-text {\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNhZG1pbi9Eb2N1bWVudHMvZ2l0bGFiL3JsaS1jb21tYW5kZXItYW5kcm9pZC1pb25pYzQvc3JjL2FwcC9kZWNsaW5ldGFza2xvZy9kZWNsaW5ldGFza2xvZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUczQixzQkFBcUI7RUFDckIsZUFBZTtFQUVmLGlCQUFpQixFQUFBOztBQUluQjtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlY2xpbmV0YXNrbG9nL2RlY2xpbmV0YXNrbG9nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJvcmRlcntcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBtaW4taGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIC8vbWFyZ2luLXJpZ2h0OiA1cHghaW1wb3J0YW50O1xuICAvL21hcmdpbi1sZWZ0OiA1cHghaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgLy9tYXJnaW4tYm90dG9tOiA1cHg7XG4gIGFsaWdubWVudDogY2VudGVyO1xufVxuXG5cbi5oNC10ZXh0e1xuICBmb250LXNpemU6IDEzcHg7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/declinetasklog/declinetasklog.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/declinetasklog/declinetasklog.page.ts ***!
  \*******************************************************/
/*! exports provided: DeclinetasklogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclinetasklogPage", function() { return DeclinetasklogPage; });
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


var DeclinetasklogPage = /** @class */ (function () {
    function DeclinetasklogPage(router) {
        this.router = router;
        this.Yard = [];
        this.Event = [];
    }
    DeclinetasklogPage.prototype.ngOnInit = function () {
        this.getValueTaskLog = this.router.snapshot.paramMap.get("item");
        console.log('DATA GET:-', JSON.parse(this.getValueTaskLog));
        this.MainArr = JSON.parse(this.getValueTaskLog);
        console.log('Main arr :' + this.MainArr);
        this.Yard = this.MainArr.yard_name;
        this.Event = this.MainArr.event_name;
        this.Date = this.MainArr.taskLogDate;
        this.Log = this.MainArr.log_id;
        this.LaborCode = this.MainArr.labor_code;
        this.StartTime = this.MainArr.start_time;
        this.StopTime = this.MainArr.stop_time;
        this.Hours = this.MainArr.hours;
        this.State = this.MainArr.state;
        this.Comment = this.MainArr.comments;
        this.Status = this.MainArr.status;
    };
    DeclinetasklogPage.prototype.readonly = function () {
        return true;
    };
    DeclinetasklogPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-declinetasklog',
            template: __webpack_require__(/*! ./declinetasklog.page.html */ "./src/app/declinetasklog/declinetasklog.page.html"),
            styles: [__webpack_require__(/*! ./declinetasklog.page.scss */ "./src/app/declinetasklog/declinetasklog.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DeclinetasklogPage);
    return DeclinetasklogPage;
}());



/***/ })

}]);
//# sourceMappingURL=declinetasklog-declinetasklog-module.js.map