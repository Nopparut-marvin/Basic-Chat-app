import React from "react";
import { Box } from "@material-ui/core";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";
const Window = ({ messages, name }) => {
  return (
    <>
      <Box width="100%" border="2px solid yellow" height="100%">
        <ScrollToBottom style={{ overflow: "auto" }}>
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
