import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./header.css";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

export default function Drawercomponent({
  handleDrawerToogler,
  navlinks,
  initialState,
}) {
  return (
    <Drawer
      anchor="left"
      open={initialState}
      onClose={handleDrawerToogler}
      className="drawer"
    >
      <Box className="drawerContainer">
        {/* <List style={{paddingTop:'30px'}}>
        {navlinks.map((item,i)=>
        < ListItem key={i} className='listitem'><ListItemText>{item.label}</ListItemText>
        </ListItem>
        )}
        
    </List> */}
        <List style={{ paddingTop: "30px" }}>
          <ListItem className="listitem">
            <ListItemText className="drawernav">
              <a href="#Home" id="Buttons">
                <Button color="inherit">Home</Button>
              </a>{" "}
            </ListItemText>
            <ListItemText className="drawernav">
              <a href="#About" id="Buttons">
                <Button color="inherit">About</Button>
              </a>
            </ListItemText>
            <ListItemText className="drawernav">
              {" "}
              <a href="#Skills" id="Buttons">
                <Button color="inherit">Skills</Button>
              </a>
            </ListItemText>
            <ListItemText className="drawernav">
              <a href="#Projects" id="Buttons">
                <Button color="inherit">Project</Button>
              </a>
            </ListItemText>
            <ListItemText className="drawernav">
              <a href="#Contact" id="Buttons">
                <Button color="inherit">Contact</Button>
              </a>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
