import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './App.css';
import 'animate.css';
import TitleImage from './assets/cm-title.png';
import AlbumCarousel from './components/AlbumCarousel';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollableAnchor id={'p1'}>
          <div className="home-block">
            <a href='#p2'>
              <div className="title-container animated infinite tada delay-1s">
                <img src={TitleImage} alt="" height="300px" width="600px"/>
              </div>
            </a>
            
            <div className="text-container">
              a podcast by mairaj hydary and friends
            </div>
          </div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'p2'}>
          <div className="transition-block">
            <div className="text-container">
              you're currently in the SECOND section
            </div>

            <a href='#p3'>
              <div className="text-container">
                go to episodes
              </div>
            </a>
          </div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'p3'}>
          <div className="content-block">
            <div className="carousel-container">
              <div className="text-container">
                <p>all episodes:</p>
              </div>
            <AlbumCarousel/>
          </div>

          <a href="#p1">
            <div className="text-container">
              go back to the top
            </div>
          </a>
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;

