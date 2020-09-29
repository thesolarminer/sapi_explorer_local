webpackJsonp([4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader__ = __webpack_require__(856);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoaderComponentModule = /** @class */ (function () {
    function LoaderComponentModule() {
    }
    LoaderComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__loader__["a" /* LoaderComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__loader__["a" /* LoaderComponent */]]
        })
    ], LoaderComponentModule);
    return LoaderComponentModule;
}());

//# sourceMappingURL=loader.module.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__(857);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ErrorComponentModule = /** @class */ (function () {
    function ErrorComponentModule() {
    }
    ErrorComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__error__["a" /* ErrorComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__error__["a" /* ErrorComponent */]]
        })
    ], ErrorComponentModule);
    return ErrorComponentModule;
}());

//# sourceMappingURL=error.module.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultProvider = /** @class */ (function () {
    function DefaultProvider() {
        this.defaults = {
            '%CHAIN%': "ALL" || 'BTC',
            '%API_PREFIX%': "https://api.bitcore.io/api" || '/api',
            '%NETWORK%': "mainnet" || 'mainnet',
            '%NUM_BLOCKS%': process.env.NUM_BLOCKS || '15'
        };
    }
    DefaultProvider.prototype.getDefault = function (str) {
        return this.defaults[str] !== undefined ? this.defaults[str] : str;
    };
    DefaultProvider.prototype.setDefault = function (str, value) {
        this.defaults[str] = value;
    };
    DefaultProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DefaultProvider);
    return DefaultProvider;
}());

//# sourceMappingURL=default.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(301)))

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/* tslint:disable:no-console */


var Logger = /** @class */ (function () {
    function Logger() {
        this.levels = [
            { level: 'error', weight: 1, label: 'Error', def: false },
            { level: 'warn', weight: 2, label: 'Warning', def: false },
            { level: 'info', weight: 3, label: 'Info', def: true },
            { level: 'debug', weight: 4, label: 'Debug', def: false }
        ];
        // Create an array of level weights for performant filtering.
        this.weight = {};
        for (var _i = 0, _a = this.levels; _i < _a.length; _i++) {
            var i = _a[_i];
            if (this.levels[i]) {
                this.weight[this.levels[i].level] = this.levels[i].weight;
            }
        }
    }
    Logger.prototype.getMessage = function (message) {
        var isUndefined = __WEBPACK_IMPORTED_MODULE_1_lodash__["isUndefined"](message);
        var isNull = __WEBPACK_IMPORTED_MODULE_1_lodash__["isNull"](message);
        var isError = __WEBPACK_IMPORTED_MODULE_1_lodash__["isError"](message);
        var isObject = __WEBPACK_IMPORTED_MODULE_1_lodash__["isObject"](message);
        if (isUndefined) {
            return 'undefined';
        }
        else if (isNull) {
            return 'null';
        }
        else if (isError) {
            return message.message;
        }
        else if (isObject) {
            return JSON.stringify(message);
        }
        else {
            return message;
        }
    };
    Logger.prototype.error = function (_message) {
        var _optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _optionalParams[_i - 1] = arguments[_i];
        }
        var type = 'error';
        var args = this.processingArgs(arguments);
        this.log("[" + type + "] " + args);
    };
    Logger.prototype.debug = function (_message) {
        var _optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _optionalParams[_i - 1] = arguments[_i];
        }
        var type = 'debug';
        var args = this.processingArgs(arguments);
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            this.log("[" + type + "] " + args);
        }
    };
    Logger.prototype.info = function (_message) {
        var _optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _optionalParams[_i - 1] = arguments[_i];
        }
        var type = 'info';
        var args = this.processingArgs(arguments);
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            this.log("[" + type + "] " + args);
        }
    };
    Logger.prototype.warn = function (_message) {
        var _optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _optionalParams[_i - 1] = arguments[_i];
        }
        var type = 'warn';
        var args = this.processingArgs(arguments);
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            this.log("[" + type + "] " + args);
        }
    };
    Logger.prototype.getLevels = function () {
        return this.levels;
    };
    Logger.prototype.getWeight = function (weight) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](this.levels, function (l) {
            return l.weight === weight;
        });
    };
    Logger.prototype.getDefaultWeight = function () {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](this.levels, function (l) {
            return l.def;
        });
    };
    Logger.prototype.processingArgs = function (argsValues) {
        var _this = this;
        var args = Array.prototype.slice.call(argsValues);
        args = args.map(function (v) {
            try {
                v = _this.getMessage(v);
            }
            catch (e) {
                console.log('Error at log decorator:', e);
                v = 'Unknown message';
            }
            return v;
        });
        return args.join(' ');
    };
    Logger.prototype.log = function (msg) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.log.apply(console, __spreadArrays([msg], optionalParams));
    };
    Logger = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Logger);
    return Logger;
}());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestBlocksComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_moment__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_loader_loader_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_error_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__latest_blocks__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LatestBlocksComponentModule = /** @class */ (function () {
    function LatestBlocksComponentModule() {
    }
    LatestBlocksComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__latest_blocks__["a" /* LatestBlocksComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_1_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_3__components_loader_loader_module__["a" /* LoaderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__error_error_module__["a" /* ErrorComponentModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__latest_blocks__["a" /* LatestBlocksComponent */]]
        })
    ], LatestBlocksComponentModule);
    return LatestBlocksComponentModule;
}());

//# sourceMappingURL=latest-blocks.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_blocks__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transactions_transactions__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_fromPromise__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_fromPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddressProvider = /** @class */ (function () {
    function AddressProvider(httpClient, currency, blocks, txsProvider, apiProvider) {
        this.httpClient = httpClient;
        this.currency = currency;
        this.blocks = blocks;
        this.txsProvider = txsProvider;
        this.apiProvider = apiProvider;
        this.urlSapi = this.apiProvider.getRandomSapiUrl() + "address/balance/";
    }
    AddressProvider.prototype.getAddressBalance = function (addrStr) {
        return this.httpClient.get(this.urlSapi + addrStr);
    };
    AddressProvider.prototype.getAddressReward = function (addrStr) {
        return this.httpClient.get(this.apiProvider.getRandomSapiUrl() + "smartrewards/check/" + addrStr);
    };
    AddressProvider.prototype.getAddressActivity = function (addrStr) {
        var _this = this;
        return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_fromPromise__["fromPromise"])(this.txsProvider.getUnmappedTxByAddress(addrStr).then(function (data) {
            return _this.txsProvider.mapToTx(data);
        }));
    };
    AddressProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_4__blocks_blocks__["a" /* BlocksProvider */],
            __WEBPACK_IMPORTED_MODULE_5__transactions_transactions__["a" /* TxsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], AddressProvider);
    return AddressProvider;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 184:
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
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_random__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_random___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_random__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_default_default__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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





var CurrentEnv = "prod" || 'dev';
var EnvApiHosts = {
    prod: {
        default: 'https://api.bitcore.io/api',
        ETH: 'https://api-eth.bitcore.io/api'
    },
    dev: { default: '/api' }
};
var CurrentApiHosts = EnvApiHosts[CurrentEnv];
var ApiProvider = /** @class */ (function () {
    function ApiProvider(httpClient, defaults) {
        // this.getAvailableNetworks().subscribe(data => {
        //   const newNetworks = data
        //     .map(x => x.supported)
        //     .reduce((agg, arr) => [...agg].concat(arr), []);
        this.httpClient = httpClient;
        this.defaults = defaults;
        this.defaultNetwork = {
            chain: this.defaults.getDefault('%CHAIN%'),
            network: this.defaults.getDefault('%NETWORK%')
        };
        this.networkSettings = {
            availableNetworks: [this.defaultNetwork],
            selectedNetwork: this.defaultNetwork,
            chainNetworkLookup: {}
        };
        this.ratesAPI = {
            btc: 'https://bitpay.com/api/rates',
            bch: 'https://bitpay.com/api/rates/bch',
            eth: 'https://bitpay.com/api/rates/eth'
        };
        this.bwsUrl = {
            urlPrefix: 'https://bws.bitpay.com/bws/api/v1/fiatrates/'
        };
        //   const chainNetworkLookup = {};
        //   for (const hostConfig of data) {
        //     for (const chainNetwork of hostConfig.supported) {
        //       const key = `${chainNetwork.chain}:${chainNetwork.network}`;
        //       chainNetworkLookup[key] = hostConfig.host;
        //     }
        //   }
        //   for (const { chain, network } of newNetworks) {
        //     const found = this.networkSettings.availableNetworks.find(
        //       available =>
        //         available.chain === chain && available.network === network
        //     );
        //     if (!found) {
        //       this.networkSettings.availableNetworks.push({ chain, network });
        //     }
        //   }
        //   this.networkSettings = {
        //     availableNetworks: this.networkSettings.availableNetworks,
        //     selectedNetwork: this.networkSettings.selectedNetwork,
        //     chainNetworkLookup
        //   };
        // });
    }
    ApiProvider.prototype.getAvailableNetworks = function () {
        var _this = this;
        var hosts = CurrentApiHosts;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(Promise.all(Object.keys(hosts).map(function (chain) { return __awaiter(_this, void 0, void 0, function () {
            var host, supported;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        host = hosts[chain];
                        return [4 /*yield*/, this.httpClient
                                .get(host + '/status/enabled-chains')
                                .toPromise()];
                    case 1:
                        supported = _a.sent();
                        return [2 /*return*/, {
                                host: host,
                                supported: supported
                            }];
                }
            });
        }); })));
    };
    ApiProvider.prototype.getHostForChain = function (chain) {
        return CurrentApiHosts[chain] || CurrentApiHosts.default;
    };
    ApiProvider.prototype.getUrlPrefix = function (chain, network) {
        var defaultChain = chain || this.defaultNetwork.chain;
        var defaultNetwork = network || this.defaultNetwork.network;
        var key = defaultChain + ":" + defaultNetwork;
        var lookupHost = this.networkSettings.chainNetworkLookup[key];
        var prefix = lookupHost || this.getHostForChain(chain);
        return prefix;
    };
    ApiProvider.prototype.getRandomSapiUrl = function () {
        //TODO: Change this to get the list from
        //{{SAPI_URL}}/v1/smartnodes/filter
        //We can only do it after 1.3.4
        var sapis = [
            "http://64.44.52.40:8080/v1/",
            "http://167.86.103.167:8080/v1/",
            "http://90.145.247.78:8080/v1/",
            "http://90.145.247.54:8080/v1/",
            "http://62.171.171.66:8080/v1/",
            "http://195.201.12.93:8080/v1/",
            "http://167.86.79.4:8080/v1/",
            "http://135.181.85.180:8080/v1/",
            "http://135.181.85.177:8080/v1/",
            "http://135.181.85.186:8080/v1/",
            "http://135.181.85.188:8080/v1/",
            "http://135.181.85.176:8080/v1/",
            "http://135.181.85.183:8080/v1/",
            "http://135.181.85.184:8080/v1/",
            "http://135.181.85.187:8080/v1/",
            "http://135.181.85.182:8080/v1/",
            "http://135.181.85.185:8080/v1/",
            "http://195.201.22.100:8080/v1/",
            "http://195.201.22.122:8080/v1/",
            "http://195.201.22.110:8080/v1/",
            "http://195.201.22.103:8080/v1/",
            "http://195.201.22.112:8080/v1/",
            "http://195.201.22.113:8080/v1/",
            "http://195.201.22.117:8080/v1/",
            "http://195.201.22.101:8080/v1/"
        ];
        if (window.location.protocol === 'http:') {
            return sapis[__WEBPACK_IMPORTED_MODULE_2_random___default.a.int(0, sapis.length - 1)];
        }
        return "https://sapi.smartcash.cc/v1/";
    };
    ApiProvider.prototype.getUrl = function (params) {
        var chain = params.chain, network = params.network;
        chain = chain || this.networkSettings.selectedNetwork.chain;
        network = network || this.networkSettings.selectedNetwork.network;
        var prefix = this.getUrlPrefix(chain, network);
        var apiPrefix = prefix + "/" + chain + "/" + network;
        return apiPrefix;
    };
    ApiProvider.prototype.getConfig = function () {
        var config = {
            chain: this.networkSettings.selectedNetwork.chain,
            network: this.networkSettings.selectedNetwork.network
        };
        return config;
    };
    ApiProvider.prototype.changeNetwork = function (network) {
        var availableNetworks = this.networkSettings.availableNetworks;
        // Can't do the following because availableNetworks is loaded
        /*
         *const isValid = _.some(availableNetworks, network);
         *if (!isValid) {
         *  this.logger.error(
         *    'Invalid URL: missing or invalid COIN or NETWORK param'
         *  );
         *  return;
         *}
         */
        this.networkSettings = {
            availableNetworks: availableNetworks,
            selectedNetwork: network,
            chainNetworkLookup: this.networkSettings.chainNetworkLookup || {}
        };
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__providers_default_default__["a" /* DefaultProvider */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/address/address.module": [
		888,
		0
	],
	"../pages/block-detail/block-detail.module": [
		889,
		1
	],
	"../pages/blocks/blocks.module": [
		328
	],
	"../pages/broadcast-tx/broadcast-tx.module": [
		476
	],
	"../pages/home/home.module": [
		478
	],
	"../pages/search/search.module": [
		890,
		3
	],
	"../pages/transaction/transaction.module": [
		891,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 229;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrencyProvider = /** @class */ (function () {
    function CurrencyProvider(apiProvider) {
        this.apiProvider = apiProvider;
        this.factor = 1;
        this.explorers = [];
        this.currencySymbol = 'SMART';
    }
    CurrencyProvider.prototype.roundFloat = function (aFloat, decimalPlaces) {
        return (Math.round(aFloat * Math.pow(10, decimalPlaces)) /
            Math.pow(10, decimalPlaces));
    };
    CurrencyProvider.prototype.setCurrency = function (chainNetwork, currency) {
        if (!currency) {
            currency = chainNetwork.chain.toUpperCase();
        }
        if (currency !== 'USD') {
            var chain = chainNetwork.chain.toUpperCase();
            this.currencySymbol = currency.startsWith('m') ? 'm' + chain : chain;
        }
        else {
            this.currencySymbol = 'USD';
        }
    };
    CurrencyProvider.prototype.getCurrency = function () {
        return this.currencySymbol;
    };
    CurrencyProvider.prototype.getConvertedNumber = function (value) {
        value = value * 1e-8;
        if (value === 0.0) {
            return 0;
        }
        var response;
        response = this.roundFloat(value * this.factor, 2);
        // if (this.currencySymbol === 'USD') {
        //   response = this.roundFloat(value * this.factor, 2);
        // } else if (
        //   this.currencySymbol ===
        //   'm' + this.apiProvider.networkSettings.selectedNetwork.chain
        // ) {
        //   this.factor = 1000;
        //   response = this.roundFloat(value * this.factor, 5);
        // } else if (this.currencySymbol === 'bits') {
        //   this.factor = 1000000;
        //   response = this.roundFloat(value * this.factor, 2);
        // } else {
        //   this.factor = 1;
        //   response = this.roundFloat(value * this.factor, 8);
        // }
        return response;
    };
    /**
     * @deprecated use getConvertedNumber
     */
    CurrencyProvider.prototype.getConversion = function (value) {
        if (value === 0.0) {
            return '0 ' + this.currencySymbol; // fix value to show
        }
        var response;
        if (this.currencySymbol === 'USD') {
            response = this.roundFloat(value * this.factor, 2);
        }
        else if (this.currencySymbol ===
            'm' + this.apiProvider.networkSettings.selectedNetwork.chain) {
            this.factor = 1000;
            response = this.roundFloat(value * this.factor, 5);
        }
        else if (this.currencySymbol === 'bits') {
            this.factor = 1000000;
            response = this.roundFloat(value * this.factor, 2);
        }
        else {
            this.factor = 1;
            response = this.roundFloat(value * this.factor, 8);
        }
        return response + ' ' + this.currencySymbol;
    };
    CurrencyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* ApiProvider */]])
    ], CurrencyProvider);
    return CurrencyProvider;
}());

//# sourceMappingURL=currency.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenominationComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denomination__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DenominationComponentModule = /** @class */ (function () {
    function DenominationComponentModule() {
    }
    DenominationComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__denomination__["a" /* DenominationComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__denomination__["a" /* DenominationComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__denomination__["a" /* DenominationComponent */]]
        })
    ], DenominationComponentModule);
    return DenominationComponentModule;
}());

//# sourceMappingURL=denomination.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenominationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DenominationComponent = /** @class */ (function () {
    function DenominationComponent(viewCtrl, api, navParams) {
        this.viewCtrl = viewCtrl;
        this.api = api;
        this.navParams = navParams;
        this.units = [];
        this.showUnits = false;
    }
    DenominationComponent.prototype.ionViewDidEnter = function () {
        this.currencySymbol = this.navParams.data.currencySymbol;
        this.availableNetworks = this.api.networkSettings.availableNetworks;
        this.showUnits = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.some(this.availableNetworks, this.api.networkSettings.selectedNetwork)
            ? true
            : false;
        this.units = [
            'USD',
            this.api.networkSettings.selectedNetwork.chain,
            'm' + this.api.networkSettings.selectedNetwork.chain
        ];
    };
    DenominationComponent.prototype.changeUnit = function (unit) {
        this.currencySymbol = unit;
        this.viewCtrl.dismiss({
            chainNetwork: this.navParams.data.config,
            currencySymbol: this.currencySymbol
        });
    };
    DenominationComponent.prototype.changeExplorer = function (chainNetwork) {
        this.viewCtrl.dismiss({
            chainNetwork: chainNetwork,
            currencySymbol: this.currencySymbol
        });
    };
    DenominationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'denomination',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/components/denomination/denomination.html"*/'<ion-list no-lines>\n  <ion-row>\n    <ion-item-divider>\n      Blockchain\n    </ion-item-divider>\n\n    <ion-item (click)="changeExplorer(chainNetwork)" *ngFor="let chainNetwork of availableNetworks">\n      <ion-avatar item-start>\n        <img *ngIf="chainNetwork.network === \'mainnet\' && chainNetwork.chain !==\'ALL\'" src="assets/img/currency_logos/{{ chainNetwork.chain.toLowerCase() }}.svg" class="logo" />\n        <img *ngIf="chainNetwork.network === \'mainnet\' && chainNetwork.chain===\'ALL\'" src="assets/img/search.png" class="logo" />\n        <img *ngIf=" chainNetwork.network !==\'mainnet\' && chainNetwork.chain===\'BTC\'" src=" assets/img/btcicon-testnet.svg" class="logo" />\n        <img *ngIf="chainNetwork.network !== \'mainnet\' && chainNetwork.chain===\'BCH\'" src="assets/img/bchicon-testnet.svg" class="logo" />\n        <img [ngClass]="{\'secondary\': chainNetwork.network ===\'testnet\'}" *ngIf="chainNetwork.network !== \'mainnet\' && chainNetwork.chain===\'ETH\'" src="assets/img/currency_logos/eth.svg" class="logo" />\n      </ion-avatar>\n      <ion-label color="dark" *ngIf="chainNetwork.chain !== \'ALL\'">\n        {{ chainNetwork.chain }} <small class="pill"> {{ chainNetwork.network }}</small>\n      </ion-label>\n      <ion-label color="dark" *ngIf="chainNetwork.chain === \'ALL\'">\n        All Blockchains\n      </ion-label>\n    </ion-item>\n  </ion-row>\n</ion-list>\n\n<ion-list radio-group [(ngModel)]="currencySymbol" *ngIf="showUnits && api.networkSettings.selectedNetwork.chain !== \'ALL\'">\n  <ion-item-divider>\n    Units\n  </ion-item-divider>\n\n  <ion-item *ngFor="let unit of units">\n    <ion-label color="dark">{{ unit }}</ion-label>\n    <ion-radio value="{{ unit }}" [checked]="unit === currencySymbol" (click)="changeUnit(unit)">\n    </ion-radio>\n  </ion-item>\n</ion-list>'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/components/denomination/denomination.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DenominationComponent);
    return DenominationComponent;
}());

//# sourceMappingURL=denomination.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_api__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchProvider = /** @class */ (function () {
    function SearchProvider(apiProvider, httpClient) {
        this.apiProvider = apiProvider;
        this.httpClient = httpClient;
        this.urlSapi = this.apiProvider.getRandomSapiUrl() + "blockchain";
    }
    // public search(input: string, type: string): Observable<any> {
    //   if (chainNetwork.chain !== 'ALL') {
    //     this.apiURL = `${this.apiProvider.getUrl(chainNetwork)}`;
    //     switch (type) {
    //       case 'blockOrTx':
    //         return Observable.forkJoin(
    //           this.searchBlock(input).catch(err => Observable.of(err)),
    //           this.searchTx(input).catch(err => Observable.of(err))
    //         );
    //       case 'addr':
    //         return this.searchAddr(input);
    //     }
    //   } else {
    //     const searchArray: Array<Observable<any>> = [];
    //     this.apiProvider.networkSettings.availableNetworks.forEach(network => {
    //       if (network.chain !== 'ALL') {
    //         this.apiURL = `${this.apiProvider.getUrl(network)}`;
    //         searchArray.push(
    //           this.searchBlock(input).catch(err => Observable.of(err))
    //         );
    //         searchArray.push(
    //           this.searchTx(input).catch(err => Observable.of(err))
    //         );
    //         searchArray.push(
    //           this.searchAddr(input).catch(err => Observable.of(err))
    //         );
    //       }
    //     });
    //     return Observable.forkJoin(searchArray);
    //   }
    // }
    SearchProvider.prototype.search = function (input) {
        var searchArray = [];
        searchArray.push(this.searchBlock(input).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(err); }));
        searchArray.push(this.searchTx(input).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(err); }));
        searchArray.push(this.searchAddr(input).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(err); }));
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].forkJoin(searchArray);
    };
    SearchProvider.prototype.isInputValid = function (inputValue) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of({ isValid: true, type: 'all' });
    };
    SearchProvider.prototype.searchBlock = function (block) {
        var url = this.urlSapi + "/block/" + block;
        return this.httpClient.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return ({ block: res }); }));
    };
    SearchProvider.prototype.searchTx = function (txid) {
        var url = this.apiProvider.getRandomSapiUrl() + "transaction/check/" + txid;
        return this.httpClient.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return ({ tx: res }); }));
    };
    SearchProvider.prototype.searchAddr = function (addr) {
        var url = this.apiProvider.getRandomSapiUrl() + "address/balance/" + addr;
        return this.httpClient.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return ({ addr: res }); }));
    };
    SearchProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], SearchProvider);
    return SearchProvider;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksPageModule", function() { return BlocksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footer_footer_module__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_head_nav_head_nav_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_latest_blocks_latest_blocks_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loader_loader_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BlocksPageModule = /** @class */ (function () {
    function BlocksPageModule() {
    }
    BlocksPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__blocks__["a" /* BlocksPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__blocks__["a" /* BlocksPage */]),
                __WEBPACK_IMPORTED_MODULE_2__components_footer_footer_module__["a" /* FooterComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_head_nav_head_nav_module__["a" /* HeadNavComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_latest_blocks_latest_blocks_module__["a" /* LatestBlocksComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_loader_loader_module__["a" /* LoaderComponentModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__blocks__["a" /* BlocksPage */]]
        })
    ], BlocksPageModule);
    return BlocksPageModule;
}());

//# sourceMappingURL=blocks.module.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__currency_currency__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PriceProvider = /** @class */ (function () {
    function PriceProvider(currencyProvider, api, toastCtrl) {
        this.currencyProvider = currencyProvider;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.rates = {};
    }
    PriceProvider.prototype.setCurrency = function (currency) {
        var _this = this;
        if (!currency) {
            currency = this.currencyProvider.getCurrency();
        }
        if (currency === 'USD') {
            var ratesAPI = void 0;
            switch (this.api.getConfig().chain) {
                case 'BTC':
                    ratesAPI = this.api.ratesAPI.btc;
                    break;
                case 'BCH':
                    ratesAPI = this.api.ratesAPI.bch;
                    break;
                case 'ETH':
                    ratesAPI = this.api.ratesAPI.eth;
                    break;
            }
            this.api.httpClient.get(ratesAPI).subscribe(function (data) {
                var currencyParsed = data;
                __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](currencyParsed, function (o) {
                    _this.rates[o.code] = o.rate;
                });
                _this.currencyProvider.factor = _this.rates[currency];
                _this.currencyProvider.loading = false;
            }, function () {
                _this.currencyProvider.loading = false;
                _this.showErrorToast();
            });
        }
        else {
            this.currencyProvider.factor =
                currency === 'm' + this.api.networkSettings.selectedNetwork.chain
                    ? 1000
                    : 1;
        }
    };
    // Get historical rates for currency at ts timestamp
    PriceProvider.prototype.getHistoricalRate = function (currency, isoCode, days) {
        var _this = this;
        var dates = Array.apply(null, Array(days));
        var secondsInADay = 24 * 60 * 60;
        var today = Date.now();
        var observableBatch = [];
        // Get the X days in unix time
        dates.forEach(function (value, index) {
            this[index] = today - index * secondsInADay * 1000;
        }, dates);
        dates.reverse();
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](dates, function (date) {
            var url = _this.api.bwsUrl.urlPrefix +
                isoCode +
                '?coin=' +
                currency +
                '&' +
                'ts=' +
                date;
            observableBatch.push(_this.api.httpClient.get(url));
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(observableBatch);
    };
    PriceProvider.prototype.showErrorToast = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'This currency is not available at this time',
            duration: 3000,
            position: 'top'
        });
        toast.present();
        toast.onDidDismiss(function () {
            _this.currencyProvider.setCurrency();
        });
    };
    PriceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_4__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], PriceProvider);
    return PriceProvider;
}());

//# sourceMappingURL=price.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestBlocksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_blocks_blocks__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_default_default__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_redir_redir__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LatestBlocksComponent = /** @class */ (function () {
    function LatestBlocksComponent(currency, defaults, redirProvider, blocksProvider, ngZone) {
        this.currency = currency;
        this.defaults = defaults;
        this.redirProvider = redirProvider;
        this.blocksProvider = blocksProvider;
        this.ngZone = ngZone;
        this.showAllBlocksButton = false;
        this.isHomePage = false;
        this.loading = true;
        this.blocks = [];
        this.numBlocks = parseInt(defaults.getDefault('%NUM_BLOCKS%'), 10);
    }
    LatestBlocksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadBlocks();
        var seconds = 15;
        this.ngZone.runOutsideAngular(function () {
            _this.reloadInterval = setInterval(function () {
                _this.ngZone.run(function () {
                    _this.loadBlocks.call(_this);
                });
            }, 1000 * seconds);
        });
    };
    LatestBlocksComponent.prototype.loadBlocks = function () {
        var _this = this;
        this.subscriber = this.blocksProvider
            .getBlocks()
            .subscribe(function (response) {
            var blocks = response.map(function (block) {
                return block;
            });
            _this.blocks = blocks;
            _this.loading = false;
            if (_this.blocks[_this.blocks.length - 1].height < _this.numBlocks) {
                _this.isHomePage = false;
            }
        }, function (err) {
            _this.subscriber.unsubscribe();
            clearInterval(_this.reloadInterval);
            _this.errorMessage = err;
            _this.loading = false;
        });
    };
    LatestBlocksComponent.prototype.loadMoreBlocks = function (infiniteScroll) {
        var _this = this;
        clearInterval(this.reloadInterval);
        return this.blocksProvider
            .pageBlocks()
            .subscribe(function (response) {
            var blocks = response.map(function (block) {
                return block;
            });
            _this.blocks = _this.blocks.concat(blocks);
            _this.loading = false;
            // infiniteScroll.complete();
        }, function (err) {
            _this.errorMessage = err.message;
            _this.loading = false;
        });
    };
    LatestBlocksComponent.prototype.goToBlock = function (blockHash) {
        this.redirProvider.redir('block-detail', {
            blockHash: blockHash
        });
    };
    LatestBlocksComponent.prototype.goToBlocks = function () {
        this.redirProvider.redir('blocks', {
            chain: this.chainNetwork.chain,
            network: this.chainNetwork.network
        });
    };
    LatestBlocksComponent.prototype.reloadData = function () {
        this.subscriber.unsubscribe();
        this.blocks = [];
        this.ngOnInit();
    };
    LatestBlocksComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.reloadInterval);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], LatestBlocksComponent.prototype, "numBlocks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LatestBlocksComponent.prototype, "showAllBlocksButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LatestBlocksComponent.prototype, "isHomePage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LatestBlocksComponent.prototype, "showTimeAs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LatestBlocksComponent.prototype, "chainNetwork", void 0);
    LatestBlocksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'latest-blocks',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/components/latest-blocks/latest-blocks.html"*/'<error [message]="errorMessage" *ngIf="errorMessage"></error>\n<div *ngIf="!errorMessage">\n  <ion-grid class="grid--table blocks-container">\n\n    <ion-row>\n      <ion-col>\n        <h6>Height</h6>\n      </ion-col>\n      <ion-col *ngIf="showTimeAs === \'age\'">\n        <h6>Mined</h6>\n      </ion-col>\n      <ion-col *ngIf="showTimeAs === \'timestamp\'">\n        <h6>Timestamp</h6>\n      </ion-col>\n      <ion-col>\n        <h6>Transactions</h6>\n      </ion-col>\n      <ion-col>\n        <h6>Size</h6>\n      </ion-col>\n    </ion-row>\n\n    <loader *ngIf="loading" [type]="\'grid\'"></loader>\n\n    <div *ngIf="!loading" class="blocks-container__blocks">\n      <ion-row *ngFor="let block of blocks" (click)="goToBlock(block.hash)">\n        <ion-col>\n          <a (click)="goToBlock(block.hash)">{{ block.height }}</a>\n        </ion-col>\n        <ion-col *ngIf="showTimeAs === \'age\'">\n          {{ block.time | amFromUnix | amTimeAgo:true }}\n        </ion-col>\n        <ion-col *ngIf="showTimeAs === \'timestamp\'">\n          {{ block.time * 1000 | date:\'long\' }}\n        </ion-col>\n        <ion-col>\n          {{ block.tx.length }}\n        </ion-col>\n        <ion-col>\n          {{ block.size }}\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-row *ngIf="showAllBlocksButton" class="blocks-cta">\n        <ion-col text-center>\n          <button ion-button (click)="goToBlocks()" [disabled]="blocks.length == 0">Load More</button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="isHomePage">\n        <ion-infinite-scroll (ionInfinite)="loadMoreBlocks($event)">\n          <loader [type]="\'grid\'"></loader>\n        </ion-infinite-scroll>\n      </ion-row> -->\n    </div>\n  </ion-grid>\n</div>'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/components/latest-blocks/latest-blocks.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_default_default__["a" /* DefaultProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_redir_redir__["a" /* RedirProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_blocks_blocks__["a" /* BlocksProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], LatestBlocksComponent);
    return LatestBlocksComponent;
}());

//# sourceMappingURL=latest-blocks.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blocks_blocks__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_price_price__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlocksPage = /** @class */ (function () {
    function BlocksPage(navParams, apiProvider, blocksProvider, currencyProvider, priceProvider) {
        // const chain: string = navParams.get('chain');
        // const network: string = navParams.get('network');
        // this.chainNetwork = {
        //   chain,
        //   network
        // };
        // this.apiProvider.changeNetwork(this.chainNetwork);
        // this.currencyProvider.setCurrency(this.chainNetwork);
        // this.priceProvider.setCurrency();
        var _this = this;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.blocksProvider = blocksProvider;
        this.currencyProvider = currencyProvider;
        this.priceProvider = priceProvider;
        this.loading = true;
        this.blocksProvider.getBlocks().subscribe(function (blocks) {
            _this.blocks = blocks;
            _this.loading = false;
        }, function () {
            _this.loading = false;
        });
    }
    BlocksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-blocks',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/pages/blocks/blocks.html"*/'<head-nav [chainNetwork]="chainNetwork"></head-nav>\n<ion-content class="content-container">\n  <ion-grid class="page-content-grid">\n\n    <loader *ngIf="loading" [type]="\'title\'"></loader>\n\n    <div *ngIf="!loading" class="page-content">\n      <h2 class="content-container--heading">Blocks</h2>\n      <latest-blocks [numBlocks]="200" [showTimeAs]="\'timestamp\'" [isHomePage]="true" [chainNetwork]="chainNetwork"></latest-blocks>\n    </div>\n\n  </ion-grid>\n</ion-content>\n<footer [chainNetwork]="chainNetwork"></footer>'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/pages/blocks/blocks.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_blocks_blocks__["a" /* BlocksProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_price_price__["a" /* PriceProvider */]])
    ], BlocksPage);
    return BlocksPage;
}());

//# sourceMappingURL=blocks.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastTxPageModule", function() { return BroadcastTxPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footer_footer_module__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_head_nav_head_nav_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__broadcast_tx__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BroadcastTxPageModule = /** @class */ (function () {
    function BroadcastTxPageModule() {
    }
    BroadcastTxPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__broadcast_tx__["a" /* BroadcastTxPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__broadcast_tx__["a" /* BroadcastTxPage */]),
                __WEBPACK_IMPORTED_MODULE_2__components_footer_footer_module__["a" /* FooterComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_head_nav_head_nav_module__["a" /* HeadNavComponentModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__broadcast_tx__["a" /* BroadcastTxPage */]]
        })
    ], BroadcastTxPageModule);
    return BroadcastTxPageModule;
}());

//# sourceMappingURL=broadcast-tx.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BroadcastTxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_price_price__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BroadcastTxPage = /** @class */ (function () {
    function BroadcastTxPage(toastCtrl, formBuilder, navParams, httpClient, apiProvider, priceProvider, currencyProvider) {
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.apiProvider = apiProvider;
        this.priceProvider = priceProvider;
        this.currencyProvider = currencyProvider;
        var chain = navParams.get('chain');
        var network = navParams.get('network');
        this.chainNetwork = {
            chain: chain,
            network: network
        };
        this.apiProvider.changeNetwork(this.chainNetwork);
        this.currencyProvider.setCurrency(this.chainNetwork);
        this.priceProvider.setCurrency();
        this.title = 'Broadcast Transaction';
        this.txForm = formBuilder.group({
            rawData: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[0-9A-Fa-f]+$/)]
        });
    }
    BroadcastTxPage.prototype.send = function () {
        var _this = this;
        var postData = {
            rawtx: this.transaction
        };
        this.httpClient
            .post(this.apiProvider.getUrl(this.chainNetwork) + '/tx/send', postData)
            .subscribe(function (response) {
            _this.presentToast(true, response);
        }, function (err) {
            _this.presentToast(false, err);
        });
    };
    BroadcastTxPage.prototype.presentToast = function (success, response) {
        var message = success
            ? 'Transaction successfully broadcast. Trasaction id: ' + response.txid
            : 'An error occurred: ' + response;
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            position: 'bottom',
            showCloseButton: true,
            dismissOnPageChange: true
        });
        this.toast.present();
    };
    BroadcastTxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-broadcast-tx',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/pages/broadcast-tx/broadcast-tx.html"*/'<head-nav [chainNetwork]="chainNetwork"></head-nav>\n<ion-content>\n  <ion-grid fixed>\n    <div class="page-content">\n      <h1>Broadcast Transaction</h1>\n      <form [formGroup]="txForm">\n        <ion-list>\n          <ion-item>\n            <p>This form can be used to broadcast a raw transaction in hex format over the Bitcoin network.</p>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Raw transaction data</ion-label>\n            <ion-input type="text" [(ngModel)]="transaction" formControlName="rawData"></ion-input>\n          </ion-item>\n\n          <ion-item *ngIf="!txForm.controls.rawData.valid">\n            <p>Raw transaction data must be a valid hexadecimal string.</p>\n          </ion-item>\n\n          <ion-item>\n            <button ion-button outline (click)="send()" [disabled]="!txForm.touched || !txForm.valid">Send\n              transaction</button>\n          </ion-item>\n        </ion-list>\n      </form>\n    </div>\n  </ion-grid>\n</ion-content>\n<footer [chainNetwork]="chainNetwork"></footer>'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/pages/broadcast-tx/broadcast-tx.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_price_price__["a" /* PriceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_currency_currency__["a" /* CurrencyProvider */]])
    ], BroadcastTxPage);
    return BroadcastTxPage;
}());

//# sourceMappingURL=broadcast-tx.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_error_error_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_module__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_head_nav_head_nav_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_latest_blocks_latest_blocks_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_loader_loader_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_rewards_rewards_module__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_8__home__["a" /* HomePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_5__components_latest_blocks_latest_blocks_module__["a" /* LatestBlocksComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_module__["a" /* FooterComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_head_nav_head_nav_module__["a" /* HeadNavComponentModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_loader_loader_module__["a" /* LoaderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_error_error_module__["a" /* ErrorComponentModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_rewards_rewards_module__["a" /* RewardComponentModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_8__home__["a" /* HomePage */]]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rewards__ = __webpack_require__(863);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RewardComponentModule = /** @class */ (function () {
    function RewardComponentModule() {
    }
    RewardComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__rewards__["a" /* RewardsComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__rewards__["a" /* RewardsComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], RewardComponentModule);
    return RewardComponentModule;
}());

//# sourceMappingURL=rewards.module.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_from__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_from__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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



var RewardsProvider = /** @class */ (function () {
    function RewardsProvider(httpClient) {
        this.httpClient = httpClient;
        //TODO: Change this when all SAPIS have 1.3.4
        this.urlSmartRewards = "https://sapi.smartcash.cc/v1/smartrewards/roi";
        this.urlSmartNodes = "https://sapi.smartcash.cc/v1/smartnodes/roi";
    }
    RewardsProvider.prototype.getSmartRewards = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_from__["from"])(this.getSmartRewardsDetails());
    };
    RewardsProvider.prototype.getSmartRewardsDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(this.urlSmartRewards).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RewardsProvider.prototype.getSmartNodes = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_from__["from"])(this.getSmartNodesInfos());
    };
    RewardsProvider.prototype.getSmartNodesInfos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(this.urlSmartNodes).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RewardsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], RewardsProvider);
    return RewardsProvider;
}());

//# sourceMappingURL=rewards.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_latest_blocks_latest_blocks__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_price_price__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(nav, navParams, apiProvider, priceProvider, events, currencyProvider) {
        this.nav = nav;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.priceProvider = priceProvider;
        this.events = events;
        this.currencyProvider = currencyProvider;
        // this.nav.viewWillEnter.subscribe(view => {
        //   if (view.data.chain === 'ALL') {
        //     this.load();
        //   }
        // });
        // this.load();
    }
    HomePage.prototype.load = function () {
        // const chain: string =
        //   this.navParams.get('chain') || this.apiProvider.getConfig().chain;
        // const network: string =
        //   this.navParams.get('network') || this.apiProvider.getConfig().network;
        // this.chainNetwork = {
        //   chain,
        //   network
        // };
        // if (this.chainNetwork.chain === 'ALL') {
        //   this.apiProvider.getAvailableNetworks().subscribe(data => {
        //     const newNetworks = data
        //       .map(x => x.supported)
        //       .reduce((agg, arr) => [...agg].concat(arr), []);
        //     this.availableNetworks = _.filter(newNetworks, o => o.chain !== 'ALL');
        //   });
        // }
        // this.priceProvider.setCurrency();
        // this.apiProvider.changeNetwork(this.chainNetwork);
        // this.currencyProvider.setCurrency(this.chainNetwork);
    };
    HomePage.prototype.openPage = function (page) {
        // this.nav.push(page, {
        //   chain: this.chain,
        //   network: this.network
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('latestBlocks'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__components_latest_blocks_latest_blocks__["a" /* LatestBlocksComponent */])
    ], HomePage.prototype, "latestBlocks", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/pages/home/home.html"*/'<head-nav></head-nav>\n\n<ion-content class="content-container">\n    <!-- <div *ngIf="chainNetwork.chain === \'ALL\'"> -->        \n        <ion-grid class="page-content-grid">          \n            <rewards></rewards>\n\n            <h2 class="headerTitleBlock">Latest Blocks</h2>            \n            <ion-row>\n                <ion-col col-md-12 col-12 class="page-content">                    \n                    <latest-blocks [showTimeAs]="\'age\'" [showAllBlocksButton]="true" [numBlocks]="\'5\'" #latestBlocks>\n                    </latest-blocks>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    <!-- </div> -->\n\n    <!-- <div *ngIf="chainNetwork.chain !== \'ALL\'">\n        <ion-grid class="page-content-grid">\n            <ion-row>\n                <ion-col col-12 class="page-content">\n                    <h2 class="content-container--heading">Latest Blocks</h2>\n                    <latest-blocks [showTimeAs]="\'age\'" [showAllBlocksButton]="true" [chainNetwork]="chainNetwork" #latestBlocks>\n                    </latest-blocks>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div> -->\n</ion-content>\n<footer></footer>'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_price_price__["a" /* PriceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__["a" /* CurrencyProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_from__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_from__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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





// export interface AppUtxoCoinBlock extends AppBlock {
//     difficulty: number;
//     merkleroot: string;
//     bits: string;
//     version: number;
// }
var BlocksProvider = /** @class */ (function () {
    function BlocksProvider(httpClient, currency, apiProvider) {
        this.httpClient = httpClient;
        this.currency = currency;
        this.apiProvider = apiProvider;
        this.urlSapi = this.apiProvider.getRandomSapiUrl() + "blockchain";
        this.urlExplorer = "https://explorer.smartcash.cc/api/blocks";
    }
    BlocksProvider.prototype.getBlocks = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_from__["from"])(this.getAllBlocks());
    };
    BlocksProvider.prototype.getAllBlocks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(this.urlSapi + "/blocks/latest/").toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BlocksProvider.prototype.pageBlocks = function () {
        return this.httpClient.get(this.urlExplorer);
    };
    BlocksProvider.prototype.getBlock = function (hash) {
        var url = this.urlSapi + "/block/" + hash;
        return this.httpClient.get(url);
    };
    BlocksProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], BlocksProvider);
    return BlocksProvider;
}());

//# sourceMappingURL=blocks.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_address_address__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_price_price__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_transactions_transactions__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddressPage = /** @class */ (function () {
    function AddressPage(navParams, currencyProvider, txProvider, apiProvider, priceProvider, addrProvider, events) {
        this.navParams = navParams;
        this.currencyProvider = currencyProvider;
        this.txProvider = txProvider;
        this.apiProvider = apiProvider;
        this.priceProvider = priceProvider;
        this.addrProvider = addrProvider;
        this.events = events;
        this.loading = true;
        this.address = {};
        this.reward = {};
        this.nroTransactions = 0;
        this.addrStr = navParams.get('addrStr');
        this.priceProvider.setCurrency();
    }
    AddressPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.events.subscribe('CoinList', function (d) {
            _this.nroTransactions = d.length;
        });
        this.addrProvider
            .getAddressBalance(this.addrStr)
            .subscribe(function (data) {
            _this.address = {
                balance: data.balance || 0,
                sent: data.sent || 0,
                received: data.received || 0,
                confirmed: data.confirmed || 0,
                unconfirmed: data.unconfirmed,
                addrStr: _this.addrStr
            };
            _this.loading = false;
        }, function (err) {
            _this.errorMessage = err;
            _this.loading = false;
        });
        this.addrProvider
            .getAddressReward(this.addrStr)
            .subscribe(function (data) {
            _this.reward = {
                balance: data.balance || 0,
                balance_eligible: data.balance_eligible || 0,
                is_smartnode: data.is_smartnode || 0,
                activated: data.activated,
                eligible: data.eligible,
                address: data.address
            };
            _this.loading = false;
        }, function (err) {
            // this.errorMessage = JSON.parse(err).message;                    
            _this.loading = false;
        });
    };
    AddressPage.prototype.getConvertedNumber = function (n) {
        return this.currencyProvider.getConvertedNumber(n);
    };
    AddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-address',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/pages/address/address.html"*/'<head-nav></head-nav>\n<ion-content>\n    <ion-grid fixed>\n        <div class="page-content">\n            <loader *ngIf="loading" [type]="\'title\'"></loader>\n\n\n            <div *ngIf="!loading">\n\n                <h1 class="content-container--heading">Address <small>{{ address.balance }}\n                        {{ currencyProvider.currencySymbol }}</small>\n                </h1>\n                <p class="ellipsis">{{ address.addrStr }}\n                    <button [copyToClipboard]="address.addrStr">\n                        <ion-icon md="md-copy"></ion-icon>\n                    </button>\n                </p>\n\n                <h2>Summary</h2>\n                <ion-grid>\n                    <ion-row align-items-start justify-content-center>\n                        <ion-col>\n                            <ion-list class="list--summary">\n                                <ion-item>\n                                    Total Received\n                                    <ion-note item-end>\n                                        {{ address.received }} {{ currencyProvider.currencySymbol }}\n                                    </ion-note>\n                                </ion-item>\n\n                                <ion-item>\n                                    Total Sent\n                                    <ion-note item-end>\n                                        {{ address.sent }} {{ currencyProvider.currencySymbol }}\n                                    </ion-note>\n                                </ion-item>\n\n                                <ion-item>\n                                    Final Balance\n                                    <ion-note item-end>\n                                        {{ address.balance }} {{ currencyProvider.currencySymbol }}\n                                    </ion-note>\n                                </ion-item>\n\n                                <!-- <ion-item *ngIf="address.unconfirmed > 0">\n                  Unconfirmed Balance\n                  <ion-note item-end>\n                    {{ getConvertedNumber(address.unconfirmed) | number:\'1.0-8\' }} {{ currencyProvider.currencySymbol }}\n                  </ion-note>\n                </ion-item> -->\n\n                                <!-- <ion-item>\n                  Nro. Transactions\n                  <ion-note item-end>\n                    {{ nroTransactions || 0 }}\n                  </ion-note>\n                </ion-item> -->\n\n                                <ion-item>\n                                    Is active for rewards\n                                    <ion-note item-end>\n                                        {{ reward.activated }}\n                                    </ion-note>\n                                </ion-item>\n                                <ion-item>\n                                    Balance eligible for rewards\n                                    <ion-note item-end>\n                                        {{ reward.balance_eligible || 0 }}\n                                    </ion-note>\n                                </ion-item>\n                            </ion-list>\n                        </ion-col>\n                        <ion-col col-auto text-center>\n                            <qr-code [value]="address.addrStr" [size]="160"></qr-code>\n                            <br />\n                            <img *ngIf="reward.activated && reward.balance_eligible>1000 && reward.balance_eligible<1000000"\n                                src="https://contattafiles.s3.us-west-1.amazonaws.com/tnt19836/2185nbLSm5JHuAj/457861.png" />\n                            <img *ngIf="reward.activated && reward.balance_eligible>=1000000"\n                                src="https://contattafiles.s3.us-west-1.amazonaws.com/tnt19836/lCyEE1RhD8AMjfV/4578621.png" />\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n\n                <error class="error-message" message="{{errorMessage}}" *ngIf="errorMessage"></error>\n                <div class="error-warning" *ngIf="errorMessage">\n                    <ul>\n                        <li>1) If you are using Coinomi. Double check if it is not a new address.</li>\n                        <li>2) Coinomi creates 1 NEW address after each transaction</li>\n                        <li>3) That is not your REWARDs address!</li>\n                        <li>4) Go to receive tab and click on Previous addresses</li>\n                        <li>5) Find the right address</li>\n                    </ul>\n\n                </div>\n\n                <h1 *ngIf="!errorMessage">Transactions</h1>\n                <transaction-list [queryType]="\'address\'" [queryValue]="addrStr" *ngIf="!errorMessage">\n                </transaction-list>\n            </div>\n        </div>\n    </ion-grid>\n</ion-content>\n<footer></footer>\n'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/pages/address/address.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_transactions_transactions__["a" /* TxsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_price_price__["a" /* PriceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_address_address__["a" /* AddressProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blocks_blocks__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_price_price__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_redir_redir__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_transactions_transactions__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BlockDetailPage = /** @class */ (function () {
    function BlockDetailPage(navParams, currencyProvider, redirProvider, txProvider, blocksProvider, apiProvider, priceProvider) {
        this.navParams = navParams;
        this.currencyProvider = currencyProvider;
        this.redirProvider = redirProvider;
        this.txProvider = txProvider;
        this.blocksProvider = blocksProvider;
        this.apiProvider = apiProvider;
        this.priceProvider = priceProvider;
        this.loading = true;
        this.block = {
            tx: []
        };
        this.blockHash = navParams.get('blockHash');
        // const chain: string = navParams.get('chain');
        // const network: string = navParams.get('network');
        // this.chainNetwork = {
        //   chain,
        //   network
        // };
        // this.apiProvider.changeNetwork(this.chainNetwork);
        // this.currencyProvider.setCurrency(this.chainNetwork);
        // this.priceProvider.setCurrency();
    }
    BlockDetailPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.blocksProvider.getBlock(this.blockHash).subscribe(function (response) {
            var block;
            block = response;
            _this.block = block;
            //this.txProvider.getConfirmations(this.block.height).subscribe(confirmations => (this.confirmations = confirmations));
            _this.loading = false;
        }, function (err) {
            _this.errorMessage = err;
            _this.loading = false;
        });
    };
    BlockDetailPage.prototype.goToPreviousBlock = function () {
        this.redirProvider.redir('block-detail', {
            blockHash: this.block.previousblockhash,
            chain: this.chainNetwork.chain,
            network: this.chainNetwork.network
        });
    };
    BlockDetailPage.prototype.goToNextBlock = function () {
        this.redirProvider.redir('block-detail', {
            blockHash: this.block.nextblockhash,
            chain: this.chainNetwork.chain,
            network: this.chainNetwork.network
        });
    };
    BlockDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-block-detail',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/pages/block-detail/block-detail.html"*/'<head-nav [chainNetwork]="chainNetwork"></head-nav>\n<ion-content>\n  <ion-grid fixed>\n\n    <div class="page-content">\n\n      <loader *ngIf="loading" [type]="\'title\'"></loader>\n\n      <error [message]="errorMessage" *ngIf="!loading && errorMessage"></error>\n\n      <div *ngIf="!loading && !errorMessage">\n\n        <h1 class="content-container--heading">Block #{{ block.height }}</h1>\n        <p class="item-hash">\n          <b>Block Hash</b> {{ block.hash }} <button [copyToClipboard]="block.hash">\n            <ion-icon md="md-copy"></ion-icon>\n          </button>\n        </p>\n\n        <h2>Summary</h2>\n\n        <ion-list *ngIf="!loading" class="list--summary">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-12 col-md class="allow-truncated-text">\n                <block-summary [block]="block"></block-summary>\n                <!-- <block-summary-eth *ngIf="chainNetwork.chain === \'ETH\'" [block]="block" [chainNetwork]="chainNetwork"></block-summary-eth> -->\n                <ion-item>\n                  Number of Transactions\n                  <ion-note item-end>\n                    {{ block.tx.length }}\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Height\n                  <ion-note item-end>\n                    {{ block.height }}\n                    <span [hidden]="!block.isMainChain">(Mainchain)</span>\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Block Reward\n                  <ion-note item-end>\n                    <!-- {{ currencyProvider.getConvertedNumber(block.reward, chainNetwork.chain) | number }} -->\n                    {{ currencyProvider.currencySymbol }}\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Timestamp\n                  <ion-note item-end>\n                    {{ block.time * 1000 | date:\'long\' }}\n                  </ion-note>\n                </ion-item>\n          <!-- TODO      <ion-item>\n                  Mined by\n                  <ion-note item-end *ngIf="block.poolInfo">\n                    <a href="{{ block.poolInfo.url }}">{{ block.poolInfo.poolName }}</a>\n                  </ion-note>\n                </ion-item> -->\n              </ion-col>\n              <ion-col col-12 col-md class="allow-truncated-text">\n                <ion-item>\n                  Difficulty\n                  <ion-note item-end>\n                    {{ block.difficulty }}\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Size (bytes)\n                  <ion-note item-end>\n                    {{ block.size }}\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Nonce\n                  <ion-note item-end>\n                    {{ block.nonce }}\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Previous Block\n                  <ion-note item-end>\n                    <a (click)="goToPreviousBlock()"\n                      [ngClass]="{\'disabled-link\': block.height - 1 === 0 }">{{ block.height - 1 }}</a>\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Next Block\n                  <ion-note item-end>\n                    <a (click)="goToNextBlock()"\n                      [ngClass]="{\'disabled-link\': !block.nextblockhash }">{{ block.height + 1 }}</a>\n                  </ion-note>\n                </ion-item>\n                <ion-item>\n                  Confirmations\n                  <ion-note item-end>\n                    {{ confirmations }}\n                  </ion-note>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-list>\n\n        <h2>Transactions</h2>\n        <transaction-list [blocktime]="block.time" [queryType]="\'blockHash\'" [queryValue]="block.hash">\n        </transaction-list>\n      </div>\n\n    </div>\n  </ion-grid>\n</ion-content>\n<footer [chainNetwork]="chainNetwork"></footer>\n'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/pages/block-detail/block-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_redir_redir__["a" /* RedirProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_transactions_transactions__["a" /* TxsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_blocks_blocks__["a" /* BlocksProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_price_price__["a" /* PriceProvider */]])
    ], BlockDetailPage);
    return BlockDetailPage;
}());

//# sourceMappingURL=block-detail.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_price_price__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_redir_redir__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_transactions_transactions__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TransactionPage = /** @class */ (function () {
    function TransactionPage(navParams, currencyProvider, redirProvider, apiProvider, txProvider, priceProvider) {
        this.navParams = navParams;
        this.currencyProvider = currencyProvider;
        this.redirProvider = redirProvider;
        this.apiProvider = apiProvider;
        this.txProvider = txProvider;
        this.priceProvider = priceProvider;
        this.loading = true;
        this.tx = {};
        this.txId = navParams.get('txId');
        this.vout = navParams.get('vout');
        this.fromVout = navParams.get('fromVout') || undefined;
        // this.apiProvider.changeNetwork(this.chainNetwork);
        // this.currencyProvider.setCurrency(this.chainNetwork);
        // this.priceProvider.setCurrency();
    }
    TransactionPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.txProvider.getTx(this.txId).subscribe(function (response) {
            var tx;
            tx = response;
            _this.tx = tx;
            _this.loading = false;
            // this.txProvider
            //   .getConfirmations(this.tx.blockheight)
            //   .subscribe(confirmations => {
            //     if (confirmations === -3) {
            //       this.errorMessage =
            //         'This transaction is invalid and will never confirm, because some of its inputs are already spent.';
            //     }
            //     this.confirmations = confirmations;
            //   });
            // Be aware that the tx component is loading data into the tx object
        }, function (err) {
            _this.errorMessage = err;
            _this.loading = false;
        });
    };
    TransactionPage.prototype.goToBlock = function (blockHash) {
        this.redirProvider.redir('block-detail', {
            blockHash: blockHash
        });
    };
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transaction',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/pages/transaction/transaction.html"*/'<head-nav></head-nav>\n<ion-content>\n  <ion-grid fixed>\n\n    <div class="page-content">\n\n      <loader *ngIf="loading" [type]="\'title\'"></loader>\n\n      <error [message]="errorMessage" *ngIf="!loading && errorMessage && confirmations !== -3 "></error>\n\n      <div *ngIf="(!loading && !errorMessage) || confirmations === -3">\n        <h1 ion-text class="content-container--heading">\n          Transaction\n          <ion-note *ngIf="vout !== undefined">\n            <span class="tx-note" ion-text *ngIf="fromVout">Output {{ vout }}</span>\n            <span class="tx-note" ion-text *ngIf="!fromVout">Input {{ vout }}</span>\n          </ion-note>\n        </h1>\n\n        <p class="item-hash">\n          <b>Transaction Hash</b> {{ tx.txid }} <button [copyToClipboard]="tx.txid">\n            <ion-icon md="md-copy"></ion-icon>\n          </button>\n        </p>\n\n        <h2>Summary</h2>\n\n        <error [message]="errorMessage" *ngIf="!loading && errorMessage"></error>\n\n        <ion-list class="list--summary">\n\n          <transaction-summary [tx]="tx"></transaction-summary>\n          <!-- <transaction-summary-eth *ngIf="chainNetwork.chain === \'ETH\'" [tx]="tx" [chainNetwork]="chainNetwork"></transaction-summary-eth> -->\n\n          <ion-item>\n            Received Time\n            <ion-note item-end>\n              {{ tx.blockTime * 1000 | date:\'long\' }}\n            </ion-note>\n          </ion-item>\n          <ion-item>\n            Included in Block\n            <ion-note item-end>\n              <a (click)="goToBlock(tx.blockHash)">{{ tx.blockHash }}</a>\n            </ion-note>\n            <ion-note *ngIf="tx.confirmations === -3" item-end>\n              Invalid\n            </ion-note>\n            <ion-note *ngIf="tx.confirmations === -1" item-end>\n              Unconfirmed\n            </ion-note>\n          </ion-item>\n        </ion-list>\n\n        <h2>Details</h2>\n\n        <transaction-details [tx]="tx" [showCoins]="true"></transaction-details>\n        <!-- <transaction-details-eth *ngIf="chainNetwork.chain === \'ETH\'" [tx]="tx" [showCoins]="true" [chainNetwork]="chainNetwork"></transaction-details-eth> -->\n      </div>\n\n    </div>\n\n  </ion-grid>\n</ion-content>\n<footer></footer>\n'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/pages/transaction/transaction.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_redir_redir__["a" /* RedirProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_transactions_transactions__["a" /* TxsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_price_price__["a" /* PriceProvider */]])
    ], TransactionPage);
    return TransactionPage;
}());

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_address_address__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_blocks_blocks__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_default_default__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_logger_logger__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_price_price__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_redir_redir__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_rewards_rewards__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_search_search__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_transactions_transactions__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(887);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* InsightApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__pages__["c" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* InsightApp */], {
                    mode: 'md',
                    animate: false
                }, {
                    links: [
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'address', segment: 'address/:addrStr', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/block-detail/block-detail.module#BlockDetailPageModule', name: 'block-detail', segment: 'block/:blockHash', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/blocks/blocks.module#BlocksPageModule', name: 'blocks', segment: 'blocks', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/broadcast-tx/broadcast-tx.module#BroadcastTxPageModule', name: 'broadcast-tx', segment: 'broadcast-tx', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'search', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction/transaction.module#TransactionPageModule', name: 'transaction', segment: 'tx/:txId', priority: 'low', defaultHistory: ['home'] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* InsightApp */], __WEBPACK_IMPORTED_MODULE_4__pages__["b" /* HomePage */], __WEBPACK_IMPORTED_MODULE_4__pages__["a" /* BlocksPage */]],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__["a" /* HttpErrorInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_currency_currency__["a" /* CurrencyProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_blocks_blocks__["a" /* BlocksProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_transactions_transactions__["a" /* TxsProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_default_default__["a" /* DefaultProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_price_price__["a" /* PriceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_search_search__["a" /* SearchProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_redir_redir__["a" /* RedirProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_logger_logger__["a" /* Logger */],
                __WEBPACK_IMPORTED_MODULE_5__providers_address_address__["a" /* AddressProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_rewards_rewards__["a" /* RewardsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TxsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_blocks__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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






var TxsProvider = /** @class */ (function () {
    function TxsProvider(httpClient, currency, blocksProvider, apiProvider) {
        this.httpClient = httpClient;
        this.currency = currency;
        this.blocksProvider = blocksProvider;
        this.apiProvider = apiProvider;
    }
    TxsProvider.prototype.getFee = function (tx) {
        return 0;
        var sumSatoshis = function (arr) {
            return arr.reduce(function (prev, cur) { return prev + cur.value; }, 0);
        };
        var inputs = sumSatoshis(tx.vin);
        var outputs = sumSatoshis(tx.vout);
        var fee = tx.isCoinBase ? 0 : inputs - outputs;
        return fee;
    };
    TxsProvider.prototype.toUtxoCoinsAppTx = function (tx) {
        return __assign(__assign({}, this.toAppTx(tx)), { vin: [], vout: [], version: tx.version });
    };
    TxsProvider.prototype.toAppTx = function (tx) {
        return {
            txid: tx.txid,
            fee: null,
            blockheight: tx.blockHeight,
            confirmations: tx.confirmations,
            blockhash: tx.blockHash,
            blocktime: new Date(tx.blockTime).getTime() / 1000,
            time: new Date(tx.blockTime).getTime() / 1000,
            isCoinBase: tx.coinbase,
            size: tx.size,
            locktime: tx.locktime,
            valueOut: tx.value
        };
    };
    TxsProvider.prototype.toAppCoin = function (coin) {
        return {
            txid: coin.txid,
            mintTxid: coin.mintTxid,
            mintHeight: coin.mintHeight,
            spentHeight: coin.spentHeight,
            valueOut: coin.value,
            value: coin.value,
            spentTxid: coin.spentTxid
        };
    };
    TxsProvider.prototype.getTransactionsPerBlock = function (blockHash) {
        return __awaiter(this, void 0, void 0, function () {
            var url, block, txs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiProvider.getRandomSapiUrl() + "blockchain/block/" + blockHash;
                        txs = [];
                        return [4 /*yield*/, this.httpClient.get(url).toPromise().then(function (data) { return block = data; })];
                    case 1:
                        _a.sent();
                        block.tx.forEach(function (item) {
                            _this.getMappedTxs(item).then(function (data) { return txs.push(data.tx); });
                        });
                        return [2 /*return*/, txs];
                }
            });
        });
    };
    TxsProvider.prototype.getTransactionsPerAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var url, txs, addressData;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiProvider.getRandomSapiUrl() + "address/transactions/" + address;
                        txs = [];
                        return [4 /*yield*/, this.httpClient.post(url, {
                                "pageNumber": 1,
                                "pageSize": 10
                            }).toPromise()];
                    case 1:
                        addressData = _a.sent();
                        addressData.data.forEach(function (item) {
                            _this.getMappedTxs(item).then(function (data) { return txs.push(data.tx); });
                        });
                        return [2 /*return*/, txs];
                }
            });
        });
    };
    TxsProvider.prototype.getTxs = function (chainNetwork, args) {
        var queryString = '';
        if (args.blockHash) {
            queryString += "?blockHash=" + args.blockHash;
        }
        //return from(this.getTransactionsPerBlock(args.blockHash));
        var url = this.apiProvider.getUrl(chainNetwork) + "/tx/" + queryString;
        return this.httpClient.get(url);
    };
    TxsProvider.prototype.getTx = function (hash) {
        return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__["from"])(this.getMappedTx(hash).then(function (data) { return data.tx; }));
    };
    TxsProvider.prototype.getDailyTransactionHistory = function (chainNetwork) {
        var url = this.apiProvider.getUrl(chainNetwork) + "/stats/daily-transactions";
        return this.httpClient.get(url);
    };
    TxsProvider.prototype.getCoins = function (txId, chainNetwork) {
        return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__["from"])(this.getMappedTx(txId).then(function (data) { return data.coin; }));
    };
    TxsProvider.prototype.getConfirmations = function (blockheight) {
        // return this.blocksProvider.getCurrentHeight(chainNetwork).map(data => {
        //     return blockheight > 0 ? data.height - blockheight + 1 : blockheight;
        // });
        return null;
    };
    TxsProvider.prototype.getMappedTxs = function (unmappedTx) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //const unmappedTx = await this.getUnmappedTx(txId);
                return [2 /*return*/, { tx: this.mapToTx(unmappedTx), coin: this.mapToCoin(unmappedTx) }];
            });
        });
    };
    TxsProvider.prototype.getMappedTx = function (txId) {
        return __awaiter(this, void 0, void 0, function () {
            var unmappedTx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUnmappedTx(txId)];
                    case 1:
                        unmappedTx = _a.sent();
                        return [2 /*return*/, { tx: this.mapToTx(unmappedTx), coin: this.mapToCoin(unmappedTx) }];
                }
            });
        });
    };
    TxsProvider.prototype.getUnmappedTxByAddress = function (addrStr) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = this.apiProvider.getRandomSapiUrl() + "address/transactions/" + addrStr;
                return [2 /*return*/, this.httpClient.get(url).toPromise()];
            });
        });
    };
    TxsProvider.prototype.getUnmappedTx = function (hash) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = this.apiProvider.getRandomSapiUrl() + "transaction/check/" + hash;
                return [2 /*return*/, this.httpClient.get(url).toPromise()];
            });
        });
    };
    TxsProvider.prototype.mapToCoin = function (tx) {
        return {
            outputs: tx.vout.map(function (o) {
                var output = {
                    txid: tx.txid,
                    coinbase: tx.vin === undefined || tx.vin.length === 0,
                    vout: o.n,
                    address: (o.scriptPubKey === undefined || o.scriptPubKey.addresses === undefined) ? "" : o.scriptPubKey.addresses.find(function (x) { return x !== undefined; }),
                    script: (o.scriptPubKey === undefined) ? undefined : {
                        asm: o.scriptPubKey.asm,
                        type: o.scriptPubKey.type
                    },
                    value: o.value,
                    sequenceNumber: undefined,
                    mintHeight: 0, mintTxid: "NO_MINT", spentHeight: 0, spentTxid: "NO_SPENT"
                };
                return output;
            }),
            inputs: tx.vin.map(function (o) {
                var input = {
                    txid: o.txid,
                    coinbase: tx.vin === undefined || tx.vin.length === 0,
                    vout: o.n,
                    address: (o.scriptPubKey === undefined || o.scriptPubKey.addresses === undefined) ? "" : o.scriptPubKey.addresses.find(function (x) { return x !== undefined; }),
                    script: (o.scriptPubKey === undefined) ? undefined : {
                        asm: o.scriptPubKey.asm,
                        type: o.scriptPubKey.type
                    },
                    value: o.value,
                    sequenceNumber: o.sequence,
                    mintHeight: 0, mintTxid: "NO_MINT", spentHeight: 0, spentTxid: "NO_SPENT"
                };
                return input;
            })
        };
    };
    TxsProvider.prototype.mapToTx = function (tx) {
        var x = {
            address: tx.address,
            chain: "get_CHAIN",
            network: "GET_NETWORK",
            txid: tx.txid,
            blockHeight: tx.height,
            blockHash: tx.blockhash,
            blockTime: tx.blockTime,
            coinbase: tx.vin === undefined || tx.vin.length === 0,
            size: tx.size,
            confirmations: tx.confirmations,
            locktime: tx.locktime,
            value: tx.vout.reduce(function (accumulator, currentValue) { return accumulator += currentValue.value; }, 0),
            coins: this.mapToCoin(tx)
        };
        return x;
    };
    TxsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_4__blocks_blocks__["a" /* BlocksProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], TxsProvider);
    return TxsProvider;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RedirProvider = /** @class */ (function () {
    function RedirProvider(events) {
        this.events = events;
    }
    RedirProvider.prototype.redir = function (redirTo, params) {
        this.events.publish('redirToEvent', { redirTo: redirTo, params: params });
    };
    RedirProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], RedirProvider);
    return RedirProvider;
}());

//# sourceMappingURL=redir.js.map

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denomination_denomination_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer__ = __webpack_require__(858);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterComponentModule = /** @class */ (function () {
    function FooterComponentModule() {
    }
    FooterComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__footer__["a" /* FooterComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__denomination_denomination_module__["a" /* DenominationComponentModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__footer__["a" /* FooterComponent */]]
        })
    ], FooterComponentModule);
    return FooterComponentModule;
}());

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadNavComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denomination_denomination_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__head_nav__ = __webpack_require__(859);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeadNavComponentModule = /** @class */ (function () {
    function HeadNavComponentModule() {
    }
    HeadNavComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__head_nav__["a" /* HeadNavComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_2__denomination_denomination_module__["a" /* DenominationComponentModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__head_nav__["a" /* HeadNavComponent */]]
        })
    ], HeadNavComponentModule);
    return HeadNavComponentModule;
}());

//# sourceMappingURL=head-nav.module.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LoaderComponent.prototype, "type", void 0);
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'loader',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/components/loader/loader.html"*/'<div *ngIf="type == \'title\'">\n  <h1 class="title animated-background"></h1>\n  <p class="subtitle animated-background"></p>\n</div>\n\n<ion-row *ngIf="type == \'grid\'">\n  <ion-col col-2>\n    <div class="left-item animated-background"></div>\n  </ion-col>\n  <ion-col col-4>\n    <div class="right-item animated-background"></div>\n  </ion-col>\n  <ion-col text-right>\n    <div class="right-item animated-background"></div>\n  </ion-col>\n  <ion-col col-2 hideWhen="portrait">\n    <div class="animated-background"></div>\n  </ion-col>\n  <ion-col col-2 text-right>\n    <div class="right-item animated-background"></div>\n  </ion-col>\n</ion-row>\n\n<div *ngIf="type == \'tx-list\' || type == \'tx-full-list\'" class="box-loader">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-7>\n        <div class="left-item animated-background"></div>\n      </ion-col>\n      <ion-col col-5 text-right>\n        <ion-note>\n          <div class="right-item animated-background"></div>\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-end class="small" *ngIf="type == \'tx-full-list\'">\n      <ion-col col-12 text-right text-uppercase>\n        <ion-chip class="animated-background">\n        </ion-chip>\n        <ion-chip class="animated-background">\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/components/loader/loader.html"*/
        })
    ], LoaderComponent);
    return LoaderComponent;
}());

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ErrorComponent.prototype, "message", void 0);
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'error',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/components/error/error.html"*/'<ion-row class="error-message">\n  <ion-col col-12>\n    {{ message }}\n  </ion-col>\n</ion-row>'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/components/error/error.html"*/
        })
    ], ErrorComponent);
    return ErrorComponent;
}());

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(nav) {
        this.nav = nav;
    }
    FooterComponent.prototype.openPage = function (page) {
        this.nav.push(page, {
            chain: this.chainNetwork.chain,
            network: this.chainNetwork.network
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FooterComponent.prototype, "chainNetwork", void 0);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/components/footer/footer.html"*/'<ion-footer>\n  <ion-toolbar fixed color="dark">\n    <div class="pages">\n      <!-- <a *ngIf="chainNetwork" (click)="openPage(\'broadcast-tx\')">Broadcast Transaction</a> -->\n    </div>\n    <div class="about">\n      <a href="https://github.com/bitpay/bitcore/tree/master/packages/insight" target="_blank">\n        <span class="logo">smartcash</span>\n        <span class="version">v1.3</span>\n      </a>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/components/footer/footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_logger_logger__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_price_price__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_redir_redir__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_search_search__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__denomination_denomination__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HeadNavComponent = /** @class */ (function () {
    function HeadNavComponent(app, currencyProvider, priceProvider, actionSheetCtrl, popoverCtrl, toastCtrl, searchProvider, redirProvider, navCtrl, logger, apiProvider) {
        this.app = app;
        this.currencyProvider = currencyProvider;
        this.priceProvider = priceProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.searchProvider = searchProvider;
        this.redirProvider = redirProvider;
        this.navCtrl = navCtrl;
        this.logger = logger;
        this.apiProvider = apiProvider;
        this.showSearch = false;
    }
    HeadNavComponent.prototype.ngOnInit = function () {
        // this.params = {
        //   chain: this.chainNetwork.chain,
        //   network: this.chainNetwork.network
        // };
    };
    HeadNavComponent.prototype.goHome = function (chainNetwork) {
        this.navCtrl.setRoot('home', {
            chain: chainNetwork ? chainNetwork.chain : 'ALL',
            network: chainNetwork ? chainNetwork.network : 'mainnet'
        });
    };
    HeadNavComponent.prototype.search = function () {
        //this.q = this.q.replace(/\s/g, '');
        var _this = this;
        this.searchProvider
            .isInputValid(this.q)
            .subscribe(function (inputDetails) {
            if (_this.q !== '' && inputDetails.isValid) {
                _this.showSearch = false;
                _this.searchProvider
                    .search(_this.q)
                    .subscribe(function (res) {
                    _this.processAllResponse(res);
                }, function (err) {
                    _this.wrongSearch('Server error. Please try again');
                    _this.logger.error(err);
                });
            }
            else {
                _this.wrongSearch('No matching records found!');
            }
        });
    };
    HeadNavComponent.prototype.processResponse = function (response) {
        if (response.addr) {
            return {
                redirTo: 'address',
                params: response.addr[0] ? response.addr[0].address : this.q,
                type: 'addrStr'
            };
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_lodash__["reduce"](response, function (result, value) {
                if (value.tx) {
                    result = {
                        redirTo: 'transaction',
                        params: value.tx.txid,
                        type: 'txId'
                    };
                }
                else if (value.block) {
                    result = {
                        redirTo: 'block-detail',
                        params: value.block.hash,
                        type: 'blockHash'
                    };
                }
                return result;
            }, { redirTo: '', params: '', type: '' });
        }
    };
    HeadNavComponent.prototype.processAllResponse = function (response) {
        var resFiltered = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](response, function (o) {
            return (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isString"](o) &&
                !((o.addr && o.addr.length === 0) ||
                    (o.block && o.block.length === 0) ||
                    (o.tx && o.tx.length === 0)));
        });
        if (resFiltered.length !== 0) {
            var matches_1 = {
                blocks: [],
                txs: [],
                addresses: []
            };
            resFiltered.map(function (res) {
                res.block ? matches_1.blocks.push(res.block) : res.tx ? matches_1.txs.push(res.tx) : matches_1.addresses.push(res.addr);
            });
            // ETH addresses doesn't have 'address' property
            // if (matches.addresses.length > 0) {
            //   matches.addresses.forEach(addr => {
            //     if (!addr.address) {
            //       addr.address = this.q;
            //     }
            //   });
            // }
            this.redirProvider.redir('search', {
                matches: matches_1
            });
        }
        else {
            var message = 'No matching records found!';
            this.wrongSearch(message);
            this.logger.info(message);
        }
    };
    HeadNavComponent.prototype.wrongSearch = function (message) {
        var _this = this;
        this.loading = false;
        this.presentToast(message);
        setTimeout(function () {
            _this.searchbar.setFocus();
        }, 150);
    };
    HeadNavComponent.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    HeadNavComponent.prototype.changeCurrency = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_9__denomination_denomination__["a" /* DenominationComponent */], {
            config: this.chainNetwork,
            currencySymbol: this.currencyProvider.getCurrency()
        });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
            if (!data) {
                return;
            }
            else if (data.chainNetwork !== _this.chainNetwork) {
                _this.apiProvider.changeNetwork(data.chainNetwork);
                _this.setCurrency(data.chainNetwork);
                _this.goHome(data.chainNetwork);
            }
            else if (data.currencySymbol !== _this.currencyProvider.getCurrency()) {
                _this.setCurrency(_this.chainNetwork, data.currencySymbol);
            }
        });
    };
    HeadNavComponent.prototype.setCurrency = function (chainNetwork, currencySymbol) {
        this.currencyProvider.setCurrency(chainNetwork, currencySymbol);
        this.priceProvider.setCurrency(currencySymbol);
    };
    HeadNavComponent.prototype.toggleSearch = function () {
        this.showSearch = !this.showSearch;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Searchbar */])
    ], HeadNavComponent.prototype, "searchbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HeadNavComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeadNavComponent.prototype, "chainNetwork", void 0);
    HeadNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'head-nav',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/components/head-nav/head-nav.html"*/'<ion-header no-border>\n  <ion-navbar color="bp-blue" class="nav-container" hideBackButton>\n    <ion-title (click)="goHome()" class="logo-header"><img src="../../assets/img/smartlogo.png" class="img-logo" alt="SMARTCASH" /></ion-title>\n    <!--search bar -->\n    <form class="search" (ngSubmit)="search()">\n      <div class="input-container">\n        <div class="search-image-container">\n          <img class="search-image" src="assets/img/search-icon.svg">\n        </div>\n        <input dir="auto" placeholder="{{ \'Search for block, transaction or address\' }}" [(ngModel)]="q" name="search" autocomplete="off" autocorrect="off" spellcheck="false">\n      </div>\n    </form>\n\n    <!--network selector -->\n    <!-- <ion-buttons>\n      <button ion-button (click)="changeCurrency($event)" class="cn-button hover-lite">\n        <ion-icon class="currency-icon" name="logo-bitcoin" *ngIf="(chainNetwork.chain === \'BTC\' || chainNetwork.chain === \'BCH\') && currencyProvider?.currencySymbol !== \'USD\'"></ion-icon>\n        <ion-icon class="currency-icon" name="logo-usd" *ngIf="currencyProvider?.currencySymbol === \'USD\'"></ion-icon>\n        <img src="assets/img/ethicon.svg" *ngIf="chainNetwork.chain === \'ETH\' && currencyProvider?.currencySymbol !== \'USD\'" width="12">\n        <span class="currency-symbol" *ngIf="chainNetwork?.chain !== \'ALL\'">{{ currencyProvider?.currencySymbol }}</span>\n        <span class="currency-symbol" *ngIf="chainNetwork?.chain === \'ALL\'">All Blockchains</span>\n        <small class="pill" *ngIf="currencyProvider?.currencySymbol === \'USD\' && chainNetwork?.network === \'testnet\';else networkOnly">{{ chainNetwork?.chain }} - {{ (chainNetwork?.network) }} </small>\n        <ng-template #networkOnly><small class="pill" *ngIf="chainNetwork?.network === \'testnet\'">{{ (chainNetwork?.network) }} </small></ng-template>\n        &nbsp;\n        <ion-icon name="md-arrow-dropdown"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n  <ion-toolbar class="mobile-searchbar" fixed>\n    <form (ngSubmit)="search()">\n      <ion-searchbar #searchbar placeholder="{{ \'Search for block, transaction or address\' }}" [(ngModel)]="q" name="search"></ion-searchbar>\n    </form>\n  </ion-toolbar>\n</ion-header>'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/components/head-nav/head-nav.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_price_price__["a" /* PriceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_search_search__["a" /* SearchProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_redir_redir__["a" /* RedirProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_logger_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], HeadNavComponent);
    return HeadNavComponent;
}());

//# sourceMappingURL=head-nav.js.map

/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 330,
	"./af.js": 330,
	"./ar": 331,
	"./ar-dz": 332,
	"./ar-dz.js": 332,
	"./ar-kw": 333,
	"./ar-kw.js": 333,
	"./ar-ly": 334,
	"./ar-ly.js": 334,
	"./ar-ma": 335,
	"./ar-ma.js": 335,
	"./ar-sa": 336,
	"./ar-sa.js": 336,
	"./ar-tn": 337,
	"./ar-tn.js": 337,
	"./ar.js": 331,
	"./az": 338,
	"./az.js": 338,
	"./be": 339,
	"./be.js": 339,
	"./bg": 340,
	"./bg.js": 340,
	"./bm": 341,
	"./bm.js": 341,
	"./bn": 342,
	"./bn.js": 342,
	"./bo": 343,
	"./bo.js": 343,
	"./br": 344,
	"./br.js": 344,
	"./bs": 345,
	"./bs.js": 345,
	"./ca": 346,
	"./ca.js": 346,
	"./cs": 347,
	"./cs.js": 347,
	"./cv": 348,
	"./cv.js": 348,
	"./cy": 349,
	"./cy.js": 349,
	"./da": 350,
	"./da.js": 350,
	"./de": 351,
	"./de-at": 352,
	"./de-at.js": 352,
	"./de-ch": 353,
	"./de-ch.js": 353,
	"./de.js": 351,
	"./dv": 354,
	"./dv.js": 354,
	"./el": 355,
	"./el.js": 355,
	"./en-au": 356,
	"./en-au.js": 356,
	"./en-ca": 357,
	"./en-ca.js": 357,
	"./en-gb": 358,
	"./en-gb.js": 358,
	"./en-ie": 359,
	"./en-ie.js": 359,
	"./en-il": 360,
	"./en-il.js": 360,
	"./en-in": 361,
	"./en-in.js": 361,
	"./en-nz": 362,
	"./en-nz.js": 362,
	"./en-sg": 363,
	"./en-sg.js": 363,
	"./eo": 364,
	"./eo.js": 364,
	"./es": 365,
	"./es-do": 366,
	"./es-do.js": 366,
	"./es-us": 367,
	"./es-us.js": 367,
	"./es.js": 365,
	"./et": 368,
	"./et.js": 368,
	"./eu": 369,
	"./eu.js": 369,
	"./fa": 370,
	"./fa.js": 370,
	"./fi": 371,
	"./fi.js": 371,
	"./fil": 372,
	"./fil.js": 372,
	"./fo": 373,
	"./fo.js": 373,
	"./fr": 374,
	"./fr-ca": 375,
	"./fr-ca.js": 375,
	"./fr-ch": 376,
	"./fr-ch.js": 376,
	"./fr.js": 374,
	"./fy": 377,
	"./fy.js": 377,
	"./ga": 378,
	"./ga.js": 378,
	"./gd": 379,
	"./gd.js": 379,
	"./gl": 380,
	"./gl.js": 380,
	"./gom-deva": 381,
	"./gom-deva.js": 381,
	"./gom-latn": 382,
	"./gom-latn.js": 382,
	"./gu": 383,
	"./gu.js": 383,
	"./he": 384,
	"./he.js": 384,
	"./hi": 385,
	"./hi.js": 385,
	"./hr": 386,
	"./hr.js": 386,
	"./hu": 387,
	"./hu.js": 387,
	"./hy-am": 388,
	"./hy-am.js": 388,
	"./id": 389,
	"./id.js": 389,
	"./is": 390,
	"./is.js": 390,
	"./it": 391,
	"./it-ch": 392,
	"./it-ch.js": 392,
	"./it.js": 391,
	"./ja": 393,
	"./ja.js": 393,
	"./jv": 394,
	"./jv.js": 394,
	"./ka": 395,
	"./ka.js": 395,
	"./kk": 396,
	"./kk.js": 396,
	"./km": 397,
	"./km.js": 397,
	"./kn": 398,
	"./kn.js": 398,
	"./ko": 399,
	"./ko.js": 399,
	"./ku": 400,
	"./ku.js": 400,
	"./ky": 401,
	"./ky.js": 401,
	"./lb": 402,
	"./lb.js": 402,
	"./lo": 403,
	"./lo.js": 403,
	"./lt": 404,
	"./lt.js": 404,
	"./lv": 405,
	"./lv.js": 405,
	"./me": 406,
	"./me.js": 406,
	"./mi": 407,
	"./mi.js": 407,
	"./mk": 408,
	"./mk.js": 408,
	"./ml": 409,
	"./ml.js": 409,
	"./mn": 410,
	"./mn.js": 410,
	"./mr": 411,
	"./mr.js": 411,
	"./ms": 412,
	"./ms-my": 413,
	"./ms-my.js": 413,
	"./ms.js": 412,
	"./mt": 414,
	"./mt.js": 414,
	"./my": 415,
	"./my.js": 415,
	"./nb": 416,
	"./nb.js": 416,
	"./ne": 417,
	"./ne.js": 417,
	"./nl": 418,
	"./nl-be": 419,
	"./nl-be.js": 419,
	"./nl.js": 418,
	"./nn": 420,
	"./nn.js": 420,
	"./oc-lnc": 421,
	"./oc-lnc.js": 421,
	"./pa-in": 422,
	"./pa-in.js": 422,
	"./pl": 423,
	"./pl.js": 423,
	"./pt": 424,
	"./pt-br": 425,
	"./pt-br.js": 425,
	"./pt.js": 424,
	"./ro": 426,
	"./ro.js": 426,
	"./ru": 427,
	"./ru.js": 427,
	"./sd": 428,
	"./sd.js": 428,
	"./se": 429,
	"./se.js": 429,
	"./si": 430,
	"./si.js": 430,
	"./sk": 431,
	"./sk.js": 431,
	"./sl": 432,
	"./sl.js": 432,
	"./sq": 433,
	"./sq.js": 433,
	"./sr": 434,
	"./sr-cyrl": 435,
	"./sr-cyrl.js": 435,
	"./sr.js": 434,
	"./ss": 436,
	"./ss.js": 436,
	"./sv": 437,
	"./sv.js": 437,
	"./sw": 438,
	"./sw.js": 438,
	"./ta": 439,
	"./ta.js": 439,
	"./te": 440,
	"./te.js": 440,
	"./tet": 441,
	"./tet.js": 441,
	"./tg": 442,
	"./tg.js": 442,
	"./th": 443,
	"./th.js": 443,
	"./tl-ph": 444,
	"./tl-ph.js": 444,
	"./tlh": 445,
	"./tlh.js": 445,
	"./tr": 446,
	"./tr.js": 446,
	"./tzl": 447,
	"./tzl.js": 447,
	"./tzm": 448,
	"./tzm-latn": 449,
	"./tzm-latn.js": 449,
	"./tzm.js": 448,
	"./ug-cn": 450,
	"./ug-cn.js": 450,
	"./uk": 451,
	"./uk.js": 451,
	"./ur": 452,
	"./ur.js": 452,
	"./uz": 453,
	"./uz-latn": 454,
	"./uz-latn.js": 454,
	"./uz.js": 453,
	"./vi": 455,
	"./vi.js": 455,
	"./x-pseudo": 456,
	"./x-pseudo.js": 456,
	"./yo": 457,
	"./yo.js": 457,
	"./zh-cn": 458,
	"./zh-cn.js": 458,
	"./zh-hk": 459,
	"./zh-hk.js": 459,
	"./zh-mo": 460,
	"./zh-mo.js": 460,
	"./zh-tw": 461,
	"./zh-tw.js": 461
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 861;

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rewards_rewards__ = __webpack_require__(480);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RewardsComponent = /** @class */ (function () {
    function RewardsComponent(rewardsProvider) {
        this.rewardsProvider = rewardsProvider;
    }
    RewardsComponent.prototype.ngOnInit = function () {
        this.loadRewardsInfo();
        this.loadNodesInfo();
    };
    RewardsComponent.prototype.loadRewardsInfo = function () {
        var _this = this;
        this.subscriber = this.rewardsProvider
            .getSmartRewards()
            .subscribe(function (response) {
            _this.smartRewards = response['SmartRewards Yearly Yield % with 4 Week Bonus'];
            _this.superRewards = response['SuperRewards Yearly Yield % with 4 week Bonux'];
        }, function (err) {
            _this.subscriber.unsubscribe();
        });
    };
    RewardsComponent.prototype.loadNodesInfo = function () {
        var _this = this;
        this.subscriber = this.rewardsProvider
            .getSmartNodes()
            .subscribe(function (response) {
            _this.colateral = response['SmartNode Collateral'];
            _this.yearly_rewards = response['Yearly Rewards'];
            _this.yearly_yield = response['Yearly Yield %'];
        }, function (err) {
            _this.subscriber.unsubscribe();
        });
    };
    RewardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rewards',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/components/rewards/rewards.html"*/'    <ion-row>\n        <ion-col col-lg-6 col-12 class="text-center">\n            <ion-row class="">\n                <ion-col col-lg-12 class="headerTitle">\n                    <h2>1K+ SmartRewards 1MM+</h2>\n                </ion-col>                \n            </ion-row>\n            <ion-row class="contentRewards">\n                <ion-col col-lg-6 class="text-center">\n                    <h2>SmartRewards</h2>\n                    <h3>{{ smartRewards }} <span>%</span></h3>\n                </ion-col>\n        \n                <ion-col col-lg-6 class="text-center">\n                    <h2>SuperRewards </h2>\n                    <h3>{{ superRewards }} <span>%</span></h3>\n                </ion-col>\n            </ion-row>\n        </ion-col>\n\n        <ion-col col-lg-6 col-12 class="text-center">\n            <ion-row>\n                <ion-col col-lg-12 class="headerTitle">\n                    <h2>SmartNodes</h2>\n                </ion-col>            \n            </ion-row>\n            <ion-row class="contentRewards">\n                <ion-col col-lg-4>\n                    <h2>SmartNode Collateral</h2>\n                    <h3>{{ colateral }}</h3>\n                </ion-col>\n                <ion-col col-lg-4>\n                    <h2>Yearly Rewards</h2>\n                    <h3>{{ yearly_rewards }}</h3>\n                </ion-col>\n                <ion-col col-lg-4>\n                    <h2>Yearly Yield</h2>\n                    <h3>{{ yearly_yield }} <span>%</span></h3>\n                </ion-col>\n            </ion-row>\n        </ion-col>\n    </ion-row>\n'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/components/rewards/rewards.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_rewards_rewards__["a" /* RewardsProvider */]])
    ], RewardsComponent);
    return RewardsComponent;
}());

//# sourceMappingURL=rewards.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(481);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address_address__ = __webpack_require__(521);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_detail_block_detail__ = __webpack_require__(522);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_blocks__ = __webpack_require__(475);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__blocks_blocks__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__broadcast_tx_broadcast_tx__ = __webpack_require__(477);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transaction_transaction__ = __webpack_require__(523);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_module__ = __webpack_require__(882);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__pages_module__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_error_error_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_module__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_head_nav_head_nav_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_latest_blocks_latest_blocks_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_rewards_rewards_module__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_blocks_blocks_module__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__broadcast_tx_broadcast_tx_module__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_module__ = __webpack_require__(478);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__components__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_8__pages_blocks_blocks_module__["BlocksPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__broadcast_tx_broadcast_tx_module__["BroadcastTxPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_module__["a" /* FooterComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_head_nav_head_nav_module__["a" /* HeadNavComponentModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_latest_blocks_latest_blocks_module__["a" /* LatestBlocksComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_error_error_module__["a" /* ErrorComponentModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_rewards_rewards_module__["a" /* RewardComponentModule */],
            ],
            entryComponents: [],
            providers: []
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_module__ = __webpack_require__(884);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_split_split__ = __webpack_require__(885);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__pipes_split_split__["a" /* SplitPipe */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* ReactiveFormsModule */]],
            exports: [],
            entryComponents: [],
            providers: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SplitPipe = /** @class */ (function () {
    function SplitPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SplitPipe.prototype.transform = function (value, delimiter) {
        var array = value.split(delimiter);
        return array;
    };
    SplitPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'split'
        })
    ], SplitPipe);
    return SplitPipe;
}());

//# sourceMappingURL=split.js.map

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpErrorInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_empty__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_logger__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(logger) {
        this.logger = logger;
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next
            .handle(request)
            .retry(1)
            .catch(function (err) {
            var errorMessage = err === null || err === void 0 ? void 0 : err.error.map(function (m) { return JSON.stringify(m); }).join('|');
            _this.logger.error(errorMessage);
            throw errorMessage;
        });
    };
    HttpErrorInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__logger_logger__["a" /* Logger */]])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());

//# sourceMappingURL=error-handler.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsightApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InsightApp = /** @class */ (function () {
    function InsightApp(platform, apiProvider, events) {
        this.apiProvider = apiProvider;
        this.events = events;
        this.platform = platform;
        this.initializeApp();
    }
    InsightApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.nav.setRoot('home', {
                chain: _this.apiProvider.networkSettings.selectedNetwork.chain,
                network: _this.apiProvider.networkSettings.selectedNetwork.network
            });
            _this.subscribeRedirEvent();
        });
    };
    InsightApp.prototype.subscribeRedirEvent = function () {
        var _this = this;
        this.events.subscribe('redirToEvent', function (data) {
            _this.nav.push(data.redirTo, data.params);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], InsightApp.prototype, "nav", void 0);
    InsightApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/app/app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], InsightApp);
    return InsightApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[524]);
//# sourceMappingURL=main.js.map