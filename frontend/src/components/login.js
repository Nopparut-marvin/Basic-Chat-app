import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  makeStyles,
  Box,
} from "@material-ui/core";
import "../Fonts/Kanit-Regular.ttf";

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
    padding: theme.spacing(4, 3),
    "& > *": {
      margin: theme.spacing(1.5),
    },
  },
  button: {
    heigh: "23px",
  },
}));
const Login = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const classes = useStyles();
  const send = () => {
    history.push(`/chat?name=${name}`);
  };
  return (
    <>
      <Container className={classes.container} maxWidth="sm">
        <Box
          className={classes.paper}
          borderRadius="12px"
          boxShadow="2px 2px 10px lightGrey"
          fontFamily="Kanit"
          fontSize="25px"
        >
          <Box fontSize="30px">ยินดีต้อนรับเข้าสู่</Box>
          <Box>MarvinChat แอพพลิเคชัน</Box>
          <Box fontSize="20px">กรุณากรอกชื่อของท่าน</Box>
          <Box width="90%" alignItems="flex-start" display="flex">
            <Box flexGrow="8">
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="ชื่อ..."
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onKeyPress={(e) => (e.key === "Enter" ? send() : null)}
                ß
              />
            </Box>
            <Box
              borderTop="2px solid transparent"
              flexGrow="1"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                color="primary"
                variant="contained"
                onClick={() => send()}
                className={classes.button}
              >
                <Box fontFamily="Kanit">ส่ง</Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
