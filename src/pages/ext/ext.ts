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

  }

  public ionViewWillLoad(): void {

  }

  public getValue(){
      this.ext = JSON.stringify('2637267080');
  }
}
