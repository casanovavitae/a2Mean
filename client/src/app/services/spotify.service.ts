import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http,URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl:string
  constructor(private _http: Http) {   
    var result:any;

  }

  searchArtist(artist:string='artist'){
    console.log('searchArtist',artist);

    //let params = new URLSearchParams();
    //params.set('artist', artist);

    return this._http
    .get('/api/spotify/artists/'+artist)
    .map(
      res => res.json(),
      err => err.json()
    );

   
  }

  getMusicStream():Observable<any>{
    return this._http
    .get('/api/spotify/artists')
    .map(
      res => res.json(),
      err => err.json()
    );
  }



}
