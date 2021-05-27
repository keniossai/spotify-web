import React from 'react'
import Header from './Header'
import SongRow from './SongRow'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons'

function Body({spotify}) {
    const [{ discover_weekly }, dispatch ] = useDataLayerValue()
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body-info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body-infoText">
                    <strong>PLAYLISTS</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body-songs">
                <div className="body-icons">
                    <PlayCircleFilled className='body-shuffle' />
                    <Favorite fontSize='large' />
                    <MoreHoriz />
                </div>
                {/* List of Songs */}
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
