import { useHistory } from "react-router";
//import "./Questions.css";
import styles from "../../styles/generalStyles.module.scss";

const Questions = ({ className, onClickA, onClickB, onClickC }) => {
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
          history.push("/myStory");
          focus();
        }}
      >
        My Story
      </li>
      <li
        className={styles.navLiOptions}
        onClick={() => {
          focus();
          history.push("/quiz");
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
