import React from "react";
import { Box, Button, TextField,makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    button: {
     height:"100%",
     borderRadius:"0",
    },
    inArea:{
        borderRadius:"12px",
    }
  }));
const Form = () => {
    const classes = useStyles();

  return (
    <>
      <Box 
        width="100%"
        height="55px"
      >
        <Box className="wrapBox" display="flex" width="100%">
          <Box width="100%">
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Your name"
              className={classes.inArea}
            />
          </Box>
          <Box
            height="55px"
            // border="2px solid green"
            display="flex"
            alignItems="center"
          >
           <Button
                  color="primary"
                  variant="contained"
                  className={classes.button}
                >
                  Send
                </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Form;
