import { Component, Injectable } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@Injectable()
@IonicPage({
  name: 'ext',
  segment: 'ext/getmoneysupply',
  defaultHistory: ['home']
})
@Component({
  selector: 'page-ext',
  templateUrl: 'ext.html'
})
export class ExtPage { 
    public ext = '';

  constructor(
) {
    // this.apiProvider.changeNetwork(this.chainNetwork);
    // this.currencyProvider.setCurrency(this.chainNetwork);
    // this.priceProvider.setCurrency();
    this.getValue();
    console.log('call:' + this.ext);
    
  }

  public ionViewWillLoad(): void {
    
  }

  public getValue(){
      this.ext = JSON.stringify('3.000.000.000,00');
  }
}
