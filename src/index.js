import React from "react";
import ReactPlayer from "react-player";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left"
};

var totalWatchTime = -1;

const App = () => (
  <div style={styles}>
     <h2>Classroom </h2>
    <ReactPlayer
      url="https://youtu.be/d6X9FydoGw4"
      controls={true}
      playing={false}
      volume={1}
      width="640px"
      height="360px"
      onReady={() => console.log("OnReadyCallback")}
      onStart={() => console.log("OnStartCallback")}
      onPlay={() => console.log("OnPlayCallback")}
      onPause={() => console.log("OnPauseCallback", totalWatchTime-=1)}
      onBuffer={() => console.log("OnBufferCallback")}
      onEnded={() => console.log("OnEndedCallback")}
      onError={() => console.log("OnErrorCallback")}
      onProgress={() => console.log("OnProgressCallback", totalWatchTime+=1)}
    />
    <h3>Description</h3>
    <p>GRAPH - MASTER CLASS I : SHORTEST PATH - FALL IN LOVE WITH GRAPHS!</p>
  </div>
);

render(<App />, document.getElementById("root"));
