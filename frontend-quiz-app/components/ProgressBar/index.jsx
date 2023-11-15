import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

function ProgressBar() {
  const progressBarClasses = classNames(
    styles["round-time-bar"],
    "dark:bg-navy"
  );

  return (
    <div
      className={progressBarClasses}
      data-style="smooth"
      style={{ "--duration": "10" }}
    >
      <div></div>
    </div>
  );
}

export default ProgressBar;
