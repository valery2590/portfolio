import React from "react";
import translated from "../components/translations";
import ButtonGeneral from "../components/ButtonGeneral";
import styles from "../styles/generalStyles.module.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const smallTreeText = (
  <>
    <b>{translated("Hello! Welcome to my story.")}</b>{" "}
    {translated(
      "Here comes a sum up of my life. Born in Perú 🇵🇪 on 1990, raised in Barcelona 🇪🇸 and I have been living in several places: 🇬🇧, 🇮🇪, 🇫🇮, 🇱🇰, 🇪🇸, 🇮🇹."
    )}
    <br />
    <br />
    {translated(
      "I studied Tourism in university, so I know how to handle clients and also I am able to speak in English 👌🏽, Italian 🤌🏽, Spanish ✌🏽 and Catalan 👍🏽"
    )}
    <br />
    <br />
    {translated(
      "I found the programming world at some job because I created some tools. After that, I fell in love instantly...❤️ So I ended up doing a full-stack developer course and finally found a tech job and some projects. 🧑🏽‍💻"
    )}
  </>
);

export const middleTreeText = (
  <>
    {translated(
      "After a few years, I am currently a Solutions Developer. I was lucky to find a job in which I learned a lot. Also, I have created some tools and helped different departments."
    )}
    <br />
    <br />
    {translated(
      "However, nowadays, I can create integrations to connect applications. Furthermore, I am dealing with client's requests."
    )}
    <br />
    <br />
    {translated(
      "As a good student, I am all the time studying and improving my code. Just to face new challenges with a good preparation."
    )}
  </>
);

export const BigTreeText = () => {
  const history = useHistory();

  return (
    <>
      {translated(
        "My future is becoming quite interesting, I am gathering different projects, not only personals. So in case you would like to hire, I'll be more than happy to assist you."
      )}
      <br />
      <br />
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
    </>
  );
};
