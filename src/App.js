import './css-files/App.css';

import React from 'react';

import SetPic from './components/SetPic.js';
import LikedPicsPage from './likedPicsPage.js';
import { BrowserRouter , 
    Switch , 
    Route, 
    Link ,
    NavLink ,
    Redirect
} from "react-router-dom";

import LikesPageButtonDiv from './components/likesPageButton.js';

function App() {
  <NavLink to=""/>

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


// for more information on react router dom, read on
// https://reactrouter.com/web/guides/quick-start to start react router dom 
// and https://reactrouter.com/web/guides/primary-components
// about server-rendering in https://reactrouter.com/web/guides/server-rendering