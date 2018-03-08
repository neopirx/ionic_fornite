webpackJsonp([2],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/emulgator/Documents/iFornite/ionic_fornite/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col width-100>\n        <ion-list>\n          <ion-item>\n            <strong>App Name: </strong> iFornite\n          </ion-item>\n          <ion-item>\n            <strong>Version: </strong> 0.0.1\n          </ion-item>\n          <ion-item>\n            <strong>Description: </strong> Fornite stats\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/emulgator/Documents/iFornite/ionic_fornite/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.storage.get('nickname').then(function (val) {
            if (val != null) {
                _this.nickname = val;
                console.log('set1');
            }
            else {
                _this.nickname = 'Emulgator';
                console.log('set2');
            }
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.saveForm = function () {
        var nickname = this.nickname;
        this.storage.set('nickname', JSON.stringify(nickname));
        console.log(nickname);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/emulgator/Documents/iFornite/ionic_fornite/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class="searchBar">\n    <ion-row class="searchRow">\n      <ion-col width-100>\n        <form (ngSubmit)="saveForm()">\n          <ion-item>\n          <ion-label stacked class="searchLabel">\n            Nickname\n          </ion-label>\n          <ion-input class="searchForm" [(ngModel)]="nickname" name="nickname" type="text" stacked></ion-input>\n          </ion-item>\n          <button ion-button type="submit" color="light" light block>Search</button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/emulgator/Documents/iFornite/ionic_fornite/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		287,
		1
	],
	"../pages/settings/settings.module": [
		288,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, statsProvider, storage) {
        this.navCtrl = navCtrl;
        this.statsProvider = statsProvider;
        this.storage = storage;
        this.mode = 'solo';
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('nickname').then(function (val) {
            if (val != null) {
                _this.nickname = JSON.parse(val);
                console.log('1');
            }
            else {
                _this.nickname = 'Emulgator';
                console.log('2');
            }
            _this.statsProvider.getStats(_this.nickname).subscribe(function (stats) {
                _this.stats = stats;
                console.log(stats);
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/emulgator/Documents/iFornite/ionic_fornite/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>iFornite</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- segments -->\n<ion-toolbar no-border-top class="toolbarMode">\n  <ion-segment [(ngModel)]="mode">\n    <ion-segment-button value="solo">\n      Solo\n    </ion-segment-button>\n    <ion-segment-button value="duo">\n      Duo\n    </ion-segment-button>\n    <ion-segment-button value="squad">\n      Squad\n    </ion-segment-button>\n  </ion-segment>\n</ion-toolbar>\n<ion-content padding class="card-background-page" *ngIf="stats" no-bounce>\n\n  <!-- first card -->\n  <ion-card class="mainCard">\n    <img src="img/card1transparent.png" />\n    <div class="card-title">{{stats.displayName}}</div>\n    <div class="card-subtitle">Wins: {{stats.br.stats.pc.all.wins}}</div>\n    <div class="card-subtitle kdratio">K/D ratio: {{stats.br.stats.pc.all.kpd}}</div>\n    <div class="card-subtitle matchesPlayed">Matches played: {{stats.br.stats.pc.all.matchesPlayed}}</div>\n    <div class="accountLevel">{{stats.br.profile.level}}</div>\n    <div class="accountLevel accountLevel2">Account level</div>\n  </ion-card>\n\n\n  <!-- solo stats card -->\n  <div [ngSwitch]="mode">\n    <ion-card class="soloCard" *ngSwitchCase="\'solo\'">\n      <img src="img/card2transparent.png" />\n      <div class="card-title">Solo</div>\n      <ion-grid class="top3">\n        <ion-row class="winRow">\n          <ion-col>\n            <div>Wins:</div>\n            <div class="top3div">{{stats.br.stats.pc.solo.wins}}</div>\n          </ion-col>\n          <ion-col>\n            <div class="top3div">Top 10:</div>\n            <div class="top3div">{{stats.br.stats.pc.solo.top10}}</div>\n          </ion-col>\n          <ion-col>\n            <div class="top3div">Top 25:</div>\n            <div class="top3div">{{stats.br.stats.pc.solo.top25}}</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class="soloStats">\n        <ion-row class="firstLineSolo">\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/killicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.solo.kills}}</div>\n            <div class="iconDesc">Kills</div>\n          </ion-col>\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/deathicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.solo.deaths}}</div>\n            <div class="iconDesc">Deaths</div>\n          </ion-col>\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/percentageicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.solo.kpd}}</div>\n            <div class="iconDesc">K/D ratio</div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="secondLineSolo">\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/matchesicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.solo.matchesPlayed}}</div>\n            <div class="iconDesc">Matches</div>\n          </ion-col>\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/ratioicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.solo.winRate}} %</div>\n            <div class="iconDesc">Win ratio</div>\n          </ion-col>\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/minutesicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.solo.minutesPlayed}}</div>\n            <div class="iconDesc">Minutes played</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    <!-- duo stats card -->\n    <ion-card class="soloCard" *ngSwitchCase="\'duo\'">\n      <img src="img/card2transparent2.png" />\n      <div class="card-title">Duo</div>\n      <ion-grid class="top3">\n        <ion-row class="winRow">\n          <ion-col>\n            <div>Wins:</div>\n            <div class="top3div">{{stats.br.stats.pc.duo.wins}}</div>\n          </ion-col>\n          <ion-col>\n            <div class="top3div">Top 5:</div>\n            <div class="top3div">{{stats.br.stats.pc.duo.top5}}</div>\n          </ion-col>\n          <ion-col>\n            <div class="top3div">Top 12:</div>\n            <div class="top3div">{{stats.br.stats.pc.duo.top12}}</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class="soloStats">\n        <ion-row class="firstLineSolo">\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/killicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.duo.kills}}</div>\n            <div class="iconDesc">Kills</div>\n          </ion-col>\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/deathicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.duo.deaths}}</div>\n            <div class="iconDesc">Deaths</div>\n          </ion-col>\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/percentageicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.duo.kpd}}</div>\n            <div class="iconDesc">K/D ratio</div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="secondLineSolo">\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/matchesicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.duo.matchesPlayed}}</div>\n            <div class="iconDesc">Matches</div>\n          </ion-col>\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/ratioicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.duo.winRate}} %</div>\n            <div class="iconDesc">Win ratio</div>\n          </ion-col>\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/minutesicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.duo.minutesPlayed}}</div>\n            <div class="iconDesc">Minutes played</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n    <!-- squad stats card -->\n    <ion-card class="soloCard" *ngSwitchCase="\'squad\'">\n      <img src="img/cardSquad.png" />\n      <div class="card-title">Squad</div>\n      <ion-grid class="top3">\n        <ion-row class="winRow">\n          <ion-col>\n            <div>Wins:</div>\n            <div class="top3div">{{stats.br.stats.pc.squad.wins}}</div>\n          </ion-col>\n          <ion-col>\n            <div class="top3div">Top 3:</div>\n            <div class="top3div">{{stats.br.stats.pc.squad.top3}}</div>\n          </ion-col>\n          <ion-col>\n            <div class="top3div">Top 6:</div>\n            <div class="top3div">{{stats.br.stats.pc.squad.top6}}</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid class="soloStats">\n        <ion-row class="firstLineSolo">\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/killicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.squad.kills}}</div>\n            <div class="iconDesc">Kills</div>\n          </ion-col>\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/deathicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.squad.deaths}}</div>\n            <div class="iconDesc">Deaths</div>\n          </ion-col>\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/percentageicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.squad.kpd}}</div>\n            <div class="iconDesc">K/D ratio</div>\n          </ion-col>\n        </ion-row>\n        <ion-row class="secondLineSolo">\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/matchesicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.squad.matchesPlayed}}</div>\n            <div class="iconDesc">Matches</div>\n          </ion-col>\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/ratioicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.squad.winRate}} %</div>\n            <div class="iconDesc">Win ratio</div>\n          </ion-col>\n          <ion-col>\n            <div class="iconContainer">\n              <img class="svgIcon" src="img/minutesicon.svg">\n            </div>\n            <div class="soloStatsdiv">{{stats.br.stats.pc.squad.minutesPlayed}}</div>\n            <div class="iconDesc">Minutes played</div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/emulgator/Documents/iFornite/ionic_fornite/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_stats_stats__["a" /* StatsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the StatsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StatsProvider = (function () {
    function StatsProvider(http) {
        this.http = http;
        this.url = 'https://fortnite.y3n.co/v2/player/';
        this.apiKey = 'tlisV9TFbCqkwsYOnTfq';
        console.log('Hello StatsProvider Provider');
    }
    StatsProvider.prototype.getStats = function (nickname) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Key', this.apiKey);
        return this.http.get(this.url + nickname, { headers: headers });
    };
    StatsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], StatsProvider);
    return StatsProvider;
}());

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_stats_stats__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_stats_stats__["a" /* StatsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/emulgator/Documents/iFornite/ionic_fornite/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/emulgator/Documents/iFornite/ionic_fornite/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/emulgator/Documents/iFornite/ionic_fornite/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/emulgator/Documents/iFornite/ionic_fornite/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map