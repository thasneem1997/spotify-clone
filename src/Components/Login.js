import React from 'react'
import { loginUrl } from '../Config/Spotify';

const Login = () => {
  return (
    <div className='login'>
      <img src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg" alt="img"/>
      <a href={loginUrl}>Login with spotify</a>
    </div>
  )
}

export default Login
