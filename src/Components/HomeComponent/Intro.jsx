import React, { Component } from 'react';
import orblogo from "../../media/theorb_logo.png";
import conline from "../../media/con_line@2x.png";
import kdlogo from "../../media/kg-logo.png";

class Intro extends Component {
  render() {
    return (
      <div id="intro-page">
        <div id ="intro-wrap">
          <div id="kd-logo">
            <img src={kdlogo} alt="KD Logo"/>
          </div>

          <p>presents</p>

          <div id="orb-logo">
            <img src={orblogo} alt="orb-logo"/>
          </div>

          <p>Defending the origin of numbers - The Orb</p>

          <button className="yellow">Start Now</button>

          <p class="continute-line">Discover the story</p>

        </div>      
        <div id="connect-line">
          <img src= {conline} alt="continue"/>
        </div>


      </div>
    )
  }
}
export default Intro;