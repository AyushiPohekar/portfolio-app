import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Theme } from "../Theme";
import "./header.css";
import Navbar from "./navbar";
import Button from '@mui/material/Button';



export default function Header() {
  // const Theme={

  //     colors:{
  //         base1:"#0096FF",
  //         base2:"#72FFFF",
  //         primary:"#00D7FF",
  //         primary1:"#5800FF",
  //     },
  // };
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

  return (
    <Box className="Headwrapper" style={styles}>
        <Navbar/>
      <Box className="Headercontainer" >
      
      <Typography variant="h3" component='h4' className="headerTitle" >Hello,I am Ayushi!</Typography>
      <Typography variant="h4" component='h4' className="headerDescription">I am a full Stack Developer</Typography>
      <Box className='resume'>
    <Button variant="contained">Resume</Button>
     </Box>
    
    
    </Box>
   
    </Box>
    
  );
}
