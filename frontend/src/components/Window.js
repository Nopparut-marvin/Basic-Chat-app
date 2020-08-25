import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";
const useStyles = makeStyles((theme) => ({
  scroll: {
    width: "100%",
    height: "100%",
    backgroundColor: "#a8dadc",
    paddingTop:"10px"
  },
}));
const Window = ({ messages, name }) => {
  const classes = useStyles();
  return (
    <>
      <Box
        width="100%"
        height="100%"
        style={{ overflow: "auto", flex: "auto" }}
      >
        <ScrollToBottom className={classes.scroll}>
          {messages.map((message, i) => (
            <div key={i}>
              <Message message={message} name={name} />
            </div>
          ))}
        </ScrollToBottom>
      </Box>
    </>
  );
};
export default Window;
