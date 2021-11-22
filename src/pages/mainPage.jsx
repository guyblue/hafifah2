import React from 'react';
import SetPic from '../components/SetPic.jsx';
import LikesPageButtonDiv from '../components/likesPageButton.jsx';
import styles from '../css-files/mainPage.module.css';

const MainPage = () =>{
    return(
          <div className={styles.App}>
            <h1 className={styles.title}>TinDog</h1>
            <div className={styles.Options}>
              <SetPic />
              <LikesPageButtonDiv />
            </div>
        </div>
    )
}

export default MainPage;