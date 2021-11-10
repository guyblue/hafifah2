// this app creates the button to change
// to the liked pics site when clicked

import React from 'react';
import '../css-files/App.css';

import { Link } from "react-router-dom";

import buttonPic from '../metirial-pics/likes button heart picture.png';

const likesPageButtonDiv = () =>{
    
    return(
        <Link className="nextSiteLink" to="/likedPicsPage.js">
            <div id="likesPageButtonID">
                <img className="likesPageButtonPic" src={buttonPic} alt="buttonPic" />
                <p className="likesButtonText">liked pictures</p>
            </div>
        </Link>
    )
}

export default likesPageButtonDiv;

// for more information on react router dom, read on
// https://reactrouter.com/web/guides/quick-start to start react router dom 
// and https://reactrouter.com/web/guides/primary-components
// about server-rendering in https://reactrouter.com/web/guides/server-rendering