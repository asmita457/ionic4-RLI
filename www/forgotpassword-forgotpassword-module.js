(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"],{

/***/ "./src/app/forgotpassword/forgotpassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ForgotpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/forgotpassword/forgotpassword.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPage"]
    }
];
var ForgotpasswordPageModule = /** @class */ (function () {
    function ForgotpasswordPageModule() {
    }
    ForgotpasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPage"]]
        })
    ], ForgotpasswordPageModule);
    return ForgotpasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.html":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header align=\"center\" color=\"medium\">-->\n<ion-toolbar color=\"medium\">\n  <ion-buttons slot=\"start\">\n    <ion-back-button text=\"\" defaultHref=\"login\" class=\"menubutton\">\n    </ion-back-button>\n\n  </ion-buttons>\n  <ion-title align=\"center\" class=\"titleall\">Forgot Password</ion-title>\n</ion-toolbar>\n<!--</ion-header>-->\n\n<ion-content align=\"center\" class=\"textheading\" padding>\n  <img class=\"LogoSet\" src=\"assets/icon/rlilogo.png\" />\n  <!--<div style=\"padding: 20px\">-->\n  <h4 style=\"font-size: 16px;font-weight: bold\">Forgot Your Commander Web Credentials</h4>\n  <!--</div>-->\n\n  <ion-list>\n    <form #form=\"ngForm\" novalidate>\n      <ion-item>\n        <ion-label position=\"floating\" color=\"medium\" style=\"font-size: 13px\">\n          <ion-icon name=\"mail\"></ion-icon>\n          Badge/Email\n        </ion-label>\n        <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"email\"></ion-input>\n        <!-- <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"email\" required pattern=\"[A-Za-z0-9._%+-@$/+*!#^&()=]{1,}\"></ion-input> -->\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\" color=\"medium\" style=\"font-size: 13px\">\n          <ion-icon name=\"lock\"></ion-icon>\n          Mobile Number\n        </ion-label>\n        <ion-input type=\"tel\" name=\"mobno\" [(ngModel)]=\"mobno\" pattern=\"\\d*\"></ion-input>\n        <!-- <ion-input  type=\"number\" name=\"mobno\" [(ngModel)]=\"mobno\" required pattern=\"[A-Za-z0-9._%+-@$/+*!#^&()=]{10,}\"></ion-input> -->\n      </ion-item>\n      <br>\n      \n      <button class=\"buttonclass\" padding=\"2px\" align=\"center\" (click)=\"resetPassword()\" padding=\"10px\"\n        type=\"submit\">Submit</button>\n      <!-- <button class=\"buttonclass\" padding=\"2px\" align=\"center\" [disabled]=!form.valid  (click)=\"resetPassword()\" padding=\"10px\" type=\"submit\">Submit</button> -->\n      <br>\n      <br>\n    </form>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
  \*******************************************************/
/*! exports provided: ForgotpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function() { return ForgotpasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_Auth_Services_auth_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/Auth-Services/auth-services.service */ "./src/app/providers/Auth-Services/auth-services.service.ts");
/* harmony import */ var _providers_NetworkProvider_network_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/NetworkProvider/network-provider.service */ "./src/app/providers/NetworkProvider/network-provider.service.ts");
/* harmony import */ var _providers_Data_Services_data_sevices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/Data-Services/data-sevices.service */ "./src/app/providers/Data-Services/data-sevices.service.ts");
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






var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(router, alertCtrl, forgotservice, toastCtrl, loadingController, networkProvider, dataServices) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.forgotservice = forgotservice;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.networkProvider = networkProvider;
        this.dataServices = dataServices;
    }
    ForgotpasswordPage.prototype.ngOnInit = function () {
    };
    ForgotpasswordPage.prototype.readonly = function () {
        return true;
    };
    ForgotpasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (this.networkProvider.getNetworkStatus() == 'Online') {
            if (this.email == "" || this.email == undefined) {
                this.email = "";
                this.mobno = undefined;
                this.presentAlert("Please enter badge or email");
                return;
            }
            if (this.mobno == "" || this.mobno == undefined) {
                this.email = "";
                this.mobno = undefined;
                this.presentAlert("Please enter mobile number");
                return;
            }
            // if (this.mobno.toString().replace(/[^0-9]/g, "").length != 10) {
            //   this.email = ""
            //   this.mobno = undefined
            //   this.presentAlert("Please enter valid mobile number")
            //   return
            // }
            // if (this.mobno.toString().includes(',') || this.mobno.toString().includes(';') || this.mobno.toString().includes('*') || this.mobno.toString().includes('#') || this.mobno.toString().includes('+')||this.mobno.toString().includes('(')||this.mobno.toString().includes('/')||this.mobno.toString().includes(')')||this.mobno.toString().includes('N')||this.mobno.toString().includes('.')||this.mobno.toString().includes('-')||this.mobno.toString().includes(' ')) {
            //   this.email = ""
            //   this.mobno = undefined
            //   this.presentAlert("Please enter valid mobile number")
            //   return
            // }
            // let validmobno = this.mobno.toString().replace(/[^0-9]/g, "")
            // alert(validmobno)
            if (/^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/.test(this.mobno.toString()) == false && /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(this.mobno.toString()) == false && /^[0-9]{10}$/.test(this.mobno.toString()) == false) {
                this.email = "";
                this.mobno = undefined;
                this.presentAlert("Please enter valid mobile number");
                return;
            }
            // if () {
            //   this.email = ""
            //   this.mobno = undefined
            //   this.presentAlert("Please enter valid mobile number")
            //   return
            // }
            // if () {
            //   this.email = ""
            //   this.mobno = undefined
            //   this.presentAlert("Please enter valid mobile number")
            //   return
            // }
            this.presentLoading();
            this.forgotservice.getForgotPasswordData(this.email, this.mobno).then(function (result) {
                _this.resultData = result;
                console.log("Result", _this.resultData);
                var status = _this.resultData.status;
                _this.loadingController.dismiss();
                if (status == 200) {
                    console.log("Result", _this.resultData);
                    var data = JSON.parse(_this.resultData.data);
                    alert(data.message);
                    _this.email = "";
                    _this.mobno = "";
                }
                else {
                    _this.presentToast('Something went wrong.');
                    _this.email = "";
                    _this.mobno = "";
                }
            }, function (error) {
                console.log('Error status:-', error);
                _this.loadingController.dismiss();
                if (error.status == 404) {
                    _this.presentToast('Something went wrong.');
                    _this.email = "";
                    _this.mobno = "";
                }
                if (error.status == 0) {
                    _this.presentToast('Something went wrong.');
                    _this.email = "";
                    _this.mobno = "";
                }
                if (error.status == 401) {
                    // this.dataServices.DeleteSqliteDB_Tables()
                    _this.displayUnauthoriesdAlert();
                    _this.email = "";
                    _this.mobno = "";
                }
            });
        }
        else {
            alert('No internet connection.');
        }
    };
    ForgotpasswordPage.prototype.presentAlert = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Sorry',
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
    ForgotpasswordPage.prototype.presentToast = function (message) {
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
    ForgotpasswordPage.prototype.presentLoading = function () {
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
    ForgotpasswordPage.prototype.displayUnauthoriesdAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Unauthorized',
                            subHeader: '',
                            buttons: [{
                                    text: 'ok',
                                    handler: function () {
                                        _this.router.navigate(['/login']);
                                    }
                                }]
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
    ForgotpasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.page.html */ "./src/app/forgotpassword/forgotpassword.page.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.page.scss */ "./src/app/forgotpassword/forgotpassword.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _providers_Auth_Services_auth_services_service__WEBPACK_IMPORTED_MODULE_3__["AuthServicesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _providers_NetworkProvider_network_provider_service__WEBPACK_IMPORTED_MODULE_4__["NetworkProviderService"],
            _providers_Data_Services_data_sevices_service__WEBPACK_IMPORTED_MODULE_5__["DataSevicesService"]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgotpassword-forgotpassword-module.js.map