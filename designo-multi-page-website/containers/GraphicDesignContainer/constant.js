import timBrownImg from "./images/image-change.jpg";
import waterImg from "./images/image-boxed-water.jpg";
import scienceImg from "./images/image-science.jpg";
// Images For Mobile
import webMobileImg from "./Images/mobile/image-web-design.jpg";
import appMobileImg from "./Images/mobile/image-app-design.jpg";

// Images For Tablet
import webTabletImg from "./Images/tablet/image-web-design.jpg";
import appTabletImg from "./Images/tablet/image-app-design.jpg";

// Images For Desktop
import webDesktopImg from "./Images/desktop/image-web-design-large.jpg";
import appDesktopImg from "./Images/desktop/image-app-design.jpg";

export const heroInfo = {
  title: "Graphic Design",
  content:
    "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
};

export const graphicDesignCards = [
  {
    id: 0,
    title: "tim brown",
    description: "A book cover designed for Tim Brown’s new release, ‘Change’",
    image: timBrownImg,
  },
  {
    id: 1,
    title: "boxed water",
    description: "A simple packaging concept made for Boxed Water",
    image: waterImg,
  },
  {
    id: 2,
    title: "science",
    description: "A poster made in collaboration with the Federal Art Project",
    image: scienceImg,
  },
];

export const cards = [
  {
    id: 0,
    title: "web design",
    path: "/web-design",
    mobileImage: webMobileImg,
    tabletImage: webTabletImg,
    desktopImage: webDesktopImg,
  },
  {
    id: 1,
    title: "app design",
    path: "/app-design",
    mobileImage: appMobileImg,
    tabletImage: appTabletImg,
    desktopImage: appDesktopImg,
  },
];
