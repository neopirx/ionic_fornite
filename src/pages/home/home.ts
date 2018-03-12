import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { StatsProvider } from '../../providers/stats/stats';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  stats: any;
  nickname: string;
  error: boolean;

  loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Loading data... Please wait',
    duration: 2000
  });

  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController,
    private statsProvider:StatsProvider,
    public loadingCtrl: LoadingController,
    private storage: Storage) {
  }

  mode = 'solo';
  isLoading = false;

  ionViewWillEnter(){
    this.loading.present();
    this.storage.get('nickname').then((val) => {
      if(val != null) {
        this.nickname = val;
      } else {
        this.nickname = 'Emulgator';
      }

      this.statsProvider.getStats(this.nickname)
      .subscribe(
        stats => {
          this.stats = stats;
          console.log(stats);
          this.error = false;
        },
        err => {
          console.log('Error occured');
          this.presentToast();
          this.error = true;
          console.log(this.error);
        },
        () => {

          this.loading.dismiss()
  
        }
      );
    }); 
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Incorrect nickname, try again',
      duration: 2000,
      position: 'top'
    });
    toast.present();
}
}