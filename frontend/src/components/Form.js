import React from "react";
import { Box, Button, TextField, makeStyles } from "@material-ui/core";
import icon from "../images/send.svg";
import "../Fonts/Kanit-Regular.ttf";
const useStyles = makeStyles((theme) => ({
  button: {
    height: "100%",
    borderRadius: "0",
    backgroundColor: "#e63946",
    "&:hover": {
      backgroundColor: "#e63946",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#DE747C",
    },
  },
  inArea: {
    borderRadius: "12px",
  },
  send: {
    backgroundImage: ` url(${icon})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "30px",
    height: "30px",
  },
}));
const Form = ({ setMessage, sendMessage, message }) => {
  const classes = useStyles();

  return (
    <>
      <Box width="100%" height="55px" fontFamily="Kanit">
        <Box className="wrapBox" display="flex" width="100%">
          <Box width="100%">
            <TextField
              variant="outlined"
              fullWidth
              value={message}
              placeholder="พิมพ์เลย"
              className={classes.inArea}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
            />
          </Box>
          <Box height="55px" display="flex" alignItems="center">
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              onClick={(e) => sendMessage(e)}
            >
              <div className={classes.send}></div>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Form;
