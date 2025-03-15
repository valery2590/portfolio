import React from "react";
import styles from "../styles/generalStyles.module.scss";
import ButtonGeneral from "./ButtonGeneral";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import translated from "./translations";

const StorySection = ({ text, src, alt, id }) => {
  const history = useHistory();
  return (
    <>
      {id !== "2" && (
        <div className={styles.questionSectionContainer}>
          <div className={styles.questionTextContainer}>
            <p className={styles.questionText}>{text}</p>
          </div>
          <div className={styles.questionImageContainer}>
            <img src={src} alt={alt} className={styles.questionPicture} />
          </div>
        </div>
      )}

      {id === "2" && (
        <>
          <div className={styles.questionSectionContainer}>
            <div className={styles.questionTextContainer}>
              <p className={styles.questionText}>{text}</p>
              <div className={styles.buttonsFutureContainer}>
                <div className={styles.buttonFutureConta}>
                  <ButtonGeneral
                    title={"Quizz 🎊"}
                    className={styles.buttonsFuture}
                    onClick={() => {
                      history.push("quizz");
                      localStorage.setItem("currentTab", "quizz");
                    }}
                  />
                </div>
                <div className={styles.buttonFutureConta}>
                  <ButtonGeneral
                    title={`${translated("Projects")} 🧑🏽‍💻`}
                    className={styles.buttonsFuture}
                    onClick={() => {
                      history.push("projects");
                      localStorage.setItem("currentTab", "projects");
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.questionImageContainer}>
              <img src={src} alt={alt} className={styles.questionPicture} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StorySection;
