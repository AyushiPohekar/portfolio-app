import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Theme } from "../Theme";
import "./header.css";
import Navbar from "./navbar";
import Drawercomponent from "./Drawer";
import Button from "@mui/material/Button";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";

export default function Header() {
  const styles = {
    backgroundColor: Theme.colors.primary1,
  };
  //   const headerstyles = (theme) => ({
  //     headerTitle: {
  //         fontSize: '3rem',
  //       [theme.breakpoints.down('xs')]: {
  //         fontSize: '2rem',

  //       },

  //     },
  //   });
  const [initialState, setInitialState] = useState(false);
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  };
  const navlinks = [
    { label: "Home", Id: "Home" },
    { label: "About", Id: "About" },
    { label: "Skills", Id: "Skills" },
    { label: "Projects", Id: "Projects" },
    { label: "Contact", Id: "Contact" },
  ];
  return (
    <Box className="Headwrapper" style={styles} id="header">
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <Drawercomponent
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToogler={handleDrawerToogler}
      />
      <Box className="Headercontainer" id="Home">
        <Typography variant="h3" component="h4" className="headerTitle">
          Hello,I am Ayushi!👩‍💻
        </Typography>
        <Typography variant="h4" component="h4" className="headerDescription">
          I am a full Stack Developer
        </Typography>
        <Box className="resume">
          <a
            href="https://drive.google.com/file/d/1w09SWiwo57wrEhLe5724udL6CrFLwTSe/view?usp=sharing" target='_blank'
            id="Buttonresume"
          >
            <Button color="inherit">Resume</Button>
          </a>
        </Box>
      </Box>
    </Box>
  );
}
