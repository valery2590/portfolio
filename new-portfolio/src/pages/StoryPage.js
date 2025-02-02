import smallTree1 from "../assets/small-tree.jpeg";
import middleTree2 from "../assets/middle-tree.jpeg";
import bigTree3 from "../assets/big-tree.jpeg";
import { useEffect, useState, useCallback } from "react";
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

  const storyData = [
    {
      id: "0",
      title: "My past",
      text: smallTreeText,
      src: smallTree,
      alt: "small_plant",
    },
    {
      id: "1",
      title: "My present",
      text: middleTreeText,
      src: middleTree,
      alt: "baby_groot",
    },
    {
      id: "2",
      title: "My future",
      text: bigTreeText,
      src: bigTree,
      alt: "big_tree",
    },
  ];

  const chooseTree = useCallback((type) => {
    setQuestion(type);
  }, []);

  useEffect(() => {
    console.log("La pregunta ha cambiado:", question);
  }, [question]);

  return (
    <div className={styles.storySectionMainContainer}>
      <div className={styles.storySectionContainer}>
        <div className={styles.storyOptionsContainer}>
          {storyData.map(({ id, title }) => (
            <ButtonGeneral
              key={id}
              title={title}
              className={`${styles.navLiOptions} ${
                question === id ? styles.active : ""
              }`}
              onClick={() => chooseTree(id)}
            />
          ))}
        </div>

        {storyData.map(({ id, text, src, alt }) =>
          question === id ? (
            <StorySection key={id} text={text} src={src} alt={alt} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;
