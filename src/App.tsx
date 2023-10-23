import React from "react";

import "./App.css";
import Breeding from "./Pages/Breeding/Breeding";
import AllRoutes from "./Routes/Routes";
import Shell from "./Shell/Shell";
import BackgroundImage from "./assets/Background/backgroundimage.jpg";
function App() {
  return (
    <div>
      <img
        src={BackgroundImage}
        alt=""
        style={{ width: "100%", height: "100vh" }}
      />
      <AllRoutes />
    </div>
  );
}

export default App;
