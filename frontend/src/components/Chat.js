import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Container, Box, makeStyles } from "@material-ui/core";
import Form from "./Form";
import NavBar from "./Navbar";
import Window from "./Window.js";
let socket;

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const Chat = () => {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const PORT_SOCKET = "localhost:5000";
  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    setName(name);
    socket = io(PORT_SOCKET);
    console.log({ socket });
    socket.emit("join", { name }, (error) => {
        alert(error)
        window.history.back();
 
    });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [PORT_SOCKET]);
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages(messages => [ ...messages, message ]);
    });
  }, []);
  const sendMessage = (event) => {
    event.preventDefault();
    if (message)
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
  };
  return (
    <>
      <Container className={classes.container} maxWidth="sm">
        <Box
          width="100%"
          height="70vh"
          display="flex"
          flexDirection="column"
          borderRadius="12px"
          boxShadow="2px 2px 10px lightGrey"
        >
          <NavBar logout={() => socket.disconnect()}/>
          <Window messages={messages} name={name}/>
          <Form setMessage={setMessage} sendMessage={sendMessage} message={message}/>
        </Box>
      </Container>
    </>
  );
};
export default Chat;
