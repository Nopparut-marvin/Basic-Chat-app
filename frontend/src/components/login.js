import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(6, 3),
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));
const Login = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container} maxWidth="sm">
        <Box className={classes.paper} borderRadius="12px" boxShadow="2px 2px 10px lightGrey">
          <Typography variant="h5" color="primary" align="center">
            Please enter your name
          </Typography>
          <Box className="wrapBox" display="flex" width="90%">
            <Box flexGrow="8">
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Your name"
              />
            </Box>
            <Box
              flexGrow="1"
              display="flex"
              alignItems="center"
              paddingLeft="20px"
            >
              <Button color="primary" variant="contained">
                Continue
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
