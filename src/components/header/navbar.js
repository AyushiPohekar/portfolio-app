import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Hidden } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Link } from "react-scroll";
import * as Scroll from 'react-scroll';
import "./header.css";

export default function navbar({ navlinks, handleDrawerToogler }) {

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="toolbar">
        {/* <Typography variant="h5" component="h6">
          Ayushi
        </Typography> */}
         <h3 className='myname'>Ayushi Pohekar</h3>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Box>
           
            {navlinks.map((items, i) => (
              <Button
                key={i}
                className="navlinks"
              //   activeClass="active"
              //  to={`${items.Id}`}
              //   spy={true}
              //   smooth={true}
              //   offset={-70}
              //   duration={500}
                color="inherit"
                // component={Link}
              >
                {items.label}
              </Button>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: { sm: "none", xs: "block" } }}>
          <IconButton color="inherit" onClick={handleDrawerToogler}>
            <MenuOpenIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
