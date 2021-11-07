import React, { useState , useEffect } from 'react';
import '../css-files/LikedPicsPageDesgin.css';

import Dislike from '../metirial-pics/dislike.png';

const LikedPicsFrames = () =>{
    const [likedPics , setLikedPics] = useState(JSON.parse(localStorage.getItem('likedPics')));
    const [newDiv , setNewDiv] = useState();

    const removeFromStorage = (link) => {
        let changes = [...JSON.parse(localStorage.getItem('likedPics'))];
        changes.splice(changes.indexOf(link), 1);
        localStorage.setItem('likedPics', JSON.stringify(changes));
    }

    const dislike = (link) =>{
        removeFromStorage(link);
        setLikedPics(JSON.parse(localStorage.getItem('likedPics')));
    }

    // const placeFrame = (pic,ID) =>{
    //     return(
    //     <div className="likedPicsFrame" id={ID}>
    //         <img className="likedPicture" src={pic} alt="likedPic" onClick={dislike(pic)}/>
    //         <img className="dislikeButton" src={Dislike} alt="dislikeButton" />
    //     </div>
    //     )
    // }

    useEffect(()=>{
        setNewDiv(<div className="likedPicsTable">{()=>{
            likedPics.map((x)=>{return(
                <div className="likedPicsFrame" id={x}>
                <img className="likedPicture" src={likedPics[x]} alt="likedPic" />
                <img className="dislikeButton" src={Dislike} alt="dislikeButton" onClick={dislike(likedPics[x])} />
            </div>
            )});
        }}</div>);
    },[likedPics]);


    return newDiv;
} 

export default LikedPicsFrames;