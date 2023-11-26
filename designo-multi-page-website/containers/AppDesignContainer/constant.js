import filterImg from "./images/image-airfilter.jpg";
import eyecamImg from "./images/image-eyecam.jpg";
import faceitImg from "./images/image-faceit.jpg";
import todoImg from "./images/image-todo.jpg";
import loopImg from "./images/image-loopstudios.jpg";
// Images For Mobile
import webMobileImg from "./Images/mobile/image-web-design.jpg";
import graphicMobileImg from "./Images/mobile/image-graphic-design.jpg";
// Images For Tablet
import webTabletImg from "./Images/tablet/image-web-design.jpg";
import graphicTabletImg from "./Images/tablet/image-graphic-design.jpg";
// Images For Desktop
import webDesktopImg from "./Images/desktop/image-web-design-large.jpg";
import graphicDesktopImg from "./Images/desktop/image-graphic-design.jpg";

export const heroInfo = {
  title: "App Design",
  content:
    "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
};

export const appDesignCards = [
  {
    id: 0,
    title: "airfilter",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
    image: filterImg,
  },
  {
    id: 1,
    title: "eyecam",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
    image: eyecamImg,
  },
  {
    id: 2,
    title: "faceit",
    description:
      "Get to meet your favorite internet superstar with the faceit app",
    image: faceitImg,
  },
  {
    id: 3,
    title: "todo",
    description: "A todo app that features cloud sync with light and dark mode",
    image: todoImg,
  },
  {
    id: 4,
    title: "loopstudios",
    description: "A VR experience app made for Loopstudios",
    image: loopImg,
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
    title: "graphic design",
    path: "/graphic-design",
    mobileImage: graphicMobileImg,
    tabletImage: graphicTabletImg,
    desktopImage: graphicDesktopImg,
  },
];
