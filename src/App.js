import styles from './css-files/App.css';

import React from 'react';
import SetPic from './components/SetPic.js';

function App() {

  return (
    <div className="App">

        <h1 id="title" className="title">TinDog</h1>


        <div class="mainPicOpt">

          <SetPic />

        </div>


    </div>
  );
}

export default App;
