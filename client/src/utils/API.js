import axios from "axios";

const entertainmentFetch = {
  // fetch song
  fetchSong: function (song) {
    // return axios.get("/song",song);
    return axios.post('/api/songSpotify',song);
  }
};

export default entertainmentFetch;