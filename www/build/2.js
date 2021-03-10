webpackJsonp([2],{

<<<<<<< HEAD
/***/ 901:
=======
/***/ 889:
>>>>>>> 61cdd77f76d97480a21ef41324108bd1355898f9
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_error_error_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_module__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_head_nav_head_nav_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loader_loader_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search__ = __webpack_require__(915);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_error_error_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_module__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_head_nav_head_nav_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loader_loader_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_transaction_details_eth_transaction_details_eth_module__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_transaction_details_transaction_details_module__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_transaction_summary_eth_transaction_summary_eth_module__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_transaction_summary_transaction_summary_module__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_copy_to_clipboard_copy_to_clipboard_module__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__transaction__ = __webpack_require__(519);
>>>>>>> 61cdd77f76d97480a21ef41324108bd1355898f9
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__search__["a" /* SearchPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_module__["a" /* FooterComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_head_nav_head_nav_module__["a" /* HeadNavComponentModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_loader_loader_module__["a" /* LoaderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_error_error_module__["a" /* ErrorComponentModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__search__["a" /* SearchPage */]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_price_price__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_redir_redir__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPage = /** @class */ (function () {
    function SearchPage(navParams, apiProvider, priceProvider, events, currencyProvider, redirProvider) {
        this.navParams = navParams;
        this.apiProvider = apiProvider;
<<<<<<< HEAD
        this.priceProvider = priceProvider;
        this.events = events;
=======
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
            selector: 'transaction-details-eth',template:/*ion-inline-start:"/Users/enricrypto/git2020/bitcore/src/components/transaction-details-eth/transaction-details-eth.html"*/'<ion-grid>\n  <ion-row>\n    <ion-col col-7>\n      <div class="ellipsis">\n        <span>\n          <a (click)="goToTx(tx.txid)">{{ tx.txid }}</a>\n        </span>\n      </div>\n    </ion-col>\n    <ion-col col-5 text-right>\n      <ion-note *ngIf="tx.time">\n        <span translate>mined on</span>\n        <time>{{ tx.time * 1000 | date:\'medium\' }}</time>\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n  <ion-row align-items-end class="small" *ngIf="!showCoins">\n    <ion-col col-12 text-right text-uppercase>\n      <ion-chip item-end color="danger" *ngIf="tx.confirmations === -3">\n        <ion-label>\n          Invalid\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="warning" *ngIf="tx.confirmations === -1">\n        <ion-label>\n          Unconfirmed\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="primary" *ngIf="tx.confirmations === 1">\n        <ion-label>\n          1 Confirmation\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="primary" *ngIf="tx.confirmations > 1">\n        <ion-label>\n          {{ tx.confirmations }} Confirmations\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="default">\n        <ion-label>\n          {{ currencyProvider.getConvertedNumber(tx.valueOut, chainNetwork.chain) | number:\'1.0-8\' }} {{ currencyProvider.currencySymbol }}\n        </ion-label>\n      </ion-chip>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="showCoins" align-items-start>\n    <ion-col col-12 col-md-5>\n\n      <ion-list [hidden]="!tx.isCoinBase">\n        <ion-item>\n          No Inputs (Newly Generated Coins)\n        </ion-item>\n      </ion-list>\n\n      <ion-list [hidden]="tx.isCoinBase">\n        <ion-item *ngIf="tx.from">\n          <div class="ellipsis">\n            <p>\n              <a (click)="goToAddress(tx.from)">{{ tx.from }}</a>\n            </p>\n          </div>\n        </ion-item>\n      </ion-list>\n\n    </ion-col>\n\n    <ion-col col-12 col-md-1 text-center class="arrow-forward">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </ion-col>\n\n    <ion-col col-12 col-md-6>\n      <ion-list>\n        <ion-item *ngIf="tx.to">\n          <div>\n            <div class="ellipsis">\n              <p>\n                <a (click)="goToAddress(tx.to)">{{ tx.to }}</a>\n              </p>\n            </div>\n          </div>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n  <ion-row align-items-start text-uppercase class="small" *ngIf="showCoins">\n    <ion-col col-6>\n      <div *ngIf="!tx.isCoinBase && currencyProvider.getConvertedNumber(tx.fee) >= 0">\n        <ion-chip>\n          <ion-label>Fee\n            <span text-nowrap>{{ currencyProvider.getConvertedNumber(tx.fee, chainNetwork.chain) | number:\'1.0-8\' }}\n              {{ currencyProvider.currencySymbol }}</span>\n          </ion-label>\n        </ion-chip>\n      </div>\n    </ion-col>\n    <ion-col col-6 text-right>\n      <ion-chip color="danger" *ngIf="tx.confirmations === -3">\n        <ion-label>Invalid</ion-label>\n      </ion-chip>\n      <ion-chip color="warning" *ngIf="tx.confirmations === -1">\n        <ion-label>Unconfirmed</ion-label>\n      </ion-chip>\n      <ion-chip color="primary" *ngIf="tx.confirmations === 1">\n        <ion-label>1 Confirmation</ion-label>\n      </ion-chip>\n      <ion-chip color="primary" *ngIf="tx.confirmations > 1">\n        <ion-label>{{ tx.confirmations }} Confirmations\n        </ion-label>\n      </ion-chip>\n      <ion-chip color="default">\n        <ion-label>{{ currencyProvider.getConvertedNumber(tx.valueOut, chainNetwork.chain) | number:\'1.0-8\' }}\n          {{ currencyProvider.currencySymbol }}\n        </ion-label>\n      </ion-chip>\n    </ion-col>\n  </ion-row>\n</ion-grid>'/*ion-inline-end:"/Users/enricrypto/git2020/bitcore/src/components/transaction-details-eth/transaction-details-eth.html"*/
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

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailsComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_details__ = __webpack_require__(894);
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

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blocks_blocks__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_redir_redir__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_transactions_transactions__ = __webpack_require__(55);
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
>>>>>>> 61cdd77f76d97480a21ef41324108bd1355898f9
        this.currencyProvider = currencyProvider;
        this.redirProvider = redirProvider;
        // const chain: string =
        //   this.navParams.get('chain') || this.apiProvider.getConfig().chain;
        // const network: string =
        //   this.navParams.get('network') || this.apiProvider.getConfig().network;
        this.matches = this.navParams.get('matches');
        // this.chainNetwork = {
        //   chain,
        //   network
        // };
        // this.priceProvider.setCurrency();
        // this.apiProvider.changeNetwork(this.chainNetwork);
        // this.currencyProvider.setCurrency(this.chainNetwork);
    }
    SearchPage.prototype.goToBlock = function (block) {
        this.redirProvider.redir('block-detail', {
            blockHash: block.hash
        });
    };
    SearchPage.prototype.goToTx = function (tx) {
        this.redirProvider.redir('transaction', {
            txId: tx.txid
        });
    };
    SearchPage.prototype.goToAddress = function (addr) {
        this.redirProvider.redir('address', {
            addrStr: addr.address
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'page-search',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\pages\search\search.html"*/'<head-nav></head-nav>\n\n\n\n<ion-content class="content-container">\n\n    <ion-grid class="page-content-grid">\n\n        <ion-row *ngIf="matches?.blocks && matches?.blocks.length > 0">\n\n            <ion-col col-12>\n\n                <h2 class="content-container--heading">Blocks:</h2>\n\n            </ion-col>\n\n            <ion-col col-md-6 col-12 class="page-content" *ngFor="let block of matches?.blocks"\n\n                (click)="goToBlock(block)">\n\n                <div ion-item no-lines>\n\n                    <div ion-text color="primary">\n\n                        Block Hash {{ block?.hash }}\n\n                    </div>\n\n                    <div ion-text color="dark-light">Mined on {{ block?.time | date:\'medium\' }}</div>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="matches?.txs && matches?.txs.length > 0">\n\n            <ion-col col-12>\n\n                <h2 class="content-container--heading">Transactions:</h2>\n\n            </ion-col>\n\n            <ion-col col-md-6 col-12 class="page-content" *ngFor="let tx of matches?.txs" (click)="goToTx(tx)">\n\n\n\n                <div ion-item no-lines>\n\n                    <div ion-text color="primary">\n\n                        {{ tx?.txid }}\n\n                    </div>\n\n                    <div ion-text color="dark-light">Received Time {{ tx?.blockTime | date:\'medium\' }}</div>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="matches?.addresses && matches?.addresses.length > 0">\n\n            <ion-col col-12>\n\n                <h2 class="content-container--heading">Addresses:</h2>\n\n            </ion-col>\n\n            <ion-col col-md-6 col-12 class="page-content" *ngFor="let addr of matches?.addresses"\n\n                (click)="goToAddress(addr)">\n\n\n\n                <div ion-item no-lines>\n\n                    <div ion-text color="primary">\n\n                        {{ addr?.address }}\n\n                    </div>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n<footer></footer>\n\n'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\pages\search\search.html"*/
=======
            selector: 'transaction-details',template:/*ion-inline-start:"/Users/enricrypto/git2020/bitcore/src/components/transaction-details/transaction-details.html"*/'<ion-grid>\n  <ion-row>\n    <ion-col col-7>\n      <div class="ellipsis">\n        <span *ngIf="showCoins">\n          <ion-icon name="add-circle" [hidden]="expanded" (click)="toggleExpanded()"></ion-icon>\n          <ion-icon name="remove-circle" [hidden]="!expanded" (click)="toggleExpanded()"></ion-icon>\n        </span>\n        <span>\n          <a (click)="goToTx(tx.txid)">{{ tx.txid }}</a>\n        </span>\n      </div>\n    </ion-col>\n    <ion-col col-5 text-right>\n      <ion-note *ngIf="tx.blockTime">\n        <span translate>mined on</span>\n        <time>{{ tx.blockTime * 1000 | date:\'medium\' }}</time>\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n  <ion-row align-items-end class="small" *ngIf="!showCoins">\n    <ion-col col-12 text-right text-uppercase>\n      <ion-chip item-end color="danger" *ngIf="tx.confirmations === -3">\n        <ion-label>\n          Invalid\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="warning" *ngIf="tx.confirmations === -1">\n        <ion-label>\n          Unconfirmed\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="primary" *ngIf="tx.confirmations === 1">\n        <ion-label>\n          1 Confirmation\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="primary" *ngIf="tx.confirmations > 1">\n        <ion-label>\n          {{ tx.confirmations }} Confirmations\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="default">\n        <ion-label>\n          <!-- {{ currencyProvider.getConvertedNumber(tx.valueOut, chainNetwork.chain) | number:\'1.0-8\' }} {{ currencyProvider.currencySymbol }} -->\n        </ion-label>\n      </ion-chip>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="showCoins" align-items-start>\n    <ion-col col-12 col-md-5>\n      <ion-list [hidden]="!tx.coinbase">\n        <ion-item>\n          No Inputs (Newly Generated Coins)\n        </ion-item>\n      </ion-list>\n\n      <ion-list [hidden]="tx.coinbase">\n        <ion-item *ngFor="let vin of tx.coins.inputs; let i = index ">\n          <button item-start ion-button *ngIf="expanded" (click)="goToTx(vin.items[i].mintTxid, i, false)" clear icon-only>\n            <ion-icon color="primary" name="ios-arrow-forward"></ion-icon>\n          </button>\n\n          <div class="ellipsis">\n            <p>\n              <a (click)="goToAddress(vin.address)"\n                [ngClass]="{\'disabled-link\': getAddress(vin) === \'Unparsed address\' }">{{ getAddress(vin) }}</a>\n            </p>\n          </div>\n          <div [hidden]="!expanded">\n            <p *ngIf="tx.confirmations > 0">\n              <b>Confirmations</b> {{ tx.confirmations }}</p>\n            <p>\n              <b>Unlocking Script</b>\n            </p>\n         \n              <div *ngIf="vin.script">\n                <div class="unlocking-script">\n                  <p>{{ vin.script.asm }}\n                </div>\n              </div>\n          </div>\n\n          <div item-end>\n            {{ vin.value }} {{ currencyProvider.currencySymbol }}             \n          </div>\n        </ion-item>\n\n        <ion-item *ngIf="tx.from">\n          <div class="ellipsis">\n            <p>\n              <a (click)="goToAddress(tx.from)">{{ tx.from }}</a>\n            </p>\n          </div>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n\n    <ion-col col-12 col-md-1 text-center class="arrow-forward">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </ion-col>\n\n    <ion-col col-12 col-md-6>\n      <ion-list>\n        <ion-item *ngFor="let vout of tx.coins.outputs; let i = index">         \n          <div>\n            <div class="ellipsis">\n              <p>\n                <a [ngClass]="{\'disabled-link\': getAddress(vout) === \'Unparsed address\' }"\n                  (click)="goToAddress(vout.address)">{{ getAddress(vout) }}</a>\n              </p>\n            </div>\n            <div *ngIf="expanded">\n              <p>\n                <b>Script Template</b>\n                <i>{{ vout.script.type }}</i>\n              </p>\n              <p>\n                <b>Locking Script</b>\n              </p>\n              <div class="locking-script">\n                <p>{{ vout.script.asm }}</p>\n              </div>\n            </div>\n          </div>\n\n          <div item-end>\n            {{ vout.value }} {{ currencyProvider.currencySymbol }}\n            <span [hidden]="!vout.spentTxid">(S)</span>\n            <span [hidden]="vout.spentTxid">(U)</span>\n          </div>\n\n          <button item-end ion-button *ngIf="expanded && vout.spentTxid && vout.spentTxid !== \'\' " (click)="\n            goToTx(vout.spentTxid, i, true)" clear icon-only>\n            <ion-icon color="primary" name="ios-arrow-forward"></ion-icon>\n          </button>\n        </ion-item>\n\n        <ion-item *ngIf="tx.to">\n          <div>\n            <div class="ellipsis">\n              <p>\n                <a (click)="goToAddress(tx.to)">{{ tx.to }}</a>\n              </p>\n            </div>\n          </div>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n  <ion-row align-items-start text-uppercase class="small" *ngIf="showCoins">\n    <ion-col col-6>\n      <div *ngIf="!tx.isCoinBase && currencyProvider.getConvertedNumber(tx.fee) >= 0">\n        <ion-chip>\n          <ion-label>Fee\n            <!-- <span text-nowrap>{{ currencyProvider.getConvertedNumber(tx.fee, chainNetwork.chain) | number:\'1.0-8\' }}\n              {{ currencyProvider.currencySymbol }}</span> -->\n          </ion-label>\n        </ion-chip>\n      </div>\n    </ion-col>\n    <ion-col col-6 text-right>\n      <ion-chip color="danger" *ngIf="tx.confirmations === -3">\n        <ion-label>Invalid</ion-label>\n      </ion-chip>\n      <ion-chip  color="warning" *ngIf="tx.confirmations === -1">\n        <ion-label>Unconfirmed</ion-label>\n      </ion-chip>\n      <ion-chip  color="primary" *ngIf="tx.confirmations === 1">\n        <ion-label>1 Confirmation</ion-label>\n      </ion-chip>\n      <ion-chip color="primary" *ngIf="tx.confirmations > 1">\n        <ion-label>{{ tx.confirmations }} Confirmations\n        </ion-label>\n      </ion-chip>\n      <ion-chip color="danger" *ngIf="tx.isRBF && tx.confirmations === -1">\n        <ion-label>Replace By Fee (RBF) enabled\n        </ion-label>\n      </ion-chip>\n      <ion-chip color="danger" *ngIf="tx.hasUnconfirmedInputs">\n        <ion-label>Tx has unconfirmed inputs\n        </ion-label>\n      </ion-chip>\n      <ion-chip color="default">\n        <ion-label>{{ tx.value }}\n          {{ currencyProvider.currencySymbol }}\n        </ion-label>\n      </ion-chip>\n    </ion-col>\n  </ion-row>\n</ion-grid>'/*ion-inline-end:"/Users/enricrypto/git2020/bitcore/src/components/transaction-details/transaction-details.html"*/
>>>>>>> 61cdd77f76d97480a21ef41324108bd1355898f9
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
<<<<<<< HEAD
            __WEBPACK_IMPORTED_MODULE_4__providers_price_price__["a" /* PriceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_redir_redir__["a" /* RedirProvider */]])
    ], SearchPage);
    return SearchPage;
=======
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

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyToClipboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__copy_to_clipboard_directive__ = __webpack_require__(896);
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

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyToClipboardDirective; });
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

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionSummaryEthComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_summary_eth__ = __webpack_require__(910);
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

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionSummaryEthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_currency_currency__ = __webpack_require__(24);
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
            selector: 'transaction-summary-eth',template:/*ion-inline-start:"/Users/enricrypto/git2020/bitcore/src/components/transaction-summary-eth/transaction-summary-eth.html"*/'<ion-item>\n  Gas Limit\n  <ion-note item-end>\n      <span text-nowrap>{{ tx.gasLimit }}</span>\n  </ion-note>\n</ion-item>\n<ion-item>\n  Gas Price\n  <ion-note item-end>\n    <span text-nowrap>{{ currencyProvider.getConvertedNumber(tx.gasPrice, chainNetwork.chain) | number:\'1.0-8\' }}\n        {{ currencyProvider.currencySymbol }}</span>\n  </ion-note>\n</ion-item>\n<ion-item>\n  From\n  <ion-note item-end>\n    {{ tx.from }}\n  </ion-note>\n</ion-item>\n<ion-item>\n  To\n  <ion-note item-end>\n    {{ tx.to }}\n  </ion-note>\n</ion-item>\n<ion-item *ngIf="tx.confirmations > 0">\n  Mined Time\n  <ion-note item-end>\n    {{ tx.blocktime * 1000 | date:\'long\' }}\n  </ion-note>\n</ion-item>'/*ion-inline-end:"/Users/enricrypto/git2020/bitcore/src/components/transaction-summary-eth/transaction-summary-eth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_currency_currency__["a" /* CurrencyProvider */]])
    ], TransactionSummaryEthComponent);
    return TransactionSummaryEthComponent;
}());

//# sourceMappingURL=transaction-summary-eth.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionSummaryComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_summary__ = __webpack_require__(912);
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

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_currency_currency__ = __webpack_require__(24);
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
            selector: 'transaction-summary',template:/*ion-inline-start:"/Users/enricrypto/git2020/bitcore/src/components/transaction-summary/transaction-summary.html"*/'<ion-item>\n  Size\n  <ion-note item-end>\n    {{ tx.size }} (bytes)\n  </ion-note>\n</ion-item>\n<ion-item *ngIf="tx.fee >= 0">\n  Fee Rate\n  <ion-note item-end>\n    {{ (tx.fee / tx.size) | number:\'1.0-2\' }} sats/byte\n  </ion-note>\n</ion-item>'/*ion-inline-end:"/Users/enricrypto/git2020/bitcore/src/components/transaction-summary/transaction-summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_currency_currency__["a" /* CurrencyProvider */]])
    ], TransactionSummaryComponent);
    return TransactionSummaryComponent;
>>>>>>> 61cdd77f76d97480a21ef41324108bd1355898f9
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=2.js.map