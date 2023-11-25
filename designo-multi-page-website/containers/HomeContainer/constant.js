// Images For Mobile
import webMobileImg from "./Images/mobile/image-web-design.jpg";
import appMobileImg from "./Images/mobile/image-app-design.jpg";
import graphicMobileImg from "./Images/mobile/image-graphic-design.jpg";
// Images For Tablet
import webTabletImg from "./Images/tablet/image-web-design.jpg";
import appTabletImg from "./Images/tablet/image-app-design.jpg";
import graphicTabletImg from "./Images/tablet/image-graphic-design.jpg";
// Images For Desktop
import webDesktopImg from "./Images/desktop/image-web-design-large.jpg";
import appDesktopImg from "./Images/desktop/image-app-design.jpg";
import graphicDesktopImg from "./Images/desktop/image-graphic-design.jpg";

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
  {
    id: 2,
    title: "graphic design",
    path: "/graphic-design",
    mobileImage: graphicMobileImg,
    tabletImage: graphicTabletImg,
    desktopImage: graphicDesktopImg,
  },
];
