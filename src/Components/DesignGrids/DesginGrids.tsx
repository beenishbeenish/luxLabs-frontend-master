import React, { useState, useEffect } from "react";
import Canvas from "../Canvas/Canvas";
import image1 from "../../assets/head.png";
import image2 from "../../assets/smile.png";
import image3 from "../../assets/background.jpg";
import Header from "../../assets/BreedingAssets/header.png";
import Header2 from "../../assets/BreedingAssets/heading2.png";
import MaleLion from "../../assets/BreedingAssets/maleLion.png";
import FemaleLion from "../../assets/BreedingAssets/femaleLion.png";
import Logo from "../../assets/BreedingAssets/logo.png";
import BreedingBackground from "../../assets/BreedingAssets/BreedingBackground.png";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

const DesginGrids = () => {
  const [background, setBackground] = useState<string>("");
  const [characterBody, setCharacterBody] = useState<string>("");
  const [characterFace, setCharacterFace] = useState<string>("");
  const [characterObjectState, setCharacterObjectState] =
    useState<characterObjectI>({
      issuer: "",
      attributes: {
        background: "",
        body: "",
        mouth: "",
        head: "",
        eyes: "",
        clothes: "",
        nose: "",
      },
    });

  const backgroundHandler = () => {
    const newCharacterObject = structuredClone(characterObjectState);
    newCharacterObject.attributes.background = image3;
    setCharacterObjectState(newCharacterObject);
  };
  const bodyHandler = () => {
    const newCharacterObject = structuredClone(characterObjectState);
    newCharacterObject.attributes.body = image1;
    setCharacterObjectState(newCharacterObject);
  };
  const faceHandler = () => {
    const newCharacterObject = structuredClone(characterObjectState);
    newCharacterObject.attributes.smile = image2;
    setCharacterObjectState(newCharacterObject);
  };

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
          <Grid container spacing={2}>
            <Grid
              item
              sm={3}
              sx={{ paddingTop: 2, display: "flex" }}
              justifyContent="center"
            >
              <Box sx={{ paddingTop: 2 }}>
                <img src={`${Logo}`} alt="" width="100%" />
              </Box>
            </Grid>
            {/* <Grid></Grid> */}
            <Grid item sm={6} sx={{ ml: 0 }} justifyContent="right">
              <Box
                width="100%"
                borderRadius="8px"
                sx={{
                  border: "white solid 1px",
                  mt: 2,
                  height: "6vh",
                  background: "rgba(70, 70, 70, 0.8);",
                }}
              >
                {/* <Box sx={{ paddingInline: 2, p: 1 }}>
                  <img src={`${Header}`} alt="" width="100%" />
                </Box> */}
                <Box
                  // justifyContent="center"
                  width="80%"
                  borderRadius="8px"
                  sx={{
                    paddingInline: 2,
                    pt: 1,
                    background: "rgba(70, 70, 70, 0.8);",
                    // justifyContent: "center",

                    ml: 0,
                    color: "white",
                    zIndex: 99,
                    position: "relative",
                  }}
                >
                  <img src={`${Header2}`} alt="" width="50%" /> {" :"}
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
              sm={2}
              sx={{
                ml: 6,
                mt: 5,
                justifyContent: "center",
                display: "flex",
              }}
              justifyContent="center"
            >
              <Box
                sx={{
                  mb: "100px",
                  background: "rgba(109, 248, 254, 0.6)",
                  borderRadius: "20px",
                }}
                justifyContent="center"
                width="100%"
              >
                <Box
                  width="100%"
                  sx={{
                    height: "30px",
                    background: "rgba(70, 70, 70, 0.8)",
                    p: 0,
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "white",
                      ml: 3,
                      fontSize: 22,
                      fontWeight: "600",
                    }}
                  >
                    {"Chosen Gender"}
                  </Typography>
                </Box>
                <Box sx={{ p: 1 }}>
                  <Paper
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "20px",
                      background: "#FF5733",
                    }}
                  >
                    <img
                      src={`${MaleLion}`}
                      alt=""
                      width="100%"
                      style={{ marginBottom: 14 }}
                    />
                  </Paper>
                </Box>
                <Box sx={{ p: 1 }}>
                  <Paper
                    sx={{ width: "100%", height: "100%", borderRadius: "20px" }}
                  >
                    <img src={`${FemaleLion}`} alt="" width="100%" />
                  </Paper>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={9}>
              <Grid
                container
                sx={{
                  background: " rgba(109, 248, 254, 0.6)",
                  borderRadius: "20px",
                  minHeight: "80vh",
                }}
              >
                <Grid item sm={4}>
                  <Box
                    mt={5}
                    ml={2}
                    sx={{
                      background: "rgba(63, 63, 63, 0.9)",
                      height: "90%",
                      borderRadius: "10px",
                    }}
                  ></Box>
                </Grid>
                <Grid
                  item
                  sm={4}
                  sx={{ display: "flex" }}
                  justifyContent="center"
                >
                  <Canvas charObj={characterObjectState} x={0} y={0} />
                </Grid>
                <Grid item sm={4}>
                  {" "}
                  <Box
                    mt={5}
                    mr={2}
                    sx={{
                      background: "rgba(63, 63, 63, 0.9)",
                      height: "90%",
                      borderRadius: "10px",
                    }}
                  ></Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default DesginGrids;

export interface characterObjectI {
  issuer: string;
  attributes: {
    background: string;
    body: string;
    mouth: string;
    clothes: string;
    head: string;
    nose: string;
    eyes: string;
  };
}
