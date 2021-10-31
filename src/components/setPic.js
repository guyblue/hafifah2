
//  this function will be a hook function
//  that updates the picture everytime it gets used


 import { useEffect, useState } from 'react';
 import styles from '../css-files/App.css';

 import pic1 from '../metirial-pics/heart.png';
 import pic2 from '../metirial-pics/blackX.png';

 
 const SetPic = () => { 
      const [pic,setPicture] = useState();

      useEffect(()=>{
        fetch('https://dog.ceo/api/breed/germanshepherd/images/random')
            .then(res => res.json())
            .then(res => {
                setPicture(res.message);
            })
      },[/**onclick something... */]);

      return (
          <div id="mainPicOpt">
                <img id="likeButton" className="sideButton" src={pic1} alt="likePic" />
                <img id="mainPic" className="mainPic" src={pic} alt="mainPic" />
                <img id="nextPicButton" className="sideButton" src={pic2} alt="nextPic" />
          </div>
      )
  }
 
 export default SetPic;
 
 
 // find a way to intagrate the picture to the id of the mainPic always, even when you click a different button //
 // ^ for that, check in the Tic-Tac-Toe game //
 
