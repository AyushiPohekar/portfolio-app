import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Hidden } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import "./header.css";

export default function navbar() {
    const navlinks=[
        {label:'Home',Id:"Home"},
        {label:'About',Id:"About"},
        {label:'Skills',Id:"Skills"},
        {label:'Projects',Id:"Projects"},
        {label:'Contact',Id:"Contact"},
        
    ];
  return (
    <AppBar position="fixed" className='navbar'>
    <Toolbar className='toolbar'>
      
      <Typography variant="h5" component="h6" >
        Ayushi
      </Typography>

      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
     <Box>
     {navlinks.map((items,i)=><Button color="inherit" className='navlinks'>{items.label}</Button>)}
      </Box>
      </Box>
      <Box sx={{ display: { sm: 'none', xs: 'block' } }}>
        <IconButton color='inherit'onClick={()=>console.log('menu clicked')}>
            <MenuOpenIcon/>
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
  )
}

