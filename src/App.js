import styles from './css-files/App.css';

import React from 'react';
import SetPic from './components/SetPic.js';

//import './components/setPic';

import pic1 from './metirial-pics/heart.png';
import pic2 from './metirial-pics/blackX.png';

function App() {

  const nextPic = () =>{

    /**
     * in case like = true -> add pic to localStorage
     * else -> do nothing
     * at any case-> change picture
     * 
     * add useEffect() to do changes on the localStorage to add pics to the localStorage
     */


    // if (liked){
    //   console.log("entered liked");
    // }

    return (
      <img id="mainPic" src="https://dog.ceo/api/breed/Germanshepherd/images/random" alt="mainPic" />
    )
  }

  return (
    <div className="App">

        <h1 id="title" className="title">TinDog</h1>


        <div id="mainPicOpt">

          <img id="likeButton" className="sideButton" src={pic1} alt="likePic" />
          <SetPic />
          <img id="nextPicButton" className="sideButton" src={pic2} alt="nextPic" />

        </div>


    </div>
  );
}

export default App;
