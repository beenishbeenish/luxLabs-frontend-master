import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../Pages/Home/Home";
import CharacterDesign from "../Pages/CharacterDesign/CharacterDesign";
import Breeding from "../Pages/Breeding/Breeding";
import NotFound from "../Pages/NotFound/NotFound";
import BackgroundImage from "../assets/Background/backgroundimage.jpg";

const AllRoutes = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
      }}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="characterBuilding" element={<CharacterDesign />} />
        <Route path="breeding" element={<Breeding />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
