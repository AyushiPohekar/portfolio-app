import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", name, email, message);
  };
  return (
    <Box className="contact" id="Contact">
      <Typography variant="h4" component="h4" className="SkillsTitle">
        Contact Me✋
      </Typography>
      <Box className="mycontact">
        <Card className="contactnumber">
          <CardContent>
            <Typography className="cardcontent" gutterBottom>
              Contact number
            </Typography>
            <Typography className="cardnumber" gutterBottom>
              9131272889
            </Typography>
          </CardContent>
        </Card>
        <Card className="contactnumber">
          <CardContent>
            <Typography className="cardcontent" gutterBottom>
              Email Address
            </Typography>
            <Typography className="cardnumber" gutterBottom>
              ayushi2021.29@gmail.com
            </Typography>
          </CardContent>
        </Card>
        <Card className="contactnumber">
          <CardContent>
            <Typography className="cardcontent" gutterBottom>
              Address
            </Typography>
            <Typography className="cardnumber" gutterBottom>
              Chennai,India
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <form className="Contactform" onSubmit={handleSubmit}>
        <Grid container className="Container1">
          <Grid item xs={12} sm={6}>
            <TextField
              value={name}
              label="Name"
              variant="outlined"
              fullWidth={true}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container className="Container2">
          <Grid item xs={12} sm={6}>
            <TextField
              value={email}
              label="Email"
              variant="outlined"
              fullWidth={true}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container className="Container3">
          <Grid item xs={12} sm={6}>
            <TextField
              value={message}
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth={true}
              onChange={(event) => setMessage(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container className="Container3">
          <Grid item xs={12} sm={6}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
