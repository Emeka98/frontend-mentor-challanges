import React from "react";
import styles from "./styles.module.css";

function ProgressBar() {
  return (
<div
      className={styles["round-time-bar"] }
      data-style="smooth"
      style={{ "--duration": "10" }}
    >
      <div></div>
    </div>
  );
}

export default ProgressBar;
