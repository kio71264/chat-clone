import React from 'react';
import './stylesheets/Chat.css';
import {Avatar, IconButton} from '@mui/material';
// import GroupsIcon from '@mui/icons-material/Groups';
import AttachFile from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
// import InsertEmotionIcon from '@mui/icons-material/InsertEmotion';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from 'react-router-dom';

function Chat () {
  const {roomId} = useParams();
  // alert(roomId)

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room view</h3>
          <p>Last seen 00:00:00</p>
        </div>
        <div className="chat_headerRight">
          <IconButton><SearchIcon /></IconButton>
          <IconButton><AttachFile /></IconButton>
          <IconButton><MoreVertIcon /></IconButton>
        </div>
      </div>
      <div className="chat_body" />
      <div className="chat_footer">
        {/* <InsertEmotionIcon /> */}
        <AddIcon />
        <form>
          <input type="text" value="Hai" placeholder="Type a message" />
          <button>send</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
