import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { merge, shareReplay } from 'rxjs/operators';
import { ApiProvider, ChainNetwork } from '../../providers/api/api';
import { CurrencyProvider } from '../../providers/currency/currency';
import { from } from 'rxjs/observable/from';

// export interface ApiBlock {
//     height: number;
//     nonce: number;
//     size: number;
//     confirmations: number;
//     hash: string;
//     nextBlockHash: string;
//     previousBlockHash: string;
//     transactionCount: number;
//     reward: number;
//     minedBy: string;
//     time: Date;
//     timeNormalized: Date;
// }

// export interface ApiUtxoCoinBlock extends ApiBlock {
//     difficulty: number;
//     merkleRoot: string;
//     bits: number;
//     version: number;
// }

export interface AppBlock {
    height: number;
    nonce: number;
    size: number;
    confirmations: number;
    virtualSize: number;
    hash: string;
    time: number;
    tx: any[];
    txlength: number;
    previousblockhash: string;
    nextblockhash: string;
    poolInfo: {
        poolName: string;
        url: string;
    };
    reward: number;
}

// export interface AppUtxoCoinBlock extends AppBlock {
//     difficulty: number;
//     merkleroot: string;
//     bits: string;
//     version: number;
// }

@Injectable()
export class BlocksProvider {
    public chainNetworkTipValues;
    public currentChainNetwork;
    public tipValue;
    private urlSapi = `${this.apiProvider.getRandomSapiUrl()}blockchain`;
    private urlExplorer = `https://explorer.smartcash.cc/api/blocks`;

    constructor(
        public httpClient: HttpClient,
        public currency: CurrencyProvider,
        private apiProvider: ApiProvider
    ) { }

    public getBlocks(): Observable<AppBlock[]> {
        return from(this.getAllBlocks());
    }

    public async getAllBlocks() {
        return await this.httpClient.get<any>(this.urlSapi + `/blocks/latest/`).toPromise<any>();
    }

    public pageBlocks(): Observable<AppBlock[]> {
        return this.httpClient.get<AppBlock[]>(this.urlExplorer);
    }

    public getBlock(hash: string): Observable<AppBlock> {
        const url = this.urlSapi + "/block/" + hash;
        return this.httpClient.get<AppBlock>(url);
    }
}
