// this app creates the button to change
// to the liked pics site when clicked

import React from 'react';
import LikedPicsPage from '../likedPicsPage.js';
import '../css-files/App.css';

import { BrowserRouter as Router, 
    Switch , 
    Route, 
    Link 
} from "react-router-dom";




import buttonPic from '../metirial-pics/likes button heart picture.png';

const likesPageButtonDiv = () =>{
    
    return(
        <Router>

            <Link to="../likedPicsPage.js">
                <div id="likesPageButtonID" className="likesPageButton">
                    <img className="likesPageButtonPic" src={buttonPic} alt="buttonPic" />
                    <p className="likesButtonText">liked pictures</p>
                </div>
            </Link>

            <Switch>
                <Route path="../likedPicsPage.js">
                    <LikedPicsPage />    
                </Route>
            </Switch>

        </Router>
    )
}

export default likesPageButtonDiv;

// for more information on react router dom, read on
// https://reactrouter.com/web/guides/quick-start to start react router dom 
// and https://reactrouter.com/web/guides/primary-components