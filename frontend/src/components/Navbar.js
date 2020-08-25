import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import close from "../images/close.svg";
import { Link } from "react-router-dom";
import '../Fonts/Kanit-Regular.ttf'

const useStyles = makeStyles((theme) => ({
  icon: {
    backgroundImage: `url(${close})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "15px",
    height: "15px",
  },
}));

const Navbar = ({logout}) => {
  const classes = useStyles();
  return (
    <>
      <Box
        style={{ backgroundColor: "#1d3557" }}
        width="100%"
        height="70px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box marginLeft="15px" fontFamily="Kanit" color="white">MarvinChat แอพพลิเคชัน</Box>
        <Link to={'/'} onClick={logout}>
          <Box marginRight="20px" className={classes.icon}/>
        </Link>
      </Box>
      
    </>
  );
};
export default Navbar;
