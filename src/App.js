import './css-files/App.css';

function App() {

  const nextPic = (liked) =>{
    /**
     * in case like = true -> add pic to localStorage
     * else -> do nothing
     * at any case-> change picture
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

          <img id="likeButton" />
          <img id="mainPic" />
          <img id="nextPicButton" />

        </div>
        

      </body>

    </div>
  );
}

export default App;
