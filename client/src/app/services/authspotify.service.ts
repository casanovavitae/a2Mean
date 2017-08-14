import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthSpotifyService {
  private searchUrl:string
  constructor(private _http: Http) {   
    var result:any;
  }
  auth():Observable<any>{
    return this._http
    .get('/api/spotify/auth')
    .map(
      res => JSON.stringify(res),
      err => err.json()
    );
  }

}
