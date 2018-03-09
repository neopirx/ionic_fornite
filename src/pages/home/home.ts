import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { StatsProvider } from '../../providers/stats/stats';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  stats: any;
  nickname: string;

  constructor(
    public navCtrl: NavController, 
    private statsProvider:StatsProvider, 
    private storage: Storage) {
  }

  mode = 'solo';

  ionViewWillEnter(){
    this.storage.get('nickname').then((val) => {
      if(val != null) {
        this.nickname = val;
        console.log('1');
      } else {
        this.nickname = 'Emulgator';
        console.log('2');
      }

      this.statsProvider.getStats(this.nickname).subscribe(stats => {
        this.stats = stats;
        console.log(stats);
      });
    });
  }
}
