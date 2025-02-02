import ProjectsButton from "../components/projects/ProjectsButton";
import Questions from "../components/questions/Questions";
import { useHistory } from "react-router";
//import "./LandingPage.css";
import ModalSkills from "../components/skills/ModalSkills";
import PhotoProfile from "../assets/profile-picture2.jpeg";
import { useState } from "react";
import ButtonGeneral from "../components/ButtonGeneral";
import MailForm from "../components/mailForm/MailForm";
import styles from "../styles/generalStyles.module.scss";

const Landing = () => {
  const history = useHistory();
  const [answered, setAnswered] = useState(false);

  const landingText = (
    <>
      Hey! My name is Valery, I am a Software developer. I've been doing this
      for a couple of years. <br />
      <br />
      Happy to learn new things, eager to discover new features. Furthermore, I
      enjoy my time because I love what I do.
      <br />
      <br /> I am really good with integrations among different applications <br />{" "}
      <br />
    </>
  );

  const hiddenText = (
    <>
      <br />
      Why don't you send a message first?
      <br />
      <br />
      I'll be more than happy to have a meeting with you. <br/>At any case...
      <br />
    </>
  );

  return (
    <div className={styles.landingContainer}>
      <img
        src="https://ucarecdn.com/d08c48c3-476a-4df5-aacd-8a59624062cc/"
        className={styles.profilePicture}
        alt="profile_Picture"
        onClick={() => {
          history.push("/");
        }}
      />
      <div className={styles.landingTitleContainer}>
        <div>{landingText}</div>

        <div className={styles.landingPagebuttons}>
          <ButtonGeneral
            title={"Read more!"}
            className={styles.landingPageButton}
            onClick={() => {
              setAnswered(true);
            }}
          />

          <MailForm />
        </div>
        {answered && (
          <>
            <div className={styles.landingHiddenTextContainer}>
              <div>{hiddenText}</div>
              <ButtonGeneral
                title={"here is my story"}
                className={styles.landingPageButton}
                onClick={() => {
                  history.push("/my-story");
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Landing;
