import './css-files/App.css';

import React from 'react';

import SetPic from './components/SetPic.js';
import LikedPicsPage from './likedPicsPage.js';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import LikesPageButtonDiv from './components/likesPageButton.js';

function App() {

  return (
    <BrowserRouter>

      <Switch>

        <Route path="/likedPicsPage.js">
          <LikedPicsPage />
        </Route>

        <Route path="">
          <div className="App">

            <h1 id="title" className="title">TinDog</h1>

            <div className="Options">

              <SetPic />
              <LikesPageButtonDiv />

            </div>

          </div>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;