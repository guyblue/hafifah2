import './css-files/App.css';

import React from 'react';
import SetPic from './components/SetPic.js';
import LikesPageButtonDiv from './components/likesPageButton.js';

function App() {

  return (
    <div className="App">

        <h1 id="title" className="title">TinDog</h1>

        <div className="Options">
          <SetPic />
          <LikesPageButtonDiv />
        </div>
    </div>
  );
}

export default App;
