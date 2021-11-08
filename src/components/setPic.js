// the function update the new main pic every
// time the app is update rendering, and add the
// current main pic into the localStorage everytime
// you click on the like button


 import { useEffect, useState ,promise } from 'react';
 import { CircularProgress } from '@mui/material';
 import '../css-files/App.css';

 import heartEmpty from '../metirial-pics/heart.png';
 import heartFull from '../metirial-pics/heart filled.png';
 import blackX from '../metirial-pics/blackX.png';

 const SetPic = () => {
      const [pic,setPicture] = useState();
      const [isClicked,setIsClicked] = useState(true);
      const [heartPic , setHeartPic] = useState(heartEmpty);
      const [isLikeHover, setIsLikeHover] = useState(false);
    //   const [currPic,setCurrPic] = useState(pic);

      useEffect(()=>{
        fetch('https://dog.ceo/api/breed/germanshepherd/images/random')
            .then(res => res.json())
            .then(res => {
                setPicture(res.message);
            });
            
      },[isClicked]);

    //   useEffect(()=>{
    //       if(!isLikeHover)
    //         setHeartPic(heartEmpty);
    //       else
    //         setHeartPic(heartFull);
    //   },[isLikeHover]);

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

    //   const whileLoading = () =>{
    //     return new promise((resolve , reject)=>{
    //         if (!pic){
    //             reject(<CircularProgress className="mainPic" />);
    //         }
    //         else{
    //             resolve(<img id="mainPic" className="mainPic" src={pic} alt="mainPic" />);
    //         }
    //     })
    //   }

      return (
          <div className="mainPicOpt">
                <img id="likeButton" className="sideButton" src={heartPic} alt="likePic" onClick={()=>{
                    like(true);
                    setPicture();
                    setIsClicked(!isClicked);
                }} />
                <img id="mainPic" className="mainPic" src={pic} alt="mainPic" />
                <img id="nextPicButton" className="sideButton" src={blackX} alt="nextPic" onClick={()=>{
                    setPicture();
                    setIsClicked(!isClicked);
                }} />
          </div>
      )

      
  }
 
 export default SetPic;
 
