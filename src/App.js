import './App.css';
import Login from './Components/Login';
import './styles/login.css'
import './styles/sidebar.css'
import './styles/sidebaroption.css'
import './styles/header.css'
import './styles/songrow.css'
import './styles/footer.css'
import './styles/body.css'
import './styles/player.css'


import React from 'react';
import {getTokenFromUrl} from './Config/Spotify';
import { useEffect,useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './Components/DataLayer';
import Player from './Components/Player';

const spotify = new SpotifyWebApi();
function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(()=>{
  const hash = getTokenFromUrl();
    window.location.hash = "";//its used for security purpose to hash the token from url
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
    
    console.log("[token]", token);
    spotify.setAccessToken(_token);
    spotify.getMe().then((user) => {
      dispatch({
        type: "SET_USER",
        user,
      });
    });

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists,
      });
    });

    spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((playlist) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: playlist,
      });
    });
  }
}, []);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
