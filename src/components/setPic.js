
//  this function will be a hook function
//  that updates the picture everytime it gets used


 import { useEffect, useState } from 'react';
 import styles from '../css-files/App.css';

 import pic1 from '../metirial-pics/heart.png';
 import pic2 from '../metirial-pics/blackX.png';

 const SetPic = () => {
      const [pic,setPicture] = useState();
      const [isClicked,setIsClicked] = useState(true);
      const [isLiked,setIsLiked] = useState(false);

      useEffect(()=>{
        fetch('https://dog.ceo/api/breed/germanshepherd/images/random')
            .then(res => res.json())
            .then(res => {
                setPicture(res.message);
            });
            
      },[isClicked]);

      useEffect(()=>{
          if (isLiked){
        if (!localStorage.getItem('likedPics')){
            localStorage.setItem('likedPics',[...JSON.stringify(pic)]);
        }
        else{
            localStorage.setItem('likedPics',[...localStorage.getItem('likedpics'),JSON.stringify(pic)]); 
        }
    }
      });

      return (
          <div id="mainPicOpt">
                <img id="likeButton" className="sideButton" src={pic1} alt="likePic" onClick={()=>{
                    setIsLiked(true);
                    setIsClicked(!isClicked);

                }} />
                <img id="mainPic" className="mainPic" src={pic} alt="mainPic" />
                <img id="nextPicButton" className="sideButton" src={pic2} alt="nextPic" onClick={()=>{
                    setIsLiked(false);
                    setIsClicked(!isClicked);
                    }} />
          </div>
      )

      
  }
 
 export default SetPic;
 
 
 // find a way to intagrate the picture to the id of the mainPic always, even when you click a different button //
 // ^ for that, check in the Tic-Tac-Toe game //
 
