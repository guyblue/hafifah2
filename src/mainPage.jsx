import React from 'react';
import SetPic from './components/SetPic.jsx';
import LikesPageButtonDiv from './components/likesPageButton.jsx';
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