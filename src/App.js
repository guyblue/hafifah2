import './css-files/App.css';

import React from 'react';
import SetPic from './components/SetPic.js';
import './components/likesPageButton.js';

function App() {

  return (
    <div className="App">

        <h1 id="title" className="title">TinDog</h1>


          <SetPic />
          <likesPageButtonDiv />

    </div>
  );
}

export default App;
