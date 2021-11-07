import React, { useState , useEffect } from 'react';
import '../css-files/LikedPicsPageDesgin.css';

import Dislike from '../metirial-pics/dislike.png';

const LikedPicsFrames = () =>{
    const [likedPics , setLikedPics] = useState(JSON.parse(localStorage.getItem('likedPics')));
    let newDiv;

    const removeFromStorage = (link) => {
        let changes = [...JSON.parse(localStorage.getItem('likedPics'))];
        changes.splice(changes.indexOf(link), 1);
        localStorage.setItem('likedPics', JSON.stringify(changes));
    }

    const dislike = (link) =>{
        removeFromStorage(link);
        setLikedPics(JSON.parse(localStorage.getItem('likedPics')));
    }

    const placeFrame = (pic,ID) =>{
        <div class="likedPicsFrame" id={ID}>
            <img class="likedPicture" src={pic} alt="likedPic" onClick={dislike(pic)}/>
            <img class="dislikeButton" src={Dislike} alt="dislikeButton" />
        </div>
    }

    useEffect(()=>{
        newDiv = <div class="likedPicsTable" onLoad={()=>{
            for (let x=0;x<likedPics.length();x++){
                placeFrame(JSON.parse(likedPics[x]),x);
            }
        }}/>;
        return newDiv;
    },[likedPics]);


    return newDiv;
} 

export default LikedPicsFrames;