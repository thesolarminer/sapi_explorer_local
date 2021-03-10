webpackJsonp([4],{

/***/ 150:
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(81)))

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestBlocksComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_moment__ = __webpack_require__(870);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_loader_loader_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_error_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__latest_blocks__ = __webpack_require__(472);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_blocks__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transactions_transactions__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_fromPromise__ = __webpack_require__(120);
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

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_random__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_random___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_random__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_default_default__ = __webpack_require__(150);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__providers_default_default__["a" /* DefaultProvider */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(81)))

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(18);
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

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/address/address.module": [
		899,
		0
	],
	"../pages/block-detail/block-detail.module": [
		900,
		1
	],
	"../pages/blocks/blocks.module": [
		326
	],
	"../pages/broadcast-tx/broadcast-tx.module": [
		324
	],
	"../pages/ext/ext.module": [
		474
	],
	"../pages/home/home.module": [
		476
	],
	"../pages/search/search.module": [
		901,
		2
	],
	"../pages/transaction/transaction.module": [
		902,
		3
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

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenominationComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denomination__ = __webpack_require__(321);
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

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenominationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(18);
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

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(80);
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

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_api__ = __webpack_require__(18);
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

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastTxPageModule", function() { return BroadcastTxPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footer_footer_module__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_head_nav_head_nav_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__broadcast_tx__ = __webpack_require__(325);
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

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BroadcastTxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_currency_currency__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_price_price__ = __webpack_require__(38);
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

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksPageModule", function() { return BlocksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footer_footer_module__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_head_nav_head_nav_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_latest_blocks_latest_blocks_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loader_loader_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks__ = __webpack_require__(473);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_from__ = __webpack_require__(71);
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

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__currency_currency__ = __webpack_require__(19);
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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TxsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_blocks__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__ = __webpack_require__(71);
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
                        url = this.apiProvider.getRandomSapiUrl() + "address/transactions/";
                        txs = [];
                        return [4 /*yield*/, this.httpClient.post(url, {
                                "pageNumber": 1,
                                "pageSize": 10,
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_4__blocks_blocks__["a" /* BlocksProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], TxsProvider);
    return TxsProvider;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestBlocksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_blocks_blocks__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_currency_currency__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_default_default__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_redir_redir__ = __webpack_require__(48);
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

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blocks_blocks__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_price_price__ = __webpack_require__(38);
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

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtPageModule", function() { return ExtPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_error_error_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_module__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_head_nav_head_nav_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loader_loader_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_transaction_details_eth_transaction_details_eth_module__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_transaction_details_transaction_details_module__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_transaction_summary_eth_transaction_summary_eth_module__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_transaction_summary_transaction_summary_module__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_copy_to_clipboard_copy_to_clipboard_module__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ext__ = __webpack_require__(475);
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
            declarations: [__WEBPACK_IMPORTED_MODULE_11__ext__["a" /* ExtPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_11__ext__["a" /* ExtPage */]),
                __WEBPACK_IMPORTED_MODULE_8__components_transaction_summary_eth_transaction_summary_eth_module__["a" /* TransactionSummaryEthComponentModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_transaction_summary_transaction_summary_module__["a" /* TransactionSummaryComponentModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_transaction_details_transaction_details_module__["a" /* TransactionDetailsComponentModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_transaction_details_eth_transaction_details_eth_module__["a" /* TransactionDetailsEthComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_module__["a" /* FooterComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_head_nav_head_nav_module__["a" /* HeadNavComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_loader_loader_module__["a" /* LoaderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_error_error_module__["a" /* ErrorComponentModule */],
                __WEBPACK_IMPORTED_MODULE_10__directives_copy_to_clipboard_copy_to_clipboard_module__["a" /* CopyToClipboardModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_11__ext__["a" /* ExtPage */]]
        })
    ], ExtPageModule);
    return ExtPageModule;
}());

//# sourceMappingURL=ext.module.js.map

/***/ }),

/***/ 475:
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
        // this.apiProvider.changeNetwork(this.chainNetwork);
        // this.currencyProvider.setCurrency(this.chainNetwork);
        // this.priceProvider.setCurrency();
        this.ext = '';
        this.getValue();
    }
    ExtPage.prototype.getValue = function () {
        this.ext = JSON.stringify('3.000.000.000,00');
    };
    ExtPage.prototype.ionViewDidEnter = function () {
    };
    ExtPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ext',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\pages\ext\ext.html"*/'{{ext}}'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\pages\ext\ext.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ExtPage);
    return ExtPage;
}());

//# sourceMappingURL=ext.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_error_error_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_module__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_head_nav_head_nav_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_latest_blocks_latest_blocks_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_loader_loader_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_rewards_rewards_module__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home__ = __webpack_require__(479);
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

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rewards__ = __webpack_require__(875);
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

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_from__ = __webpack_require__(71);
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

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_latest_blocks_latest_blocks__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_price_price__ = __webpack_require__(38);
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

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailsEthComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_details_eth__ = __webpack_require__(552);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransactionDetailsEthComponentModule = /** @class */ (function () {
    function TransactionDetailsEthComponentModule() {
    }
    TransactionDetailsEthComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__transaction_details_eth__["a" /* TransactionDetailsEthComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__transaction_details_eth__["a" /* TransactionDetailsEthComponent */]]
        })
    ], TransactionDetailsEthComponentModule);
    return TransactionDetailsEthComponentModule;
}());

//# sourceMappingURL=transaction-details-eth.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailsComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_details__ = __webpack_require__(868);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransactionDetailsComponentModule = /** @class */ (function () {
    function TransactionDetailsComponentModule() {
    }
    TransactionDetailsComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__transaction_details__["a" /* TransactionDetailsComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__transaction_details__["a" /* TransactionDetailsComponent */]]
        })
    ], TransactionDetailsComponentModule);
    return TransactionDetailsComponentModule;
}());

//# sourceMappingURL=transaction-details.module.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyToClipboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__copy_to_clipboard_directive__ = __webpack_require__(869);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CopyToClipboardModule = /** @class */ (function () {
    function CopyToClipboardModule() {
    }
    CopyToClipboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__copy_to_clipboard_directive__["a" /* CopyToClipboardDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__copy_to_clipboard_directive__["a" /* CopyToClipboardDirective */]]
        })
    ], CopyToClipboardModule);
    return CopyToClipboardModule;
}());

//# sourceMappingURL=copy-to-clipboard.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_address_address__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_price_price__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_transactions_transactions__ = __webpack_require__(47);
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
            selector: 'page-address',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\pages\address\address.html"*/'<head-nav></head-nav>\n\n<ion-content>\n\n    <ion-grid fixed>\n\n        <div class="page-content">\n\n            <loader *ngIf="loading" [type]="\'title\'"></loader>\n\n\n\n\n\n            <div *ngIf="!loading">\n\n\n\n                <h1 class="content-container--heading">Address <small>{{ address.balance }}\n\n                        {{ currencyProvider.currencySymbol }}</small>\n\n                </h1>\n\n                <p class="ellipsis">{{ address.addrStr }}\n\n                    <button [copyToClipboard]="address.addrStr">\n\n                        <ion-icon md="md-copy"></ion-icon>\n\n                    </button>\n\n                </p>\n\n\n\n                <h2>Summary</h2>\n\n                <ion-grid>\n\n                    <ion-row align-items-start justify-content-center>\n\n                        <ion-col>\n\n                            <ion-list class="list--summary">\n\n                                <ion-item>\n\n                                    Total Received\n\n                                    <ion-note item-end>\n\n                                        {{ address.received }} {{ currencyProvider.currencySymbol }}\n\n                                    </ion-note>\n\n                                </ion-item>\n\n\n\n                                <ion-item>\n\n                                    Total Sent\n\n                                    <ion-note item-end>\n\n                                        {{ address.sent }} {{ currencyProvider.currencySymbol }}\n\n                                    </ion-note>\n\n                                </ion-item>\n\n\n\n                                <ion-item>\n\n                                    Final Balance\n\n                                    <ion-note item-end>\n\n                                        {{ address.balance }} {{ currencyProvider.currencySymbol }}\n\n                                    </ion-note>\n\n                                </ion-item>\n\n\n\n                                <!-- <ion-item *ngIf="address.unconfirmed > 0">\n\n                  Unconfirmed Balance\n\n                  <ion-note item-end>\n\n                    {{ getConvertedNumber(address.unconfirmed) | number:\'1.0-8\' }} {{ currencyProvider.currencySymbol }}\n\n                  </ion-note>\n\n                </ion-item> -->\n\n\n\n                                <!-- <ion-item>\n\n                  Nro. Transactions\n\n                  <ion-note item-end>\n\n                    {{ nroTransactions || 0 }}\n\n                  </ion-note>\n\n                </ion-item> -->\n\n\n\n                                <ion-item>\n\n                                    Is active for rewards\n\n                                    <ion-note item-end>\n\n                                        {{ reward.activated }}\n\n                                    </ion-note>\n\n                                </ion-item>\n\n                                <ion-item>\n\n                                    Balance eligible for rewards\n\n                                    <ion-note item-end>\n\n                                        {{ reward.balance_eligible || 0 }}\n\n                                    </ion-note>\n\n                                </ion-item>\n\n                            </ion-list>\n\n                        </ion-col>\n\n                        <ion-col col-auto text-center>\n\n                            <qr-code [value]="address.addrStr" [size]="160"></qr-code>\n\n                            <br />\n\n                            <img *ngIf="reward.activated && reward.balance_eligible>1000 && reward.balance_eligible<1000000"\n\n                                src="https://contattafiles.s3.us-west-1.amazonaws.com/tnt19836/2185nbLSm5JHuAj/457861.png" />\n\n                            <img *ngIf="reward.activated && reward.balance_eligible>=1000000"\n\n                                src="https://contattafiles.s3.us-west-1.amazonaws.com/tnt19836/lCyEE1RhD8AMjfV/4578621.png" />\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n\n\n                <error class="error-message" message="{{errorMessage}}" *ngIf="errorMessage"></error>\n\n                <div class="error-warning" *ngIf="errorMessage">\n\n                    <ul>\n\n                        <li>1) If you are using Coinomi. Double check if it is not a new address.</li>\n\n                        <li>2) Coinomi creates 1 NEW address after each transaction</li>\n\n                        <li>3) That is not your REWARDs address!</li>\n\n                        <li>4) Go to receive tab and click on Previous addresses</li>\n\n                        <li>5) Find the right address</li>\n\n                    </ul>\n\n\n\n                </div>\n\n\n\n                <h1 *ngIf="!errorMessage">Transactions</h1>\n\n                <transaction-list [queryType]="\'address\'" [queryValue]="addrStr" *ngIf="!errorMessage">\n\n                </transaction-list>\n\n            </div>\n\n        </div>\n\n    </ion-grid>\n\n</ion-content>\n\n<footer></footer>\n\n'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\pages\address\address.html"*/
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

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blocks_blocks__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_price_price__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_redir_redir__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_transactions_transactions__ = __webpack_require__(47);
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

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionSummaryEthComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_summary_eth__ = __webpack_require__(873);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransactionSummaryEthComponentModule = /** @class */ (function () {
    function TransactionSummaryEthComponentModule() {
    }
    TransactionSummaryEthComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__transaction_summary_eth__["a" /* TransactionSummaryEthComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__transaction_summary_eth__["a" /* TransactionSummaryEthComponent */]]
        })
    ], TransactionSummaryEthComponentModule);
    return TransactionSummaryEthComponentModule;
}());

//# sourceMappingURL=transaction-summary-eth.module.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionSummaryComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_summary__ = __webpack_require__(874);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransactionSummaryComponentModule = /** @class */ (function () {
    function TransactionSummaryComponentModule() {
    }
    TransactionSummaryComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__transaction_summary__["a" /* TransactionSummaryComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__transaction_summary__["a" /* TransactionSummaryComponent */]]
        })
    ], TransactionSummaryComponentModule);
    return TransactionSummaryComponentModule;
}());

//# sourceMappingURL=transaction-summary.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_price_price__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_redir_redir__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_transactions_transactions__ = __webpack_require__(47);
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

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



if (process.env.ENV === 'prod') {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(81)))

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_address_address__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_blocks_blocks__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_currency_currency__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_default_default__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_logger_logger__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_price_price__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_redir_redir__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_rewards_rewards__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_search_search__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_transactions_transactions__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__(53);
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
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'address', segment: 'address/:addrStr', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/block-detail/block-detail.module#BlockDetailPageModule', name: 'block-detail', segment: 'block/:blockHash', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/broadcast-tx/broadcast-tx.module#BroadcastTxPageModule', name: 'broadcast-tx', segment: 'broadcast-tx', priority: 'low', defaultHistory: ['home'] },
                        { loadChildren: '../pages/blocks/blocks.module#BlocksPageModule', name: 'blocks', segment: 'blocks', priority: 'low', defaultHistory: ['home'] },
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

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailsEthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blocks_blocks__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_redir_redir__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_transactions_transactions__ = __webpack_require__(47);
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
 * Generated class for the TransactionDetailsEthComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var TransactionDetailsEthComponent = /** @class */ (function () {
    function TransactionDetailsEthComponent(currencyProvider, apiProvider, txProvider, redirProvider, blocksProvider) {
        this.currencyProvider = currencyProvider;
        this.apiProvider = apiProvider;
        this.txProvider = txProvider;
        this.redirProvider = redirProvider;
        this.blocksProvider = blocksProvider;
        this.tx = {};
        this.showCoins = false;
    }
    TransactionDetailsEthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.txProvider
            .getConfirmations(this.tx.blockheight)
            .subscribe(function (confirmations) {
            _this.tx.confirmations = confirmations;
        });
    };
    TransactionDetailsEthComponent.prototype.goToTx = function (txId, vout, fromVout) {
        this.redirProvider.redir('transaction', {
            txId: txId,
            chain: this.chainNetwork.chain,
            network: this.chainNetwork.network,
            vout: vout,
            fromVout: fromVout
        });
    };
    TransactionDetailsEthComponent.prototype.goToAddress = function (addrStr) {
        this.redirProvider.redir('address', {
            addrStr: addrStr,
            chain: this.chainNetwork.chain,
            network: this.chainNetwork.network
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionDetailsEthComponent.prototype, "tx", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionDetailsEthComponent.prototype, "showCoins", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionDetailsEthComponent.prototype, "chainNetwork", void 0);
    TransactionDetailsEthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'transaction-details-eth',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\transaction-details-eth\transaction-details-eth.html"*/'<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-7>\n\n      <div class="ellipsis">\n\n        <span>\n\n          <a (click)="goToTx(tx.txid)">{{ tx.txid }}</a>\n\n        </span>\n\n      </div>\n\n    </ion-col>\n\n    <ion-col col-5 text-right>\n\n      <ion-note *ngIf="tx.time">\n\n        <span translate>mined on</span>\n\n        <time>{{ tx.time * 1000 | date:\'medium\' }}</time>\n\n      </ion-note>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row align-items-end class="small" *ngIf="!showCoins">\n\n    <ion-col col-12 text-right text-uppercase>\n\n      <ion-chip item-end color="danger" *ngIf="tx.confirmations === -3">\n\n        <ion-label>\n\n          Invalid\n\n        </ion-label>\n\n      </ion-chip>\n\n      <ion-chip item-end color="warning" *ngIf="tx.confirmations === -1">\n\n        <ion-label>\n\n          Unconfirmed\n\n        </ion-label>\n\n      </ion-chip>\n\n      <ion-chip item-end color="primary" *ngIf="tx.confirmations === 1">\n\n        <ion-label>\n\n          1 Confirmation\n\n        </ion-label>\n\n      </ion-chip>\n\n      <ion-chip item-end color="primary" *ngIf="tx.confirmations > 1">\n\n        <ion-label>\n\n          {{ tx.confirmations }} Confirmations\n\n        </ion-label>\n\n      </ion-chip>\n\n      <ion-chip item-end color="default">\n\n        <ion-label>\n\n          {{ currencyProvider.getConvertedNumber(tx.valueOut, chainNetwork.chain) | number:\'1.0-8\' }} {{ currencyProvider.currencySymbol }}\n\n        </ion-label>\n\n      </ion-chip>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="showCoins" align-items-start>\n\n    <ion-col col-12 col-md-5>\n\n\n\n      <ion-list [hidden]="!tx.isCoinBase">\n\n        <ion-item>\n\n          No Inputs (Newly Generated Coins)\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list [hidden]="tx.isCoinBase">\n\n        <ion-item *ngIf="tx.from">\n\n          <div class="ellipsis">\n\n            <p>\n\n              <a (click)="goToAddress(tx.from)">{{ tx.from }}</a>\n\n            </p>\n\n          </div>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n    </ion-col>\n\n\n\n    <ion-col col-12 col-md-1 text-center class="arrow-forward">\n\n      <ion-icon name="arrow-forward"></ion-icon>\n\n    </ion-col>\n\n\n\n    <ion-col col-12 col-md-6>\n\n      <ion-list>\n\n        <ion-item *ngIf="tx.to">\n\n          <div>\n\n            <div class="ellipsis">\n\n              <p>\n\n                <a (click)="goToAddress(tx.to)">{{ tx.to }}</a>\n\n              </p>\n\n            </div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row align-items-start text-uppercase class="small" *ngIf="showCoins">\n\n    <ion-col col-6>\n\n      <div *ngIf="!tx.isCoinBase && currencyProvider.getConvertedNumber(tx.fee) >= 0">\n\n        <ion-chip>\n\n          <ion-label>Fee\n\n            <span text-nowrap>{{ currencyProvider.getConvertedNumber(tx.fee, chainNetwork.chain) | number:\'1.0-8\' }}\n\n              {{ currencyProvider.currencySymbol }}</span>\n\n          </ion-label>\n\n        </ion-chip>\n\n      </div>\n\n    </ion-col>\n\n    <ion-col col-6 text-right>\n\n      <ion-chip color="danger" *ngIf="tx.confirmations === -3">\n\n        <ion-label>Invalid</ion-label>\n\n      </ion-chip>\n\n      <ion-chip color="warning" *ngIf="tx.confirmations === -1">\n\n        <ion-label>Unconfirmed</ion-label>\n\n      </ion-chip>\n\n      <ion-chip color="primary" *ngIf="tx.confirmations === 1">\n\n        <ion-label>1 Confirmation</ion-label>\n\n      </ion-chip>\n\n      <ion-chip color="primary" *ngIf="tx.confirmations > 1">\n\n        <ion-label>{{ tx.confirmations }} Confirmations\n\n        </ion-label>\n\n      </ion-chip>\n\n      <ion-chip color="default">\n\n        <ion-label>{{ currencyProvider.getConvertedNumber(tx.valueOut, chainNetwork.chain) | number:\'1.0-8\' }}\n\n          {{ currencyProvider.currencySymbol }}\n\n        </ion-label>\n\n      </ion-chip>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\transaction-details-eth\transaction-details-eth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_transactions_transactions__["a" /* TxsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_redir_redir__["a" /* RedirProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blocks_blocks__["a" /* BlocksProvider */]])
    ], TransactionDetailsEthComponent);
    return TransactionDetailsEthComponent;
}());

//# sourceMappingURL=transaction-details-eth.js.map

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denomination_denomination_module__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer__ = __webpack_require__(866);
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

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadNavComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__denomination_denomination_module__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__head_nav__ = __webpack_require__(867);
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

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader__ = __webpack_require__(864);
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

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__(865);
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

/***/ 864:
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

/***/ 865:
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

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'footer',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\footer\footer.html"*/'<ion-footer>\n\n  <ion-toolbar fixed color="dark">\n\n    <div class="pages">\n\n      <!-- <a *ngIf="chainNetwork" (click)="openPage(\'broadcast-tx\')">Broadcast Transaction</a> -->\n\n    </div>\n\n    <div class="about">\n\n      <a href="https://github.com/bitpay/bitcore/tree/master/packages/insight" target="_blank">\n\n        <span class="logo">smartcash</span>\n\n        <span class="version">v1.3</span>\n\n      </a>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\footer\footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_logger_logger__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_price_price__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_redir_redir__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_search_search__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__denomination_denomination__ = __webpack_require__(321);
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

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blocks_blocks__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_redir_redir__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_transactions_transactions__ = __webpack_require__(47);
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
 * Generated class for the TransactionDetailsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var TransactionDetailsComponent = /** @class */ (function () {
    function TransactionDetailsComponent(currencyProvider, apiProvider, txProvider, redirProvider, blocksProvider, nav, navParams) {
        this.currencyProvider = currencyProvider;
        this.apiProvider = apiProvider;
        this.txProvider = txProvider;
        this.redirProvider = redirProvider;
        this.blocksProvider = blocksProvider;
        this.nav = nav;
        this.navParams = navParams;
        this.expanded = false;
        this.showCoins = true;
        this.COIN = 100000000;
        this.DEFAULT_RBF_SEQNUMBER = 0xffffffff;
    }
    TransactionDetailsComponent.prototype.ngOnInit = function () {
        // this.getConfirmations();    
    };
    TransactionDetailsComponent.prototype.getCoins = function () {
        // this.txProvider
        //   .getCoins(this.tx.txid, this.chainNetwork)
        //   .subscribe(data => {
        //       console.log('getCoins', data);
        //     this.tx.vin = data.inputs;
        //     this.tx.vout = data.outputs;
        //     this.tx.fee = this.txProvider.getFee(this.tx);
        //     this.tx.isRBF = _.some(data.inputs, input => {
        //       return (
        //         input.sequenceNumber &&
        //         input.sequenceNumber < this.DEFAULT_RBF_SEQNUMBER - 1
        //       );
        //     });
        //     this.tx.hasUnconfirmedInputs = _.some(data.inputs, input => {
        //       return input.mintHeight < 0;
        //     });
        //     this.tx.valueOut = data.outputs.reduce((a, b) => a + b.value, 0);
        //   });
    };
    TransactionDetailsComponent.prototype.getAddress = function (v) {
        if (v.address === '') {
            return 'Unparsed address';
        }
        return v.address;
    };
    // public getConfirmations() {
    //   this.txProvider
    //     .getConfirmations(this.tx.blockHeight)
    //     .subscribe(confirmations => {
    //       this.confirmations = confirmations;
    //     });
    // }
    TransactionDetailsComponent.prototype.goToTx = function (txId, vout, fromVout) {
        this.redirProvider.redir('transaction', {
            txId: txId,
            vout: vout,
            fromVout: fromVout,
            prevPage: 'transaction-details'
        });
    };
    TransactionDetailsComponent.prototype.goToAddress = function (addrStr) {
        this.redirProvider.redir('address', {
            addrStr: addrStr
        });
    };
    TransactionDetailsComponent.prototype.toggleExpanded = function () {
        this.expanded = !this.expanded;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionDetailsComponent.prototype, "tx", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionDetailsComponent.prototype, "showCoins", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionDetailsComponent.prototype, "chainNetwork", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TransactionDetailsComponent.prototype, "page", void 0);
    TransactionDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'transaction-details',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\transaction-details\transaction-details.html"*/'<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-7>\n\n      <div class="ellipsis">\n\n        <span *ngIf="showCoins">\n\n          <ion-icon name="add-circle" [hidden]="expanded" (click)="toggleExpanded()"></ion-icon>\n\n          <ion-icon name="remove-circle" [hidden]="!expanded" (click)="toggleExpanded()"></ion-icon>\n\n        </span>\n\n        <span>\n\n          <a (click)="goToTx(tx.txid)">{{ tx.txid }}</a>\n\n        </span>\n\n      </div>\n\n    </ion-col>\n\n    <ion-col col-5 text-right>\n\n      <ion-note *ngIf="tx.blockTime">\n\n        <span translate>mined on</span>\n\n        <time>{{ tx.blockTime * 1000 | date:\'medium\' }}</time>\n\n      </ion-note>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row align-items-end class="small" *ngIf="!showCoins">\n\n    <ion-col col-12 text-right text-uppercase>\n\n      <ion-chip item-end color="danger" *ngIf="tx.confirmations === -3">\n\n        <ion-label>\n\n          Invalid\n\n        </ion-label>\n\n      </ion-chip>\n\n      <ion-chip item-end color="warning" *ngIf="tx.confirmations === -1">\n\n        <ion-label>\n\n          Unconfirmed\n\n        </ion-label>\n\n      </ion-chip>\n\n      <ion-chip item-end color="primary" *ngIf="tx.confirmations === 1">\n\n        <ion-label>\n\n          1 Confirmation\n\n        </ion-label>\n\n      </ion-chip>\n\n      <ion-chip item-end color="primary" *ngIf="tx.confirmations > 1">\n\n        <ion-label>\n\n          {{ tx.confirmations }} Confirmations\n\n        </ion-label>\n\n      </ion-chip>\n\n      <ion-chip item-end color="default">\n\n        <ion-label>\n\n          <!-- {{ currencyProvider.getConvertedNumber(tx.valueOut, chainNetwork.chain) | number:\'1.0-8\' }} {{ currencyProvider.currencySymbol }} -->\n\n        </ion-label>\n\n      </ion-chip>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="showCoins" align-items-start>\n\n    <ion-col col-12 col-md-5>\n\n      <ion-list [hidden]="!tx.coinbase">\n\n        <ion-item>\n\n          No Inputs (Newly Generated Coins)\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list [hidden]="tx.coinbase">\n\n        <ion-item *ngFor="let vin of tx.coins.inputs; let i = index ">\n\n          <button item-start ion-button *ngIf="expanded" (click)="goToTx(vin.items[i].mintTxid, i, false)" clear icon-only>\n\n            <ion-icon color="primary" name="ios-arrow-forward"></ion-icon>\n\n          </button>\n\n\n\n          <div class="ellipsis">\n\n            <p>\n\n              <a (click)="goToAddress(vin.address)"\n\n                [ngClass]="{\'disabled-link\': getAddress(vin) === \'Unparsed address\' }">{{ getAddress(vin) }}</a>\n\n            </p>\n\n          </div>\n\n          <div [hidden]="!expanded">\n\n            <p *ngIf="tx.confirmations > 0">\n\n              <b>Confirmations</b> {{ tx.confirmations }}</p>\n\n            <p>\n\n              <b>Unlocking Script</b>\n\n            </p>\n\n         \n\n              <div *ngIf="vin.script">\n\n                <div class="unlocking-script">\n\n                  <p>{{ vin.script.asm }}\n\n                </div>\n\n              </div>\n\n          </div>\n\n\n\n          <div item-end>\n\n            {{ vin.value }} {{ currencyProvider.currencySymbol }}             \n\n          </div>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="tx.from">\n\n          <div class="ellipsis">\n\n            <p>\n\n              <a (click)="goToAddress(tx.from)">{{ tx.from }}</a>\n\n            </p>\n\n          </div>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-col>\n\n\n\n    <ion-col col-12 col-md-1 text-center class="arrow-forward">\n\n      <ion-icon name="arrow-forward"></ion-icon>\n\n    </ion-col>\n\n\n\n    <ion-col col-12 col-md-6>\n\n      <ion-list>\n\n        <ion-item *ngFor="let vout of tx.coins.outputs; let i = index">         \n\n          <div>\n\n            <div class="ellipsis">\n\n              <p>\n\n                <a [ngClass]="{\'disabled-link\': getAddress(vout) === \'Unparsed address\' }"\n\n                  (click)="goToAddress(vout.address)">{{ getAddress(vout) }}</a>\n\n              </p>\n\n            </div>\n\n            <div *ngIf="expanded">\n\n              <p>\n\n                <b>Script Template</b>\n\n                <i>{{ vout.script.type }}</i>\n\n              </p>\n\n              <p>\n\n                <b>Locking Script</b>\n\n              </p>\n\n              <div class="locking-script">\n\n                <p>{{ vout.script.asm }}</p>\n\n              </div>\n\n            </div>\n\n          </div>\n\n\n\n          <div item-end>\n\n            {{ vout.value }} {{ currencyProvider.currencySymbol }}\n\n            <span [hidden]="!vout.spentTxid">(S)</span>\n\n            <span [hidden]="vout.spentTxid">(U)</span>\n\n          </div>\n\n\n\n          <button item-end ion-button *ngIf="expanded && vout.spentTxid && vout.spentTxid !== \'\' " (click)="\n\n            goToTx(vout.spentTxid, i, true)" clear icon-only>\n\n            <ion-icon color="primary" name="ios-arrow-forward"></ion-icon>\n\n          </button>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="tx.to">\n\n          <div>\n\n            <div class="ellipsis">\n\n              <p>\n\n                <a (click)="goToAddress(tx.to)">{{ tx.to }}</a>\n\n              </p>\n\n            </div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row align-items-start text-uppercase class="small" *ngIf="showCoins">\n\n    <ion-col col-6>\n\n      <div *ngIf="!tx.isCoinBase && currencyProvider.getConvertedNumber(tx.fee) >= 0">\n\n        <ion-chip>\n\n          <ion-label>Fee\n\n            <!-- <span text-nowrap>{{ currencyProvider.getConvertedNumber(tx.fee, chainNetwork.chain) | number:\'1.0-8\' }}\n\n              {{ currencyProvider.currencySymbol }}</span> -->\n\n          </ion-label>\n\n        </ion-chip>\n\n      </div>\n\n    </ion-col>\n\n    <ion-col col-6 text-right>\n\n      <ion-chip color="danger" *ngIf="tx.confirmations === -3">\n\n        <ion-label>Invalid</ion-label>\n\n      </ion-chip>\n\n      <ion-chip  color="warning" *ngIf="tx.confirmations === -1">\n\n        <ion-label>Unconfirmed</ion-label>\n\n      </ion-chip>\n\n      <ion-chip  color="primary" *ngIf="tx.confirmations === 1">\n\n        <ion-label>1 Confirmation</ion-label>\n\n      </ion-chip>\n\n      <ion-chip color="primary" *ngIf="tx.confirmations > 1">\n\n        <ion-label>{{ tx.confirmations }} Confirmations\n\n        </ion-label>\n\n      </ion-chip>\n\n      <ion-chip color="danger" *ngIf="tx.isRBF && tx.confirmations === -1">\n\n        <ion-label>Replace By Fee (RBF) enabled\n\n        </ion-label>\n\n      </ion-chip>\n\n      <ion-chip color="danger" *ngIf="tx.hasUnconfirmedInputs">\n\n        <ion-label>Tx has unconfirmed inputs\n\n        </ion-label>\n\n      </ion-chip>\n\n      <ion-chip color="default">\n\n        <ion-label>{{ tx.value }}\n\n          {{ currencyProvider.currencySymbol }}\n\n        </ion-label>\n\n      </ion-chip>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\transaction-details\transaction-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_transactions_transactions__["a" /* TxsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_redir_redir__["a" /* RedirProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_blocks_blocks__["a" /* BlocksProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TransactionDetailsComponent);
    return TransactionDetailsComponent;
}());

//# sourceMappingURL=transaction-details.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyToClipboardDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CopyToClipboardDirective = /** @class */ (function () {
    function CopyToClipboardDirective(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    CopyToClipboardDirective.prototype.copyText = function () {
        var textArea = document.createElement('textarea');
        textArea.style.position = 'fixed';
        textArea.style.top = '-999px';
        textArea.style.left = '-999px';
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = '0';
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        textArea.value = this.copyToClipboard;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            var message = successful
                ? 'Copied to Clipboard'
                : 'Something went wrong, please try again';
            this.presentToast(message);
        }
        catch (err) {
            this.presentToast('Unable to copy');
        }
        document.body.removeChild(textArea);
    };
    CopyToClipboardDirective.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CopyToClipboardDirective.prototype, "copyToClipboard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CopyToClipboardDirective.prototype, "copyText", null);
    CopyToClipboardDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[copyToClipboard]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], CopyToClipboardDirective);
    return CopyToClipboardDirective;
}());

//# sourceMappingURL=copy-to-clipboard.directive.js.map

/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 328,
	"./af.js": 328,
	"./ar": 329,
	"./ar-dz": 330,
	"./ar-dz.js": 330,
	"./ar-kw": 331,
	"./ar-kw.js": 331,
	"./ar-ly": 332,
	"./ar-ly.js": 332,
	"./ar-ma": 333,
	"./ar-ma.js": 333,
	"./ar-sa": 334,
	"./ar-sa.js": 334,
	"./ar-tn": 335,
	"./ar-tn.js": 335,
	"./ar.js": 329,
	"./az": 336,
	"./az.js": 336,
	"./be": 337,
	"./be.js": 337,
	"./bg": 338,
	"./bg.js": 338,
	"./bm": 339,
	"./bm.js": 339,
	"./bn": 340,
	"./bn.js": 340,
	"./bo": 341,
	"./bo.js": 341,
	"./br": 342,
	"./br.js": 342,
	"./bs": 343,
	"./bs.js": 343,
	"./ca": 344,
	"./ca.js": 344,
	"./cs": 345,
	"./cs.js": 345,
	"./cv": 346,
	"./cv.js": 346,
	"./cy": 347,
	"./cy.js": 347,
	"./da": 348,
	"./da.js": 348,
	"./de": 349,
	"./de-at": 350,
	"./de-at.js": 350,
	"./de-ch": 351,
	"./de-ch.js": 351,
	"./de.js": 349,
	"./dv": 352,
	"./dv.js": 352,
	"./el": 353,
	"./el.js": 353,
	"./en-au": 354,
	"./en-au.js": 354,
	"./en-ca": 355,
	"./en-ca.js": 355,
	"./en-gb": 356,
	"./en-gb.js": 356,
	"./en-ie": 357,
	"./en-ie.js": 357,
	"./en-il": 358,
	"./en-il.js": 358,
	"./en-in": 359,
	"./en-in.js": 359,
	"./en-nz": 360,
	"./en-nz.js": 360,
	"./en-sg": 361,
	"./en-sg.js": 361,
	"./eo": 362,
	"./eo.js": 362,
	"./es": 363,
	"./es-do": 364,
	"./es-do.js": 364,
	"./es-us": 365,
	"./es-us.js": 365,
	"./es.js": 363,
	"./et": 366,
	"./et.js": 366,
	"./eu": 367,
	"./eu.js": 367,
	"./fa": 368,
	"./fa.js": 368,
	"./fi": 369,
	"./fi.js": 369,
	"./fil": 370,
	"./fil.js": 370,
	"./fo": 371,
	"./fo.js": 371,
	"./fr": 372,
	"./fr-ca": 373,
	"./fr-ca.js": 373,
	"./fr-ch": 374,
	"./fr-ch.js": 374,
	"./fr.js": 372,
	"./fy": 375,
	"./fy.js": 375,
	"./ga": 376,
	"./ga.js": 376,
	"./gd": 377,
	"./gd.js": 377,
	"./gl": 378,
	"./gl.js": 378,
	"./gom-deva": 379,
	"./gom-deva.js": 379,
	"./gom-latn": 380,
	"./gom-latn.js": 380,
	"./gu": 381,
	"./gu.js": 381,
	"./he": 382,
	"./he.js": 382,
	"./hi": 383,
	"./hi.js": 383,
	"./hr": 384,
	"./hr.js": 384,
	"./hu": 385,
	"./hu.js": 385,
	"./hy-am": 386,
	"./hy-am.js": 386,
	"./id": 387,
	"./id.js": 387,
	"./is": 388,
	"./is.js": 388,
	"./it": 389,
	"./it-ch": 390,
	"./it-ch.js": 390,
	"./it.js": 389,
	"./ja": 391,
	"./ja.js": 391,
	"./jv": 392,
	"./jv.js": 392,
	"./ka": 393,
	"./ka.js": 393,
	"./kk": 394,
	"./kk.js": 394,
	"./km": 395,
	"./km.js": 395,
	"./kn": 396,
	"./kn.js": 396,
	"./ko": 397,
	"./ko.js": 397,
	"./ku": 398,
	"./ku.js": 398,
	"./ky": 399,
	"./ky.js": 399,
	"./lb": 400,
	"./lb.js": 400,
	"./lo": 401,
	"./lo.js": 401,
	"./lt": 402,
	"./lt.js": 402,
	"./lv": 403,
	"./lv.js": 403,
	"./me": 404,
	"./me.js": 404,
	"./mi": 405,
	"./mi.js": 405,
	"./mk": 406,
	"./mk.js": 406,
	"./ml": 407,
	"./ml.js": 407,
	"./mn": 408,
	"./mn.js": 408,
	"./mr": 409,
	"./mr.js": 409,
	"./ms": 410,
	"./ms-my": 411,
	"./ms-my.js": 411,
	"./ms.js": 410,
	"./mt": 412,
	"./mt.js": 412,
	"./my": 413,
	"./my.js": 413,
	"./nb": 414,
	"./nb.js": 414,
	"./ne": 415,
	"./ne.js": 415,
	"./nl": 416,
	"./nl-be": 417,
	"./nl-be.js": 417,
	"./nl.js": 416,
	"./nn": 418,
	"./nn.js": 418,
	"./oc-lnc": 419,
	"./oc-lnc.js": 419,
	"./pa-in": 420,
	"./pa-in.js": 420,
	"./pl": 421,
	"./pl.js": 421,
	"./pt": 422,
	"./pt-br": 423,
	"./pt-br.js": 423,
	"./pt.js": 422,
	"./ro": 424,
	"./ro.js": 424,
	"./ru": 425,
	"./ru.js": 425,
	"./sd": 426,
	"./sd.js": 426,
	"./se": 427,
	"./se.js": 427,
	"./si": 428,
	"./si.js": 428,
	"./sk": 429,
	"./sk.js": 429,
	"./sl": 430,
	"./sl.js": 430,
	"./sq": 431,
	"./sq.js": 431,
	"./sr": 432,
	"./sr-cyrl": 433,
	"./sr-cyrl.js": 433,
	"./sr.js": 432,
	"./ss": 434,
	"./ss.js": 434,
	"./sv": 435,
	"./sv.js": 435,
	"./sw": 436,
	"./sw.js": 436,
	"./ta": 437,
	"./ta.js": 437,
	"./te": 438,
	"./te.js": 438,
	"./tet": 439,
	"./tet.js": 439,
	"./tg": 440,
	"./tg.js": 440,
	"./th": 441,
	"./th.js": 441,
	"./tl-ph": 442,
	"./tl-ph.js": 442,
	"./tlh": 443,
	"./tlh.js": 443,
	"./tr": 444,
	"./tr.js": 444,
	"./tzl": 445,
	"./tzl.js": 445,
	"./tzm": 446,
	"./tzm-latn": 447,
	"./tzm-latn.js": 447,
	"./tzm.js": 446,
	"./ug-cn": 448,
	"./ug-cn.js": 448,
	"./uk": 449,
	"./uk.js": 449,
	"./ur": 450,
	"./ur.js": 450,
	"./uz": 451,
	"./uz-latn": 452,
	"./uz-latn.js": 452,
	"./uz.js": 451,
	"./vi": 453,
	"./vi.js": 453,
	"./x-pseudo": 454,
	"./x-pseudo.js": 454,
	"./yo": 455,
	"./yo.js": 455,
	"./zh-cn": 456,
	"./zh-cn.js": 456,
	"./zh-hk": 457,
	"./zh-hk.js": 457,
	"./zh-mo": 458,
	"./zh-mo.js": 458,
	"./zh-tw": 459,
	"./zh-tw.js": 459
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
webpackContext.id = 871;

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionSummaryEthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_currency_currency__ = __webpack_require__(19);
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
 * Generated class for the TransactionSummaryEthComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var TransactionSummaryEthComponent = /** @class */ (function () {
    function TransactionSummaryEthComponent(currencyProvider) {
        this.currencyProvider = currencyProvider;
        this.tx = {};
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionSummaryEthComponent.prototype, "tx", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionSummaryEthComponent.prototype, "chainNetwork", void 0);
    TransactionSummaryEthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'transaction-summary-eth',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\transaction-summary-eth\transaction-summary-eth.html"*/'<ion-item>\n\n  Gas Limit\n\n  <ion-note item-end>\n\n      <span text-nowrap>{{ tx.gasLimit }}</span>\n\n  </ion-note>\n\n</ion-item>\n\n<ion-item>\n\n  Gas Price\n\n  <ion-note item-end>\n\n    <span text-nowrap>{{ currencyProvider.getConvertedNumber(tx.gasPrice, chainNetwork.chain) | number:\'1.0-8\' }}\n\n        {{ currencyProvider.currencySymbol }}</span>\n\n  </ion-note>\n\n</ion-item>\n\n<ion-item>\n\n  From\n\n  <ion-note item-end>\n\n    {{ tx.from }}\n\n  </ion-note>\n\n</ion-item>\n\n<ion-item>\n\n  To\n\n  <ion-note item-end>\n\n    {{ tx.to }}\n\n  </ion-note>\n\n</ion-item>\n\n<ion-item *ngIf="tx.confirmations > 0">\n\n  Mined Time\n\n  <ion-note item-end>\n\n    {{ tx.blocktime * 1000 | date:\'long\' }}\n\n  </ion-note>\n\n</ion-item>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\transaction-summary-eth\transaction-summary-eth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_currency_currency__["a" /* CurrencyProvider */]])
    ], TransactionSummaryEthComponent);
    return TransactionSummaryEthComponent;
}());

//# sourceMappingURL=transaction-summary-eth.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_currency_currency__ = __webpack_require__(19);
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
 * Generated class for the TransactionSummaryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var TransactionSummaryComponent = /** @class */ (function () {
    function TransactionSummaryComponent(currencyProvider) {
        this.currencyProvider = currencyProvider;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionSummaryComponent.prototype, "tx", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionSummaryComponent.prototype, "chainNetwork", void 0);
    TransactionSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'transaction-summary',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\transaction-summary\transaction-summary.html"*/'<ion-item>\n\n  Size\n\n  <ion-note item-end>\n\n    {{ tx.size }} (bytes)\n\n  </ion-note>\n\n</ion-item>\n\n<ion-item *ngIf="tx.fee >= 0">\n\n  Fee Rate\n\n  <ion-note item-end>\n\n    {{ (tx.fee / tx.size) | number:\'1.0-2\' }} sats/byte\n\n  </ion-note>\n\n</ion-item>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\transaction-summary\transaction-summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_currency_currency__["a" /* CurrencyProvider */]])
    ], TransactionSummaryComponent);
    return TransactionSummaryComponent;
}());

//# sourceMappingURL=transaction-summary.js.map

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rewards_rewards__ = __webpack_require__(478);
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

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(479);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address_address__ = __webpack_require__(522);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_detail_block_detail__ = __webpack_require__(523);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_blocks__ = __webpack_require__(473);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__blocks_blocks__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__broadcast_tx_broadcast_tx__ = __webpack_require__(325);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transaction_transaction__ = __webpack_require__(526);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ext_ext__ = __webpack_require__(475);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_module__ = __webpack_require__(894);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__pages_module__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_error_error_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_module__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_head_nav_head_nav_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_latest_blocks_latest_blocks_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_rewards_rewards_module__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_blocks_blocks_module__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__broadcast_tx_broadcast_tx_module__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ext_ext_module__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_module__ = __webpack_require__(476);
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

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_module__ = __webpack_require__(896);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_split_split__ = __webpack_require__(897);
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

/***/ 897:
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

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsightApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(18);
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

/***/ })

},[527]);
//# sourceMappingURL=main.js.map