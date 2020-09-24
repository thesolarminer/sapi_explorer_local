import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiProvider, ChainNetwork } from '../../providers/api/api';
import { CurrencyProvider } from '../../providers/currency/currency';
import { BlocksProvider } from '../blocks/blocks';
import { from } from 'rxjs/observable/from';
import { access } from 'fs';
import { switchMap } from 'rxjs/operator/switchMap';
import { AnonymousSubscription } from 'rxjs/Subscription';

import { AppBlock } from '../../providers/blocks/blocks';

interface CoinsApiResponse {
    inputs: ApiCoin[];
    outputs: ApiCoin[];
}

export interface ApiTx {
    address: string;
    chain: string;
    network: string;
    txid: string;
    blockHeight: number;
    blockHash: string;
    blockTime: Date;
    //blockTimeNormalized: Date;
    coinbase: boolean;
    size: number;
    confirmations: number;
    locktime: number;
    // mintTxid: string;
    // mintHeight: number;
    // spentTxid: string;
    // spentHeight: number;
    value: number;
    coins?: any;
}

export interface SapiAddressTransaction {
    txid: string;
    address: string;
    confirmations: number;
    amount: number;
    direction: string;
    time: number;
}

export interface SapiRewardCheck {
    address: string;
    balance: number;
    balance_eligible: number;
    is_smartnode: number;
    activated: number;
    eligible: number;
}

export interface ApiUtxoCoinTx extends ApiTx {
    coins: any;
    inputs: ApiCoin[];
    outputs: ApiCoin[];
    version: number;
}
export interface ApiCoin {
    txid: string;
    mintTxid: string;
    coinbase: boolean;
    vout: number;
    address: string;
    script: {
        asm: string;
        type: string;
    };
    spentTxid: string;
    mintHeight: number;
    spentHeight: number;
    value: number;
    sequenceNumber: number;
}

export interface AppCoin {
    txid: string;
    valueOut: number;
    value: number;
    spentTxid: string;
    mintTxid: string;
    mintHeight: number;
    spentHeight: number;
}

export interface AppInput {
    coinbase: boolean;
    sequence: number;
    n: number;
    txid: string;
    vout: number;
    scriptSig: {
        hex: string;
        asm: string;
        addresses: string[];
        type: string;
    };
    addr: string;
    valueSat: number;
    value: number;
    doubleSpentTxID: string;
    isConfirmed: boolean;
    confirmations: number;
    unconfirmedInput: string;
}

export interface AppOutput {
    value: number;
    n: number;
    scriptPubKey: {
        hex: string;
        asm: string;
        addresses: string[];
        type: string;
    };
    spentTxId: null;
    spentIndex: null;
    spentHeight: null;
}

export interface AppTx {
    txid: string;
    blockhash: string;
    locktime: number;
    isCoinBase: boolean;
    confirmations: number;
    time: number;
    valueOut: number;
    size: number;
    fee: number;
    blockheight: number;
    blocktime: number;
    coins?: any;
}

export interface AppUtxoCoinsTx extends AppTx {
    coins?: any;
    vin: any[];
    vout: any[];
    version: number;
}

@Injectable()
export class TxsProvider {
    constructor(
        public httpClient: HttpClient,
        public currency: CurrencyProvider,
        public blocksProvider: BlocksProvider,
        private apiProvider: ApiProvider
    ) { }

    public getFee(tx: AppUtxoCoinsTx): number {
        return 0;
        const sumSatoshis: any = (arr: any): number =>
            arr.reduce((prev: any, cur: { value: any; }) => prev + cur.value, 0);
        const inputs: number = sumSatoshis(tx.vin);
        const outputs: number = sumSatoshis(tx.vout);
        const fee: number = tx.isCoinBase ? 0 : inputs - outputs;
        return fee;
    }

    public toUtxoCoinsAppTx(tx: ApiUtxoCoinTx): AppUtxoCoinsTx {
        return {
            ...this.toAppTx(tx),
            vin: [],
            vout: [],
            version: tx.version
        };
    }

    public toAppTx(tx: ApiUtxoCoinTx): AppTx {
        return {
            txid: tx.txid,
            fee: null, // calculated later, when coins are retrieved
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
    }

    public toAppCoin(coin: ApiCoin): AppCoin {
        return {
            txid: coin.txid,
            mintTxid: coin.mintTxid,
            mintHeight: coin.mintHeight,
            spentHeight: coin.spentHeight,
            valueOut: coin.value,
            value: coin.value,
            spentTxid: coin.spentTxid
        };
    }

    async getTransactionsPerBlock(blockHash: string) {
        const url = `${this.apiProvider.getRandomSapiUrl()}blockchain/block/${blockHash}`;
        let block: AppBlock;
        let txs: ApiTx[] = [];

        await this.httpClient.get<AppBlock>(url).toPromise().then(data => block = data);

        block.tx.forEach(item => {
            this.getMappedTxs(item).then(data => txs.push(data.tx));
        });

        return txs;
    }
    async getTransactionsPerAddress(address: string) {

        const url = `${this.apiProvider.getRandomSapiUrl()}address/transactions/${address}`;

        let txs: ApiTx[] = [];

        let addressData: any = await this.httpClient.post<any>(url, {
            "pageNumber": 1,
            "pageSize": 10
        }).toPromise();

        addressData.data.forEach(item => {
            this.getMappedTxs(item).then(data => txs.push(data.tx));
        });

        return txs;
    }

    public getTxs(chainNetwork: ChainNetwork, args?: { blockHash?: string }): Observable<ApiUtxoCoinTx[]> {
        let queryString = '';
        if (args.blockHash) {
            queryString += `?blockHash=${args.blockHash}`;
        }

        //return from(this.getTransactionsPerBlock(args.blockHash));

        const url = `${this.apiProvider.getUrl(chainNetwork)}/tx/${queryString}`;
        return this.httpClient.get<ApiUtxoCoinTx[]>(url);
    }

    public getTx(hash: string): Observable<ApiTx> {
        return from(this.getMappedTx(hash).then(data => data.tx));
    }

    public getDailyTransactionHistory(chainNetwork: ChainNetwork) {
        const url = `${this.apiProvider.getUrl(
            chainNetwork
        )}/stats/daily-transactions`;
        return this.httpClient.get(url);
    }

    public getCoins(
        txId: string,
        chainNetwork: ChainNetwork
    ): Observable<CoinsApiResponse> {
        return from(this.getMappedTx(txId).then(data => data.coin));
    }

    public getConfirmations(blockheight: number): Observable<number> {
        // return this.blocksProvider.getCurrentHeight(chainNetwork).map(data => {
        //     return blockheight > 0 ? data.height - blockheight + 1 : blockheight;
        // });

        return null;
    }

    public async getMappedTxs(unmappedTx) {
        //const unmappedTx = await this.getUnmappedTx(txId);
        return { tx: this.mapToTx(unmappedTx), coin: this.mapToCoin(unmappedTx) };
    }

    public async getMappedTx(txId: string) {
        const unmappedTx = await this.getUnmappedTx(txId);
        return { tx: this.mapToTx(unmappedTx), coin: this.mapToCoin(unmappedTx) };
    }

    public async getUnmappedTxByAddress(addrStr: string) {
        const url = `${this.apiProvider.getRandomSapiUrl()}address/transactions/${addrStr}`;
        return this.httpClient.get<any>(url).toPromise();
    }

    public async getUnmappedTx(hash: string) {
        const url = `${this.apiProvider.getRandomSapiUrl()}transaction/check/${hash}`;
        return this.httpClient.get<any>(url).toPromise();
    }

    public mapToCoin(tx: any) {
        return {
            outputs: tx.vout.map((o: any) => {
                let output: ApiCoin =
                {
                    txid: tx.txid,
                    coinbase: tx.vin === undefined || tx.vin.length === 0,
                    vout: o.n,
                    address: (o.scriptPubKey === undefined || o.scriptPubKey.addresses === undefined) ? "" : o.scriptPubKey.addresses.find((x: any) => x !== undefined),
                    script: (o.scriptPubKey === undefined) ? undefined : {
                        asm: o.scriptPubKey.asm,
                        type: o.scriptPubKey.type
                    },
                    value: o.value,
                    sequenceNumber: undefined,
                    mintHeight: 0, mintTxid: "NO_MINT", spentHeight: 0, spentTxid: "NO_SPENT"
                }
                return output;
            }),
            inputs:
                tx.vin.map((o: any) => {
                    let input: ApiCoin =
                    {
                        txid: o.txid,
                        coinbase: tx.vin === undefined || tx.vin.length === 0,
                        vout: o.n,
                        address: (o.scriptPubKey === undefined || o.scriptPubKey.addresses === undefined) ? "" : o.scriptPubKey.addresses.find((x: any) => x !== undefined),
                        script: (o.scriptPubKey === undefined) ? undefined : {
                            asm: o.scriptPubKey.asm,
                            type: o.scriptPubKey.type
                        },
                        value: o.value,
                        sequenceNumber: o.sequence,
                        mintHeight: 0, mintTxid: "NO_MINT", spentHeight: 0, spentTxid: "NO_SPENT"
                    }
                    return input;
                })
        };
    }

    public mapToTx(tx: any) {
        let x: ApiTx = {
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
            value: tx.vout.reduce((accumulator, currentValue) => accumulator += currentValue.value, 0),
            coins: this.mapToCoin(tx)
        }
        return x;
    }
}
