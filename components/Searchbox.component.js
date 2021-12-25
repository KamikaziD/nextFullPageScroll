import React from "react";

import styles from "./Seachbox.module.css";

export const Searchbox = ({ placeholder, handleChange }) => (
  <input
    className={styles.search}
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
