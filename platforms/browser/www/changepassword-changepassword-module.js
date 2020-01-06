(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["changepassword-changepassword-module"],{

/***/ "./src/app/changepassword/changepassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/changepassword/changepassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ChangepasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _changepassword_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changepassword.page */ "./src/app/changepassword/changepassword.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _changepassword_page__WEBPACK_IMPORTED_MODULE_5__["ChangepasswordPage"]
    }
];
var ChangepasswordPageModule = /** @class */ (function () {
    function ChangepasswordPageModule() {
    }
    ChangepasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_changepassword_page__WEBPACK_IMPORTED_MODULE_5__["ChangepasswordPage"]]
        })
    ], ChangepasswordPageModule);
    return ChangepasswordPageModule;
}());



/***/ }),

/***/ "./src/app/changepassword/changepassword.page.html":
/*!*********************************************************!*\
  !*** ./src/app/changepassword/changepassword.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header color=\"medium\">-->\n<ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\">\n        <!-- <ion-back-button text=\"\" defaultHref=\"home\" class=\"menubutton\">\n        </ion-back-button> -->\n        <ion-menu-button class=\"menubutton\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"titleall\">Change Password</ion-title>\n</ion-toolbar>\n<!--</ion-header>-->\n\n<ion-content align=\"center\" class=\"textheading\" padding>\n    <img class=\"LogoSet\" src=\"assets/icon/rlilogo.png\" />\n    <!--<div style=\"padding: 20px\">-->\n    <h4 style=\"font-size: 16px;font-weight: bold\">Change Your Commander Credentials</h4>\n    <!--</div>-->\n    <ion-list>\n        <form #form=\"ngForm\" novalidate>\n            <ion-item>\n                <ion-label position=\"floating\" color=\"medium\" style=\"font-size: 13px\">\n                    <ion-icon name=\"mail\"></ion-icon>\n                    Badge/Email\n                </ion-label>\n                <ion-input type=\"email\" name=\"email\" [readonly]=\"readonly()\" [(ngModel)]=\"email\"></ion-input>\n                <!-- <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"email\" required pattern=\"[A-Za-z0-9._%+-@$/+*!#^&()=]{1,}\"></ion-input> -->\n            </ion-item>\n\n            <ion-item>\n                <ion-label position=\"floating\" color=\"medium\" style=\"font-size: 13px\">\n                    <ion-icon name=\"lock\"></ion-icon>\n                    Old Password\n                </ion-label>\n                <ion-input type=\"password\" name=\"OldPassword\" [(ngModel)]=\"OldPassword\"></ion-input>\n\n                <!-- <ion-input type=\"password\" name=\"oldpassword\" [(ngModel)]=\"oldpassword\" required -->\n                <!-- pattern=\"[A-Za-z0-9._%+-@$/+*!#^&()=]{1,}\"></ion-input> -->\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\" color=\"medium\" style=\"font-size: 13px\">\n                    <ion-icon name=\"lock\"></ion-icon>\n                    New Password\n                </ion-label>\n                <ion-input type=\"password\" name=\"NewPassword\" [(ngModel)]=\"NewPassword\"></ion-input>\n\n                <!-- <ion-input type=\"password\" name=\"New_password\" [(ngModel)]=\"New_password\" required pattern=\"[A-Za-z0-9._%+-@$/+*!#^&()=]{1,}\"></ion-input> -->\n            </ion-item>\n\n            <br>\n            <button class=\"buttonclass\" padding=\"2px\" align=\"center\" (click)=\"changePassword()\" padding=\"10px\"\n                type=\"submit\">Submit</button>\n        </form>\n    </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/changepassword/changepassword.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/changepassword/changepassword.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/changepassword/changepassword.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/changepassword/changepassword.page.ts ***!
  \*******************************************************/
/*! exports provided: ChangepasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPage", function() { return ChangepasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_Auth_Services_auth_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/Auth-Services/auth-services.service */ "./src/app/providers/Auth-Services/auth-services.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_NetworkProvider_network_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/NetworkProvider/network-provider.service */ "./src/app/providers/NetworkProvider/network-provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(router, authServicesService, toastCtrl, loadingController, alertCtrl, networkProvider) {
        this.router = router;
        this.authServicesService = authServicesService;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.networkProvider = networkProvider;
    }
    ChangepasswordPage.prototype.ngOnInit = function () {
        this.email = localStorage.getItem("Badge");
    };
    ChangepasswordPage.prototype.readonly = function () {
        return true;
    };
    ChangepasswordPage.prototype.changePassword = function () {
        var _this = this;
        if (this.networkProvider.getNetworkStatus() == 'Online') {
            if (this.email == "" || this.email == undefined || this.email == null) {
                this.presentAlert("Sorry", "Please enter badge or email");
                return;
            }
            if (this.OldPassword == undefined || this.OldPassword == "") {
                this.presentAlert("Sorry", "Please enter old password");
                return;
            }
            if (this.NewPassword == undefined || this.NewPassword == "") {
                this.presentAlert("Sorry", "Please enter new password");
                return;
            }
            if (this.OldPassword.length < 5 || this.NewPassword.length < 5) {
                console.log('OldPassword length: ' + this.OldPassword.length + '\nNewPassword length: ' + this.NewPassword.length);
                this.presentAlert('Sorry', 'Please enter valid password').then(function (_) {
                    _this.presentToast('Password length should be greater then 5 characters');
                });
                return;
            }
            var badge = localStorage.getItem('Badge');
            this.presentLoading();
            this.authServicesService.getChangePasswordData(badge, this.OldPassword, this.NewPassword).then(function (result) {
                _this.resultData = result;
                if (_this.resultData.status == 200) {
                    var result1 = JSON.parse(_this.resultData._body);
                    _this.loadingController.dismiss();
                    if (result1.data != "") {
                        alert(JSON.parse(_this.resultData.data).message);
                        // alert(result1.message)
                        _this.NewPassword = "";
                        _this.OldPassword = "";
                    }
                    else {
                        _this.loadingController.dismiss();
                        _this.presentToast('Something went wrong');
                    }
                }
                else {
                    _this.loadingController.dismiss();
                    _this.presentToast('Something went wrong');
                }
            }, function (error) {
                _this.loadingController.dismiss();
                alert("Error:-" + error);
            });
        }
        else {
            alert('No internet connection.');
        }
    };
    ChangepasswordPage.prototype.presentAlert = function (title, message) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: title,
                            // subHeader: 'Please enter valid password',
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChangepasswordPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...',
                            spinner: null
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    ChangepasswordPage.prototype.presentToast = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 3000,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChangepasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.page.html */ "./src/app/changepassword/changepassword.page.html"),
            styles: [__webpack_require__(/*! ./changepassword.page.scss */ "./src/app/changepassword/changepassword.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _providers_Auth_Services_auth_services_service__WEBPACK_IMPORTED_MODULE_2__["AuthServicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _providers_NetworkProvider_network_provider_service__WEBPACK_IMPORTED_MODULE_4__["NetworkProviderService"]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=changepassword-changepassword-module.js.map