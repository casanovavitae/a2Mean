import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl:string
  constructor(private _http: Http) { }

  searchMusic(str:string,type:string='artist'){
    this.searchUrl = ''
  }

}
