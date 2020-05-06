webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n  <a class=\"navbar-brand\" href=\"#\">Github Battle</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink='/' routerLinkActive='active'>Home <span class=\"sr-only\"></span></a>\r\n      </li>\r\n      <li>\r\n        <a class=\"nav-link\" routerLink='/battle' routerLinkActive='active'>Github Battle</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink='/lookup' routerLinkActive='active'>User Lookup <span class=\"sr-only\"></span></a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routing_routing_module__ = __webpack_require__("./src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_progressbar_core__ = __webpack_require__("./node_modules/@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_progressbar_http__ = __webpack_require__("./node_modules/@ngx-progressbar/http/esm5/ngx-progressbar-http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__github_services_github_service__ = __webpack_require__("./src/app/github-services/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lookup_lookup_component__ = __webpack_require__("./src/app/lookup/lookup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__date_count_pipe__ = __webpack_require__("./src/app/date-count.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__battle_battle_component__ = __webpack_require__("./src/app/battle/battle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__lookup_lookup_component__["a" /* LookupComponent */],
                __WEBPACK_IMPORTED_MODULE_11__date_count_pipe__["a" /* DateCountPipe */],
                __WEBPACK_IMPORTED_MODULE_12__battle_battle_component__["a" /* BattleComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_progressbar_core__["b" /* NgProgressModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__ngx_progressbar_http__["a" /* NgProgressHttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__github_services_github_service__["a" /* GithubService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/battle/battle.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/battle/battle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"border container searchPadding\">\r\n  <form (ngSubmit)=\"findProfile(); findProfile2()\">\r\n    <div class=\"form-group\">\r\n      <label>Player 1:</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"github username\" [(ngModel)]=\"player1Name\"\r\n        name=\"player1Name\">\r\n      <label>Player 2:</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"github username\" [(ngModel)]=\"player2Name\"\r\n        name=\"player2Name\">\r\n      <button type=\"submit\" (click)=\"show = !show\" class=\"btn btn-success\">Submit</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n<br>\r\n\r\n<div class=\"topPadding container border\" *ngIf=\"user && show\">\r\n  <div class=\"card\">\r\n    <h5 class=\"card-header\">{{user.name}} <small>({{user.login}})</small></h5>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <img src=\"{{user.avatar_url}}\" class=\"img-thumbnail img-fluid\">\r\n          <hr>\r\n          <a href=\"{{user.html_url}}\" class=\"btn btn-outline-success btn-block\" target=\"_blank\"> GitHub Profile</a>\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-6\">\r\n          <span class=\"badge badge-primary\">{{user.followers}} Followers</span>\r\n          <span class=\"badge badge-secondary\">{{user.following}} Following</span>\r\n          <span class=\"badge badge-success\">{{user.public_gists}} Public Gists</span>\r\n          <span class=\"badge badge-info\">{{user.public_repos}} Public Repos</span>\r\n          <hr>\r\n\r\n          <div class=\"card\">\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item\" *ngIf=\"user.name\">Name: {{user.name}}</li>\r\n              <li class=\"list-group-item\" *ngIf=\"user.location\">Lives in: {{user.location}}</li>\r\n              <li class=\"list-group-item\" *ngIf=\"user.blog\">Blog: {{user.blog}}</li>\r\n              <li class=\"list-group-item\" *ngIf=\"user.company\">Company: {{user.company}}</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"topPadding container border\" *ngIf=\"user2\">\r\n    <div class=\"card\">\r\n      <h5 class=\"card-header\">{{user2.name}} <small>({{user2.login}})</small></h5>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <img src=\"{{user2.avatar_url}}\" class=\"img-thumbnail img-fluid\">\r\n            <hr>\r\n\r\n            <a href=\"{{user2.html_url}}\" class=\"btn btn-outline-success btn-block\" target=\"_blank\"> GitHub Profile</a>\r\n          </div>\r\n          <div class=\"col-md-2\"></div>\r\n          <div class=\"col-md-6\">\r\n            <span class=\"badge badge-primary\">{{user2.followers}} Followers</span>\r\n            <span class=\"badge badge-secondary\">{{user2.following}} Following</span>\r\n            <span class=\"badge badge-success\">{{user2.public_gists}} Public Gists</span>\r\n            <span class=\"badge badge-info\">{{user2.public_repos}} Public Repos</span>\r\n            <hr>\r\n\r\n            <div class=\"card\">\r\n              <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item\" *ngIf=\"user2.name\">Name: {{user2.name}}</li>\r\n                <li class=\"list-group-item\" *ngIf=\"user2.location\">Lives in: {{user2.location}}</li>\r\n                <li class=\"list-group-item\" *ngIf=\"user2.blog\">Blog: {{user2.blog}}</li>\r\n                <li class=\"list-group-item\" *ngIf=\"user2.company\">Company: {{user2.company}}</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <div class=\"card\">\r\n      <h5 class=\"card-header\">Result</h5>\r\n      <div class=\"card-body col-md-12\">\r\n        <h3 class=\"card-header\"><small>Score ({{user.login}}): {{score1}}</small></h3>\r\n        <h3 class=\"card-header\"><small>Score ({{user2.login}}): {{score2}}</small></h3>\r\n        <h5 class=\"card-header\" *ngIf=\"score1 > score2\">Winner <small>({{user.login}})</small></h5>\r\n        <h5 class=\"card-header\" *ngIf=\"score1 < score2\">Winner <small>({{user2.login}})</small></h5>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/battle/battle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BattleComponent; });
/* unused harmony export NgIfSimple */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__github_services_github_service__ = __webpack_require__("./src/app/github-services/github.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BattleComponent = /** @class */ (function () {
    function BattleComponent(githubService) {
        this.githubService = githubService;
    }
    BattleComponent.prototype.findProfile = function () {
        var _this = this;
        this.githubService.updateUser(this.player1Name);
        this.sub = this.githubService.getUser().subscribe(function (user) {
            _this.user = user;
            _this.score1 = (user.followers + user.public_repos + user.public_gists) * 2;
        });
    };
    BattleComponent.prototype.findProfile2 = function () {
        var _this = this;
        this.githubService.updateUser(this.player2Name);
        this.sub2 = this.githubService.getUser().subscribe(function (user2) {
            _this.user2 = user2;
            _this.score2 = (user2.followers + user2.public_repos + user2.public_gists) * 2;
        });
    };
    BattleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.githubService.getUser().subscribe(function (user) {
            _this.user = user;
        });
        this.sub2 = this.githubService.getUser().subscribe(function (user2) {
            _this.user2 = user2;
        });
    };
    BattleComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub2.unsubscribe();
    };
    BattleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-battle',
            template: __webpack_require__("./src/app/battle/battle.component.html"),
            styles: [__webpack_require__("./src/app/battle/battle.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__github_services_github_service__["a" /* GithubService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__github_services_github_service__["a" /* GithubService */]])
    ], BattleComponent);
    return BattleComponent;
}());

var NgIfSimple = /** @class */ (function () {
    function NgIfSimple() {
    }
    return NgIfSimple;
}());



/***/ }),

/***/ "./src/app/date-count.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateCountPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateCountPipe = /** @class */ (function () {
    function DateCountPipe() {
    }
    DateCountPipe.prototype.transform = function (value, args) {
        return null;
    };
    DateCountPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'dateCount'
        })
    ], DateCountPipe);
    return DateCountPipe;
}());



/***/ }),

/***/ "./src/app/github-services/github.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GithubService = /** @class */ (function () {
    function GithubService(_http) {
        this._http = _http;
        this.userName = 'vladmorraru';
        this.clientId = '3899367101276f5d353a3';
        this.clientSecret = '1e7c5d0e75cc9884e7de71e85e7a6865f7d12d2d';
    }
    GithubService.prototype.getUser = function () {
        return this._http.get('https://api.github.com/users/' + this.userName + '?client_id='
            + this.clientId + '&client_secret=' + this.clientSecret)
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.getRepos = function () {
        return this._http.get('https://api.github.com/users/' + this.userName + '/repos?client_id='
            + this.clientId + '&client_secret=' + this.clientSecret)
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.updateUser = function (userName) {
        this.userName = userName;
    };
    GithubService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GithubService);
    return GithubService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".instructions-container{\r\n  margin: 100px 0px;\r\n}\r\n\r\n.header-lg{\r\n  font-size: 35px;\r\n  font-weight: 300;\r\n  margin: 20px;\r\n}\r\n\r\n.center-text{\r\n  text-align: center;\r\n}\r\n\r\n.grid{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\n.container-sm{\r\n  width: 80%;\r\n  margin: 0px auto;\r\n}\r\n\r\n.battle-instructions{\r\n  padding: 0px;\r\n  font-size: 25px;\r\n}\r\n\r\nli{\r\n  list-style-type: none;\r\n}\r\n\r\n.battle-instructions li{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 0%;\r\n          flex: 1 1 0%;\r\n  min-width: 300px;\r\n}\r\n\r\n.header-sm{\r\n  font-size: 28px;\r\n  font-weight: 300;\r\n  margin: 10px;\r\n}\r\n\r\n.bg-light{\r\n  background: rgba(0, 0, 0, 0.08);\r\n  border-radius: 3px;\r\n}\r\n\r\n.battle-instructions svg{\r\n  padding: 40px;\r\n  border-radius: 3px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topPadding container border\">\n  <div class=\"instructions-container\">\n    <h1 class=\"center-text header-lg\">Instructions</h1>\n    <ol class=\"container-sm grid center-text battle-instructions\">\n      <li>\n        <h3 class=\"header-sm\">Enter two Github users</h3><svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\"\n          viewBox=\"0 0 640 512\" class=\"bg-light\" color=\"rgb(255, 191, 116)\" size=\"140\" height=\"140\" width=\"140\"\n          style=\"color: rgb(255, 191, 116);\">\n          <path\n            d=\"M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z\">\n          </path>\n        </svg>\n      </li>\n      <li>\n        <h3 class=\"header-sm\">Battle</h3><svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\"\n          viewBox=\"0 0 640 512\" class=\"bg-light\" color=\"#727272\" size=\"140\" height=\"140\" width=\"140\"\n          style=\"color: rgb(114, 114, 114);\">\n          <path\n            d=\"M544 224l-128-16-48-16h-24L227.158 44h39.509C278.333 44 288 41.375 288 38s-9.667-6-21.333-6H152v12h16v164h-48l-66.667-80H18.667L8 138.667V208h8v16h48v2.666l-64 8v42.667l64 8V288H16v16H8v69.333L18.667 384h34.667L120 304h48v164h-16v12h114.667c11.667 0 21.333-2.625 21.333-6s-9.667-6-21.333-6h-39.509L344 320h24l48-16 128-16c96-21.333 96-26.583 96-32 0-5.417 0-10.667-96-32z\">\n          </path>\n        </svg>\n      </li>\n      <li>\n        <h3 class=\"header-sm\">See the winner</h3><svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\"\n          viewBox=\"0 0 576 512\" class=\"bg-light\" color=\"rgb(255, 215, 0)\" size=\"140\" height=\"140\" width=\"140\"\n          style=\"color: rgb(255, 215, 0);\">\n          <path\n            d=\"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z\">\n          </path>\n        </svg>\n      </li>\n    </ol>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lookup/lookup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lookup/lookup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"border container searchPadding\">\r\n\t<form (ngSubmit)=\"findProfile()\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>Search GitHub User Names</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search GitHub\" [(ngModel)]=\"userName\" name=\"userName\">\r\n\t\t\t<button type=\"submit\" (click)=\"show = !show\" class=\"btn btn-success\">Submit</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n<br>\r\n\r\n<div class=\"topPadding container border\" *ngIf=\"user && show\">\r\n\t<div class=\"card\">\r\n\t\t<h5 class=\"card-header\">{{user.name}} <small>({{user.login}})</small></h5>\r\n\t\t<div class=\"card-body\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t<img src=\"{{user.avatar_url}}\" class=\"img-thumbnail img-fluid\">\r\n\t\t\t\t\t<hr>\r\n\t\t\t\t\t<a href=\"{{user.html_url}}\" class=\"btn btn-outline-success btn-block\" target=\"_blank\"> GitHub Profile</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-2\"></div>\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t<span class=\"badge badge-primary\">{{user.followers}} Followers</span>\r\n\t\t\t\t\t<span class=\"badge badge-secondary\">{{user.following}} Following</span>\r\n\t\t\t\t\t<span class=\"badge badge-success\">{{user.public_gists}} Public Gists</span>\r\n\t\t\t\t\t<span class=\"badge badge-info\">{{user.public_repos}} Public Repos</span>\r\n\t\t\t\t\t<hr>\r\n\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<ul class=\"list-group list-group-flush\">\r\n\t\t\t\t\t\t\t<li class=\"list-group-item\" *ngIf=\"user.name\">Name: {{user.name}}</li>\r\n\t\t\t\t\t\t\t<li class=\"list-group-item\" *ngIf=\"user.location\">Lives in: {{user.location}}</li>\r\n\t\t\t\t\t\t\t<li class=\"list-group-item\" *ngIf=\"user.blog\">Blog: {{user.blog}}</li>\r\n\t\t\t\t\t\t\t<li class=\"list-group-item\" *ngIf=\"user.company\">Company: {{user.company}}</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<hr>\r\n\t<div class=\"card\">\r\n\t\t<h5 class=\"card-header\">Repos</h5>\r\n\t\t<div class=\"card-body col-md-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<ul class=\"list-group list-group-flush\" *ngFor=\"let repo of repos\">\r\n\t\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t\t<a href=\"{{repo.html_url}}\" target=\"_blank\">{{repo.name}}</a>\r\n\t\t\t\t\t\t\t\t<small>(Created days ago)</small>\r\n\t\t\t\t\t\t\t\t<p>{{repo.description}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t<span class=\"badge badge-primary\">{{repo.watchers}} Watcher</span>\r\n\t\t\t\t\t\t\t\t<span class=\"badge badge-info\">{{repo.forks}} Forks</span>\r\n\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t<a href=\"{{repo.html_url}}\" target=\"_blank\" class=\"btn btn-outline-info\" style=\"width: 7.5rem\">View\r\n\t\t\t\t\t\t\t\t\tRepo</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/lookup/lookup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookupComponent; });
/* unused harmony export NgIfSimple */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__github_services_github_service__ = __webpack_require__("./src/app/github-services/github.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LookupComponent = /** @class */ (function () {
    function LookupComponent(githubService) {
        this.githubService = githubService;
    }
    LookupComponent.prototype.findProfile = function () {
        var _this = this;
        this.githubService.updateUser(this.userName);
        this.sub = this.githubService.getUser().subscribe(function (user) {
            _this.user = user;
        });
        this.sub2 = this.githubService.getRepos().subscribe(function (repos) {
            _this.repos = repos;
        });
    };
    LookupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.githubService.updateUser(this.userName);
        this.sub = this.githubService.getUser().subscribe(function (user) {
            _this.user = user;
        });
        this.sub2 = this.githubService.getRepos().subscribe(function (repos) {
            _this.repos = repos;
        });
    };
    LookupComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub2.unsubscribe();
    };
    LookupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lookup',
            template: __webpack_require__("./src/app/lookup/lookup.component.html"),
            styles: [__webpack_require__("./src/app/lookup/lookup.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__github_services_github_service__["a" /* GithubService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__github_services_github_service__["a" /* GithubService */]])
    ], LookupComponent);
    return LookupComponent;
}());

var NgIfSimple = /** @class */ (function () {
    function NgIfSimple() {
    }
    return NgIfSimple;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topPadding\">\r\n\t<div class=\"container jumbotron text-center border\">\r\n\t\t<h1>Sorry, But This Page Does not Exist!</h1>\r\n\t\t<a href=\"\" class=\"btn btn-info btn-lg\" routerLink='/' routerLinkActive='active'>Home</a>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lookup_lookup_component__ = __webpack_require__("./src/app/lookup/lookup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__battle_battle_component__ = __webpack_require__("./src/app/battle/battle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'lookup', component: __WEBPACK_IMPORTED_MODULE_4__lookup_lookup_component__["a" /* LookupComponent */] },
    { path: 'battle', component: __WEBPACK_IMPORTED_MODULE_5__battle_battle_component__["a" /* BattleComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map