import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SmartNodes } from '../../models/smartnodes';
import { RewardsProvider } from '../../providers/rewards/rewards';

@Component({
  selector: 'rewards',
  templateUrl: 'rewards.html'
})
export class RewardsComponent implements OnInit {
  public subscriber: Subscription;
  public smartRewards: string;
  public superRewards: string;
  public colateral:string;
  public yearly_rewards: string;
  public yearly_yield: string;

  constructor(private rewardsProvider: RewardsProvider ){

  }

  public ngOnInit(): void {
    this.loadRewardsInfo();
    this.loadNodesInfo();   
  }

  loadRewardsInfo(){
    this.subscriber = this.rewardsProvider
      .getSmartRewards()
      .subscribe(
        response => {          
          this.smartRewards = response['SmartRewards Yearly Yield % with 4 Week Bonus'];
          this.superRewards = response['SuperRewards Yearly Yield % with 4 week Bonux'];
        },
        err => {
          this.subscriber.unsubscribe();
        }
      );  
  }

  loadNodesInfo(){
    this.subscriber = this.rewardsProvider
      .getSmartNodes()
      .subscribe(
        response => {          
          this.colateral = response['SmartNode Collateral'];
          this.yearly_rewards = response['Yearly Rewards'];
          this.yearly_yield = response['Yearly Yield %'];
        },
        err => {
          this.subscriber.unsubscribe();
        }
      );  
  }
}
