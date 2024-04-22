import React, { useEffect, useState } from "react";
import "./stylesheets/SideChat.css";
import { Avatar } from "@mui/material";
import { db } from "./firebase";

function SideChat({ id, name, profile, addNewChat }) {
  const [messages, setMessages] = useState("");

  useEffect(() => {
    const unsubsribe = db
      .collection("rooms")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });

    return () => unsubsribe();
  }, [id]);

  return !addNewChat ? (
    <div className="sideChat">
      <Avatar src={profile} />
      <div className="sideChat_info">
        <h2>{name}</h2>
        <p>{messages[0]?.message}</p>
      </div>
    </div>
  ) : (
    <div className="sideChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SideChat;
