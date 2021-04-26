const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSpotifySchema = new Schema({
  album: { type: String, required: true },
  name: { type: String, required: true },
  artist: { type: String, required: true },
  preview_url: { type: String }
});

const SongSpotify = mongoose.model("SongSpotify", songSpotifySchema);
SongSpotify.createIndexes();

module.exports = SongSpotify;