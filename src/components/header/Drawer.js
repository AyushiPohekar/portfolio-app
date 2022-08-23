import React from 'react'
import Drawer from '@mui/material/Drawer';
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import "./header.css";
import ListItemText from '@mui/material/ListItemText';

export default function Drawercomponent({handleDrawerToogler,navlinks,initialState}) {
  return (
   <Drawer anchor="left" open={initialState} onClose={handleDrawerToogler} className='drawer'>
    <Box className='drawerContainer'>
    <List style={{paddingTop:'30px'}}>
        {navlinks.map((item,i)=>
        < ListItem key={i} className='listitem'><ListItemText>{item.label}</ListItemText>
        </ListItem>
        )}
        
    </List>
  </Box>
   </Drawer>
  )
}
