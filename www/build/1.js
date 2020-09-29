webpackJsonp([1],{

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockDetailPageModule", function() { return BlockDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_block_summary_eth_block_summary_eth_module__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_block_summary_block_summary_module__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_error_error_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_module__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_head_nav_head_nav_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_loader_loader_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_transaction_list_transaction_list_module__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_copy_to_clipboard_copy_to_clipboard_module__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__block_detail__ = __webpack_require__(522);
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

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailsEthComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_details_eth__ = __webpack_require__(893);
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

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailsEthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blocks_blocks__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_redir_redir__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_transactions_transactions__ = __webpack_require__(54);
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
            selector: 'transaction-details-eth',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/components/transaction-details-eth/transaction-details-eth.html"*/'<ion-grid>\n  <ion-row>\n    <ion-col col-7>\n      <div class="ellipsis">\n        <span>\n          <a (click)="goToTx(tx.txid)">{{ tx.txid }}</a>\n        </span>\n      </div>\n    </ion-col>\n    <ion-col col-5 text-right>\n      <ion-note *ngIf="tx.time">\n        <span translate>mined on</span>\n        <time>{{ tx.time * 1000 | date:\'medium\' }}</time>\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n  <ion-row align-items-end class="small" *ngIf="!showCoins">\n    <ion-col col-12 text-right text-uppercase>\n      <ion-chip item-end color="danger" *ngIf="tx.confirmations === -3">\n        <ion-label>\n          Invalid\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="warning" *ngIf="tx.confirmations === -1">\n        <ion-label>\n          Unconfirmed\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="primary" *ngIf="tx.confirmations === 1">\n        <ion-label>\n          1 Confirmation\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="primary" *ngIf="tx.confirmations > 1">\n        <ion-label>\n          {{ tx.confirmations }} Confirmations\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="default">\n        <ion-label>\n          {{ currencyProvider.getConvertedNumber(tx.valueOut, chainNetwork.chain) | number:\'1.0-8\' }} {{ currencyProvider.currencySymbol }}\n        </ion-label>\n      </ion-chip>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="showCoins" align-items-start>\n    <ion-col col-12 col-md-5>\n\n      <ion-list [hidden]="!tx.isCoinBase">\n        <ion-item>\n          No Inputs (Newly Generated Coins)\n        </ion-item>\n      </ion-list>\n\n      <ion-list [hidden]="tx.isCoinBase">\n        <ion-item *ngIf="tx.from">\n          <div class="ellipsis">\n            <p>\n              <a (click)="goToAddress(tx.from)">{{ tx.from }}</a>\n            </p>\n          </div>\n        </ion-item>\n      </ion-list>\n\n    </ion-col>\n\n    <ion-col col-12 col-md-1 text-center class="arrow-forward">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </ion-col>\n\n    <ion-col col-12 col-md-6>\n      <ion-list>\n        <ion-item *ngIf="tx.to">\n          <div>\n            <div class="ellipsis">\n              <p>\n                <a (click)="goToAddress(tx.to)">{{ tx.to }}</a>\n              </p>\n            </div>\n          </div>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n  <ion-row align-items-start text-uppercase class="small" *ngIf="showCoins">\n    <ion-col col-6>\n      <div *ngIf="!tx.isCoinBase && currencyProvider.getConvertedNumber(tx.fee) >= 0">\n        <ion-chip>\n          <ion-label>Fee\n            <span text-nowrap>{{ currencyProvider.getConvertedNumber(tx.fee, chainNetwork.chain) | number:\'1.0-8\' }}\n              {{ currencyProvider.currencySymbol }}</span>\n          </ion-label>\n        </ion-chip>\n      </div>\n    </ion-col>\n    <ion-col col-6 text-right>\n      <ion-chip color="danger" *ngIf="tx.confirmations === -3">\n        <ion-label>Invalid</ion-label>\n      </ion-chip>\n      <ion-chip color="warning" *ngIf="tx.confirmations === -1">\n        <ion-label>Unconfirmed</ion-label>\n      </ion-chip>\n      <ion-chip color="primary" *ngIf="tx.confirmations === 1">\n        <ion-label>1 Confirmation</ion-label>\n      </ion-chip>\n      <ion-chip color="primary" *ngIf="tx.confirmations > 1">\n        <ion-label>{{ tx.confirmations }} Confirmations\n        </ion-label>\n      </ion-chip>\n      <ion-chip color="default">\n        <ion-label>{{ currencyProvider.getConvertedNumber(tx.valueOut, chainNetwork.chain) | number:\'1.0-8\' }}\n          {{ currencyProvider.currencySymbol }}\n        </ion-label>\n      </ion-chip>\n    </ion-col>\n  </ion-row>\n</ion-grid>'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/components/transaction-details-eth/transaction-details-eth.html"*/
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

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailsComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_details__ = __webpack_require__(895);
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

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blocks_blocks__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency_currency__ = __webpack_require__(24);
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
            selector: 'transaction-details',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/components/transaction-details/transaction-details.html"*/'<ion-grid>\n  <ion-row>\n    <ion-col col-7>\n      <div class="ellipsis">\n        <span *ngIf="showCoins">\n          <ion-icon name="add-circle" [hidden]="expanded" (click)="toggleExpanded()"></ion-icon>\n          <ion-icon name="remove-circle" [hidden]="!expanded" (click)="toggleExpanded()"></ion-icon>\n        </span>\n        <span>\n          <a (click)="goToTx(tx.txid)">{{ tx.txid }}</a>\n        </span>\n      </div>\n    </ion-col>\n    <ion-col col-5 text-right>\n      <ion-note *ngIf="tx.blockTime">\n        <span translate>mined on</span>\n        <time>{{ tx.blockTime * 1000 | date:\'medium\' }}</time>\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n  <ion-row align-items-end class="small" *ngIf="!showCoins">\n    <ion-col col-12 text-right text-uppercase>\n      <ion-chip item-end color="danger" *ngIf="tx.confirmations === -3">\n        <ion-label>\n          Invalid\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="warning" *ngIf="tx.confirmations === -1">\n        <ion-label>\n          Unconfirmed\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="primary" *ngIf="tx.confirmations === 1">\n        <ion-label>\n          1 Confirmation\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="primary" *ngIf="tx.confirmations > 1">\n        <ion-label>\n          {{ tx.confirmations }} Confirmations\n        </ion-label>\n      </ion-chip>\n      <ion-chip item-end color="default">\n        <ion-label>\n          <!-- {{ currencyProvider.getConvertedNumber(tx.valueOut, chainNetwork.chain) | number:\'1.0-8\' }} {{ currencyProvider.currencySymbol }} -->\n        </ion-label>\n      </ion-chip>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="showCoins" align-items-start>\n    <ion-col col-12 col-md-5>\n      <ion-list [hidden]="!tx.coinbase">\n        <ion-item>\n          No Inputs (Newly Generated Coins)\n        </ion-item>\n      </ion-list>\n\n      <ion-list [hidden]="tx.coinbase">\n        <ion-item *ngFor="let vin of tx.coins.inputs; let i = index ">\n          <button item-start ion-button *ngIf="expanded" (click)="goToTx(vin.items[i].mintTxid, i, false)" clear icon-only>\n            <ion-icon color="primary" name="ios-arrow-forward"></ion-icon>\n          </button>\n\n          <div class="ellipsis">\n            <p>\n              <a (click)="goToAddress(vin.address)"\n                [ngClass]="{\'disabled-link\': getAddress(vin) === \'Unparsed address\' }">{{ getAddress(vin) }}</a>\n            </p>\n          </div>\n          <div [hidden]="!expanded">\n            <p *ngIf="tx.confirmations > 0">\n              <b>Confirmations</b> {{ tx.confirmations }}</p>\n            <p>\n              <b>Unlocking Script</b>\n            </p>\n         \n              <div *ngIf="vin.script">\n                <div class="unlocking-script">\n                  <p>{{ vin.script.asm }}\n                </div>\n              </div>\n          </div>\n\n          <div item-end>\n            {{ vin.value }} {{ currencyProvider.currencySymbol }}             \n          </div>\n        </ion-item>\n\n        <ion-item *ngIf="tx.from">\n          <div class="ellipsis">\n            <p>\n              <a (click)="goToAddress(tx.from)">{{ tx.from }}</a>\n            </p>\n          </div>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n\n    <ion-col col-12 col-md-1 text-center class="arrow-forward">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </ion-col>\n\n    <ion-col col-12 col-md-6>\n      <ion-list>\n        <ion-item *ngFor="let vout of tx.coins.outputs; let i = index">         \n          <div>\n            <div class="ellipsis">\n              <p>\n                <a [ngClass]="{\'disabled-link\': getAddress(vout) === \'Unparsed address\' }"\n                  (click)="goToAddress(vout.address)">{{ getAddress(vout) }}</a>\n              </p>\n            </div>\n            <div *ngIf="expanded">\n              <p>\n                <b>Script Template</b>\n                <i>{{ vout.script.type }}</i>\n              </p>\n              <p>\n                <b>Locking Script</b>\n              </p>\n              <div class="locking-script">\n                <p>{{ vout.script.asm }}</p>\n              </div>\n            </div>\n          </div>\n\n          <div item-end>\n            {{ vout.value }} {{ currencyProvider.currencySymbol }}\n            <span [hidden]="!vout.spentTxid">(S)</span>\n            <span [hidden]="vout.spentTxid">(U)</span>\n          </div>\n\n          <button item-end ion-button *ngIf="expanded && vout.spentTxid && vout.spentTxid !== \'\' " (click)="\n            goToTx(vout.spentTxid, i, true)" clear icon-only>\n            <ion-icon color="primary" name="ios-arrow-forward"></ion-icon>\n          </button>\n        </ion-item>\n\n        <ion-item *ngIf="tx.to">\n          <div>\n            <div class="ellipsis">\n              <p>\n                <a (click)="goToAddress(tx.to)">{{ tx.to }}</a>\n              </p>\n            </div>\n          </div>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n\n  <ion-row align-items-start text-uppercase class="small" *ngIf="showCoins">\n    <ion-col col-6>\n      <div *ngIf="!tx.isCoinBase && currencyProvider.getConvertedNumber(tx.fee) >= 0">\n        <ion-chip>\n          <ion-label>Fee\n            <!-- <span text-nowrap>{{ currencyProvider.getConvertedNumber(tx.fee, chainNetwork.chain) | number:\'1.0-8\' }}\n              {{ currencyProvider.currencySymbol }}</span> -->\n          </ion-label>\n        </ion-chip>\n      </div>\n    </ion-col>\n    <ion-col col-6 text-right>\n      <ion-chip color="danger" *ngIf="tx.confirmations === -3">\n        <ion-label>Invalid</ion-label>\n      </ion-chip>\n      <ion-chip  color="warning" *ngIf="tx.confirmations === -1">\n        <ion-label>Unconfirmed</ion-label>\n      </ion-chip>\n      <ion-chip  color="primary" *ngIf="tx.confirmations === 1">\n        <ion-label>1 Confirmation</ion-label>\n      </ion-chip>\n      <ion-chip color="primary" *ngIf="tx.confirmations > 1">\n        <ion-label>{{ tx.confirmations }} Confirmations\n        </ion-label>\n      </ion-chip>\n      <ion-chip color="danger" *ngIf="tx.isRBF && tx.confirmations === -1">\n        <ion-label>Replace By Fee (RBF) enabled\n        </ion-label>\n      </ion-chip>\n      <ion-chip color="danger" *ngIf="tx.hasUnconfirmedInputs">\n        <ion-label>Tx has unconfirmed inputs\n        </ion-label>\n      </ion-chip>\n      <ion-chip color="default">\n        <ion-label>{{ tx.value }}\n          {{ currencyProvider.currencySymbol }}\n        </ion-label>\n      </ion-chip>\n    </ion-col>\n  </ion-row>\n</ion-grid>'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/components/transaction-details/transaction-details.html"*/
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

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyToClipboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__copy_to_clipboard_directive__ = __webpack_require__(897);
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

/***/ 897:
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

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_loader_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transaction_details_eth_transaction_details_eth_module__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_details_transaction_details_module__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transaction_list__ = __webpack_require__(899);
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

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_address_address__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_blocks_blocks__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_transactions_transactions__ = __webpack_require__(54);
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
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.transactions && this.transactions.length === 0)) return [3 /*break*/, 5];
                        if (!(this.queryType === 'blockHash')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.txProvider.getTransactionsPerBlock(this.queryValue)];
                    case 1:
                        _a.transactions = _c.sent();
                        this.loading = false;
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(this.queryType === 'address')) return [3 /*break*/, 4];
                        console.log(this.queryValue);
                        _b = this;
                        return [4 /*yield*/, this.txProvider.getTransactionsPerAddress(this.queryValue)];
                    case 3:
                        _b.transactions = _c.sent();
                        this.loading = false;
                        _c.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.loading = false;
                        _c.label = 6;
                    case 6: return [2 /*return*/];
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
            selector: 'transaction-list',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/components/transaction-list/transaction-list.html"*/'<loader *ngIf="loading" [type]="\'tx-full-list\'"></loader>\n\n<div *ngIf="!loading">\n  <ion-grid>\n    <ion-row *ngFor="let tx of transactions; let i = index">\n      <ion-col col-12 *ngIf="i < limit">\n        <transaction-details [page]="tx-list" [showCoins]="true" [tx]="tx"></transaction-details>       \n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="limit < transactions.length">\n      <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <loader [type]="\'tx-full-list\'"></loader>\n      </ion-infinite-scroll>\n    </ion-row>\n    <ion-row *ngIf="transactions.length === 0" class="no-txs">\n      <ion-col col-12>\n        There are no transactions involving this block.\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/components/transaction-list/transaction-list.html"*/
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

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockSummaryEthComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_summary_eth__ = __webpack_require__(907);
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

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockSummaryEthComponent; });
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
            selector: 'block-summary-eth',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/components/block-summary-eth/block-summary-eth.html"*/'<ion-item>\n  Total Difficulty\n  <ion-note item-end>\n    {{ block.totalDifficulty }}\n  </ion-note>\n</ion-item>\n<ion-item>\n  Gas Limit\n  <ion-note item-end>\n    {{ block.gasLimit }}\n  </ion-note>\n</ion-item>\n<ion-item>\n  Gas Used\n  <ion-note item-end>\n    {{ block.gasUsed }}\n  </ion-note>\n</ion-item>'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/components/block-summary-eth/block-summary-eth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_currency_currency__["a" /* CurrencyProvider */]])
    ], BlockSummaryEthComponent);
    return BlockSummaryEthComponent;
}());

//# sourceMappingURL=block-summary-eth.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockSummaryComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_summary__ = __webpack_require__(909);
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

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockSummaryComponent; });
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
            selector: 'block-summary',template:/*ion-inline-start:"/home/enrique/smart/sapi-insight/src/components/block-summary/block-summary.html"*/'  <ion-item>\n    Merkle Root\n    <ion-note item-end>\n      {{ block.merkleroot }}\n    </ion-note>\n  </ion-item>\n  <ion-item *ngIf="block.bits">\n    Bits\n    <ion-note item-end>\n      {{ block.bits }}\n    </ion-note>\n  </ion-item>\n  <ion-item *ngIf="block.version">\n    Version\n    <ion-note item-end>\n      {{ block.version }}\n    </ion-note>\n  </ion-item>'/*ion-inline-end:"/home/enrique/smart/sapi-insight/src/components/block-summary/block-summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_currency_currency__["a" /* CurrencyProvider */]])
    ], BlockSummaryComponent);
    return BlockSummaryComponent;
}());

//# sourceMappingURL=block-summary.js.map

/***/ })

});
//# sourceMappingURL=1.js.map