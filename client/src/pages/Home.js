import React, { Component } from "react";
import API from "../utils/API";
import "./style.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      song: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    },()=>{
      this.setState({song: this.state.song}) ;
    });
  };

  fetchSong(song){
    API.fetchSong(song)
      .then((result) => {
        console.log("fetched result", JSON.stringify(result));
      })
      .catch(err => console.log("error returned", err));
  }

  render() {
    return (
        <div className="container">
            <form className="mt-5">
              <div className="row">
                <div className="col-7">
                  <label>Type in a song to search</label>
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
                <div className="col-7 mt-1" style={{textAlign:"right"}}>
                  <button 
                    className="btn btn-primary"
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
            </form>
        </div>
    );
  }
}

export default Home;