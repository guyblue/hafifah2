import './css-files/App.css';

function App() {

  const nextPic = (liked) =>{
    /**
     * in case like = true -> add pic to localStorage
     * else -> do nothing
     * at any case-> change picture
     * 
     * add useEffect() to do changes on the localStorage to add pics to the localStorage
     */
    if (liked){

    }

    /**
     * onClick={this.props.nextPic(true/false)}
     */
  }

  return (
    <div className="App">

      <header class="app-header">
        <h1 id="title">TinDog</h1>
      </header>
      
      <body>

        <div id="mainPicOpt">

          <img id="likeButton" class="sideButton" src="./metirial-pics/heart.png" />
          <img id="mainPic" />
          <img id="nextPicButton" class="sideButton" src="./metirial-pics/blackX.png" />

        </div>
        

      </body>

    </div>
  );
}

export default App;
