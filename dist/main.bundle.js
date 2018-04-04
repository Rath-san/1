webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_directives/click-outside.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elRef) {
        this._elRef = _elRef;
    }
    ClickOutsideDirective.prototype.onClickOutside = function (e) {
        var contains = this._elRef.nativeElement.contains(e.target);
        if (contains) {
            console.log('contains');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClickOutside", null);
    ClickOutsideDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appClickOutside]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnyLoggedInUsersGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OnyLoggedInUsersGuard = /** @class */ (function () {
    function OnyLoggedInUsersGuard(_uS, _router) {
        this._uS = _uS;
        this._router = _router;
    }
    // canActivate() {
    //   console.log('OnyLoggedInUsersGuard');
    //   if (this._uS.isLoggedIn) {
    //     return true;
    //   } else {
    //     this._router.navigate(['/login']);
    //   }
    //   return false;
    // }
    OnyLoggedInUsersGuard.prototype.canActivate = function () {
        if (localStorage.getItem('todoMachine.user')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this._router.navigate(['/login']);
        return false;
    };
    OnyLoggedInUsersGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], OnyLoggedInUsersGuard);
    return OnyLoggedInUsersGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_models/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDo; });
var ToDo = /** @class */ (function () {
    function ToDo(id, content, completed, loaded, edit) {
        if (completed === void 0) { completed = false; }
        if (loaded === void 0) { loaded = false; }
        if (edit === void 0) { edit = false; }
        this.id = id;
        this.content = content;
        this.completed = completed;
        this.loaded = loaded;
        this.edit = edit;
    }
    ToDo.prototype.toggleComplete = function () {
        this.completed = !this.completed;
    };
    return ToDo;
}());



/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(_http) {
        this._http = _http;
        this.api = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].api;
        var currentUser = JSON.parse(localStorage.getItem('todoMachine.user'));
        this.token = currentUser && currentUser.token;
    }
    // : Observable<boolean>
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this._http.post(this.api + "api-token-auth/", { username: username, password: password })
            .map(function (r) {
            var token = r;
            if (token) {
                _this.token = token.token;
                localStorage.setItem("todoMachine.user", JSON.stringify({ username: username, token: _this.token }));
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem("todoMachine.user");
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_todo__ = __webpack_require__("../../../../../src/app/_models/todo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_service__ = __webpack_require__("../../../../../src/app/_services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Http } from '@angular/http';




var MainService = /** @class */ (function () {
    function MainService(_http, _searchService, _authServie) {
        this._http = _http;
        this._searchService = _searchService;
        this._authServie = _authServie;
        this.api = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].api;
        this.apiRoot = this.api + 'api/todo/';
        this.pageOffset = 0;
        this.entriesPerPage = 0;
        this.toDos = [];
        this.toDos$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
    }
    MainService.prototype.clearToDos = function () {
        var _this = this;
        var clearedToDo = this.toDos.filter(function (x) {
            if (x.completed) {
                _this.removeEntry(x.id);
            }
        });
    };
    MainService.prototype.constructHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]()
            .append('Content-Type', 'application/json')
            .append('Authorization', 'JWT ' + this._authServie.token);
        return headers;
    };
    MainService.prototype.getData = function () {
        var _this = this;
        this.headers = this.constructHeaders();
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpParams */]();
        if (this._searchService.query) {
            params = params.append('q', this._searchService.query);
        }
        if (this.entriesPerPage) {
            params = params.append('limit', this.entriesPerPage.toString());
        }
        if (this.pageOffset) {
            params = params.append('offset', this.pageOffset.toString());
        }
        this._http
            .get(this.api + "api/todo/", { params: params, headers: this.headers })
            .map(function (obj) {
            if (_this.entriesPerPage) {
                return obj.results.map(function (el) { return new __WEBPACK_IMPORTED_MODULE_1__models_todo__["a" /* ToDo */](el.pk, el.content, el.completed); });
            }
            else {
                return obj.map(function (el) { return new __WEBPACK_IMPORTED_MODULE_1__models_todo__["a" /* ToDo */](el.pk, el.content, el.completed); });
            }
        })
            .subscribe(function (data) {
            _this.toDos = data;
            _this.toDos$.next(_this.toDos);
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.removeEntry = function (pk) {
        var _this = this;
        return this._http.delete("" + this.apiRoot + pk + "/delete/", { headers: this.headers })
            .subscribe(function (result) {
            _this.getData();
        }, function (err) { return console.error(err); });
    };
    MainService.prototype.postEntry = function (content) {
        var _this = this;
        var body = {
            content: content
        };
        return this._http.post(this.apiRoot + "create/", body, { headers: this.headers })
            .subscribe(function (data) {
            _this.getData();
        }, function (err) { return console.log(err); });
    };
    MainService.prototype.editEntry = function (content, pk, completed) {
        var _this = this;
        var body = {
            content: content,
            completed: completed
        };
        return this._http.put("" + this.apiRoot + pk + "/edit/", body, { headers: this.headers })
            .subscribe(function (data) {
            // this.getData();
            _this.updateEntry(data);
            // console.log(data);
        }, function (err) { return console.log(err); });
    };
    MainService.prototype.updateEntry = function (entry) {
        this.toDos.filter(function (x) {
            if (x.id === entry.pk) {
                x.completed = entry.completed;
            }
        });
        this.toDos$.next(this.toDos);
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_5__authentication_service__["a" /* AuthenticationService */]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchService = /** @class */ (function () {
    function SearchService() {
        this.query = '';
    }
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(_http, _authService) {
        this._http = _http;
        this._authService = _authService;
    }
    UserService.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer' + this._authService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestOptions */]({ headers: headers });
        return this._http.get('/api/users', options)
            .map(function (r) { return r.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_main_service__ = __webpack_require__("../../../../../src/app/_services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http_testing__ = __webpack_require__("../../../http/esm5/testing.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__list_form_form_component__ = __webpack_require__("../../../../../src/app/list/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__list_todo_item_todo_item_component__ = __webpack_require__("../../../../../src/app/list/todo-item/todo-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_search_service__ = __webpack_require__("../../../../../src/app/_services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_click_outside_directive__ = __webpack_require__("../../../../../src/app/_directives/click-outside.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// used to create fake backend
// import { fakeBackendProvider } from './_helpers/fake-backend';














// import { PaginationComponent } from './list/pagination/pagination.component';
// import { PaginationService } from './list/pagination/pagination.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__list_form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__list_todo_item_todo_item_component__["a" /* TodoItemComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__directives_click_outside_directive__["a" /* ClickOutsideDirective */]
                // PaginationComponent
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* RoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_main_service__["a" /* MainService */],
                __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_16__services_search_service__["a" /* SearchService */],
                // PaginationService,
                __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* OnyLoggedInUsersGuard */],
                __WEBPACK_IMPORTED_MODULE_15__services_authentication_service__["a" /* AuthenticationService */],
                // providers used to create fake backend
                // fakeBackendProvider,
                __WEBPACK_IMPORTED_MODULE_7__angular_http_testing__["a" /* MockBackend */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* BaseRequestOptions */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'todos', component: __WEBPACK_IMPORTED_MODULE_1__list_list_component__["a" /* ListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* OnyLoggedInUsersGuard */]] },
    { path: '', redirectTo: 'todos', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: '' }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\n  <h1>\n    todoMachine\n  </h1>\n  <button (click)=\"toggleMenu()\" class=\"navbar-toggle\">\n    <span></span>\n    <span></span>\n    <span></span>\n  </button>\n</div>\n\n\n<div class=\"navbar menu\" (swiperight)=\"toggleMenu()\" [ngClass]=\"{'open': menu}\">\n  <ul class=\"list-unstyled\">\n    <li>\n      about author\n    </li>\n    <li>\n      webpage\n    </li>\n    <li (tap)=\"clearCompleted()\">\n      clear completed\n    </li>\n    <li>\n      check all\n    </li>\n    <li (tap)=\"logOut()\">log out</li>\n    <li class=\"credits\">\n      uncheck all\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 99; }\n\nh1 {\n  font-size: 20px;\n  color: black;\n  font-weight: 500; }\n\n.nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 1rem;\n  position: relative;\n  z-index: 1; }\n\n.navbar-toggle {\n  position: absolute;\n  right: 1rem;\n  background: none;\n  border: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: .5rem; }\n\n.navbar-toggle span {\n    background-color: black;\n    width: 15px;\n    height: 2px; }\n\n.navbar-toggle span:nth-child(2) {\n      margin: 3px 0; }\n\n.menu {\n  z-index: 2;\n  position: fixed;\n  height: 100%;\n  top: 0;\n  right: 0;\n  background-color: #fff;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  -webkit-transition: -webkit-transform 250ms ease-in-out;\n  transition: -webkit-transform 250ms ease-in-out;\n  transition: transform 250ms ease-in-out;\n  transition: transform 250ms ease-in-out, -webkit-transform 250ms ease-in-out; }\n\n.menu.open {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%); }\n\n.navbar {\n  -webkit-box-align: unset;\n      -ms-flex-align: unset;\n          align-items: unset; }\n\n.list-unstyled {\n  margin-bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.credits {\n  margin-top: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_main_service__ = __webpack_require__("../../../../../src/app/_services/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_mainService, _authService, _router) {
        this._mainService = _mainService;
        this._authService = _authService;
        this._router = _router;
        this.menu = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.menu = !this.menu;
    };
    HeaderComponent.prototype.logOut = function () {
        this._authService.logout();
        this._router.navigateByUrl('/login');
        this.toggleMenu();
    };
    HeaderComponent.prototype.clearCompleted = function () {
        this._mainService.clearToDos();
        // this.toggleMenu();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@fadeIn]=\"animState\" class=\"form-group\"  [style.width]=\"inputFocus\">\n  <div class=\"content\">\n    <input type=\"text\" placeholder=\"title\" #content (blur)=\"showButton(100)\" (keydown)=\"addOnEnter($event, content.value)\" class=\"form-control\">\n  </div>\n    <button class=\"btn remove\" (tap)=\"createTodo(content.value)\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"21px\" height=\"15px\">\n        <path fill-rule=\"evenodd\" fill=\"red\" d=\"M19.960,2.732 L9.246,13.446 C9.191,13.633 9.107,13.813 8.960,13.960 C8.697,14.223 8.344,14.322 8.000,14.288 C7.656,14.322 7.303,14.223 7.040,13.960 C6.893,13.813 6.809,13.633 6.754,13.446 L1.040,7.732 C0.573,7.265 0.573,6.507 1.040,6.040 C1.507,5.573 2.265,5.573 2.732,6.040 L8.000,11.308 L18.268,1.040 C18.735,0.573 19.493,0.573 19.960,1.040 C20.427,1.507 20.427,2.265 19.960,2.732 Z\"\n        />\n      </svg>\n    </button>\n\n</div>\n\n<button class=\"btn-form-toggle\" (tap)=\"toggleForm()\">\n  <svg [@switch]=\"animState\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"15px\" height=\"15px\">\n    <path fill-rule=\"evenodd\" fill=\"white\" d=\"M9.192,7.500 L13.960,12.268 C14.427,12.735 14.427,13.493 13.960,13.960 C13.493,14.427 12.735,14.427 12.268,13.960 L7.500,9.192 L2.732,13.960 C2.265,14.427 1.507,14.427 1.040,13.960 C0.573,13.493 0.573,12.735 1.040,12.268 L5.808,7.500 L1.040,2.732 C0.573,2.265 0.573,1.507 1.040,1.040 C1.507,0.573 2.265,0.573 2.732,1.040 L7.500,5.808 L12.268,1.040 C12.735,0.573 13.493,0.573 13.960,1.040 C14.427,1.507 14.427,2.265 13.960,2.732 L9.192,7.500 Z\"\n    />\n  </svg>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/list/form/form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  margin-bottom: 25px;\n  width: 90%;\n  max-width: 300px;\n  position: fixed;\n  bottom: 0;\n  margin-bottom: 1rem;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 100; }\n\n.form-group {\n  opacity: 0; }\n\n.btn-form-toggle {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  display: block;\n  margin: auto;\n  line-height: 1;\n  padding: 0;\n  -webkit-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.15);\n          box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 2;\n  background-color: #8a8a8a; }\n\n.btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  padding: 7px;\n  z-index: -1;\n  position: absolute;\n  top: 10px;\n  right: 0; }\n\n.content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-shadow: 0px 9px 15px 0px rgba(0, 0, 0, 0.15);\n          box-shadow: 0px 9px 15px 0px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n  width: 80%; }\n\n.content input {\n    padding: 16px;\n    font-size: 16px;\n    font-weight: 500;\n    background-color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../src/app/_services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = /** @class */ (function () {
    function FormComponent(_mainService, _elRef) {
        this._mainService = _mainService;
        this._elRef = _elRef;
        this.openForm = false;
        this.animState = 'close';
        this.display = 'none';
    }
    FormComponent.prototype.onClickOutside = function (e) {
        var contains = this._elRef.nativeElement.contains(e.target);
        if (!contains) {
            this.animState = 'close';
            this.openForm = false;
        }
    };
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.addOnEnter = function (event, content) {
        if (event.keyCode === 13) {
            this.createTodo(content);
        }
    };
    FormComponent.prototype.showButton = function (n) {
        this.inputFocus = n + "%";
    };
    FormComponent.prototype.createTodo = function (content) {
        this._mainService.postEntry(content);
        this.clearInput();
    };
    FormComponent.prototype.clearInput = function () {
        this.contentInput.nativeElement.value = '';
    };
    FormComponent.prototype.toggleForm = function () {
        this.openForm = !this.openForm;
        this.changeState();
    };
    FormComponent.prototype.changeState = function () {
        this.animState = this.openForm ? 'open' : 'close';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FormComponent.prototype, "contentInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FormComponent.prototype, "onClickOutside", null);
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__("../../../../../src/app/list/form/form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/form/form.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('fadeIn', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('open', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        opacity: 1,
                        transform: 'translateY(0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('close', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        opacity: 0,
                        transform: 'translateY(100%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('*=>*', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('250ms ease-in-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('switch', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('open', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'rotate(180deg)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('close', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'rotate(45deg)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('*=>*', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('250ms ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<label class=\"search-label\">search toDo</label>\n<div class=\"form-group\">\n  <input type=\"search\" class=\"form-control\" placeholder=\"search\" value=\"\" [formControl]=\"searchField\">\n  <!-- <select #rere (change)=\"ItemsPerPage(rere.value)\" class=\"form-control\">\n    <option value=\"\">all</option>\n    <ng-container *ngFor=\"let p of entriesPerPageOptions\">\n      <option value=\"{{p.value}}\">{{p.value}}</option>\n    </ng-container>\n  </select> -->\n</div>\n\n<label>in progress</label>\n<!-- <div [@listIn]=\"toDosListLength\"> -->\n  <app-todo-item *ngFor=\"let todo of toDosList; trackBy:trackTodo\" [todo]=\"todo\"></app-todo-item>\n<!-- </div> -->\n\n\n<label>completed</label>\n<!-- <div [@listIn]=\"toDosListCompletedLength\"> -->\n  <app-todo-item *ngFor=\"let todo of toDosListCompleted; trackBy:trackTodo\" [todo]=\"todo\"></app-todo-item>\n<!-- </div> -->\n\n<app-form></app-form>"

/***/ }),

/***/ "../../../../../src/app/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-grid;\n  display: grid;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\nlabel {\n  margin-top: 1.5rem; }\n\n.search-label {\n  margin-top: 0; }\n\ninput {\n  padding: 16px;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: transparent;\n  color: snow; }\n\ninput:focus {\n    background-color: transparent;\n    -webkit-box-shadow: 0px 9px 15px 0px rgba(0, 0, 0, 0.15);\n            box-shadow: 0px 9px 15px 0px rgba(0, 0, 0, 0.15);\n    border-color: white;\n    color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../src/app/_services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("../../../../../src/app/_services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListComponent = /** @class */ (function () {
    function ListComponent(_mainService, _searchService, _authService) {
        this._mainService = _mainService;
        this._searchService = _searchService;
        this._authService = _authService;
        this.toDosListLength = 0;
        this.toDosListCompletedLength = 0;
        this.entriesPerPageOptions = [
            { value: 5 },
            { value: 10 },
            { value: 20 },
            { value: 40 },
        ];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mainService.getData();
        this.getData();
        this.searchField = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]();
        this.searchField.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(function (querySearch) {
            _this._searchService.query = querySearch;
            _this._mainService.getData();
        });
    };
    // clearCompleted() {
    //   this._mainService.clearToDos();
    //   this.getData();
    // }
    ListComponent.prototype.getData = function () {
        var _this = this;
        this._mainService.toDos$.subscribe(function (data) {
            var progress = data.filter(function (d) { return !d.completed; });
            var completed = data.filter(function (d) { return d.completed; });
            _this.toDosList = progress;
            _this.toDosListCompleted = completed;
            _this.toDosListLength = progress.length;
            _this.toDosListCompletedLength = completed.length;
        });
    };
    ListComponent.prototype.ItemsPerPage = function (entriesPerPage) {
        this._mainService.entriesPerPage = entriesPerPage;
        this._mainService.getData();
    };
    ListComponent.prototype.trackTodo = function (index, item) {
        return item.id;
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.scss")],
            animations: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */],
            __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/todo-item/todo-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" [style.transform]=\"contentPosition\">\n  <input (tap)=\"todo.edit = true\" (pan)=\"widthChange($event)\" (panend)=\"panEnd($event)\" id=\"contentInput\" type=\"text\" #editInput value=\"{{ todo.content }}\"\n    [readonly]=\"!todo.edit\"\n    (press)=\"todo.edit = true\"\n    (blur)=\"editTodo(editInput.value, todo.id, todo.completed); todo.edit = false\"\n    class=\"form-control-plaintext form-control-lg\">\n</div>\n\n<button [style.opacity]=\"opacityPositive\" (tap)=\"removeTodo(todo.id)\" class=\" btn remove\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"15px\" height=\"15px\">\n  <path fill-rule=\"evenodd\" fill=\"red\" d=\"M9.192,7.500 L13.960,12.268 C14.427,12.735 14.427,13.493 13.960,13.960 C13.493,14.427 12.735,14.427 12.268,13.960 L7.500,9.192 L2.732,13.960 C2.265,14.427 1.507,14.427 1.040,13.960 C0.573,13.493 0.573,12.735 1.040,12.268 L5.808,7.500 L1.040,2.732 C0.573,2.265 0.573,1.507 1.040,1.040 C1.507,0.573 2.265,0.573 2.732,1.040 L7.500,5.808 L12.268,1.040 C12.735,0.573 13.493,0.573 13.960,1.040 C14.427,1.507 14.427,2.265 13.960,2.732 L9.192,7.500 Z\"\n  />\n</svg>\n</button>\n\n<button [style.opacity]=\"opacityNegative\" (tap)=\"editTodo(editInput.value, todo.id, !todo.completed)\" class=\"btn accept\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"21px\" height=\"15px\">\n  <path fill-rule=\"evenodd\" fill=\"red\" d=\"M19.960,2.732 L9.246,13.446 C9.191,13.633 9.107,13.813 8.960,13.960 C8.697,14.223 8.344,14.322 8.000,14.288 C7.656,14.322 7.303,14.223 7.040,13.960 C6.893,13.813 6.809,13.633 6.754,13.446 L1.040,7.732 C0.573,7.265 0.573,6.507 1.040,6.040 C1.507,5.573 2.265,5.573 2.732,6.040 L8.000,11.308 L18.268,1.040 C18.735,0.573 19.493,0.573 19.960,1.040 C20.427,1.507 20.427,2.265 19.960,2.732 Z\"\n  />\n</svg>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/list/todo-item/todo-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: .5rem;\n  position: relative;\n  width: 100%; }\n  :host.completed .content {\n    background-color: #8a8a8a; }\n  :host.completed input {\n    text-decoration: line-through;\n    background-color: transparent;\n    color: white; }\n  :host.edit {\n    z-index: 1; }\n  :host.edit .content {\n      -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n              box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n  .checkbox {\n  margin: 0 1rem; }\n  .content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #fff;\n  -webkit-box-shadow: 0px 9px 15px 0px rgba(0, 0, 0, 0.15);\n          box-shadow: 0px 9px 15px 0px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n  -webkit-transition: -webkit-box-shadow 100ms ease-in-out;\n  transition: -webkit-box-shadow 100ms ease-in-out;\n  transition: box-shadow 100ms ease-in-out;\n  transition: box-shadow 100ms ease-in-out, -webkit-box-shadow 100ms ease-in-out;\n  outline: none;\n  -webkit-transition: all 100ms ease-in;\n  transition: all 100ms ease-in; }\n  .content input {\n    padding: 16px;\n    font-size: 16px;\n    font-weight: 500;\n    outline: none; }\n  .content input:focus {\n      border-color: transparent; }\n  .btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  padding: 7px;\n  z-index: -1; }\n  .remove {\n  position: absolute;\n  left: 0; }\n  .accept {\n  position: absolute;\n  right: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/todo-item/todo-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("../../../../../src/app/_services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_todo__ = __webpack_require__("../../../../../src/app/_models/todo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent(_mainService) {
        this._mainService = _mainService;
        // buttons animations
        this.opacityNegative = 0;
        this.opacityPositive = 0;
    }
    Object.defineProperty(TodoItemComponent.prototype, "completed", {
        get: function () {
            return this.todo.completed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoItemComponent.prototype, "edit", {
        get: function () {
            return this.todo.edit;
        },
        enumerable: true,
        configurable: true
    });
    TodoItemComponent.prototype.ngOnInit = function () {
    };
    TodoItemComponent.prototype.removeTodo = function (id) {
        this._mainService.removeEntry(id);
    };
    TodoItemComponent.prototype.editTodo = function (content, pk, completed) {
        this._mainService.editEntry(content, pk, completed);
    };
    // toCompleted(m) {
    //   console.log(m);
    // }
    TodoItemComponent.prototype.widthChange = function (m) {
        if (!this.todo.edit) {
            if (m.deltaX < 100 && m.deltaX > -100) {
                this.contentPosition = "translateX(" + m.deltaX / 3 + "%)";
                if (m.deltaX > 0) {
                    this.opacityPositive = m.deltaX / 100;
                }
                else {
                    this.opacityNegative = m.deltaX / -100;
                }
            }
        }
    };
    TodoItemComponent.prototype.panEnd = function (m) {
        this.contentPosition = "translateX(0%)";
        this.opacityNegative = 0;
        this.opacityPositive = 0;
        if (!this.todo.edit) {
            // to left
            if (m.deltaX < 0) {
                if (m.deltaX < -100) {
                    this.editTodo(this.editInput.nativeElement.value, this.todo.id, !this.todo.completed);
                }
                // to right
            }
            else if (m.deltaX > 0) {
                if (m.deltaX > 100) {
                    this.removeTodo(this.todo.id);
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_todo__["a" /* ToDo */])
    ], TodoItemComponent.prototype, "todo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.completed'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TodoItemComponent.prototype, "completed", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.edit'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TodoItemComponent.prototype, "edit", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('editInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TodoItemComponent.prototype, "editInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('contentWrapper'),
        __metadata("design:type", Object)
    ], TodoItemComponent.prototype, "contentWrapper", void 0);
    TodoItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-item',
            template: __webpack_require__("../../../../../src/app/list/todo-item/todo-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/todo-item/todo-item.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */]])
    ], TodoItemComponent);
    return TodoItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-info\">\n  Username: admin\n  <br /> Password: admin123\n</div>\n\n<form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n    <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n\n    <label for=\"password\">Password</label>\n    <div class=\"content\">\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n      <button [disabled]=\"loading\" class=\"btn accept\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"21px\" height=\"15px\">\n          <path fill-rule=\"evenodd\" fill=\"red\" d=\"M19.960,2.732 L9.246,13.446 C9.191,13.633 9.107,13.813 8.960,13.960 C8.697,14.223 8.344,14.322 8.000,14.288 C7.656,14.322 7.303,14.223 7.040,13.960 C6.893,13.813 6.809,13.633 6.754,13.446 L1.040,7.732 C0.573,7.265 0.573,6.507 1.040,6.040 C1.507,5.573 2.265,5.573 2.732,6.040 L8.000,11.308 L18.268,1.040 C18.735,0.573 19.493,0.573 19.960,1.040 C20.427,1.507 20.427,2.265 19.960,2.732 Z\"\n          />\n        </svg>\n\n      </button>\n      <!-- <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n      /> -->\n    </div>\n\n\n    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n\n\n  </div>\n\n\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -ms-grid;\n  display: grid;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\ninput {\n  -webkit-box-shadow: 0px 9px 15px 0px rgba(0, 0, 0, 0.15);\n          box-shadow: 0px 9px 15px 0px rgba(0, 0, 0, 0.15); }\n\ninput:focus {\n    -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n            box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n\n.content {\n  position: relative;\n  width: 80%; }\n\n.btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  padding: 7px;\n  top: 12px;\n  z-index: -1; }\n\n.remove {\n  position: absolute;\n  left: 0; }\n\n.accept {\n  position: absolute;\n  right: -25%;\n  z-index: 2; }\n\n.alert-info {\n  color: white;\n  background-color: transparent;\n  border-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this._authService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this._authService.login(this.model.username, this.model.password)
            .subscribe(function (r) {
            if (r === true) {
                _this._router.navigate(['/']);
            }
        }, function (err) {
            console.log(err);
            _this.error = 'UserName or password is incorrect';
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api: ''
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map