import "./styles/app.scss";
import React, { useState, useRef } from "react";
//comp
import Player from "./components/Player";
import Song from "./components/Song";
//util
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  //ref
  const audioRef = useRef(null);
  //state 
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdatehandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate % for slider
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({...songInfo, currentTime: current, duration, animationPercentage : animation});
  }
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if(isPlaying) audioRef.current.play();
  };
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`} >
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus} 
      />
      <Song 
        currentSong={currentSong}
      />
      <Player 
        isPlaying={isPlaying} 
        audioRef={audioRef} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo} 
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Footer/>
      <Library 
        songs={songs} 
        audioRef={audioRef} 
        setCurrentSong={setCurrentSong} 
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />

      <audio 
        onLoadedMetadata={timeUpdatehandler} 
        onTimeUpdate={timeUpdatehandler} 
        ref={audioRef} 
        src={currentSong.audio}
        onEnded={songEndHandler}>
      </audio>
    </div>
  );
}

export default App;
