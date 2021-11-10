import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import heartEmpty from '../metirial-pics/heart.png';
import heartFull from '../metirial-pics/heart filled.png';
import blackX from '../metirial-pics/blackX.png';
import '../css-files/App.css';

const SetPic = () => {
    const [pic, setPicture] = useState();
    const [isClicked, setIsClicked] = useState(true);
    const [isLikeHover, setIsLikeHover] = useState(false);
    const [nameClass, setNameClass] = useState('hidden');
    const [spinnerNameClass, setSpinnerNameClass] = useState('spinner');

    useEffect(() => {
        fetch('https://dog.ceo/api/breed/germanshepherd/images/random')
            .then(res => res.json())
            .then(res => setPicture(res.message));
        // TODO: you can remove the {} in the setPicture(...);--> done
    }, [isClicked]);

    const like = () => {
        // TODO: remove isLiked, because there's no option of the pic not being liked in the func
        // TODO : make the first func into a variable, and put the whole function in !const
        if ((localStorage.getItem('likedPics')) && (JSON.parse(localStorage.getItem('likedPics')).includes(pic))) {
            console.log("sorry, that picture is already saved in the liked pictures");
        }
        else {
            if (!localStorage.getItem('likedPics')) {
                let changes = [];
                changes.push(pic);
                localStorage.setItem('likedPics', JSON.stringify(changes));
            }
            else {
                // TODO: change 'changes' name to a more reasonable name, and remove reseting action
                let changes = JSON.parse(localStorage.getItem('likedPics'));
                changes = [...changes, pic];
                localStorage.setItem('likedPics', JSON.stringify(changes));
                changes = [];
            }
        }
    }

    const changePic = () => {
        setShowSpinner();
        setIsClicked(!isClicked);
    }

    const setShowSpinner = () => {
        setNameClass('hidden');
        setSpinnerNameClass('spinner');
    }

    const setHideSpinner = () => {
        setNameClass('mainPic');
        setSpinnerNameClass('hidden');
    }

    return (
        <div className="mainPicOpt">
            {/*TODO: put img in different lines for every prop */}
            <img id="likeButton" className="sideButton" src={(isLikeHover ? heartFull : heartEmpty)} alt="likePic" onClick={() => {
                like(true);
                changePic();
            }} onMouseEnter={() => {
                // TODO: use && instead of 'if'
                if (!isLikeHover)
                    setIsLikeHover(true);
            }
            }
                onMouseOut={() => {
                    // TODO: use && instead of 'if'
                    if (isLikeHover)
                        setIsLikeHover(false);
                }
                } />
            <div className='mainPicDiv'>
                <img id="mainPic" className={nameClass} src={pic} alt="mainPic" onLoad={() => setHideSpinner()} />
                <CircularProgress className={spinnerNameClass} />
            </div>

            <img id="nextPicButton" className="sideButton" src={blackX} alt="nextPic" onClick={() => {
                // TODO: remove {}
                changePic();
            }} />
        </div>
    )


}

export default SetPic;

