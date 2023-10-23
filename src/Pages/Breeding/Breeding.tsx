import Card from "../../Components/Card/Card";
import Carousel from "../../Components/Carousel/Carousel";
import Image1 from "../../assets/HomeAssets/4369.png";
import Image2 from "../../assets/HomeAssets/Lioness3.png";
import ArrowLeft from "../../assets/BreedingAssets/ArrowLeft.png";
import ArrowRight from "../../assets/BreedingAssets/ArrowRight.png";
import PotionCarousel from "../../Components/PotionCarousel/PotionCarousel";
import BreedingBackground from "../../assets/BreedingAssets/BreedingBackground.png";
import Header from "../../assets/BreedingAssets/header.png";
import Header2 from "../../assets/BreedingAssets/heading2.png";
import Logo from "../../assets/BreedingAssets/logo.png";
import Chamber from "../../assets/BreedingAssets/Chamber.png";
import { Box, Grid } from "@mui/material";
import Bubbles from "../../assets/BreedingAssets/Bubbles.gif";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

const bigScreen = {
  marginTop: 0,
};
const smallScreen = {
  marginTop: 0,
};

const Breeding = () => {
  const smallScreenCheck = useMediaQuery("(min-width:1025px)");
  const bigScreenCheck = useMediaQuery("(max-width:1725px)");
  console.log(bigScreenCheck, "cool");

  let cards = [
    {
      key: 1,
      content: <Card imagen={`${Image1}`} />,
    },
    {
      key: 2,
      content: <Card imagen={`${Image2}`} />,
    },
    {
      key: 3,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      ),
    },
    {
      key: 4,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      ),
    },
    {
      key: 5,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ];
  return (
    <>
      <div>
        <img
          src={BreedingBackground}
          alt=""
          style={{ width: "100%", height: "100vh" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <Grid container style={{ zIndex: 0 }}>
            <Box
              width="100%"
              position="absolute"
              sx={{ m: 0, top: 120, left: "38%" }}
            >
              <Box>
                <img
                  src={`${Chamber}`}
                  alt=""
                  width="15%"
                  style={{ maxHeight: "80vh", minWidth: "20%" }}
                />
                {/* <Box width="90%" position="absolute" sx={{ m: 0, top: 350 }}> */}
                {/* <img src={`${Bubbles}`} alt="" width="20%" /> */}
              </Box>
            </Box>
            {bigScreenCheck ? (
              <Box
                width="100%"
                position="absolute"
                sx={{ m: 0, top: 120, left: "38%" }}
              >
                <Box>
                  <img
                    src={`${Chamber}`}
                    alt=""
                    width="15%"
                    style={{ maxHeight: "80vh", minWidth: "20%" }}
                  />
                  {/* <Box width="90%" position="absolute" sx={{ m: 0, top: 350 }}> */}
                  {/* <img src={`${Bubbles}`} alt="" width="20%" /> */}
                </Box>
              </Box>
            ) : (
              <Box
                width="100%"
                position="absolute"
                sx={{ m: 0, top: 120, left: "38%" }}
              >
                <Box>
                  <img
                    src={`${Chamber}`}
                    alt=""
                    width="15%"
                    style={{ maxHeight: "90vh", minWidth: "20%" }}
                  />
                  {/* <Box width="90%" position="absolute" sx={{ m: 0, top: 350 }}> */}
                  {/* <img src={`${Bubbles}`} alt="" width="20%" /> */}
                </Box>
              </Box>
            )}
            {bigScreenCheck ? (
              <Box
                width="100%"
                position="absolute"
                sx={{ m: 0, top: 270, left: "40%", scroll: "hidden" }}
              >
                <Box>
                  {/* <img src={`${Chamber}`} alt="" width="20%" /> */}
                  {/* <Box width="90%" position="absolute" sx={{ m: 0, top: 350 }}> */}
                  <img src={`${Bubbles}`} alt="" width="16%" />
                </Box>
              </Box>
            ) : (
              <Box
                width="100%"
                position="absolute"
                sx={{ m: 0, top: 350, left: "40%", scroll: "hidden" }}
              >
                <Box>
                  {/* <img src={`${Chamber}`} alt="" width="20%" /> */}
                  {/* <Box width="90%" position="absolute" sx={{ m: 0, top: 350 }}> */}
                  <img src={`${Bubbles}`} alt="" width="16%" />
                </Box>
              </Box>
            )}
            <Grid
              item
              sm={3}
              sx={{ paddingTop: 4, display: "flex" }}
              justifyContent="center"
            >
              <Box>
                <img src={`${Logo}`} alt="" width="100%" />
              </Box>
            </Grid>
            <Grid
              item
              sm={6}
              sx={{ padding: 0, display: "flex" }}
              justifyContent="right"
            >
              <Box
                width="100%"
                borderRadius="8px"
                sx={{
                  border: "white solid 1px",
                  mt: 2,
                  height: "9vh",
                  background: "rgba(70, 70, 70, 0.8);",
                }}
              >
                <Box sx={{ paddingInline: 2, p: 1 }}>
                  <img src={`${Header}`} alt="" width="100%" />
                </Box>
                <Box
                  justifyContent="center"
                  width="80%"
                  borderRadius="8px"
                  sx={{
                    paddingInline: 2,
                    p: 1,
                    border: "white solid 1px",
                    background: "rgba(70, 70, 70, 0.8);",
                    justifyContent: "center",
                    ml: 7,
                    color: "white",
                    zIndex: 99,
                    position: "relative",
                  }}
                >
                  <img src={`${Header2}`} alt="" width="40%" /> {" :"}
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              sm={3}
              sx={{ padding: 0, display: "flex" }}
              justifyContent="right"
            ></Grid>

            <Grid
              item
              sm={4}
              sx={{ padding: 0, pt: 10, display: "flex" }}
              justifyContent="right"
            >
              {!bigScreenCheck ? (
                <Box
                  sx={{
                    width: "500px",
                    boxShadow: "rgb(0 0 0 / 40%)1px 3px 40px 27px",
                    background: "rgb(0 0 0 / 35%)",
                    mt: 10,
                  }}
                  justifyContent="center"
                >
                  <>
                    <Carousel
                      cards={cards}
                      height="900px"
                      width="100%"
                      margin="0 auto"
                      offset={100}
                      showArrows={true}
                    />
                    <Box sx={{ mt: -42.5 }}>
                      <img
                        style={{ marginBottom: 0, width: 18, marginLeft: 5 }}
                        src={ArrowLeft}
                        alt=""
                      />
                      <img
                        style={{ paddingTop: 0, width: 18, marginLeft: 455 }}
                        src={ArrowRight}
                        alt=""
                      />
                    </Box>
                  </>
                </Box>
              ) : (
                <Box
                  sx={{
                    width: 225,
                    boxShadow: "rgb(0 0 0 / 40%)1px 3px 40px 27px",
                    background: "rgb(0 0 0 / 35%)",
                  }}
                  justifyContent="center"
                >
                  <>
                    <Carousel
                      cards={cards}
                      height="500px"
                      width="100%"
                      margin="0 auto"
                      offset={100}
                      showArrows={true}
                    />
                    <Box sx={{ mt: -22.5 }}>
                      <img
                        style={{ marginBottom: 0, width: 18, marginLeft: 5 }}
                        src={ArrowLeft}
                        alt=""
                      />
                      <img
                        style={{ paddingTop: 0, width: 18, marginLeft: 180 }}
                        src={ArrowRight}
                        alt=""
                      />
                    </Box>
                  </>
                </Box>
              )}
            </Grid>
            <Grid item sm={4} sx={{ pt: 5, ml: 0, textAlign: "center" }}>
              <Box width="100%"></Box>
            </Grid>
            <Grid
              item
              sm={4}
              sx={{ padding: 0, pt: 10, display: "flex" }}
              justifyContent="left"
            >
              {!bigScreenCheck ? (
                <Box
                  sx={{
                    width: "500px",
                    boxShadow: "rgb(0 0 0 / 40%)1px 3px 40px 27px",
                    background: "rgb(0 0 0 / 35%)",
                    mt: 10,
                  }}
                  justifyContent="center"
                >
                  <>
                    <Carousel
                      cards={cards}
                      height="900px"
                      width="100%"
                      margin="0 auto"
                      offset={100}
                      showArrows={true}
                    />
                    <Box sx={{ mt: -42.5 }}>
                      <img
                        style={{ marginBottom: 0, width: 18, marginLeft: 5 }}
                        src={ArrowLeft}
                        alt=""
                      />
                      <img
                        style={{ paddingTop: 0, width: 18, marginLeft: 455 }}
                        src={ArrowRight}
                        alt=""
                      />
                    </Box>
                  </>
                </Box>
              ) : (
                <Box
                  sx={{
                    width: 225,
                    boxShadow: "rgb(0 0 0 / 40%)1px 3px 40px 27px",
                    background: "rgb(0 0 0 / 35%)",
                  }}
                  justifyContent="center"
                >
                  <>
                    <Carousel
                      cards={cards}
                      height="500px"
                      width="100%"
                      margin="0 auto"
                      offset={100}
                      showArrows={true}
                    />
                    <Box sx={{ mt: -22.5 }}>
                      <img
                        style={{ marginBottom: 0, width: 18, marginLeft: 5 }}
                        src={ArrowLeft}
                        alt=""
                      />
                      <img
                        style={{ paddingTop: 0, width: 18, marginLeft: 180 }}
                        src={ArrowRight}
                        alt=""
                      />
                    </Box>
                  </>
                </Box>
              )}
            </Grid>
            <Box width="100%" sx={smallScreenCheck ? bigScreen : smallScreen}>
              {bigScreenCheck ? (
                <Grid container>
                  <Grid item sm={3}></Grid>

                  <Grid item sm={6}>
                    {" "}
                    <Box
                      sx={{
                        background: "rgba(217, 217, 217, 0.8);",
                        borderRadius: "15px",
                        width: "100%",
                        height: 60,
                        zIndex: 99,
                        position: "relative",
                        mt: 6,
                      }}
                    >
                      <PotionCarousel />
                    </Box>
                  </Grid>

                  <Grid item sm={3}></Grid>
                </Grid>
              ) : (
                <Grid container>
                  <Grid item sm={3}></Grid>

                  <Grid item sm={6}>
                    {" "}
                    <Box
                      sx={{
                        background: "rgba(217, 217, 217, 0.8);",
                        borderRadius: "15px",
                        width: "100%",
                        height: 60,
                        zIndex: 99,
                        position: "relative",
                        p: 2,
                        mt: 6,
                      }}
                    >
                      <PotionCarousel />
                    </Box>
                  </Grid>

                  <Grid item sm={3}></Grid>
                </Grid>
              )}
            </Box>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default Breeding;
