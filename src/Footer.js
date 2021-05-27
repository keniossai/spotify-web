import React from 'react'
import './Footer.css'

// Material Icons
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/RepeatOutlined'
import { Grid, Slider } from '@material-ui/core'
import { PlaylistPlay, VolumeDown } from '@material-ui/icons'
function Footer() {
    return (
        <div className='footer'>
            <div className="footer-left">
                <img src="https://i1.sndcdn.com/artworks-z2DWwq2aIUlrEvGB-L8kYEg-t500x500.jpg" className='footer-albumLogo' alt="" />
                <div className="footer-songInfo">
                    <h4>Life in a Year</h4>
                    <p>Jordan Smith</p>
                </div>
            </div>
            <div className="footer-center">
                <ShuffleIcon className='footer-green' />
                <SkipPreviousIcon className='footer-icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer-icon' />
                <SkipNextIcon className='footer-icon' />
                <RepeatIcon className='footer-green' />
            </div>
            <div className="footer-right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-aria-labelledby='continious-slide' />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
