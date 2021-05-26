import React from 'react'
import SideBar from './SideBar'
import Body from './Body'
import Footer from './Footer'
import './Player.css'

function Player({ spotify }) {
    return (
        <div className="player">
        <div className="player-body">
        {/* Sidebar */}
        <SideBar />

        {/* Body */}
        <Body />
        </div>

        {/* Footer */}
            <Footer />
        </div>
    )
}

export default Player
