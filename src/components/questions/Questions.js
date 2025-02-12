import { useHistory } from "react-router";
import styles from "../../styles/generalStyles.module.scss";

const Questions = () => {
  const history = useHistory();

  return (
    <ul className={styles.navContainer}>
      <li
        className={styles.navLiOptions}
        onClick={() => {
          history.push("/my-story");
        }}
      >
        My Story
      </li>
      <li
        className={styles.navLiOptions}
        onClick={() => {
          history.push("/quizz");
        }}
      >
        Quizz
      </li>
      <li
        className={styles.navLiOptions}
        onClick={() => {
          history.push("/projects");
        }}
      >
        Projects
      </li>
    </ul>
  );
};

export default Questions;
