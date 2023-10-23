import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Typography } from "@mui/material";
import "./Cards.css";

import useMediaQuery from "@mui/material/useMediaQuery";

function Card({ imagen }) {
  const [show, setShown] = useState(false);
  const bigScreenCheck = useMediaQuery("(max-width:1725px)");

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className={bigScreenCheck ? Styles.card : Styles["card-big"]}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img style={{ marginTop: 10 }} src={imagen} alt="" />
      {bigScreenCheck ? (
        <>
          <Typography sx={{ marginTop: -3, fontSize: 18 }} variant="h5">
            Mad Hare #2498
          </Typography>
          <Typography sx={{ marginTop: 0, fontSize: 11 }} variant="body">
            Score : 178.67056645
          </Typography>
          <Typography sx={{ marginTop: 0, fontSize: 11 }} variant="body">
            Rank : 3449/10000
          </Typography>
        </>
      ) : (
        <>
          <Typography sx={{ marginTop: 3, fontSize: 24 }} variant="h5">
            Mad Hare #2498
          </Typography>
          <Typography sx={{ marginTop: 0, fontSize: 16 }} variant="body">
            Score : 178.67056645
          </Typography>
          <Typography sx={{ marginTop: 0, fontSize: 16 }} variant="body">
            Rank : 3449/10000
          </Typography>
        </>
      )}
    </animated.div>
  );
}

export default Card;
