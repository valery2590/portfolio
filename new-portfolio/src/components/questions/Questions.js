import { useHistory } from "react-router";
import styles from "../../styles/generalStyles.module.scss";

const Questions = () => {
  const history = useHistory();

  const focus = () => {
    if (window.screen.width >= 421) {
      window.scrollTo(0, 100);
    }
  };

  return (
    <ul className={styles.navContainer}>
      <li
        className={styles.navLiOptions}
        onClick={() => {
          history.push("/my-story");
          focus();
        }}
      >
        My Story
      </li>
      <li
        className={styles.navLiOptions}
        onClick={() => {
          focus();
          history.push("/quizz");
        }}
      >
        Quizz
      </li>
      <li
        className={styles.navLiOptions}
        onClick={() => {
          focus();
          history.push("/projects");
        }}
      >
        Projects
      </li>
    </ul>
  );
};

export default Questions;
