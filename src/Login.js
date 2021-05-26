import React from 'react'
import './Login.css'
import { loginUrl } from './Spotify'


function Login() {
    return (
        <div className='login'>
            {/* Spotify Logo */}
            <img src="http://thecrite.com/coloradomesau/wp-content/uploads/2016/10/Spotify_logo_horizontal_black.jpg" alt="" />
            {/* Login with Spotify Button */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
