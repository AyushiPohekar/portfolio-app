import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./bodystyle.css";
export default function About() {
  return (
    <Box className="about" id="About">
      <Typography variant="h4" component="h4" className="AboutTitle">
        About me
      </Typography>
      <Box className="Aboutdescription">
        I am an Electrical Engineer by education who started exploring the
        fascinating world of Mern Stack Development .In this exciting journey
        till now I learned many technologies. I have passion for working on
        projects that involves problem solving,creating
        attractive,unique,user-friendly UI designs and User-Interface that is
        dynamic.I also like to support it with strong backend.I have interest in
        MERN stack i.e.MongoDB,ExpressJS,ReactJS,NodeJS. I am hard-working
        individual who focus on details and problem solving.
      </Box>
    </Box>
  );
}
