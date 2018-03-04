import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the StatsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StatsProvider {
  url= 'https://fortnite.y3n.co/v2/player/emulgator';
  apiKey = 'tlisV9TFbCqkwsYOnTfq';

  constructor(public http: HttpClient) {
    console.log('Hello StatsProvider Provider');
  }

  getStats() {
    let headers = new HttpHeaders().set('X-Key', this.apiKey)
    return this.http.get(this.url, {headers: headers})
  }
}
