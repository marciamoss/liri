import React, { Component } from "react";
import "./style.css";

class Home extends Component {
  render() {
    return (
        <div className="container">
            <form className="mt-5">
              <div className="row">
                <div className="col-7">
                  <label>Type in a song to search</label>
                  <input type="text" className="form-control textBoxStyle" placeholder="Song"/>
                </div>
              </div>
            </form>
        </div>
    );
  }
}

export default Home;