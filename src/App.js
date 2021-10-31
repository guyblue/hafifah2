import styles from './css-files/App.css';

import React from 'react';
import SetPic from './components/SetPic.js';

import pic1 from './metirial-pics/heart.png';
import pic2 from './metirial-pics/blackX.png';

function App() {

  return (
    <div className="App">

        <h1 id="title" className="title">TinDog</h1>


        <div class="mainPicOpt">

          <img id="likeButton" className="sideButton" src={pic1} alt="likePic" />
          <SetPic />
          <img id="nextPicButton" className="sideButton" src={pic2} alt="nextPic" />

        </div>


    </div>
  );
}

export default App;
