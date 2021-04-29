// const db = require("../models");
require("dotenv").config();
let keys = require("../keys.js");
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);

module.exports = {

  getSong: function(req, res) {
    let queryParam = (req.params.id).split(' ').join("+");
    
    spotify.search({ type: 'track', query: queryParam  })
    .then(response => {
      let iterateNum, songs = [];

      if((response.tracks.items).length >= 10) {
        iterateNum = 10;
      } else {
          iterateNum = (response.tracks.items).length;
      }

      for(let i=0; i<iterateNum; i++) {
        let preview_url;
        if(response.tracks.items[i].preview_url === null) {
          preview_url = response.tracks.items[i].external_urls.spotify;
        } else {
          preview_url = response.tracks.items[i].preview_url;
        }
        songs.push({
          artist: response.tracks.items[i].album.artists[0].name,
          name: response.tracks.items[i].name,
          album: response.tracks.items[i].album.name,
          preview_url
        });
      }

      res.json(songs);
    })
    .catch((error) => {
      res.json({
        error: true,
        errorMessage: error.message
      });
    });
  }
};