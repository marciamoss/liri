import React, { Component } from "react";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import "./style.css";
import PopUps from "../components/PopUps";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      song: "",
      spotifySongList: [],
      apiError: false,
      show: false,
      handleClose() {
      this.setState({ show: false });
      },
      handleShow() {
      this.setState({ show: true });
      }
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    },()=>{
      this.setState({song: this.state.song, spotifySongList: "", apiError: false}) ;
    });
  };

  fetchSong(song){
    API.fetchSong(song)
      .then((result) => {
        if(result.data.error){
          let handleCloseCopy = this.state.handleClose.bind(this);
          this.setState({apiError: true, show:true, handleClose: handleCloseCopy});
        }
        else {
          this.setState({apiError: false});
        }

        if (result.data.length === 0) {
          result.data = ["noSongsWereFetched"]
        }
        this.setState({spotifySongList: result.data});
      })
      .catch(error => {
        let handleCloseCopy = this.state.handleClose.bind(this);
        this.setState({apiError: true, show:true, handleClose: handleCloseCopy});
      });
  }

  render() {
    return (
        <div className="container">
            <form className="mt-5">
              <PopUps show={this.state.show} handleClose={this.state.handleClose}>
              </PopUps>
              <div className="row">
                <div className="col-12">
                  <label>Type in a song to search Spotify</label>
                  <input 
                    type="text" 
                    className="form-control textBoxStyle"
                    name="song"
                    value={this.state.song}
                    onChange={this.handleInputChange} 
                    placeholder="Song"/>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-1" style={{textAlign:"right"}}>
                  <button 
                    className="btn btn-secondary btn-lg"
                    disabled={this.state.song === ""}
                    data-value={this.state.song}
                    onClick={(event) => {
                      event.preventDefault();
                      this.fetchSong(this.state.song)
                    }}
                  >
                    Search
                  </button>
                </div>
              </div>
              {(this.state.spotifySongList.length && 
                this.state.spotifySongList[0] !== "noSongsWereFetched") ? 
              (
                <div className = "row mt-2 songList">
                  <div className = "col-3"></div>
                  <div className = "col-6">
                    <h3 style = {{color: "#17202A", fontWeight:"bold"}}>Song list from spotify</h3>
                    <List>
                      {this.state.spotifySongList.map((song, index) => (
                        <ListItem key={index}>
                          Song: {song.name}, <br/>Artist: {song.artist}, <br/>Album: {song.album}, <br/>
                          <a href={song.preview_url} target="blank">Click for a preview</a>
                        </ListItem>
                      ))}
                    </List>
                  </div>
                  <div className = "col-3"></div>
                </div>
              ) : (
                null
              )}
              {/* if no songs are found  */}
              {(this.state.spotifySongList.length && this.state.spotifySongList[0] === "noSongsWereFetched") ? 
              (
                <div className = "row mt-2">
                  <div className = "col-6">
                    <h3 style = {{backgroundColor: "#FFFF00", color: "#800000", fontWeight:"bold"}}>No songs were found, try a different song</h3>
                  </div>
                </div>
                
              ):(
                null
              )}
            </form>
        </div>
    );
  }
}

export default Home;