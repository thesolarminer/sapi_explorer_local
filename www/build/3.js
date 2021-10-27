webpackJsonp([3],{

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_error_error_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_footer_footer_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_head_nav_head_nav_module__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loader_loader_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search__ = __webpack_require__(877);
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

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_price_price__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_redir_redir__ = __webpack_require__(52);
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
        this.priceProvider = priceProvider;
        this.events = events;
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
            selector: 'page-search',template:/*ion-inline-start:"C:\Projects\smartcash\explorer\src\pages\search\search.html"*/'<head-nav></head-nav>\n\n\n\n<ion-content class="content-container">\n\n    <ion-grid class="page-content-grid">\n\n        <ion-row *ngIf="matches?.blocks && matches?.blocks.length > 0">\n\n            <ion-col col-12>\n\n                <h2 class="content-container--heading">Blocks:</h2>\n\n            </ion-col>\n\n            <ion-col col-md-6 col-12 class="page-content" *ngFor="let block of matches?.blocks"\n\n                (click)="goToBlock(block)">\n\n                <div ion-item no-lines>\n\n                    <div ion-text color="primary">\n\n                        Block Hash {{ block?.hash }}\n\n                    </div>\n\n                    <div ion-text color="dark-light">Mined on {{ block?.time | date:\'medium\' }}</div>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="matches?.txs && matches?.txs.length > 0">\n\n            <ion-col col-12>\n\n                <h2 class="content-container--heading">Transactions:</h2>\n\n            </ion-col>\n\n            <ion-col col-md-6 col-12 class="page-content" *ngFor="let tx of matches?.txs" (click)="goToTx(tx)">\n\n\n\n                <div ion-item no-lines>\n\n                    <div ion-text color="primary">\n\n                        {{ tx?.txid }}\n\n                    </div>\n\n                    <div ion-text color="dark-light">Received Time {{ tx?.blockTime | date:\'medium\' }}</div>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="matches?.addresses && matches?.addresses.length > 0">\n\n            <ion-col col-12>\n\n                <h2 class="content-container--heading">Addresses:</h2>\n\n            </ion-col>\n\n            <ion-col col-md-6 col-12 class="page-content" *ngFor="let addr of matches?.addresses"\n\n                (click)="goToAddress(addr)">\n\n\n\n                <div ion-item no-lines>\n\n                    <div ion-text color="primary">\n\n                        {{ addr?.address }}\n\n                    </div>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n<footer></footer>\n\n'/*ion-inline-end:"C:\Projects\smartcash\explorer\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_price_price__["a" /* PriceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_currency_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_redir_redir__["a" /* RedirProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=3.js.map