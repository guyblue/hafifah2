import React, { useState , useEffect } from 'react';
import Dislike from '../metirial-pics/dislike.png';

const LikedPicsFrames = () =>{
    const [likedPics , setLikedPics] = useState(JSON.parse(localStorage.getItem('likedPics')));

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
        <div id={ID}>
            <img src={Dislike} alt="dislikeButton" />
            <img src={pic} alt="likedPic" onClick={dislike(pic)}/>
        </div>
    }

    useEffect(()=>{
        let newDiv = <div onLoad={()=>{
            for (let x=0;x<likedPics.length();x++){
                placeFrame(JSON.parse(likedPics[x]),x);
            }
        }}/>;
        return newDiv;
    },[likedPics]);


    return newDiv;
} 