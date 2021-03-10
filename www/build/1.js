webpackJsonp([1],{

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockDetailPageModule", function() { return BlockDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_block_summary_eth_block_summary_eth_module__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_block_summary_block_summary_module__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_error_error_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_module__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_head_nav_head_nav_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_loader_loader_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_transaction_list_transaction_list_module__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_copy_to_clipboard_copy_to_clipboard_module__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__block_detail__ = __webpack_require__(523);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var BlockDetailPageModule = /** @class */ (function () {
    function BlockDetailPageModule() {
    }
    BlockDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_10__block_detail__["a" /* BlockDetailPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_10__block_detail__["a" /* BlockDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_block_summary_block_summary_module__["a" /* BlockSummaryComponentModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_block_summary_eth_block_summary_eth_module__["a" /* BlockSummaryEthComponentModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_transaction_list_transaction_list_module__["a" /* TransactionListComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_module__["a" /* FooterComponentModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_head_nav_head_nav_module__["a" /* HeadNavComponentModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_loader_loader_module__["a" /* LoaderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_error_error_module__["a" /* ErrorComponentModule */],
                __WEBPACK_IMPORTED_MODULE_9__directives_copy_to_clipboard_copy_to_clipboard_module__["a" /* CopyToClipboardModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_10__block_detail__["a" /* BlockDetailPage */]]
        })
    ], BlockDetailPageModule);
    return BlockDetailPageModule;
}());

//# sourceMappingURL=block-detail.module.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_loader_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transaction_details_eth_transaction_details_eth_module__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_details_transaction_details_module__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transaction_list__ = __webpack_require__(904);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TransactionListComponentModule = /** @class */ (function () {
    function TransactionListComponentModule() {
    }
    TransactionListComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__transaction_list__["a" /* TransactionListComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__transaction_details_eth_transaction_details_eth_module__["a" /* TransactionDetailsEthComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__transaction_details_transaction_details_module__["a" /* TransactionDetailsComponentModule */],
                __WEBPACK_IMPORTED_MODULE_2__loader_loader_module__["a" /* LoaderComponentModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__transaction_list__["a" /* TransactionListComponent */]]
        })
    ], TransactionListComponentModule);
    return TransactionListComponentModule;
}());

//# sourceMappingURL=transaction-list.module.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_address_address__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_blocks_blocks__ = __webpack_require__(37);
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






var TransactionListComponent = /** @class */ (function () {
    function TransactionListComponent(txProvider, addrProvider, blocksProvider, events) {
        this.txProvider = txProvider;
        this.addrProvider = addrProvider;
        this.blocksProvider = blocksProvider;
        this.events = events;
        this.loading = true;
        this.transactions = [];
        this.blockPageNum = 1;
        this.limit = 10;
        this.chunkSize = 100;
    }
    TransactionListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.transactions && this.transactions.length === 0)) return [3 /*break*/, 8];
                        if (!(this.queryType === 'blockHash')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.txProvider.getTransactionsPerBlock(this.queryValue)];
                    case 1:
                        _a.transactions = _d.sent();
                        this.loading = false;
                        return [3 /*break*/, 7];
                    case 2:
                        if (!(this.queryType === 'address')) return [3 /*break*/, 7];
                        if (!(window.location.protocol === 'http:')) return [3 /*break*/, 4];
                        _b = this;
                        return [4 /*yield*/, this.txProvider.getTransactionsPerAddress(this.queryValue)];
                    case 3:
                        _b.transactions = _d.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        _c = this;
                        return [4 /*yield*/, this.txProvider.getTransactionsPerAddressNew(this.queryValue)];
                    case 5:
                        _c.transactions = _d.sent();
                        _d.label = 6;
                    case 6:
                        this.loading = false;
                        _d.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.loading = false;
                        _d.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    TransactionListComponent.prototype.populateTxsForAddress = function (txids, inputs, outputs) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](txids, function (txid) {
            var tx = {};
            tx.txid = txid;
            tx.vin = inputs.filter(function (input) { return input.spentTxid === txid; });
            tx.vout = outputs.filter(function (output) { return output.mintTxid === txid; });
            tx.blockheight = tx.vout[0].mintHeight;
            tx.fee = _this.txProvider.getFee(tx);
            tx.valueOut = tx.vout
                .filter(function (output) { return output.mintTxid === txid; })
                .reduce(function (a, b) { return a + b.value; }, 0);
            tx.vin.length === 0 ? (tx.isCoinBase = true) : (tx.isCoinBase = false);
            _this.transactions.push(tx);
        });
    };
    TransactionListComponent.prototype.populateTxsForBlock = function (txidCoins) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](txidCoins.txids, function (txid) {
            var tx = {};
            tx.txid = txid;
            tx.vin = txidCoins.inputs.filter(function (input) { return input.spentTxid === txid; });
            tx.vout = txidCoins.outputs.filter(function (output) { return output.mintTxid === txid; });
            tx.fee = _this.txProvider.getFee(tx);
            tx.blockheight = tx.vout[0].mintHeight;
            tx.blocktime = new Date(tx.blockTime).getTime() / 1000;
            tx.time = _this.blocktime
                ? _this.blocktime
                : new Date(tx.blockTime).getTime() / 1000;
            tx.valueOut = tx.vout
                .filter(function (output) { return output.mintTxid === txid; })
                .reduce(function (a, b) { return a + b.value; }, 0);
            tx.vin.length === 0 ? (tx.isCoinBase = true) : (tx.isCoinBase = false);
            _this.transactions.push(tx);
        });
    };
    TransactionListComponent.prototype.fetchBlockTxCoinInfo = function (pageNum) {
        // this.blocksProvider
        //   .getCoinsForBlockHash(this.queryValue, this.chainNetwork, 100, pageNum)
        //   .subscribe(txidCoins => {
        //     this.populateTxsForBlock(txidCoins);
        //     this.loading = false;
        //     if (txidCoins.next !== '') {
        //       this.blockPageNum = this.blockPageNum + 1;
        //     }
        //   });
    };
    TransactionListComponent.prototype.loadMore = function (infiniteScroll) {
        if ((this.queryType === 'blockHash' && this.chainNetwork.chain === 'BTC') ||
            this.chainNetwork.chain === 'BCH') {
            this.fetchBlockTxCoinInfo(this.blockPageNum);
            this.limit += this.chunkSize;
        }
        else {
            this.limit += this.chunkSize;
            this.chunkSize *= 2;
        }
        infiniteScroll.complete();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TransactionListComponent.prototype, "queryType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TransactionListComponent.prototype, "queryValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionListComponent.prototype, "transactions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionListComponent.prototype, "blocktime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionListComponent.prototype, "chainNetwork", void 0);
    TransactionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'transaction-list',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\transaction-list\transaction-list.html"*/'<loader *ngIf="loading" [type]="\'tx-full-list\'"></loader>\n\n\n\n<div *ngIf="!loading">\n\n  <ion-grid>\n\n    <ion-row *ngFor="let tx of transactions; let i = index">\n\n      <ion-col col-12 *ngIf="i < limit">\n\n        <transaction-details [page]="tx-list" [showCoins]="true" [tx]="tx"></transaction-details>       \n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="limit < transactions.length">\n\n      <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n\n        <loader [type]="\'tx-full-list\'"></loader>\n\n      </ion-infinite-scroll>\n\n    </ion-row>\n\n    <ion-row *ngIf="transactions.length === 0" class="no-txs">\n\n      <ion-col col-12>\n\n        There are no transactions involving this block.\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</div>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\transaction-list\transaction-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_transactions_transactions__["a" /* TxsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_address_address__["a" /* AddressProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_blocks_blocks__["a" /* BlocksProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], TransactionListComponent);
    return TransactionListComponent;
}());

//# sourceMappingURL=transaction-list.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockSummaryEthComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_summary_eth__ = __webpack_require__(912);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlockSummaryEthComponentModule = /** @class */ (function () {
    function BlockSummaryEthComponentModule() {
    }
    BlockSummaryEthComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__block_summary_eth__["a" /* BlockSummaryEthComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__block_summary_eth__["a" /* BlockSummaryEthComponent */]]
        })
    ], BlockSummaryEthComponentModule);
    return BlockSummaryEthComponentModule;
}());

//# sourceMappingURL=block-summary-eth.module.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockSummaryEthComponent; });
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
 * Generated class for the BlockSummaryEthComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var BlockSummaryEthComponent = /** @class */ (function () {
    function BlockSummaryEthComponent(currencyProvider) {
        this.currencyProvider = currencyProvider;
        this.block = {};
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlockSummaryEthComponent.prototype, "block", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlockSummaryEthComponent.prototype, "chainNetwork", void 0);
    BlockSummaryEthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'block-summary-eth',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\block-summary-eth\block-summary-eth.html"*/'<ion-item>\n\n  Total Difficulty\n\n  <ion-note item-end>\n\n    {{ block.totalDifficulty }}\n\n  </ion-note>\n\n</ion-item>\n\n<ion-item>\n\n  Gas Limit\n\n  <ion-note item-end>\n\n    {{ block.gasLimit }}\n\n  </ion-note>\n\n</ion-item>\n\n<ion-item>\n\n  Gas Used\n\n  <ion-note item-end>\n\n    {{ block.gasUsed }}\n\n  </ion-note>\n\n</ion-item>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\block-summary-eth\block-summary-eth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_currency_currency__["a" /* CurrencyProvider */]])
    ], BlockSummaryEthComponent);
    return BlockSummaryEthComponent;
}());

//# sourceMappingURL=block-summary-eth.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockSummaryComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_summary__ = __webpack_require__(914);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlockSummaryComponentModule = /** @class */ (function () {
    function BlockSummaryComponentModule() {
    }
    BlockSummaryComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__block_summary__["a" /* BlockSummaryComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__block_summary__["a" /* BlockSummaryComponent */]]
        })
    ], BlockSummaryComponentModule);
    return BlockSummaryComponentModule;
}());

//# sourceMappingURL=block-summary.module.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockSummaryComponent; });
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
 * Generated class for the BlockSummaryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var BlockSummaryComponent = /** @class */ (function () {
    function BlockSummaryComponent(currencyProvider) {
        this.currencyProvider = currencyProvider;
        this.block = {};
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlockSummaryComponent.prototype, "block", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BlockSummaryComponent.prototype, "chainNetwork", void 0);
    BlockSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'block-summary',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\block-summary\block-summary.html"*/'  <ion-item>\n\n    Merkle Root\n\n    <ion-note item-end>\n\n      {{ block.merkleroot }}\n\n    </ion-note>\n\n  </ion-item>\n\n  <ion-item *ngIf="block.bits">\n\n    Bits\n\n    <ion-note item-end>\n\n      {{ block.bits }}\n\n    </ion-note>\n\n  </ion-item>\n\n  <ion-item *ngIf="block.version">\n\n    Version\n\n    <ion-note item-end>\n\n      {{ block.version }}\n\n    </ion-note>\n\n  </ion-item>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\block-summary\block-summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_currency_currency__["a" /* CurrencyProvider */]])
    ], BlockSummaryComponent);
    return BlockSummaryComponent;
}());

//# sourceMappingURL=block-summary.js.map

/***/ })

});
//# sourceMappingURL=1.js.map