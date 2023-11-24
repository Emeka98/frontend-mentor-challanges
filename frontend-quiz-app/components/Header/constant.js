import HtmlImg from "@/public/icon-html.svg";
import CssImg from "@/public/icon-css.svg";
import JsImg from "@/public/icon-js.svg";
import AssImg from "@/public/icon-accessibility.svg";

export const images = [
  { html: HtmlImg, bgColor: "#FFF1e9" },
  { css: CssImg, bgColor: "#E0FDEF" },
  { javascript: JsImg, bgColor: "#EBF0FF" },
  { accessibility: AssImg, bgColor: "#F6E7FF" },
];

export function capitalizeFirstLetter(string) {
  if (string === "html" || string === "css") {
    return string.toUpperCase();
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}