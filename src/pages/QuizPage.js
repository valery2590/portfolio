import React, { useState } from "react";
import styles from "../styles/generalStyles.module.scss";
//import "./QuizPage.css";
import Trivia from "../components/trivia/Trivial.js";
import ButtonGeneral from "../components/ButtonGeneral.js";

const QuizPage = () => {
  const [show, setShow] = useState(false);

  const test = () => {
    setShow(true);
  };

  return (
    <div className={styles.quizzPageContainer}>
      {show ? (
        <>
          <Trivia />
          <div className={styles.quizzButtonContainer}>
            <ButtonGeneral
              title={"Leave for now"}
              className={styles.quizzButton}
              onClick={() => setShow(false)}
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.quizzTextContainer}>
            <p>
              Let's see if you have paid attention to <b>my story</b>
            </p>
          </div>
          <div className={styles.quizzButtonContainer}>
            <ButtonGeneral
              title={"Let's play"}
              className={styles.quizzButton}
              onClick={() => {
                setShow(true);
                test();
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default QuizPage;
