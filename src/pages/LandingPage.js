import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import ButtonGeneral from "../components/ButtonGeneral";
import MailForm from "../components/mailForm/MailForm";
import styles from "../styles/generalStyles.module.scss";
import translated from "../components/translations";

const Landing = () => {
  const history = useHistory();
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (answered) {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    }
  }, [answered]);

  const landingText = (
    <>
      {translated(
        "Hey! My name is Valery, I am a Software developer. I've been doing this for a couple of years."
      )}
      <br />
      <br />
      {translated(
        "Happy to learn new things, eager to discover new features. Furthermore, I enjoy my time because I love what I do."
      )}
      <br />
      <br />
      {translated(
        "I am really good with integrations among different applications."
      )}
      <br />
      <br />
    </>
  );

  const hiddenText = (
    <>
      <br />
      {translated("Why don't you send a message first?")}
      <br />
      <br />
      {translated("I'll be more than happy to have a meeting with you.")}
      <br />
      {translated("At any case...")}
      <br />
    </>
  );

  return (
    <div className={styles.landingContainer}>
      <img
        src="https://ucarecdn.com/d08c48c3-476a-4df5-aacd-8a59624062cc/"
        className={styles.profilePicture}
        alt="profile_Picture"
        loading="lazy"
        onClick={() => {
          history.push("/");
        }}
      />
      <div className={styles.landingTitleContainer}>
        <div>{landingText}</div>

        <div className={styles.landingPagebuttons}>
          <ButtonGeneral
            title={`${translated("Read more")} 📚`}
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
              <div className={styles.landingHiddenText}>{hiddenText}</div>
              <ButtonGeneral
                title={translated("My story")}
                className={styles.landingPageButton}
                onClick={() => {
                  localStorage.setItem("currentTab", "my-story");
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
