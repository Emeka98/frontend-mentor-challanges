import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

import Headphones from "../pages/Headphones";
import Speakers from "../pages/Speakers";
import Earphones from "../pages/Earphones";
import NotFound from "../pages/NotFound";
import ProductDetail from "../pages/ProductDetail";
import HeadphonesLayout from "../pages/Headphones/HeadphonesLayout";
import EarphonesLayout from "../pages/Earphones/EarphonesLayout";
import SpeakersLayout from "../pages/Speakers/SpeakersLayout";
import Checkout from "../pages/Checkout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/headphones",
    element: <HeadphonesLayout />,
    children: [
      {
        index: true,
        element: <Headphones />,
      },
      {
        path: ":id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/speakers",
    element: <SpeakersLayout />,
    children: [
      {
        index: true,
        element: <Speakers />,
      },
      {
        path: ":id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/earphones",
    element: <EarphonesLayout />,
    children: [
      {
        index: true,
        element: <Earphones />,
      },
      {
        path: ":id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
