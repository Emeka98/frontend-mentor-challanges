import React from "react";
import { handleButtonClick } from "./handleButtonClick";
//SVG
import CopyImage from "../assets/icon-copy.svg";
function FormHeader({password }) {




  return (
    <>
      <h1 className="heading-m">Password Generator</h1>
      <div className="show-input">
        <input type="text" value={password} placeholder="P4$5W0rD!" disabled />
        <button  onClick={() => handleButtonClick(password)}>
          <img src={CopyImage} alt="icon-check" />
        </button>
      </div>
    </>
  );
}

export default FormHeader;
