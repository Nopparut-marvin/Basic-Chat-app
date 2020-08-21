import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  AnotherUser: {
    borderRadius: "12px",
    border: "2px solid green",
    height: "70%",
    marginLeft: "15px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  Me: {
    borderRadius: "12px",
    border: "2px solid green",
    height: "70%",
    marginRight: "15px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  wrapBox: {
    display: "flex",
    alignItems: "center",
    height: "50px",
  },
}));

const Message = ({ message: { text, user }, name }) => {
  const classes = useStyles();
  let isCurrentUser = false;
  const trimname = name.trim();
  if (user === trimname) {
    isCurrentUser = true;
  }
  return isCurrentUser ? (
    <Box className={classes.wrapBox} justifyContent="flex-end">
      <Box className={classes.Me} >
        {text}
      </Box>
    </Box>
  ) : (
    <Box className={classes.wrapBox} justifyContent="flex-start">
      <div className={classes.AnotherUser}>{text}</div>
    </Box>
  );
};
export default Message;
