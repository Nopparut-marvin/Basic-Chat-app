import React from "react";
import { Box } from "@material-ui/core";

const Message = ({ message: { text, user }, name }) => {
  let isCurrentUser = false;
  const trimname = name.trim();
  if (user === trimname) {
    isCurrentUser = true;
  }
  return isCurrentUser ? (
    <Box display="flex" justifyContent="flex-end" alignItems="center">
      <Box borderRadius="12px">{text}</Box>
    </Box>
  ) : (
    <Box display="flex" justifyContent="flex-start" alignItems="center">
      <Box borderRadius="12px">{text}</Box>
    </Box>
  );
};
export default Message;
