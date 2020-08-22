import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiProvider, ChainNetwork } from '../../providers/api/api';
import { CurrencyProvider } from '../../providers/currency/currency';
import { BlocksProvider, ApiEthBlock, ApiUtxoCoinBlock } from '../blocks/blocks';
import { from } from 'rxjs/observable/from';
import { access } from 'fs';
import { switchMap } from 'rxjs/operator/switchMap';
import { AnonymousSubscription } from 'rxjs/Subscription';

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
    blockTimeNormalized: Date;
    coinbase: boolean;
    size: number;
    confirmations: number;
    locktime: number;
    mintTxid: string;
    mintHeight: number;
    spentTxid: string;
    spentHeight: number;
    value: number;
    coins?: any;
}

export interface ApiUtxoCoinTx extends ApiTx {
    coins: any;
    inputs: ApiCoin[];
    outputs: ApiCoin[];
    version: number;
}

export interface ApiEthTx extends ApiTx {
    gasLimit: number;
    gasPrice: number;
    internal: any[];
    nonce: number;
    to: string;
    from: string;
    fee: number;
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

export interface ApiEthCoin {
    blockHash: string;
    blockHeight: string;
    blockTime: string;
    blockTimeNormalized: string;
    chain: string;
    fee: number;
    from: string;
    gasLimit: number;
    gasPrice: number;
    network: string;
    nonce: string;
    to: string;
    txid: string;
    value: number;
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

export interface AppEthCoin {
    to: string;
    from: string;
    txid: string;
    fee: number;
    valueOut: number;
    height: number;
    blockheight: number;
    time: any;
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

export interface AppEthTx extends AppTx {
    gasLimit: number;
    gasPrice: number;
    to: string;
    from: string;
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

    public toEthAppTx(tx: ApiEthTx): AppEthTx {
        return {
            ...this.toAppTx(tx),
            to: tx.to,
            from: tx.from,
            gasLimit: tx.gasLimit,
            gasPrice: tx.gasPrice
        };
    }

    public toUtxoCoinsAppTx(tx: ApiUtxoCoinTx): AppUtxoCoinsTx {
        return {
            ...this.toAppTx(tx),
            vin: [],
            vout: [],
            version: tx.version
        };
    }

    public toAppTx(tx: ApiUtxoCoinTx | ApiEthTx): AppTx {
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

    public toAppEthCoin(coin: ApiEthCoin): AppEthCoin {
        return {
            to: coin.to,
            from: coin.from,
            txid: coin.txid,
            fee: coin.fee,
            valueOut: coin.value,
            height: parseInt(coin.blockHeight, 10),
            blockheight: parseInt(coin.blockHeight, 10),
            time: new Date(coin.blockTime).getTime() / 1000
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

    private async getTransactionsPerBlock(blockHash: string) {
        console.log('getTransactionsPerBlock', blockHash);
        const url = `https://sapi.smartcash.cc/v1/blockchain/block/${blockHash}`;
        const block = await this.httpClient.get<any>(url).toPromise();

        const txs = block.tx.map(async (t: any) => {
            return this.getMappedTx(t).then(data => data.tx);
        });
        console.log(txs);
        return txs;
    }

    public getTxs(
        chainNetwork: ChainNetwork,
        args?: { blockHash?: string }
    ): Observable<ApiEthTx[] & ApiUtxoCoinTx[]> {
        let queryString = '';
        if (args.blockHash) {
            queryString += `?blockHash=${args.blockHash}`;
        }
        return from(this.getTransactionsPerBlock(args.blockHash));

        const url = `${this.apiProvider.getUrl(chainNetwork)}/tx/${queryString}`;
        return this.httpClient.get<ApiEthTx[] & ApiUtxoCoinTx[]>(url);
    }

    public getTx(
        hash: string,
        chainNetwork: ChainNetwork
    ): Observable<ApiEthTx & ApiUtxoCoinTx> {
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

    public getConfirmations(
        blockheight: number,
        chainNetwork: ChainNetwork
    ): Observable<number> {
        return this.blocksProvider.getCurrentHeight(chainNetwork).map(data => {
            return blockheight > 0 ? data.height - blockheight + 1 : blockheight;
        });
    }

    private async getMappedTx(txId: string) {
        const unmappedTx = await this.getUnmappedTx(txId);
        return { tx: this.mapToTx(unmappedTx), coin: this.mapToCoin(unmappedTx) };
    }

    private async getUnmappedTx(hash: string) {
        const url = `https://sapi.smartcash.cc/v1/transaction/check/${hash}`;
        return await this.httpClient.get<any>(url).toPromise();
    }

    private mapToCoin(tx: any) {
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

    private mapToTx(tx: any) {
        let x: ApiUtxoCoinTx = {
            address: "string",
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
            value: tx.vout.reduce((accumulator: { value: any; }, currentValue: { value: any; }) => accumulator.value + currentValue.value),
            coins: this.mapToCoin(tx),
        }
        return x;
    }
}
