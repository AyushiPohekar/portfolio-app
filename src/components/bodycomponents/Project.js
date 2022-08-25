import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import image from "../../images/equipmentrental.png";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
import "./bodystyle.css";

export default function Project() {
    const projectData=[{
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4VD8_JLQjakfz8Q7V4gFRqTn5MR402Y7_WJ3clik7f_4Jgh_HvK7iTnM4SewZ3v8l5Q&usqp=CAU',
        title:'Equipment-rental website',
        description:'Equipment rental website for renting with searchbar and add-to-cart feature.',
        demolink:'https://shiny-alpaca-b00810.netlify.app/',
        frontendlink:'https://github.com/AyushiPohekar/guvi-hacathon-2-frontend',
        backendlink:'https://github.com/AyushiPohekar/guvi-hacathon2-backend',
    },];
    // const navigate = useNavigate();
  return (
    <Box className="Project" id='Projects'>
      <Typography variant="h4" component="h4" className="ProjectTitle">
        Projects
      </Typography>
      <Box className='projectCard'>
      {projectData.map((item,i)=>(
      <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="140"
        image={item.url}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {item.description}
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://shiny-alpaca-b00810.netlify.app/" target="_blank" className='demo'> <Button size="small" >Demo</Button></a>
      <a href="https://github.com/AyushiPohekar/guvi-hacathon-2-frontend" target="_blank" className='demo'> <Button size="small">frontendlink</Button></a>
      <a href="https://github.com/AyushiPohekar/guvi-hacathon2-backend" target="_blank" className='demo'> <Button size="small">backendlink</Button></a>
        
      </CardActions>
    </Card>
      
      ))}
      </Box>
      
    </Box>
  );
}
