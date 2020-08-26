import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { merge, shareReplay } from 'rxjs/operators';
import { ApiProvider } from '../../providers/api/api';
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

// export interface ApiEthBlock extends ApiBlock {
//     difficulty: number;
//     totalDifficulty: number;
//     gasUsed: number;
//     gasLimit: number;
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

// export interface AppEthBlock extends AppBlock {
//     difficulty: number;
//     totalDifficulty: number;
//     gasUsed: number;
//     gasLimit: number;
// }

@Injectable()
export class BlocksProvider {
    public chainNetworkTipValues;
    public currentChainNetwork;
    public tipValue;
    private urlSapi = "https://sapi.smartcash.cc/v1/blockchain";
    private urlExplorer = "https://explorer.smartcash.cc/api/blocks";

    constructor(
        public httpClient: HttpClient,
        public currency: CurrencyProvider,
        private api: ApiProvider
    ) { }

    // public toEthAppBlock(block: ApiEthBlock): AppEthBlock {
    //     return {
    //         ...this.toAppBlock(block),
    //         gasLimit: block.gasLimit,
    //         gasUsed: block.gasUsed,
    //         difficulty: block.difficulty,
    //         totalDifficulty: block.totalDifficulty
    //     };
    // }

    // public toUtxoCoinAppBlock(block: ApiUtxoCoinBlock): AppUtxoCoinBlock {
    //     const difficulty: number = 0x1d00ffff / block.bits;
    //     return {
    //         ...this.toAppBlock(block),
    //         merkleroot: block.merkleRoot,
    //         version: block.version,
    //         bits: block.bits.toString(16),
    //         difficulty
    //     };
    // }

    // public toAppBlock(block: ApiBlock): AppBlock {
    //     return {
    //         height: block.height,
    //         confirmations: block.confirmations,
    //         nonce: block.nonce,
    //         size: block.size,
    //         virtualSize: block.size,
    //         hash: block.hash,
    //         time: new Date(block.time).getTime() / 1000,
    //         tx: {
    //             length: block.transactionCount
    //         },
    //         txlength: block.transactionCount,
    //         previousblockhash: block.previousBlockHash,
    //         nextblockhash: block.nextBlockHash,
    //         poolInfo: {
    //             poolName: block.minedBy,
    //             url: ''
    //         },
    //         reward: block.reward
    //     };
    // }

    // public getCurrentHeight(
    //     chainNetwork: ChainNetwork
    // ): Observable<ApiEthBlock & ApiUtxoCoinBlock> {
    //     if (
    //         !this.tipValue ||
    //         !this.currentChainNetwork ||
    //         this.currentChainNetwork !== chainNetwork
    //     ) {
    //         this.tipValue = this.requestCurrentHeight(chainNetwork).pipe(
    //             merge(),
    //             shareReplay(1)
    //         );
    //         this.currentChainNetwork = chainNetwork;
    //     }
    //     return this.tipValue;
    // }    

    // public getCoinsForBlockHash(
    //     blockHash: string,
    //     chainNetwork: ChainNetwork,
    //     limit: number,
    //     page: number
    // ): Observable<any> {
    //     const url = `${this.api.getUrl(
    //         chainNetwork
    //     )}/block/${blockHash}/coins/${limit}/${page}`;
    //     return this.httpClient.get(url);
    // }

    // public requestCurrentHeight(chainNetwork: ChainNetwork): Observable<ApiEthBlock & ApiUtxoCoinBlock> {
    //     const heightUrl = `${this.api.getUrl(chainNetwork)}/block/tip`;
    //     return this.httpClient.get<ApiEthBlock & ApiUtxoCoinBlock>(heightUrl);
    // }

    // public getCurrentHeight(chainNetwork: ChainNetwork): Observable<ApiEthBlock & ApiUtxoCoinBlock> {
    //     if (!this.tipValue || !this.currentChainNetwork || this.currentChainNetwork !== chainNetwork) {
    //         this.tipValue = this.requestCurrentHeight(chainNetwork).pipe(
    //             merge(),
    //             shareReplay(1)
    //         );
    //         this.currentChainNetwork = chainNetwork;
    //     }
    //     return this.tipValue;
    // } 
   
    
    public getBlocks(): Observable<AppBlock[]> {
        return from(this.getAllBlocks());
    }

    public async getAllBlocks() {
        const cachedBlocks: any = [];
        const dataHeight = await this.httpClient.get<any>( this.urlSapi + '/height').toPromise();
        let currentBlockHeight = dataHeight.height;
        if (cachedBlocks.length === 0) {
            for (let i = 0; i < 10; i++) {
                const block = await this.httpClient.get<AppBlock[]>( this.urlSapi + `/block/${currentBlockHeight}`).toPromise<AppBlock[]>();
                cachedBlocks.push(block);
                currentBlockHeight--;
            }
        } else {
            cachedBlocks.sort((a, b) => b.height - a.height).pop();
            const block = await this.httpClient.get<AppBlock[]>(this.urlSapi + `/block/${currentBlockHeight}`).toPromise<AppBlock[]>();
            cachedBlocks.push(block);
            cachedBlocks.push();
        }

        const blocks = cachedBlocks.sort((a, b) => b.height - a.height);
        return blocks;
    }
  
    public pageBlocks(): Observable<AppBlock[]> {
        return this.httpClient.get<AppBlock[]>(this.urlExplorer);
    }

    public getBlock(hash: string): Observable<AppBlock> {
        const url = this.urlSapi + "/block/" + hash;
        return this.httpClient.get<AppBlock>(url);
    }
}
