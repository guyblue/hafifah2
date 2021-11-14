import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import MainPage from '../pages/mainPage.jsx';
import LikedPicsPage from '../pages/likedPicsPage.jsx';

const SetPage = () =>{
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

export default SetPage;