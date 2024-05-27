import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
