webpackJsonp([4],{

/***/ 144:
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(75)))

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestBlocksComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_moment__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_loader_loader_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_error_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__latest_blocks__ = __webpack_require__(465);
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

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_blocks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transactions_transactions__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_fromPromise__ = __webpack_require__(115);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_4__blocks_blocks__["a" /* BlocksProvider */],
            __WEBPACK_IMPORTED_MODULE_5__transactions_transactions__["a" /* TxsProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], AddressProvider);
    return AddressProvider;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 178:
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
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_default_default__ = __webpack_require__(144);
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




var CurrentEnv = process.env.ENV || 'dev';
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
    }
    ApiProvider.prototype.getAvailableNetworks = function () {
        var _this = this;
        var hosts = CurrentApiHosts;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromPromise(Promise.all(Object.keys(hosts).map(function (chain) { return __awaiter(_this, void 0, void 0, function () {
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
        return "/v1/";
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_default_default__["a" /* DefaultProvider */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(75)))

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/address/address.module": [
		856,
		0
	],
	"../pages/block-detail/block-detail.module": [
		855,
		1
	],
	"../pages/blocks/blocks.module": [
		319
	],
	"../pages/broadcast-tx/broadcast-tx.module": [
		467
	],
	"../pages/ext/ext.module": [
		469
	],
	"../pages/home/home.module": [
		471
	],
	"../pages/search/search.module": [
		857,
		3
	],
	"../pages/transaction/transaction.module": [
		858,
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
webpackAsyncContext.id = 223;
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

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenominationComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denomination__ = __webpack_require__(315);
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

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenominationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(74);
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
            selector: 'denomination',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\denomination\denomination.html"*/'<ion-list no-lines>\n\n  <ion-row>\n\n    <ion-item-divider>\n\n      Blockchain\n\n    </ion-item-divider>\n\n\n\n    <ion-item (click)="changeExplorer(chainNetwork)" *ngFor="let chainNetwork of availableNetworks">\n\n      <ion-avatar item-start>\n\n        <img *ngIf="chainNetwork.network === \'mainnet\' && chainNetwork.chain !==\'ALL\'" src="assets/img/currency_logos/{{ chainNetwork.chain.toLowerCase() }}.svg" class="logo" />\n\n        <img *ngIf="chainNetwork.network === \'mainnet\' && chainNetwork.chain===\'ALL\'" src="assets/img/search.png" class="logo" />\n\n        <img *ngIf=" chainNetwork.network !==\'mainnet\' && chainNetwork.chain===\'BTC\'" src=" assets/img/btcicon-testnet.svg" class="logo" />\n\n        <img *ngIf="chainNetwork.network !== \'mainnet\' && chainNetwork.chain===\'BCH\'" src="assets/img/bchicon-testnet.svg" class="logo" />\n\n        <img [ngClass]="{\'secondary\': chainNetwork.network ===\'testnet\'}" *ngIf="chainNetwork.network !== \'mainnet\' && chainNetwork.chain===\'ETH\'" src="assets/img/currency_logos/eth.svg" class="logo" />\n\n      </ion-avatar>\n\n      <ion-label color="dark" *ngIf="chainNetwork.chain !== \'ALL\'">\n\n        {{ chainNetwork.chain }} <small class="pill"> {{ chainNetwork.network }}</small>\n\n      </ion-label>\n\n      <ion-label color="dark" *ngIf="chainNetwork.chain === \'ALL\'">\n\n        All Blockchains\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-row>\n\n</ion-list>\n\n\n\n<ion-list radio-group [(ngModel)]="currencySymbol" *ngIf="showUnits && api.networkSettings.selectedNetwork.chain !== \'ALL\'">\n\n  <ion-item-divider>\n\n    Units\n\n  </ion-item-divider>\n\n\n\n  <ion-item *ngFor="let unit of units">\n\n    <ion-label color="dark">{{ unit }}</ion-label>\n\n    <ion-radio value="{{ unit }}" [checked]="unit === currencySymbol" (click)="changeUnit(unit)">\n\n    </ion-radio>\n\n  </ion-item>\n\n</ion-list>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\denomination\denomination.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DenominationComponent);
    return DenominationComponent;
}());

//# sourceMappingURL=denomination.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(74);
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

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(313);
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
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SearchProvider);
    return SearchProvider;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksPageModule", function() { return BlocksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footer_footer_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_head_nav_head_nav_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_latest_blocks_latest_blocks_module__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loader_loader_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks__ = __webpack_require__(466);
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(132);
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

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestBlocksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_blocks_blocks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_default_default__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_redir_redir__ = __webpack_require__(52);
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
                    if (window.location.href.includes('home')) {
                        _this.loadBlocks.call(_this);
                    }
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
            if (_this.blocks == null || _this.blocks.length === 0) {
                _this.errorMessage = "Service temporarily unavailable: Loading block index...";
            }
            _this.loading = false;
            if (_this.blocks[_this.blocks.length - 1].height < _this.numBlocks) {
                _this.isHomePage = false;
            }
        }, function (err) {
            _this.subscriber.unsubscribe();
            clearInterval(_this.reloadInterval);
            _this.errorMessage = "Service temporarily unavailable: Loading block index...";
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
            selector: 'latest-blocks',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\latest-blocks\latest-blocks.html"*/'<error [message]="errorMessage" *ngIf="errorMessage"></error>\n\n<div *ngIf="!errorMessage">\n\n  <ion-grid class="grid--table blocks-container">\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <h6>Height</h6>\n\n      </ion-col>\n\n      <ion-col *ngIf="showTimeAs === \'age\'">\n\n        <h6>Mined</h6>\n\n      </ion-col>\n\n      <ion-col *ngIf="showTimeAs === \'timestamp\'">\n\n        <h6>Timestamp</h6>\n\n      </ion-col>\n\n      <ion-col>\n\n        <h6>Transactions</h6>\n\n      </ion-col>\n\n      <ion-col>\n\n        <h6>Size</h6>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <loader *ngIf="loading" [type]="\'grid\'"></loader>\n\n\n\n    <div *ngIf="!loading" class="blocks-container__blocks">\n\n      <ion-row *ngFor="let block of blocks" (click)="goToBlock(block.hash)">\n\n        <ion-col>\n\n          <a (click)="goToBlock(block.hash)">{{ block.height }}</a>\n\n        </ion-col>\n\n        <ion-col *ngIf="showTimeAs === \'age\'">\n\n          {{ block.time | amFromUnix | amTimeAgo:true }}\n\n        </ion-col>\n\n        <ion-col *ngIf="showTimeAs === \'timestamp\'">\n\n          {{ block.time * 1000 | date:\'long\' }}\n\n        </ion-col>\n\n        <ion-col>\n\n          {{ block.tx.length }}\n\n        </ion-col>\n\n        <ion-col>\n\n          {{ block.size }}\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <!-- <ion-row *ngIf="showAllBlocksButton" class="blocks-cta">\n\n        <ion-col text-center>\n\n          <button ion-button (click)="goToBlocks()" [disabled]="blocks.length == 0">Load More</button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="isHomePage">\n\n        <ion-infinite-scroll (ionInfinite)="loadMoreBlocks($event)">\n\n          <loader [type]="\'grid\'"></loader>\n\n        </ion-infinite-scroll>\n\n      </ion-row> -->\n\n    </div>\n\n  </ion-grid>\n\n</div>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\latest-blocks\latest-blocks.html"*/
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

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blocks_blocks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_price_price__ = __webpack_require__(35);
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
            selector: 'page-blocks',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\pages\blocks\blocks.html"*/'<head-nav [chainNetwork]="chainNetwork"></head-nav>\n\n<ion-content class="content-container">\n\n  <ion-grid class="page-content-grid">\n\n\n\n    <loader *ngIf="loading" [type]="\'title\'"></loader>\n\n\n\n    <div *ngIf="!loading" class="page-content">\n\n      <h2 class="content-container--heading">Blocks</h2>\n\n      <latest-blocks [numBlocks]="200" [showTimeAs]="\'timestamp\'" [isHomePage]="true" [chainNetwork]="chainNetwork"></latest-blocks>\n\n    </div>\n\n\n\n  </ion-grid>\n\n</ion-content>\n\n<footer [chainNetwork]="chainNetwork"></footer>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\pages\blocks\blocks.html"*/
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

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastTxPageModule", function() { return BroadcastTxPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footer_footer_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_head_nav_head_nav_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__broadcast_tx__ = __webpack_require__(468);
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

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BroadcastTxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_price_price__ = __webpack_require__(35);
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
            selector: 'page-broadcast-tx',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\pages\broadcast-tx\broadcast-tx.html"*/'<head-nav [chainNetwork]="chainNetwork"></head-nav>\n\n<ion-content>\n\n  <ion-grid fixed>\n\n    <div class="page-content">\n\n      <h1>Broadcast Transaction</h1>\n\n      <form [formGroup]="txForm">\n\n        <ion-list>\n\n          <ion-item>\n\n            <p>This form can be used to broadcast a raw transaction in hex format over the Bitcoin network.</p>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Raw transaction data</ion-label>\n\n            <ion-input type="text" [(ngModel)]="transaction" formControlName="rawData"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item *ngIf="!txForm.controls.rawData.valid">\n\n            <p>Raw transaction data must be a valid hexadecimal string.</p>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <button ion-button outline (click)="send()" [disabled]="!txForm.touched || !txForm.valid">Send\n\n              transaction</button>\n\n          </ion-item>\n\n        </ion-list>\n\n      </form>\n\n    </div>\n\n  </ion-grid>\n\n</ion-content>\n\n<footer [chainNetwork]="chainNetwork"></footer>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\pages\broadcast-tx\broadcast-tx.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_price_price__["a" /* PriceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_currency_currency__["a" /* CurrencyProvider */]])
    ], BroadcastTxPage);
    return BroadcastTxPage;
}());

//# sourceMappingURL=broadcast-tx.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtPageModule", function() { return ExtPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ext__ = __webpack_require__(470);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExtPageModule = /** @class */ (function () {
    function ExtPageModule() {
    }
    ExtPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__ext__["a" /* ExtPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ext__["a" /* ExtPage */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__ext__["a" /* ExtPage */]]
        })
    ], ExtPageModule);
    return ExtPageModule;
}());

//# sourceMappingURL=ext.module.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_from__ = __webpack_require__(65);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], BlocksProvider);
    return BlocksProvider;
}());

//# sourceMappingURL=blocks.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtPage; });
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

var ExtPage = /** @class */ (function () {
    function ExtPage() {
        this.ext = '';
        // this.apiProvider.changeNetwork(this.chainNetwork);
        // this.currencyProvider.setCurrency(this.chainNetwork);
        // this.priceProvider.setCurrency();
        this.getValue();
    }
    ExtPage.prototype.ionViewWillLoad = function () {
    };
    ExtPage.prototype.getValue = function () {
        this.ext = JSON.stringify('2637267080');
    };
    ExtPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ext',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\pages\ext\ext.html"*/'<ion-content class="content-container">\n\n    {{ ext }}\n\n</ion-content>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\pages\ext\ext.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ExtPage);
    return ExtPage;
}());

//# sourceMappingURL=ext.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_error_error_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_head_nav_head_nav_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_latest_blocks_latest_blocks_module__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_loader_loader_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_rewards_rewards_module__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home__ = __webpack_require__(474);
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

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rewards__ = __webpack_require__(831);
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

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_from__ = __webpack_require__(65);
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
        this.urlSmartNodes = "https://sapi.smartcash.cc/v1/smartnode/roi";
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RewardsProvider);
    return RewardsProvider;
}());

//# sourceMappingURL=rewards.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_latest_blocks_latest_blocks__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_price_price__ = __webpack_require__(35);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\pages\home\home.html"*/'<head-nav></head-nav>\n\n\n\n<ion-content class="content-container">\n\n    <!-- <div *ngIf="chainNetwork.chain === \'ALL\'"> -->        \n\n        <ion-grid class="page-content-grid">          \n\n            <rewards></rewards>\n\n            <h2 class="headerTitleBlock">Latest Blocks</h2>            \n\n            <ion-row>\n\n                <ion-col col-md-12 col-12 class="page-content">                    \n\n                    <latest-blocks [showTimeAs]="\'age\'" [showAllBlocksButton]="true" [numBlocks]="\'5\'" #latestBlocks>\n\n                    </latest-blocks>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    <!-- </div> -->\n\n\n\n    <!-- <div *ngIf="chainNetwork.chain !== \'ALL\'">\n\n        <ion-grid class="page-content-grid">\n\n            <ion-row>\n\n                <ion-col col-12 class="page-content">\n\n                    <h2 class="content-container--heading">Latest Blocks</h2>\n\n                    <latest-blocks [showTimeAs]="\'age\'" [showAllBlocksButton]="true" [chainNetwork]="chainNetwork" #latestBlocks>\n\n                    </latest-blocks>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </div> -->\n\n</ion-content>\n\n<footer></footer>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\pages\home\home.html"*/
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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TxsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_blocks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__ = __webpack_require__(65);
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
    TxsProvider.prototype.getTransactionsPerAddressNew = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var url, txs, addressData;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiProvider.getRandomSapiUrl() + "address/transactions";
                        txs = [];
                        return [4 /*yield*/, this.httpClient.post(url, {
                                "pageNumber": 1,
                                "pageSize": 10,
                                "ascending": false,
                                "address": address
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_4__blocks_blocks__["a" /* BlocksProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], TxsProvider);
    return TxsProvider;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blocks_blocks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_price_price__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_redir_redir__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_transactions_transactions__ = __webpack_require__(51);
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
            selector: 'page-block-detail',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\pages\block-detail\block-detail.html"*/'<head-nav [chainNetwork]="chainNetwork"></head-nav>\n\n<ion-content>\n\n  <ion-grid fixed>\n\n\n\n    <div class="page-content">\n\n\n\n      <loader *ngIf="loading" [type]="\'title\'"></loader>\n\n\n\n      <error [message]="errorMessage" *ngIf="!loading && errorMessage"></error>\n\n\n\n      <div *ngIf="!loading && !errorMessage">\n\n\n\n        <h1 class="content-container--heading">Block #{{ block.height }}</h1>\n\n        <p class="item-hash">\n\n          <b>Block Hash</b> {{ block.hash }} <button [copyToClipboard]="block.hash">\n\n            <ion-icon md="md-copy"></ion-icon>\n\n          </button>\n\n        </p>\n\n\n\n        <h2>Summary</h2>\n\n\n\n        <ion-list *ngIf="!loading" class="list--summary">\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-12 col-md class="allow-truncated-text">\n\n                <block-summary [block]="block"></block-summary>\n\n                <!-- <block-summary-eth *ngIf="chainNetwork.chain === \'ETH\'" [block]="block" [chainNetwork]="chainNetwork"></block-summary-eth> -->\n\n                <ion-item>\n\n                  Number of Transactions\n\n                  <ion-note item-end>\n\n                    {{ block.tx.length }}\n\n                  </ion-note>\n\n                </ion-item>\n\n                <ion-item>\n\n                  Height\n\n                  <ion-note item-end>\n\n                    {{ block.height }}\n\n                    <span [hidden]="!block.isMainChain">(Mainchain)</span>\n\n                  </ion-note>\n\n                </ion-item>\n\n                <ion-item>\n\n                  Block Reward\n\n                  <ion-note item-end>\n\n                    <!-- {{ currencyProvider.getConvertedNumber(block.reward, chainNetwork.chain) | number }} -->\n\n                    {{ currencyProvider.currencySymbol }}\n\n                  </ion-note>\n\n                </ion-item>\n\n                <ion-item>\n\n                  Timestamp\n\n                  <ion-note item-end>\n\n                    {{ block.time * 1000 | date:\'long\' }}\n\n                  </ion-note>\n\n                </ion-item>\n\n          <!-- TODO      <ion-item>\n\n                  Mined by\n\n                  <ion-note item-end *ngIf="block.poolInfo">\n\n                    <a href="{{ block.poolInfo.url }}">{{ block.poolInfo.poolName }}</a>\n\n                  </ion-note>\n\n                </ion-item> -->\n\n              </ion-col>\n\n              <ion-col col-12 col-md class="allow-truncated-text">\n\n                <ion-item>\n\n                  Difficulty\n\n                  <ion-note item-end>\n\n                    {{ block.difficulty }}\n\n                  </ion-note>\n\n                </ion-item>\n\n                <ion-item>\n\n                  Size (bytes)\n\n                  <ion-note item-end>\n\n                    {{ block.size }}\n\n                  </ion-note>\n\n                </ion-item>\n\n                <ion-item>\n\n                  Nonce\n\n                  <ion-note item-end>\n\n                    {{ block.nonce }}\n\n                  </ion-note>\n\n                </ion-item>\n\n                <ion-item>\n\n                  Previous Block\n\n                  <ion-note item-end>\n\n                    <a (click)="goToPreviousBlock()"\n\n                      [ngClass]="{\'disabled-link\': block.height - 1 === 0 }">{{ block.height - 1 }}</a>\n\n                  </ion-note>\n\n                </ion-item>\n\n                <ion-item>\n\n                  Next Block\n\n                  <ion-note item-end>\n\n                    <a (click)="goToNextBlock()"\n\n                      [ngClass]="{\'disabled-link\': !block.nextblockhash }">{{ block.height + 1 }}</a>\n\n                  </ion-note>\n\n                </ion-item>\n\n                <ion-item>\n\n                  Confirmations\n\n                  <ion-note item-end>\n\n                    {{ confirmations }}\n\n                  </ion-note>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-list>\n\n\n\n        <h2>Transactions</h2>\n\n        <transaction-list [blocktime]="block.time" [queryType]="\'blockHash\'" [queryValue]="block.hash">\n\n        </transaction-list>\n\n      </div>\n\n\n\n    </div>\n\n  </ion-grid>\n\n</ion-content>\n\n<footer [chainNetwork]="chainNetwork"></footer>\n\n'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\pages\block-detail\block-detail.html"*/
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

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_address_address__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_price_price__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_transactions_transactions__ = __webpack_require__(51);
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
            selector: 'page-address',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\pages\address\address.html"*/'<head-nav></head-nav>\n\n<ion-content>\n\n    <ion-grid fixed>\n\n        <div class="page-content">\n\n            <loader *ngIf="loading" [type]="\'title\'"></loader>\n\n\n\n\n\n            <div *ngIf="!loading">\n\n\n\n                <h1 class="content-container--heading">Address <small>{{ address.balance.total }}\n\n                        {{ currencyProvider.currencySymbol }}</small>\n\n                </h1>\n\n                <p class="ellipsis">{{ address.addrStr }}\n\n                    <button [copyToClipboard]="address.addrStr">\n\n                        <ion-icon md="md-copy"></ion-icon>\n\n                    </button>\n\n                </p>\n\n\n\n                <h2>Summary</h2>\n\n                <ion-grid>\n\n                    <ion-row align-items-start justify-content-center>\n\n                    <ion-col col-auto text-center>\n\n                            <qr-code [value]="address.addrStr" [size]="160"></qr-code>\n\n                            <br />\n\n                            <img *ngIf="reward.activated && reward.balance_eligible>1000 && reward.balance_eligible<1000000"\n\n                                src="https://contattafiles.s3.us-west-1.amazonaws.com/tnt19836/2185nbLSm5JHuAj/457861.png" />\n\n                            <img *ngIf="reward.activated && reward.balance_eligible>=1000000"\n\n                                src="https://contattafiles.s3.us-west-1.amazonaws.com/tnt19836/lCyEE1RhD8AMjfV/4578621.png" />\n\n                        </ion-col>\n\n                        <ion-col>\n\n                            <ion-list class="list--summary">\n\n                                <ion-item>\n\n                                    Total Received\n\n                                    <ion-note item-end>\n\n                                        {{ address.received }} {{ currencyProvider.currencySymbol }}\n\n                                    </ion-note>\n\n                                </ion-item>\n\n\n\n                                <ion-item>\n\n                                    Total Sent\n\n                                    <ion-note item-end>\n\n                                        {{ address.sent }} {{ currencyProvider.currencySymbol }}\n\n                                    </ion-note>\n\n                                </ion-item>\n\n                                <ion-item>\n\n                                    Total Final Balance\n\n                                    <ion-note item-end>\n\n                                        {{ address.balance.total }} {{ currencyProvider.currencySymbol }}\n\n                                    </ion-note>\n\n                                </ion-item>\n\n                                <ion-item>\n\n                                    Locked Balance\n\n                                    <ion-note item-end>\n\n                                        {{ address.balance.locked }} {{ currencyProvider.currencySymbol }}\n\n                                    </ion-note>\n\n                                </ion-item>\n\n                                <ion-item>\n\n                                    Free Balance\n\n                                    <ion-note item-end>\n\n                                        {{ address.balance.unlocked }} {{ currencyProvider.currencySymbol }}\n\n                                    </ion-note>\n\n                                </ion-item>\n\n                                <ion-item>\n\n                                    Is active for rewards\n\n                                    <ion-note item-end>\n\n                                        {{ (reward.activated && (reward.activated === 1 || reward.activated===true)) ?\n\n                                        "Yes" : "No"}}\n\n                                    </ion-note>\n\n                                </ion-item>\n\n                                <ion-item>\n\n                                    Balance eligible for rewards\n\n                                    in the next round.\n\n                                    <ion-note item-end>\n\n                                        {{ (reward.balance_eligible || 0)}}\n\n                                    </ion-note>\n\n                                </ion-item>\n\n                                <ion-item>\n\n                                    * An activated address will have a balance eligible of 0 until the start of first round.\n\n                                    <ion-note item-end>\n\n\n\n                                    </ion-note>\n\n                                </ion-item>\n\n                            </ion-list>\n\n                        </ion-col>\n\n\n\n                    </ion-row>\n\n                </ion-grid>\n\n\n\n                <error class="error-message" message="{{errorMessage}}" *ngIf="errorMessage"></error>\n\n                <div class="error-warning" *ngIf="errorMessage">\n\n                    <ul>\n\n                        <li>1) If you are using Coinomi. Double check if it is not a new address.</li>\n\n                        <li>2) Coinomi creates 1 NEW address after each transaction</li>\n\n                        <li>3) That is not your REWARDs address!</li>\n\n                        <li>4) Go to receive tab and click on Previous addresses</li>\n\n                        <li>5) Find the right address</li>\n\n                    </ul>\n\n\n\n                </div>\n\n\n\n                <h1 *ngIf="!errorMessage">Transactions</h1>\n\n                <transaction-list [queryType]="\'address\'" [queryValue]="addrStr" *ngIf="!errorMessage">\n\n                </transaction-list>\n\n            </div>\n\n        </div>\n\n    </ion-grid>\n\n</ion-content>\n\n<footer></footer>\n\n'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\pages\address\address.html"*/
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

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_price_price__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_redir_redir__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_transactions_transactions__ = __webpack_require__(51);
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
            selector: 'page-transaction',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\pages\transaction\transaction.html"*/'<head-nav></head-nav>\n\n<ion-content>\n\n  <ion-grid fixed>\n\n\n\n    <div class="page-content">\n\n\n\n      <loader *ngIf="loading" [type]="\'title\'"></loader>\n\n\n\n      <error [message]="errorMessage" *ngIf="!loading && errorMessage && confirmations !== -3 "></error>\n\n\n\n      <div *ngIf="(!loading && !errorMessage) || confirmations === -3">\n\n        <h1 ion-text class="content-container--heading">\n\n          Transaction\n\n          <ion-note *ngIf="vout !== undefined">\n\n            <span class="tx-note" ion-text *ngIf="fromVout">Output {{ vout }}</span>\n\n            <span class="tx-note" ion-text *ngIf="!fromVout">Input {{ vout }}</span>\n\n          </ion-note>\n\n        </h1>\n\n\n\n        <p class="item-hash">\n\n          <b>Transaction Hash</b> {{ tx.txid }} <button [copyToClipboard]="tx.txid">\n\n            <ion-icon md="md-copy"></ion-icon>\n\n          </button>\n\n        </p>\n\n\n\n        <h2>Summary</h2>\n\n\n\n        <error [message]="errorMessage" *ngIf="!loading && errorMessage"></error>\n\n\n\n        <ion-list class="list--summary">\n\n\n\n          <transaction-summary [tx]="tx"></transaction-summary>\n\n          <!-- <transaction-summary-eth *ngIf="chainNetwork.chain === \'ETH\'" [tx]="tx" [chainNetwork]="chainNetwork"></transaction-summary-eth> -->\n\n\n\n          <ion-item>\n\n            Received Time\n\n            <ion-note item-end>\n\n              {{ tx.blockTime * 1000 | date:\'long\' }}\n\n            </ion-note>\n\n          </ion-item>\n\n          <ion-item>\n\n            Included in Block\n\n            <ion-note item-end>\n\n              <a (click)="goToBlock(tx.blockHash)">{{ tx.blockHash }}</a>\n\n            </ion-note>\n\n            <ion-note *ngIf="tx.confirmations === -3" item-end>\n\n              Invalid\n\n            </ion-note>\n\n            <ion-note *ngIf="tx.confirmations === -1" item-end>\n\n              Unconfirmed\n\n            </ion-note>\n\n          </ion-item>\n\n        </ion-list>\n\n\n\n        <h2>Details</h2>\n\n\n\n        <transaction-details [tx]="tx" [showCoins]="true"></transaction-details>\n\n        <!-- <transaction-details-eth *ngIf="chainNetwork.chain === \'ETH\'" [tx]="tx" [showCoins]="true" [chainNetwork]="chainNetwork"></transaction-details-eth> -->\n\n      </div>\n\n\n\n    </div>\n\n\n\n  </ion-grid>\n\n</ion-content>\n\n<footer></footer>\n\n'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\pages\transaction\transaction.html"*/
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

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



if (process.env.ENV === 'prod') {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(75)))

/***/ }),

/***/ 52:
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

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_address_address__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_blocks_blocks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_default_default__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_logger_logger__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_price_price__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_redir_redir__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_rewards_rewards__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_search_search__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_transactions_transactions__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__(48);
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
            declarations: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* InsightApp */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__pages__["c" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* InsightApp */], {
                    mode: 'md',
                    animate: false
                }, {
                    links: [
                        { loadChildren: '../pages/block-detail/block-detail.module#BlockDetailPageModule', name: 'block-detail', segment: 'block/:blockHash', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'address', segment: 'address/:addrStr', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/blocks/blocks.module#BlocksPageModule', name: 'blocks', segment: 'blocks', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/broadcast-tx/broadcast-tx.module#BroadcastTxPageModule', name: 'broadcast-tx', segment: 'broadcast-tx', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/ext/ext.module#ExtPageModule', name: 'ext', segment: 'ext/getmoneysupply', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'search', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction/transaction.module#TransactionPageModule', name: 'transaction', segment: 'tx/:txId', priority: 'low', defaultHistory: ['home'] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* InsightApp */], __WEBPACK_IMPORTED_MODULE_4__pages__["b" /* HomePage */], __WEBPACK_IMPORTED_MODULE_4__pages__["a" /* BlocksPage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_currency_currency__["a" /* CurrencyProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_blocks_blocks__["a" /* BlocksProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_transactions_transactions__["a" /* TxsProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_default_default__["a" /* DefaultProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_price_price__["a" /* PriceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_search_search__["a" /* SearchProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_redir_redir__["a" /* RedirProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_logger_logger__["a" /* Logger */],
                __WEBPACK_IMPORTED_MODULE_5__providers_address_address__["a" /* AddressProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_rewards_rewards__["a" /* RewardsProvider */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common__["e" /* Location */], { provide: __WEBPACK_IMPORTED_MODULE_17__angular_common__["f" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_17__angular_common__["g" /* PathLocationStrategy */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denomination_denomination_module__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer__ = __webpack_require__(825);
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

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadNavComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denomination_denomination_module__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__head_nav__ = __webpack_require__(826);
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

/***/ 824:
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
            selector: 'error',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\error\error.html"*/'<ion-row class="error-message">\n\n  <ion-col col-12>\n\n    {{ message }}\n\n  </ion-col>\n\n</ion-row>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\error\error.html"*/
        })
    ], ErrorComponent);
    return ErrorComponent;
}());

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 825:
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
            selector: 'footer',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\footer\footer.html"*/'<ion-footer>\n\n  <ion-toolbar fixed color="dark">\n\n    <div class="pages">\n\n      <!-- <a *ngIf="chainNetwork" (click)="openPage(\'broadcast-tx\')">Broadcast Transaction</a> -->\n\n    </div>\n\n    <div class="about">\n\n      <a href="https://github.com/bitpay/bitcore/tree/master/packages/insight" target="_blank">\n\n        <span class="logo">smartcash</span>\n\n        <span class="version">v2.0</span>\n\n      </a>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\footer\footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_logger_logger__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_price_price__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_redir_redir__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_search_search__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__denomination_denomination__ = __webpack_require__(315);
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
            selector: 'head-nav',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\head-nav\head-nav.html"*/'<ion-header no-border>\n\n    <ion-navbar color="bp-blue" class="nav-container" hideBackButton>\n\n        <ion-title (click)="goHome()" class="logo-header"><img src="../../assets/img/smartlogo.png" class="img-logo"\n\n                alt="SMARTCASH" /></ion-title>\n\n        <!--search bar -->\n\n        <form class="search" (ngSubmit)="search()">\n\n            <div class="input-container">\n\n                <div class="search-image-container">\n\n                    <img class="search-image" src="assets/img/search-icon.svg">\n\n                </div>\n\n                <input dir="auto" placeholder="{{ \'Search for block, transaction or address\' }}" [(ngModel)]="q"\n\n                    name="search" autocomplete="off" autocorrect="off" spellcheck="false">\n\n            </div>\n\n        </form>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar class="mobile-searchbar" fixed>\n\n        <form (ngSubmit)="search()">\n\n            <ion-searchbar #searchbar placeholder="{{ \'Search for block, transaction or address\' }}" [(ngModel)]="q"\n\n                name="search"></ion-searchbar>\n\n        </form>\n\n    </ion-toolbar>\n\n</ion-header>\n\n'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\head-nav\head-nav.html"*/
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

/***/ 827:
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
            selector: 'loader',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\loader\loader.html"*/'<div *ngIf="type == \'title\'">\n\n  <h1 class="title animated-background"></h1>\n\n  <p class="subtitle animated-background"></p>\n\n</div>\n\n\n\n<ion-row *ngIf="type == \'grid\'">\n\n  <ion-col col-2>\n\n    <div class="left-item animated-background"></div>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n    <div class="right-item animated-background"></div>\n\n  </ion-col>\n\n  <ion-col text-right>\n\n    <div class="right-item animated-background"></div>\n\n  </ion-col>\n\n  <ion-col col-2 hideWhen="portrait">\n\n    <div class="animated-background"></div>\n\n  </ion-col>\n\n  <ion-col col-2 text-right>\n\n    <div class="right-item animated-background"></div>\n\n  </ion-col>\n\n</ion-row>\n\n\n\n<div *ngIf="type == \'tx-list\' || type == \'tx-full-list\'" class="box-loader">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-7>\n\n        <div class="left-item animated-background"></div>\n\n      </ion-col>\n\n      <ion-col col-5 text-right>\n\n        <ion-note>\n\n          <div class="right-item animated-background"></div>\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row align-items-end class="small" *ngIf="type == \'tx-full-list\'">\n\n      <ion-col col-12 text-right text-uppercase>\n\n        <ion-chip class="animated-background">\n\n        </ion-chip>\n\n        <ion-chip class="animated-background">\n\n        </ion-chip>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</div>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\loader\loader.html"*/
        })
    ], LoaderComponent);
    return LoaderComponent;
}());

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 321,
	"./af.js": 321,
	"./ar": 322,
	"./ar-dz": 323,
	"./ar-dz.js": 323,
	"./ar-kw": 324,
	"./ar-kw.js": 324,
	"./ar-ly": 325,
	"./ar-ly.js": 325,
	"./ar-ma": 326,
	"./ar-ma.js": 326,
	"./ar-sa": 327,
	"./ar-sa.js": 327,
	"./ar-tn": 328,
	"./ar-tn.js": 328,
	"./ar.js": 322,
	"./az": 329,
	"./az.js": 329,
	"./be": 330,
	"./be.js": 330,
	"./bg": 331,
	"./bg.js": 331,
	"./bm": 332,
	"./bm.js": 332,
	"./bn": 333,
	"./bn.js": 333,
	"./bo": 334,
	"./bo.js": 334,
	"./br": 335,
	"./br.js": 335,
	"./bs": 336,
	"./bs.js": 336,
	"./ca": 337,
	"./ca.js": 337,
	"./cs": 338,
	"./cs.js": 338,
	"./cv": 339,
	"./cv.js": 339,
	"./cy": 340,
	"./cy.js": 340,
	"./da": 341,
	"./da.js": 341,
	"./de": 342,
	"./de-at": 343,
	"./de-at.js": 343,
	"./de-ch": 344,
	"./de-ch.js": 344,
	"./de.js": 342,
	"./dv": 345,
	"./dv.js": 345,
	"./el": 346,
	"./el.js": 346,
	"./en-au": 347,
	"./en-au.js": 347,
	"./en-ca": 348,
	"./en-ca.js": 348,
	"./en-gb": 349,
	"./en-gb.js": 349,
	"./en-ie": 350,
	"./en-ie.js": 350,
	"./en-il": 351,
	"./en-il.js": 351,
	"./en-in": 352,
	"./en-in.js": 352,
	"./en-nz": 353,
	"./en-nz.js": 353,
	"./en-sg": 354,
	"./en-sg.js": 354,
	"./eo": 355,
	"./eo.js": 355,
	"./es": 356,
	"./es-do": 357,
	"./es-do.js": 357,
	"./es-us": 358,
	"./es-us.js": 358,
	"./es.js": 356,
	"./et": 359,
	"./et.js": 359,
	"./eu": 360,
	"./eu.js": 360,
	"./fa": 361,
	"./fa.js": 361,
	"./fi": 362,
	"./fi.js": 362,
	"./fil": 363,
	"./fil.js": 363,
	"./fo": 364,
	"./fo.js": 364,
	"./fr": 365,
	"./fr-ca": 366,
	"./fr-ca.js": 366,
	"./fr-ch": 367,
	"./fr-ch.js": 367,
	"./fr.js": 365,
	"./fy": 368,
	"./fy.js": 368,
	"./ga": 369,
	"./ga.js": 369,
	"./gd": 370,
	"./gd.js": 370,
	"./gl": 371,
	"./gl.js": 371,
	"./gom-deva": 372,
	"./gom-deva.js": 372,
	"./gom-latn": 373,
	"./gom-latn.js": 373,
	"./gu": 374,
	"./gu.js": 374,
	"./he": 375,
	"./he.js": 375,
	"./hi": 376,
	"./hi.js": 376,
	"./hr": 377,
	"./hr.js": 377,
	"./hu": 378,
	"./hu.js": 378,
	"./hy-am": 379,
	"./hy-am.js": 379,
	"./id": 380,
	"./id.js": 380,
	"./is": 381,
	"./is.js": 381,
	"./it": 382,
	"./it-ch": 383,
	"./it-ch.js": 383,
	"./it.js": 382,
	"./ja": 384,
	"./ja.js": 384,
	"./jv": 385,
	"./jv.js": 385,
	"./ka": 386,
	"./ka.js": 386,
	"./kk": 387,
	"./kk.js": 387,
	"./km": 388,
	"./km.js": 388,
	"./kn": 389,
	"./kn.js": 389,
	"./ko": 390,
	"./ko.js": 390,
	"./ku": 391,
	"./ku.js": 391,
	"./ky": 392,
	"./ky.js": 392,
	"./lb": 393,
	"./lb.js": 393,
	"./lo": 394,
	"./lo.js": 394,
	"./lt": 395,
	"./lt.js": 395,
	"./lv": 396,
	"./lv.js": 396,
	"./me": 397,
	"./me.js": 397,
	"./mi": 398,
	"./mi.js": 398,
	"./mk": 399,
	"./mk.js": 399,
	"./ml": 400,
	"./ml.js": 400,
	"./mn": 401,
	"./mn.js": 401,
	"./mr": 402,
	"./mr.js": 402,
	"./ms": 403,
	"./ms-my": 404,
	"./ms-my.js": 404,
	"./ms.js": 403,
	"./mt": 405,
	"./mt.js": 405,
	"./my": 406,
	"./my.js": 406,
	"./nb": 407,
	"./nb.js": 407,
	"./ne": 408,
	"./ne.js": 408,
	"./nl": 409,
	"./nl-be": 410,
	"./nl-be.js": 410,
	"./nl.js": 409,
	"./nn": 411,
	"./nn.js": 411,
	"./oc-lnc": 412,
	"./oc-lnc.js": 412,
	"./pa-in": 413,
	"./pa-in.js": 413,
	"./pl": 414,
	"./pl.js": 414,
	"./pt": 415,
	"./pt-br": 416,
	"./pt-br.js": 416,
	"./pt.js": 415,
	"./ro": 417,
	"./ro.js": 417,
	"./ru": 418,
	"./ru.js": 418,
	"./sd": 419,
	"./sd.js": 419,
	"./se": 420,
	"./se.js": 420,
	"./si": 421,
	"./si.js": 421,
	"./sk": 422,
	"./sk.js": 422,
	"./sl": 423,
	"./sl.js": 423,
	"./sq": 424,
	"./sq.js": 424,
	"./sr": 425,
	"./sr-cyrl": 426,
	"./sr-cyrl.js": 426,
	"./sr.js": 425,
	"./ss": 427,
	"./ss.js": 427,
	"./sv": 428,
	"./sv.js": 428,
	"./sw": 429,
	"./sw.js": 429,
	"./ta": 430,
	"./ta.js": 430,
	"./te": 431,
	"./te.js": 431,
	"./tet": 432,
	"./tet.js": 432,
	"./tg": 433,
	"./tg.js": 433,
	"./th": 434,
	"./th.js": 434,
	"./tl-ph": 435,
	"./tl-ph.js": 435,
	"./tlh": 436,
	"./tlh.js": 436,
	"./tr": 437,
	"./tr.js": 437,
	"./tzl": 438,
	"./tzl.js": 438,
	"./tzm": 439,
	"./tzm-latn": 440,
	"./tzm-latn.js": 440,
	"./tzm.js": 439,
	"./ug-cn": 441,
	"./ug-cn.js": 441,
	"./uk": 442,
	"./uk.js": 442,
	"./ur": 443,
	"./ur.js": 443,
	"./uz": 444,
	"./uz-latn": 445,
	"./uz-latn.js": 445,
	"./uz.js": 444,
	"./vi": 446,
	"./vi.js": 446,
	"./x-pseudo": 447,
	"./x-pseudo.js": 447,
	"./yo": 448,
	"./yo.js": 448,
	"./zh-cn": 449,
	"./zh-cn.js": 449,
	"./zh-hk": 450,
	"./zh-hk.js": 450,
	"./zh-mo": 451,
	"./zh-mo.js": 451,
	"./zh-tw": 452,
	"./zh-tw.js": 452
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
webpackContext.id = 829;

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rewards_rewards__ = __webpack_require__(473);
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
            _this.smartRewards = response['SmartRewards Yearly Yield % 4 week with compounding'];
            _this.superRewards = response['SuperRewards Yearly Yield % 4 week with compounding'];
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
            selector: 'rewards',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\rewards\rewards.html"*/'    <ion-row>\n\n        <ion-col col-lg-6 col-12 class="text-center">\n\n            <ion-row class="">\n\n                <ion-col col-lg-12 class="headerTitle">\n\n                    <h2>1K+ SmartRewards 1MM+</h2>\n\n                </ion-col>                \n\n            </ion-row>\n\n            <ion-row class="contentRewards">\n\n                <ion-col col-lg-6 class="text-center">\n\n                    <h2>SmartRewards Yearly Yield % 4 week with compounding</h2>\n\n                    <h3>{{ smartRewards }} <span>%</span></h3>\n\n                </ion-col>\n\n        \n\n                <ion-col col-lg-6 class="text-center">\n\n                    <h2>SuperRewards Yearly Yield % 4 week with compounding </h2>\n\n                    <h3>{{ superRewards }} <span>%</span></h3>\n\n                </ion-col>\n\n            </ion-row>\n\n            \n\n        </ion-col>\n\n\n\n        <ion-col col-lg-6 col-12 class="text-center">\n\n            <ion-row>\n\n                <ion-col col-lg-12 class="headerTitle">\n\n                    <h2>SmartNodes</h2>\n\n                </ion-col>            \n\n            </ion-row>\n\n            <ion-row class="contentRewards">\n\n                <ion-col col-lg-4>\n\n                    <h2>SmartNode Collateral</h2>\n\n                    <h3>{{ colateral }}</h3>\n\n                </ion-col>\n\n                <ion-col col-lg-4>\n\n                    <h2>Yearly Rewards</h2>\n\n                    <h3>{{ yearly_rewards }}</h3>\n\n                </ion-col>\n\n                <ion-col col-lg-4>\n\n                    <h2>Yearly Yield</h2>\n\n                    <h3>{{ yearly_yield }} <span>%</span></h3>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-col>\n\n    </ion-row>\n\n'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\rewards\rewards.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_rewards_rewards__["a" /* RewardsProvider */]])
    ], RewardsComponent);
    return RewardsComponent;
}());

//# sourceMappingURL=rewards.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(474);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address_address__ = __webpack_require__(515);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_detail_block_detail__ = __webpack_require__(514);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_blocks__ = __webpack_require__(466);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__blocks_blocks__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__broadcast_tx_broadcast_tx__ = __webpack_require__(468);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transaction_transaction__ = __webpack_require__(516);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ext_ext__ = __webpack_require__(470);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_module__ = __webpack_require__(850);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__pages_module__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_error_error_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_head_nav_head_nav_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_latest_blocks_latest_blocks_module__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_rewards_rewards_module__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_blocks_blocks_module__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__broadcast_tx_broadcast_tx_module__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ext_ext_module__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_module__ = __webpack_require__(471);
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
                __WEBPACK_IMPORTED_MODULE_11__home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_module__["a" /* FooterComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_head_nav_head_nav_module__["a" /* HeadNavComponentModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_latest_blocks_latest_blocks_module__["a" /* LatestBlocksComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_error_error_module__["a" /* ErrorComponentModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_rewards_rewards_module__["a" /* RewardComponentModule */],
                __WEBPACK_IMPORTED_MODULE_10__ext_ext_module__["ExtPageModule"]
            ],
            entryComponents: [],
            providers: []
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_module__ = __webpack_require__(852);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_split_split__ = __webpack_require__(853);
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

/***/ 853:
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

/***/ 854:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\app\app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], InsightApp);
    return InsightApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader__ = __webpack_require__(827);
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

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__(824);
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

/***/ })

},[517]);
//# sourceMappingURL=main.js.map