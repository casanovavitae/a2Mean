import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import { ArtistObject } from './artist.object';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  searchStr:string;
  artists: ArtistObject[];

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchMusic(){
    console.log(this.searchStr);
    this._spotifyService.searchArtist(this.searchStr)
      .subscribe(response => {
        //this.setEditState(todo,false);
        console.log(response);
        this.artists = response.artists.items;
      })
  }

}
