import axios from "axios";

const entertainmentFetch = {
  // fetch song
  fetchSong: function (song) {
    return axios.get('/api/songSpotify/' + song);
  }
};

export default entertainmentFetch;