import './App.css';
import Login from './Components/Login';
import './styles/login.css'
import React from 'react';
import {getTokenFromUrl} from './Config/Spotify';
import { useEffect,useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

function App() {
  const [token, setToken] = useState();
  useEffect(()=>{
  const hash = getTokenFromUrl();
    window.location.hash = "";//its used for security purpose to hash the token from url
    const _token = hash.access_token;
    if(_token){
      setToken(_token);
      spotify.setAcessToken(_token)//when the token is true then the user can access the spotify web api
    }
    console.log("token",token)
  },[])
  return (
    <div className="App">
   {token?<h1>logged in</h1>:<Login/>}
    </div>
  );
}

export default App;
