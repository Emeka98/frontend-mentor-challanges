// Images
import blogImg from "./Images/image-blogr.jpg";
import builderImg from "./Images/image-builder.jpg";
import campImg from "./Images/image-camp.jpg";
import expressImg from "./Images/image-express.jpg";
import photonImg from "./Images/image-photon.jpg";
import transferImg from "./Images/image-transfer.jpg";

import appMobileImg from "./Images/mobile/image-app-design.jpg";
import graphicMobileImg from "./Images/mobile/image-graphic-design.jpg";
// Images For Tablet

import appTabletImg from "./Images/tablet/image-app-design.jpg";
import graphicTabletImg from "./Images/tablet/image-graphic-design.jpg";
// Images For Desktop

import appDesktopImg from "./Images/desktop/image-app-design.jpg";
import graphicDesktopImg from "./Images/desktop/image-graphic-design.jpg";

export const heroInfo = {
  title: "Web Design",
  content:
    "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
};

export const webDesignCards = [
  {
    id: 0,
    title: "express",
    description: "A multi-carrier shipping website for ecommerce businesses",
    image: expressImg,
  },
  {
    id: 1,
    title: "transfer",
    description:
      "Site for low-cost money transfers and sending money within seconds",
    image: transferImg,
  },
  {
    id: 2,
    title: "photon",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
    image: photonImg,
  },
  {
    id: 3,
    title: "builder",
    description:
      "Connects users with local contractors based on their location",
    image: builderImg,
  },
  {
    id: 4,
    title: "blogr",
    description:
      "Blogr is a platform for creating an online blog or publication",
    image: blogImg,
  },
  {
    id: 5,
    title: "camp",
    description:
      "Get expert training in coding, data, design, and digital marketing",
    image: campImg,
  },
];

export const cards = [
  {
    id: 0,
    title: "app design",
    path: "/app-design",
    mobileImage: appMobileImg,
    tabletImage: appTabletImg,
    desktopImage: appDesktopImg,
  },
  {
    id: 1,
    title: "graphic design",
    path: "/graphic-design",
    mobileImage: graphicMobileImg,
    tabletImage: graphicTabletImg,
    desktopImage: graphicDesktopImg,
  },
];
