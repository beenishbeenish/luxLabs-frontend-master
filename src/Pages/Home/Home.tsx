import React from "react";
import { Typography, Box, Paper, Card, Grid } from "@mui/material";
import PotionCarousel from "../../Components/PotionCarousel/PotionCarousel";
import Shell from "../../Shell/Shell";
import BackgroundImage from "../../assets/Background/backgroundimage.jpg";

const Home = () => {
  return (
    <div>
      <Box>
        <Typography variant="h1">Home</Typography>
        <Grid container>
          <Grid item sm={4} />
          <Grid item sm={4} sx={{ p: 5 }}>
            {/* <Box
              sx={{
                width: "100%",
                height: "70vh",
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "20px",
              }}
            > */}
            <Card
              sx={{
                minWidth: "60%",
                maxWidth: "90%",
                height: "70vh",
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "20px",
                // m: 5,
                // pt: 5,
                p: 0,
              }}
            ></Card>
            {/* </Box> */}
          </Grid>
          <Grid item sm={4} />
        </Grid>
        <Box sx={{ padding: 20 }}></Box>
      </Box>
    </div>
  );
};

export default Home;
