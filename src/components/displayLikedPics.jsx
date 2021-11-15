import React, { useState ,useEffect } from 'react';
import { Favorite , FavoriteBorder } from '@mui/icons-material';
import SetLikedPic from './SetLikedPic.jsx';
import Dislike from '../metirial-pics/dislike.png';
import '../css-files/LikedPicsPage.css';



const LikedPicsFrames = () => {
    const [likedPics, setLikedPics] = useState(JSON.parse(localStorage.getItem('likedPics')));
    const [isDislikeHover , setIsDislikeHover] = useState(false);

    const dislike = (link) =>{
        let changes = [...JSON.parse(localStorage.getItem('likedPics'))];
        changes.splice(changes.indexOf(link), 1);
        localStorage.setItem('likedPics', JSON.stringify(changes));
        setLikedPics(JSON.parse(localStorage.getItem('likedPics')));
    }

    useEffect (()=>{
        setLikedPics(JSON.parse(localStorage.getItem('likedPics')));
    },[JSON.parse(localStorage.getItem('likedPics'))]);

    return (
        ((!likedPics.length)?<p>no pictures have been liked yet</p>
        :<div className="likedPicsTable">{
            likedPics.map((currPic) => 
                <SetLikedPic
                pic={currPic}
                pos={likedPics.indexOf(currPic)}
                key={`link/${likedPics.indexOf(currPic)}`}
                />
            )
        }
        </div>
        )
    );
}

export default LikedPicsFrames;