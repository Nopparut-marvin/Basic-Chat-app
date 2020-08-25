import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
  Box,
} from "@material-ui/core";
import '../Fonts/Kanit-Regular.ttf'

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
  const [name, setName] = useState("");
  const classes = useStyles();
  const handleClick = () => {};
  return (
    <>
      <Container className={classes.container} maxWidth="sm" >
        <Box
          className={classes.paper}
          borderRadius="12px"
          boxShadow="2px 2px 10px lightGrey"
          fontFamily="Kanit"
          fontSize="30px"
        >
          กรุณากรอกชื่อของท่าน
          <Box className="wrapBox" display="flex" width="90%">
            <Box flexGrow="8">
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Your name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Box>
            <Box
              flexGrow="1"
              display="flex"
              // alignItems="center"
              paddingLeft="20px"
            >
              <Link to={`chat?name=${name}`}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleClick}
                >
                  Continue
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
