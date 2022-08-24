import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import './bodystyle.css'

export default function Skills() {
  return (
    <Box className='skills' id='Skills'>
         <Typography variant="h4" component='h4' className="SkillsTitle" >My skills</Typography>
         <Box className='skillsbox'>
     <Card className='skillscard'>
     <CardContent>
      <Typography sx={{ fontSize: 14 }} className='cardcontent' gutterBottom >
       CSS
      </Typography>
      </CardContent>
     </Card>
     <Card className='skillscard'>
     <CardContent>
      <Typography sx={{ fontSize: 14 }} className='cardcontent' gutterBottom >
       Html
      </Typography>
      </CardContent>
     </Card>
     <Card className='skillscard'>
     <CardContent>
      <Typography sx={{ fontSize: 14 }} className='cardcontent' gutterBottom >
       Javascript
      </Typography>
      </CardContent>
     </Card>
     <Card className='skillscard'>
     <CardContent>
      <Typography sx={{ fontSize: 14 }} className='cardcontent' gutterBottom >
       Nodejs
      </Typography>
      </CardContent>
     </Card>
     <Card className='skillscard'>
     <CardContent>
      <Typography sx={{ fontSize: 14 }} className='cardcontent' gutterBottom >
       MongoDB
      </Typography>
      </CardContent>
     </Card>
     <Card className='skillscard'>
     <CardContent>
      <Typography sx={{ fontSize: 14 }}  className='cardcontent' gutterBottom >
       Nodejs
      </Typography>
      </CardContent>
     </Card>
     <Card className='skillscard'>
     <CardContent>
      <Typography sx={{ fontSize: 14 }}  className='cardcontent' gutterBottom >
      Postman
      </Typography>
      </CardContent>
     </Card>
     <Card className='skillscard'>
     <CardContent>
      <Typography sx={{ fontSize: 14 }}  className='cardcontent' gutterBottom >
      Heroku
      </Typography>
      </CardContent>
     </Card>
     <Card className='skillscard'>
     <CardContent>
      <Typography sx={{ fontSize: 14 }} className='cardcontent' gutterBottom >
      Git
      </Typography>
      </CardContent>
     </Card>

     </Box>

    </Box>
  )
}

