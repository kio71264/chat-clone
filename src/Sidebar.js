import React, { useEffect, useState } from 'react';
import './stylesheets/sidebar.css';
import { Avatar, IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import GroupsIcon from '@mui/icons-material/Groups';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SideChat from './SideChat';
import { db } from './firebase';

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot => {
      setRooms(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })));
    });

    return () => {
      unsubscribe(); // Unsubscribe from the snapshot listener when component unmounts
    };
  }, []);

  console.log('rooms :', rooms);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://th.bing.com/th/id/OIP.j4orePCXFMcYtlnNxt730AHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        <div className="sidebar_headerRight">
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
          {/* Use defaultValue instead of value */}
          <input placeholder="Search" type="text" defaultValue="" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SideChat addNewChat/>
        {
          rooms.map(room =>( 
            <SideChat key={room.id} id={room.id} name={room.data.name}
            profile ={room.data.profilepic}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Sidebar;

