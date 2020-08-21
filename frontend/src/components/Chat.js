import React, { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const PORT_SOCKET = 'localhost:5000';
  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    const name = params.get('name')
    setName(name)
    socket = io(PORT_SOCKET);
    console.log({socket});
    socket.emit('join',{name},() => {

    })
    return () => {
        socket.emit('disconnect');
        socket.off();
    }
  }, [PORT_SOCKET]);
  return <></>;
};
export default Chat;
