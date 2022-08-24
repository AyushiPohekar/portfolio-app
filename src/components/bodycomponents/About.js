import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import './bodystyle.css'
export default function About() {
  return (
    <Box className="about" id='About'>
     <Typography variant="h4" component='h4' className="AboutTitle" >About me</Typography>
      <Box className='Aboutdescription'>
        Goal-oriented full stack developer with a passion for working on a
        project that solves problems with thoughtful UI design, creating
        intuitive, dynamic user experiences powered by strong backend. My core
        competency lies in developing applications from its inception. I
        primarily work with MERN stack among the full stack technologies. As a
        full stack developer, I enjoy using my obsessive attention to detail, my
        unequivocal love for making things, and my mission-driven work ethic to
        revolutionize the project I work on.
      </Box>
    </Box>
  );
}
