import React, { Component } from 'react';
import './App.css';
import 'animate.css';
import AlbumCarousel from './components/AlbumCarousel'
import TitleImage from './assets/cm-title.png';


class App extends Component {
  render() {
    return (
      <div>
        <div className="home-bg">
          <div className="title-container">
            <img src={TitleImage} alt="" height="300px" width="600px"/>
          </div>

          <div className="carousel-container">
            <AlbumCarousel/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
