webpackJsonp([2],{

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPageModule", function() { return TransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_error_error_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_head_nav_head_nav_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loader_loader_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_transaction_details_eth_transaction_details_eth_module__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_transaction_details_transaction_details_module__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_transaction_summary_eth_transaction_summary_eth_module__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_transaction_summary_transaction_summary_module__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_copy_to_clipboard_copy_to_clipboard_module__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__transaction__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var TransactionPageModule = /** @class */ (function () {
    function TransactionPageModule() {
    }
    TransactionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_11__transaction__["a" /* TransactionPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_11__transaction__["a" /* TransactionPage */]),
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
            exports: [__WEBPACK_IMPORTED_MODULE_11__transaction__["a" /* TransactionPage */]]
        })
    ], TransactionPageModule);
    return TransactionPageModule;
}());

//# sourceMappingURL=transaction.module.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailsEthComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_details_eth__ = __webpack_require__(860);
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

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailsEthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blocks_blocks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_redir_redir__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_transactions_transactions__ = __webpack_require__(51);
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

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailsComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_details__ = __webpack_require__(862);
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

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blocks_blocks__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
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

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyToClipboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__copy_to_clipboard_directive__ = __webpack_require__(864);
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

/***/ 864:
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

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionSummaryEthComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_summary_eth__ = __webpack_require__(879);
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

/***/ 879:
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
            selector: 'transaction-summary-eth',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\transaction-summary-eth\transaction-summary-eth.html"*/'<ion-item>\n\n  Gas Limit\n\n  <ion-note item-end>\n\n      <span text-nowrap>{{ tx.gasLimit }}</span>\n\n  </ion-note>\n\n</ion-item>\n\n<ion-item>\n\n  Gas Price\n\n  <ion-note item-end>\n\n    <span text-nowrap>{{ currencyProvider.getConvertedNumber(tx.gasPrice, chainNetwork.chain) | number:\'1.0-8\' }}\n\n        {{ currencyProvider.currencySymbol }}</span>\n\n  </ion-note>\n\n</ion-item>\n\n<ion-item>\n\n  From\n\n  <ion-note item-end>\n\n    {{ tx.from }}\n\n  </ion-note>\n\n</ion-item>\n\n<ion-item>\n\n  To\n\n  <ion-note item-end>\n\n    {{ tx.to }}\n\n  </ion-note>\n\n</ion-item>\n\n<ion-item *ngIf="tx.confirmations > 0">\n\n  Mined Time\n\n  <ion-note item-end>\n\n    {{ tx.blocktime * 1000 | date:\'long\' }}\n\n  </ion-note>\n\n</ion-item>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\transaction-summary-eth\transaction-summary-eth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_currency_currency__["a" /* CurrencyProvider */]])
    ], TransactionSummaryEthComponent);
    return TransactionSummaryEthComponent;
}());

//# sourceMappingURL=transaction-summary-eth.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionSummaryComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_summary__ = __webpack_require__(881);
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

/***/ 881:
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
            selector: 'transaction-summary',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\components\transaction-summary\transaction-summary.html"*/'<ion-item>\n\n  Size\n\n  <ion-note item-end>\n\n    {{ tx.size }} (bytes)\n\n  </ion-note>\n\n</ion-item>\n\n<ion-item *ngIf="tx.fee >= 0">\n\n  Fee Rate\n\n  <ion-note item-end>\n\n    {{ (tx.fee / tx.size) | number:\'1.0-2\' }} sats/byte\n\n  </ion-note>\n\n</ion-item>'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\components\transaction-summary\transaction-summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_currency_currency__["a" /* CurrencyProvider */]])
    ], TransactionSummaryComponent);
    return TransactionSummaryComponent;
}());

//# sourceMappingURL=transaction-summary.js.map

/***/ })

});
//# sourceMappingURL=2.js.map