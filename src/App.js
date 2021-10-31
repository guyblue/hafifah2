import './css-files/App.css';

import React from 'react';

//import './components/setPic';

// import './metirial-pics/heart.png';
// import './metirial-pics/blackX.png';

function App() {

  const nextPic = (props,liked) =>{

    /**
     * in case like = true -> add pic to localStorage
     * else -> do nothing
     * at any case-> change picture
     * 
     * add useEffect() to do changes on the localStorage to add pics to the localStorage
     */
    if (liked){
      console.log("entered liked");
    }

    if (!document.getElementById(props).src){
      document.getElementById(props).src = "https://dog.ceo/api/breed/Germanshepherd/images/random";
    }
    else{

    }

  
    //  onClick={this.props.nextPic(true/false)}
  
  }

  return (
    <div className="App">

      <header class="app-header">
        <h1 id="title">TinDog</h1>
      </header>
      
      <body>

        <div id="mainPicOpt">

          <img id="likeButton" class="sideButton" src="./metirial-pics/heart.png" alt="likePic" />
          <img id="mainPic" src="https://dog.ceo/api/breed/Germanshepherd/images/random" alt="mainPic" onLoad={this.nextPic(this.id,null)} />
          <img id="nextPicButton" class="sideButton" src="./metirial-pics/blackX.png" alt="nextPic" />

        </div>
        

      </body>

    </div>
  );
}

export default App;
