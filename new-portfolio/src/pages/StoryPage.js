import Questions from "../components/questions/Questions";
//import "./StoryPage.css"
import smallTree1 from "../assets/small-tree.jpeg";
import middleTree2 from "../assets/middle-tree.jpeg";
import bigTree3 from "../assets/big-tree.jpeg";
import { useEffect, useState } from "react";
import cvIcon from "../assets/cv.png";
import styles from "../styles/generalStyles.module.scss";
import ButtonGeneral from "../components/ButtonGeneral";
import StorySection from "../components/StorySection";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const QuestionsPage = () => {
  const smallTree = smallTree1;
  const middleTree = middleTree2;
  const bigTree = bigTree3;

  const history = useHistory();

  const [question, setQuestion] = useState("0");
  const [select, setSelected] = useState("active");

  const smallTreeText = (
    <>
      <b>Hello! Welcome to my story.</b> Here comes a sum up of my life. Born in
      Perú 🇵🇪 on 1990, raised in Barcelona 🇪🇸 and I have been living in several
      places: 🇬🇧, 🇮🇪, 🇫🇮, 🇱🇰, 🇪🇸, 🇮🇹.
      <br />
      <br />
      I studied Tourism in university, so I know how to handle clients and also
      I am able to speak in English 👌🏽, Italian 🤌🏽 and Spanish ✌🏽
      <br />
      <br />I found the programming world at some job because I created some
      tools. After that, I fall in love instantly...❤️ So I have ended doing a
      full stack developer course and finally, I found a tech job and some
      projects. 🧑🏽‍💻
    </>
  );

  const middleTreeText = (
    <>
      After a few years, currently I am Solutions Developer. I was lucky to find
      a job which I learnt a lot. Also, I have created some tools and helped
      different departments. <br />
      <br />
      However, nowadays, I am able to create integrations in order to connect
      applications. Furthermore, I am dealing with client's requests.
      <br />
      <br />
      As a good student, I am all the time studying and improving my code. Just
      to face new challanges with a good preparation.
    </>
  );

  const bigTreeText = (
    <>
      My future is becoming quite interesting, I am gathering different
      projects, not only personals. So in case you would like to hire, I'll be
      more than happy to assist you <br />
      <br />
      <div className={styles.buttonsFutureContainer}>
        <ButtonGeneral
          title={"Go to Quizz"}
          className={styles.buttonsFuture}
          onClick={() => {
            history.push("/quizz");
          }}
        />
        <ButtonGeneral
          title={"Go to Projects"}
          className={styles.buttonsFuture}
          onClick={() => {
            history.push("/projects");
          }}
        />
      </div>
    </>
  );

  const chooseTree = (type) => {
    setQuestion(type);
    console.log("haaaaaaa");
    setSelected("active");
    console.log("adioosss....");
  };

  useEffect(() => {
    console.log("ha cambiadooo...habrá que añadir otro evento... ", question);
  }, [question]);
  useEffect(() => {
    console.log("Clase aplicada en el botón:", select);
  }, [select]);

  return (
    <div className={styles.storySectionMainContainer}>
      <div className={styles.storySectionContainer}>
        <div className={styles.storyOptionsContainer}>
          <ButtonGeneral
            className={`${styles.navLiOptions}`}
            title="My past"
            onClick={() => {
              chooseTree("0");
            }}
          />
          <ButtonGeneral
            title={"My present"}
            className={styles.navLiOptions}
            onClick={() => {
              chooseTree("1");
            }}
          />

          <ButtonGeneral
            title={"My future"}
            className={styles.navLiOptions}
            onClick={() => {
              chooseTree("2");
            }}
          />
        </div>

        {question === "0" && (
          <StorySection
            text={smallTreeText}
            src={smallTree}
            alt={"small_plant"}
          />
        )}
        {question === "1" && (
          <StorySection
            text={middleTreeText}
            src={middleTree}
            alt={"baby_groot"}
          />
        )}
        {question === "2" && (
          <StorySection text={bigTreeText} src={bigTree} alt={"big_tree"} />
        )}
      </div>
    </div>
  );
};
export default QuestionsPage;
