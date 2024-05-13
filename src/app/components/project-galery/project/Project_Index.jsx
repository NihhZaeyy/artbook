"use client";
import React from "react";
import styles from "./style.module.css";
const Project_Index = ({ index, setModal, title }) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
};

export default Project_Index;
