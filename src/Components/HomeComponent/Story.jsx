import React, { Component } from 'react';
import storyimage from "../../media/story-img.png";


class Story extends Component {
  render() {
    return (
      <div id="story-page">
        <div id="story-wrap">
          <h1 class="header-light">The Mystery Of The Orb</h1>

          <p className="text-center">
              From a long long time ago, a mystery orb appeared in the centre of the earth. It contained all the human knowledge about  numbers. However, some unknown enemies want to erase human memories about numbers. Therefore, they plan to destroy this orb and make the chaos on the earth. We have to stop them!
          </p>

          <button>Start now</button>
        </div>

        {/* <div id="story-image">
          <img src={storyimage} alt="spaceship"/>
        </div> */}
      </div>
    )
  }
}
export default Story;