import React from "react";
import styles from "../styles/generalStyles.module.scss";

const StorySection = ({ text, src, alt }) => {
  return (
    <div className={styles.questionSectionContainer}>
      <div className={styles.questionTextContainer}>
        <p className={styles.questionText}>{text}</p>
      </div>
      <div className={styles.questionImageContainer}>
        <img src={src} alt={alt} className={styles.questionPicture} />
      </div>
    </div>
  );
};

export default StorySection;
