import React, { useState, useEffect } from "react";

import { Box, Grid, Paper } from "@mui/material";
import { characterObjectI } from "../DesignGrids/DesginGrids";
import { Stage, Layer, Image } from "react-konva";

interface CanvasPropsI {
  charObj: characterObjectI;
  x: number;
  y: number;
}
const Canvas = ({ charObj, x, y }: CanvasPropsI) => {
  const [background, setBackground] = useState<any>(null);
  const [body, setBody] = useState<any>(null);
  const [face, setface] = useState<any>(null);
  useEffect(() => {
    loadImage();
  }, [
    charObj.attributes.background,
    charObj.attributes.body,
    charObj.attributes.mouth,
  ]);
  console.log(charObj, "lolo");

  function loadImage() {
    const image1 = new window.Image();
    image1.src = charObj.attributes.background;
    image1.onload = () => {
      setBackground(image1);
    };
    const image2 = new window.Image();
    image2.src = charObj.attributes.body;
    image2.onload = () => {
      setBody(image2);
    };

    const image3 = new window.Image();
    image3.src = charObj.attributes.mouth;
    image3.onload = () => {
      setface(image3);
    };
    console.log(background, body, face, "face");
  }

  return (
    <Box
      textAlign={"center"}
      sx={{
        width: 300,
        paddingTop: 5,
        // backgroundColor: "primary.dark",
        // "&:hover": {
        //   backgroundColor: "primary.main",
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      <Paper elevation={4}>
        <Stage width={300} height={300}>
          <Layer>
            <Image
              width={300}
              height={300}
              image={background}
              y={x}
              x={y}
            ></Image>
          </Layer>
          <Layer>
            <Image width={300} height={300} image={body} x={x} y={y}></Image>
          </Layer>
          <Layer>
            <Image width={300} height={300} image={face} y={x} x={y}></Image>
          </Layer>
        </Stage>
      </Paper>
    </Box>
  );
};

export default Canvas;
