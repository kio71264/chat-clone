import React from 'react';
import './stylesheets/sidebar.css';
import {Avatar, IconButton} from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import GroupsIcon from '@mui/icons-material/Groups';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar () {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://th.bing.com/th/id/OIP.j4orePCXFMcYtlnNxt730AHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        <div className="headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <GroupsIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>

        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchIcon />
          <input placeholder="Search" type="text" value={null} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
