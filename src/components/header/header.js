import * as React from "react";
import Box from "@mui/material/Box";
import { Theme } from "../Theme";
import "./header.css";
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

  return (
    <Box className="Headwrapper" style={styles}>
      <Box className="Headercontainer" >
      {/* <img
        src="https://www.communicationcrafts.com/wp-content/uploads/2020/11/Expert-knowledge.jpg"
        alt="Full stack developer" className="Bgimage"
      ></img> */}

<img
        src="https://www.hays.com.au/documents/3173609/3716998/Image_Tech_Job_Software_Developer_LandingPage.jpg/482fcd02-18cd-7adc-69ec-2810709139af?t=1618902865233"
        alt="Full stack developer" className="Bgimage"
      ></img>

      </Box>
    
    </Box>
  );
}
