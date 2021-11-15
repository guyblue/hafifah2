import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import MainPage from '../pages/mainPage.jsx';
import LikedPicsPage from '../pages/likedPicsPage.jsx';

const Router = () =>{
    return (
        <BrowserRouter>
        <Switch>
          <Route path="/likedPicsPage">
            <LikedPicsPage />
          </Route>
          <Route path="">
            <MainPage />
          </Route>
        </Switch>
      </BrowserRouter>
      // TODO: change name to router-->done
      // TODO: remove the jsx in the Router's link-->done
    );
}

export default Router;