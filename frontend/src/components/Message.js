import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Arrow from "../images/right-arrow.svg";
import "../Fonts/Kanit-Regular.ttf";

const useStyles = makeStyles((theme) => ({
  AnotherUser: {
    borderRadius: "12px",
    height: "70%",
    marginLeft: "5px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
    backgroundColor: "#f1faee",
  },
  Me: {
    borderRadius: "12px",
    height: "70%",
    marginRight: "15px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
    backgroundColor: "#f1faee",
  },
  wrapBox: {
    display: "flex",
    alignItems: "center",
    height: "50px",
  },
  name: {
    display: "flex",
    height: "22px",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px",
    paddingLeft: "10px",
    paddingRight: "10px",
    marginLeft: "15px",
    borderRadius: "12px",
    backgroundColor: "#457B9D",
  },
  arrow: {
    backgroundImage: ` url(${Arrow})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "15px",
    height: "15px",
    marginLeft: "5px",
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
    <Box
      className={classes.wrapBox}
      justifyContent="flex-end"
      fontFamily="Kanit"
    >
      <Box className={classes.Me}>{text}</Box>
    </Box>
  ) : (
    <Box
      className={classes.wrapBox}
      justifyContent="flex-start"
      fontFamily="Kanit"
    >
      <Box className={classes.name}>{user}</Box>
      <Box className={classes.arrow}></Box>
      <div className={classes.AnotherUser}>{text}</div>
    </Box>
  );
};
export default Message;
