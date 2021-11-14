import React from 'react';
import SetPic from './components/SetPic.js';
import LikesPageButtonDiv from './components/likesPageButton.js';
import './css-files/App.css';

const MainPage = () =>{
    return(
        <div className="App">

        <h1 className="title">TinDog</h1>

        <div className="Options">

          <SetPic />
          <LikesPageButtonDiv />

        </div>

      </div>
    )
}

export default MainPage;