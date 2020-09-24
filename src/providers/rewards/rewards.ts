import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs/observable/from';

@Injectable()
export class RewardsProvider {
    //TODO: Change this when all SAPIS have 1.3.4
    private urlSmartRewards = "https://sapi.smartcash.cc/v1/smartrewards/roi";
    private urlSmartNodes = "https://sapi.smartcash.cc/v1/smartnodes/roi";

    constructor(public httpClient: HttpClient) { }

    public getSmartRewards(): Observable<any> {
        return from(this.getSmartRewardsDetails());
    }

    public async getSmartRewardsDetails() {
        return await this.httpClient.get<any>(this.urlSmartRewards).toPromise<any>();
    }

    public getSmartNodes(): Observable<any> {
        return from(this.getSmartNodesInfos());
    }

    public async getSmartNodesInfos() {
        return await this.httpClient.get<any>(this.urlSmartNodes).toPromise<any>();
    }
}
