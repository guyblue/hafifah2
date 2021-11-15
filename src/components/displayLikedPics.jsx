import React, { useState ,useEffect } from 'react';
import SetLikedPic from './SetLikedPic.jsx';
import '../css-files/LikedPicsPage.css';



const LikedPicsFrames = () => {
    const [likedPics, setLikedPics] = useState(JSON.parse(localStorage.getItem('likedPics')));

    const dislike = (link) =>{
        let changes = [...JSON.parse(localStorage.getItem('likedPics'))];
        changes.splice(changes.indexOf(link), 1);
        localStorage.setItem('likedPics', JSON.stringify(changes));
        setLikedPics(JSON.parse(localStorage.getItem('likedPics')));
    }

    useEffect (()=>{
        setLikedPics(JSON.parse(localStorage.getItem('likedPics')));
    },[]);

    return (
        ((!likedPics.length)?<p>no pictures have been liked yet</p>
        :<div className="likedPicsTable">{
            likedPics.map((currPic) => 
                <SetLikedPic
                pic={currPic}
                dislike={dislike}
                key={`link/${likedPics.indexOf(currPic)}`}
                />
            )
        }
        </div>
        )
    );
}

export default LikedPicsFrames;