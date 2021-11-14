import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import MainPage from './mainPage.jsx';
import LikedPicsPage from './likedPicsPage.js';

function App() {

  return (
    <BrowserRouter>

      <Switch>

        <Route path="/likedPicsPage.js">
          <LikedPicsPage />
        </Route>

        <Route path="">
          <MainPage />
          {/* <div className="App">

            <h1 className="title">TinDog</h1>

            <div className="Options">

              <SetPic />
              <LikesPageButtonDiv />

            </div>

          </div> */}
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;