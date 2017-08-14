import { Component,OnInit } from '@angular/core';
import {TodoService} from './services/todo.service';
import {AuthSpotifyService} from './services/authspotify.service';
import {SpotifyService} from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService,AuthSpotifyService,SpotifyService]
})

export class AppComponent implements OnInit{
  title = 'app';

  constructor(private _authspotifyService: AuthSpotifyService) { }

  ngOnInit() {
    var result:any;
    result = this._authspotifyService.auth();
    result.subscribe(response => {
      console.log("Auth",response);
    })
  }
}


    