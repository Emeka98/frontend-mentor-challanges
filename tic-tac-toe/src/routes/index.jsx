import React from "react";
import Intro from "../components/Intro";
import Game from "../components/Game";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);

export default routes;
