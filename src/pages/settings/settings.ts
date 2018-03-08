import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  nickname: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage:Storage) {
      this.storage.get('nickname').then((val) => {
        if(val != null) {
          this.nickname = val;
          console.log('set1');
        } else {
          this.nickname = 'Emulgator';
          console.log('set2');
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm() {
    let nickname = this.nickname;
    this.storage.set('nickname', JSON.stringify(nickname));
    console.log(nickname);
  }

}
