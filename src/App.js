import React, { Component } from 'react';
import './App.css';
import 'animate.css';
import TitleImage from './assets/cm-title.png';
import AlbumCarousel from './components/AlbumCarousel';

class App extends Component {
  render() {
    return (
      <div>
        <div className="home-block">
          <div className="title-container animated infinite tada delay-1s">
            <img src={TitleImage} alt="" height="300px" width="600px"/>
          </div>

          <div className="text-container">
            <p>a podcast by mairaj hydary and friends</p>
          </div>
        </div>

        <div className="transition-block-1">
          <div className="text-container">
            <p>you're currently in the SECOND section</p>
          </div>
        </div>

        <div className="content-block-1">
          <div className="carousel-container">
            <div className="text-container">
              <p>SEASON 1</p>
            </div>
            <AlbumCarousel/>
          </div>

          <div className="carousel-container">
            <div className="text-container">
                <p>SEASON 2</p>
            </div>
            <AlbumCarousel/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

