import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiProvider } from '../../providers/api/api';
import { CurrencyProvider } from '../../providers/currency/currency';
import { BlocksProvider } from '../blocks/blocks';
import { TxsProvider } from '../transactions/transactions';
import { fromPromise } from 'rxjs/observable/fromPromise';


export interface ApiAddr {
    received: number;
    sent: number;
    confirmed: number;
    unconfirmed: number;
    balance: number;
}

@Injectable()
export class AddressProvider {
    private urlSapi = `${this.apiProvider.getRandomSapiUrl()}address/balance/`;

    constructor(
        public httpClient: HttpClient,
        public currency: CurrencyProvider,
        public blocks: BlocksProvider,
        public txsProvider: TxsProvider,
        public apiProvider: ApiProvider) { }

    public getAddressBalance(addrStr?: string): Observable<ApiAddr> {
        return this.httpClient.get<ApiAddr>(this.urlSapi + addrStr);
    }

    public getAddressReward(addrStr?: string): Observable<any> {
        return this.httpClient.get<any>(`${this.apiProvider.getRandomSapiUrl()}smartrewards/check/${addrStr}`);
    }

    public getAddressActivity(addrStr?: string): Observable<any> {
        return fromPromise(this.txsProvider.getUnmappedTxByAddress(addrStr).then(data => {
            return this.txsProvider.mapToTx(data);
        }));
    }

    /*public getAddressActivityCoins(addrStr?: string, chainNetwork?: ChainNetwork
    ): Observable<any> {
      return this.httpClient.get<any>(
        `${this.apiProvider.getUrl(chainNetwork)}/address/${addrStr}/coins`
      );
    }*/
}
