import React from "react";
import BackgroundImage from "../assets/Background/backgroundimage.jpg";

type Props = { children: any; backgroundImage: string };

const Shell = (props: Props) => {
  return (
    <div
      style={{
        backgroundImage: ` url(${props.backgroundImage})`,
      }}
    >
      {props.children}
    </div>
  );
};

export default Shell;
