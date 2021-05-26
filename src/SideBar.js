import React from 'react'
import SideBarOption from './SideBarOption'
import './SideBar.css'

// Material UI Icons
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from './DataLayer'



function SideBar() {
    const [{playlists}, dispatch] = useDataLayerValue()
	return (
		<div className='sidebar'>
			<img
				className='logo'
				src='http://thecrite.com/coloradomesau/wp-content/uploads/2016/10/Spotify_logo_horizontal_black.jpg'
				alt=''
			/>
            <SideBarOption Icon={HomeIcon} title='Home' />
            <SideBarOption Icon={SearchIcon} title='Search' />
            <SideBarOption Icon={LibraryMusicIcon} title='Your Library' />
            <br />
            <strong className="sidebar-title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
            <SideBarOption title={playlist.name} />

            ))}
		</div>
	)
}

export default SideBar
