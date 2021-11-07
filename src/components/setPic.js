// the function update the new main pic every
// time the app is update rendering, and add the
// current main pic into the localStorage everytime
// you click on the like button


 import { useEffect, useState } from 'react';
 import '../css-files/App.css';

 import pic1 from '../metirial-pics/heart.png';
 import pic2 from '../metirial-pics/blackX.png';

 const SetPic = () => {
      const [pic,setPicture] = useState();
      const [isClicked,setIsClicked] = useState(true);

      useEffect(()=>{
        fetch('https://dog.ceo/api/breed/germanshepherd/images/random')
            .then(res => res.json())
            .then(res => {
                setPicture(res.message);
            });
            
      },[isClicked]);

      const like = (isLiked) => {
        if (isLiked){
            if ((localStorage.getItem('likedPics'))&&(JSON.parse(localStorage.getItem('likedPics')).includes(pic))){
                console.log("sorry, that picture is already saved in the liked pictures");
            }
            else{
                if (!localStorage.getItem('likedPics')){
                    let changes = [];
                    changes.push(pic);
                    localStorage.setItem('likedPics', JSON.stringify(changes));
                }
                else{
                    let changes = JSON.parse(localStorage.getItem('likedPics'));
                    changes = [...changes, pic];
                    localStorage.setItem('likedPics', JSON.stringify(changes));
                    changes = [];
                }
            }
        }
      }

      return (
          <div className="mainPicOpt">
                <img id="likeButton" className="sideButton" src={pic1} alt="likePic" onClick={()=>{
                    like(true);
                    setIsClicked(!isClicked);
                }} />
                <img id="mainPic" className="mainPic" src={pic} alt="mainPic" />
                <img id="nextPicButton" className="sideButton" src={pic2} alt="nextPic" onClick={()=>setIsClicked(!isClicked)} />
          </div>
      )

      
  }
 
 export default SetPic;
 
