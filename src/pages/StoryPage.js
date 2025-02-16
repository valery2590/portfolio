import smallTree1 from "../assets/small-tree.jpeg";
import middleTree2 from "../assets/middle-tree.jpeg";
import bigTree3 from "../assets/big-tree.jpeg";
import { useEffect, useState, useCallback } from "react";
import styles from "../styles/generalStyles.module.scss";
import ButtonGeneral from "../components/ButtonGeneral";
import StorySection from "../components/StorySection";
import translated from "../components/translations";
import { BigTreeText, middleTreeText, smallTreeText } from "../utils/utils";

const QuestionsPage = () => {
  const smallTree = smallTree1;
  const middleTree = middleTree2;
  const bigTree = bigTree3;

  const [question, setQuestion] = useState("0");

  const storyData = [
    {
      id: "0",
      title: translated("My past"),
      text: smallTreeText,
      src: smallTree,
      alt: "small_plant",
    },
    {
      id: "1",
      title: translated("My present"),
      text: middleTreeText,
      src: middleTree,
      alt: "baby_groot",
    },
    {
      id: "2",
      title: translated("My future"),
      text: <BigTreeText/>,
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
