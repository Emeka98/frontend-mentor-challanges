"use client";
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
      style={{ "--duration": "30" }}
    >
      <div></div>
    </div>
  );
}

export default ProgressBar;
