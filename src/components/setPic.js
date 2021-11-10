// the function update the new main pic every
// time the app is update rendering, and add the
// current main pic into the localStorage everytime
// you click on the like button


 import { useEffect, useState } from 'react';
 import { CircularProgress } from '@mui/material';
 import '../css-files/App.css';

 import heartEmpty from '../metirial-pics/heart.png';
 import heartFull from '../metirial-pics/heart filled.png';
 import blackX from '../metirial-pics/blackX.png';

 const SetPic = () => {
      const [pic,setPicture] = useState();
      const [isClicked,setIsClicked] = useState(true);
    //   const [heartPic , setHeartPic] = useState(heartEmpty);
      const [isPicDisplay, setIsPicDisplay] = useState(false);
      const [isLikeHover, setIsLikeHover] = useState(false);
      const [nameClass , setNameClass] = useState('hidden');
      const [spinnerNameClass , setSpinnerNameClass] = useState('spinner');

      useEffect(()=>{
        fetch('https://dog.ceo/api/breed/germanshepherd/images/random')
            .then(res => res.json())
            .then(res => {
                setPicture(res.message);
                setIsPicDisplay(true);
            });
            // .then(res => {pic.onLoad =() =>setIsPicDisplay(true)})

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

      return (
          <div className="mainPicOpt">
                <img id="likeButton" className="sideButton" src={(isLikeHover?heartFull:heartEmpty)} alt="likePic" onClick={()=>{
                    like(true);
                    setIsPicDisplay(false);
                    setNameClass('hidden');
                    setSpinnerNameClass('spinner');
                    setIsClicked(!isClicked);
                }} />
                <div className='mainPicDiv'>
                    {/* {(isPicDisplay?:)} */}
                    <img  id="mainPic" className={nameClass} src={pic} alt="mainPic" onLoad={()=>{
                        setNameClass('mainPic');
                        setSpinnerNameClass('hidden');
                        }} />
                    <CircularProgress className={spinnerNameClass}/>
                    </div>
                
                <img id="nextPicButton" className="sideButton" src={blackX} alt="nextPic" onClick={()=>{
                    setIsPicDisplay(false);
                    setNameClass('hidden');
                    setSpinnerNameClass('spinner');
                    setIsClicked(!isClicked);
                }} />
          </div>
      )

      
  }
 
 export default SetPic;
 
