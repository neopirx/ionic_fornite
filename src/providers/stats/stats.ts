import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the StatsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StatsProvider {
  url= 'https://fortnite.y3n.co/v2/player/';
  apiKey = 'tlisV9TFbCqkwsYOnTfq';

  constructor(
    public http: HttpClient
  ) {
    console.log('Hello StatsProvider Provider');
  }

  getStats(nickname) {
    let headers = new HttpHeaders().set('X-Key', this.apiKey)
    return this.http.get(this.url + nickname, {headers: headers})
  }
}
