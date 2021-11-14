import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import MainPage from './mainPage.jsx';
import LikedPicsPage from './likedPicsPage.jsx';

function App() {

  return (
    <BrowserRouter>

      <Switch>

        <Route path="/likedPicsPage.jsx">
          <LikedPicsPage />
        </Route>

        <Route path="">
          <MainPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;