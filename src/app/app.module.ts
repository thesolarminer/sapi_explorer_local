import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { BlocksPage, HomePage, PagesModule } from '../pages';
import { AddressProvider } from '../providers/address/address';
import { ApiProvider } from '../providers/api/api';
import { BlocksProvider } from '../providers/blocks/blocks';
import { CurrencyProvider } from '../providers/currency/currency';
import { DefaultProvider } from '../providers/default/default';
import { HttpErrorInterceptor } from '../providers/error-handler/error-handler';
import { Logger } from '../providers/logger/logger';
import { PriceProvider } from '../providers/price/price';
import { RedirProvider } from '../providers/redir/redir';
import { RewardsProvider } from '../providers/rewards/rewards';
import { SearchProvider } from '../providers/search/search';
import { TxsProvider } from '../providers/transactions/transactions';
import { InsightApp } from './app.component';
import { LocationStrategy, Location, PathLocationStrategy } from '@angular/common';

@NgModule({
    declarations: [InsightApp],
    imports: [
        BrowserModule,
        HttpClientModule,
        PagesModule,
        IonicModule.forRoot(InsightApp, {
            mode: 'md',
            animate: false
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [InsightApp, HomePage, BlocksPage],
    providers: [
        ApiProvider,
        CurrencyProvider,
        BlocksProvider,
        TxsProvider,
        DefaultProvider,
        PriceProvider,
        SearchProvider,
        RedirProvider,
        Logger,
        AddressProvider,
        RewardsProvider,
        Location, { provide: LocationStrategy, useClass: PathLocationStrategy }
    ]
})
export class AppModule { }
