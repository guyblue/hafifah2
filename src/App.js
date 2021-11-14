import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import SetPic from './components/SetPic.js';
import LikedPicsPage from './likedPicsPage.js';
import LikesPageButtonDiv from './components/likesPageButton.js';
import './css-files/App.css';

function App() {

  return (
    <BrowserRouter>

      <Switch>

        <Route path="/likedPicsPage.js">
          <LikedPicsPage />
        </Route>

        <Route path="">
          <div className="App">

            <h1 className="title">TinDog</h1>

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