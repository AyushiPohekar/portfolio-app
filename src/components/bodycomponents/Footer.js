import React from 'react';
import Box from "@mui/material/Box";
import './bodystyle.css'
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Typography from "@mui/material/Typography";
import {Link} from 'react-scroll';

export default function Footer() {
    const styles={
        position: 'absolute',
    right: 5,
    bottom:5,
    color:'white',
    backgroundColor:'#03045E',
    };
  return (
  <Box className='footerContainer' id={Footer}>
  
 <IconButton className='iconbutton' style={styles}
 >
    <ArrowUpwardIcon/>
 </IconButton>
 <Typography variant="body1" component='h4' className="footertext" >Made by Ayushi with ❤</Typography>

  </Box>
  )
}
