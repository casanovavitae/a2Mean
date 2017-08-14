/*Express*/
var express = require('express');
var router = express.Router();

/*Mongo Db*/
var mongojs = require('mongojs');
var db = mongojs('mongodb://meantodos:meantodos@ds153732.mlab.com:53732/meantodos',['todos','user']);

/*Spotify*/
var SpotifyWebApi = require('spotify-web-api-node');


var spotifyApi = new SpotifyWebApi({
  clientId : 'cdbcd328fd8a48e5a9cc34816a3936a4',
  clientSecret : '3f1b2aea6d644435948f04d768d362f6'
});


router.get('/auth',function(req,res,next){
    spotifyApi.clientCredentialsGrant()
        .then(function(data) {
            console.log('The access token is ' + data.body['access_token']);
            spotifyApi.setAccessToken(data.body['access_token']);
            res.send(data.body['access_token']);
            //res.redirect('/');
        }, function(err) {
            console.log('Something went wrong!', err);
            res.send(err);
        });
})


router.get('/albums',function(req,res,next){
    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
        .then(function(data) {
            console.log('Artist albums', data.body);
        }, function(err) {
            console.error(err);
        });
})

router.get('/artists/:artist',function(req,res,next){
    console.log('req.params.artist',req.params.artist);
    var artist = req.params.artist;
    spotifyApi.searchArtists(artist)
        .then(function(data) {
            console.log('Search artists by "Love"', data.body);
            res.send(data.body);
        }, function(err) {
            console.error(err);
            res.send(err);
        });
})



module.exports = router;