import React from 'react'
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { LibraryMusic } from '@material-ui/icons';
import {useDataLayerValue} from './DataLayer';
const Sidebar = () => {
    const [{playlists}, dispatch] = useDataLayerValue(); 
  return (
    <div className='sidebar'>
        <img src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg" alt='img'/>
        <SidebarOption title="home" Icon={HomeIcon} />
        <SidebarOption title="search" Icon={SearchIcon} />
        <SidebarOption title="library" Icon={LibraryMusic} />
        <strong className='sidebar_title'>Playlists</strong> 
        <hr/>
        {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}

      
    </div>
  )
}

export default Sidebar
