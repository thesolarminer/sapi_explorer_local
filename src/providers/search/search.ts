import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiProvider, ChainNetwork } from '../api/api';

@Injectable()
export class SearchProvider {
  private urlSapi = `${this.apiProvider.getRandomSapiUrl()}blockchain`;

  constructor(
    private apiProvider: ApiProvider,
    private httpClient: HttpClient
  ) {}

  // public search(input: string, type: string): Observable<any> {
  //   if (chainNetwork.chain !== 'ALL') {
  //     this.apiURL = `${this.apiProvider.getUrl(chainNetwork)}`;
  //     switch (type) {
  //       case 'blockOrTx':
  //         return Observable.forkJoin(
  //           this.searchBlock(input).catch(err => Observable.of(err)),
  //           this.searchTx(input).catch(err => Observable.of(err))
  //         );
  //       case 'addr':
  //         return this.searchAddr(input);
  //     }
  //   } else {
  //     const searchArray: Array<Observable<any>> = [];
  //     this.apiProvider.networkSettings.availableNetworks.forEach(network => {
  //       if (network.chain !== 'ALL') {
  //         this.apiURL = `${this.apiProvider.getUrl(network)}`;
  //         searchArray.push(
  //           this.searchBlock(input).catch(err => Observable.of(err))
  //         );
  //         searchArray.push(
  //           this.searchTx(input).catch(err => Observable.of(err))
  //         );
  //         searchArray.push(
  //           this.searchAddr(input).catch(err => Observable.of(err))
  //         );
  //       }
  //     });
  //     return Observable.forkJoin(searchArray);
  //   }
  // }

  public search(input: string): Observable<any> {
      const searchArray: Array<Observable<any>> = [];
      searchArray.push(this.searchBlock(input).catch(err => Observable.of(err)));
      searchArray.push(this.searchTx(input).catch(err => Observable.of(err)));
      searchArray.push(this.searchAddr(input).catch(err => Observable.of(err)));

      return Observable.forkJoin(searchArray);
  }

  public isInputValid(inputValue): Observable<any> {
      return Observable.of({ isValid: true, type: 'all' });
  }

  private searchBlock(block: string): Observable<{ block: any }> {
    const url = this.urlSapi + "/block/" + block;
    return this.httpClient.get<{ block: any }>(url).pipe(map(res => ({ block: res })));
  }
  private searchTx(txid: string): Observable<{ tx: any }> {
    const url = `${this.apiProvider.getRandomSapiUrl()}transaction/check/${txid}`;
    return this.httpClient.get<{ tx: any }>(url).pipe(map(res => ({ tx: res })));
  }

  private searchAddr(addr: string): Observable<{ addr: any }> {
    const url = `${this.apiProvider.getRandomSapiUrl()}address/balance/${addr}`;
    return this.httpClient.get<{ addr: any }>(url).pipe(map(res => ({ addr: res })));
  }

  // private extractAddress(address: string): string {
  //   const extractedAddress = address
  //     .replace(/^(bitcoincash:|bchtest:|bitcoin:)/i, '')
  //     .replace(/\?.*/, '');
  //   return extractedAddress || address;
  // }
}
