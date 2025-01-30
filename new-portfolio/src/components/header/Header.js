import { React, useState } from "react";
//import "./Header.css";
import GitIcon from "../../assets/git-icon.svg";
import WhatsappIcon from "../../assets/whatsapp-symbol.svg";
import LinkdinIcon from "../../assets/linkedin-icon-2.svg";
import { useHistory } from "react-router-dom";
import Questions from "../questions/Questions";
import cvIcon from "../../assets/cv.svg";
import styles from "../../styles/generalStyles.module.scss";
import ButtonGeneral from "../ButtonGeneral";
import phoneIcon from "../../assets/phone-icon.svg";
import emailIcon from "../../assets/email.svg";

const Header = () => {
  const history = useHistory();
  const [navBar, setNavaBar] = useState(false);
  const whatsappUrl = "https://wa.me/34680535856";
  const focus = () => {
    if (window.screen.width >= 421) {
      window.scrollTo(0, 150);
    }
  };

  const changeTab = (path) => {
    focus();
    history.push(`${path}`);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerSection}>
        <ul className={styles.navIconsContainer}>
          <li className={styles.navLiIcons}>
            <ButtonGeneral
              iconClassName={styles.navIconImg}
              icon={true}
              alt={"git_Icon"}
              href={"https://github.com/valery2590"}
              src={GitIcon}
            />
          </li>

          <li className={styles.navLiIcons}>
            <ButtonGeneral
              iconClassName={styles.navIconImg}
              icon={true}
              download={"cv.valery"}
              alt={"cv_Icon"}
              href="https://drive.google.com/uc?export=download&id=1pIMFghw77B2UhCLjzBg9SkHB3i-jAxpS"
              src={cvIcon}
            />
          </li>

          <li className={styles.navLiIcons}>
            <ButtonGeneral
              iconClassName={styles.navIconImg}
              icon={true}
              src={LinkdinIcon}
              alt={"linkedin_icon"}
              href={
                "https://www.linkedin.com/in/valery-figueroa-huaman-01517982/"
              }
            />
          </li>

          <li className={styles.navLiIcons}>
            <ButtonGeneral
              iconClassName={styles.navIconImg}
              icon={true}
              src={phoneIcon}
              alt={"phone_icon"}
              href={"tel:0034680535856"}
            />
          </li>

          <li className={styles.navLiIcons}>
            <ButtonGeneral
              iconClassName={styles.navIconImg}
              icon={true}
              src={emailIcon}
              alt={"email_icon"}
              href={"mailto:valeryfigueroah@gmail.com"}
            />
          </li>

          <li className={styles.navLiIcons}>
            <ButtonGeneral
              iconClassName={styles.navIconImg}
              icon={true}
              alt={"whatsapp_Icon"}
              href={whatsappUrl}
              src={WhatsappIcon}
            />
          </li>
        </ul>
      </div>

      {/*
      We need to check what we can add here. 

       <div className={styles.headerSection}>
        <p
          className={styles.headerTitleText}
          onClick={() => {
            history.push("/");
          }}
        >
          {" "}
          Valery FH
        </p>
      </div> */}

      <div className={styles.headerSection}>
        <ul className={styles.navContainer}>
          <li>
            <ButtonGeneral
              className={styles.navLiOptions}
              title="My Story"
              onClick={() => {
                changeTab("myStory");
              }}
            />
          </li>
          <li>
            <ButtonGeneral
              className={styles.navLiOptions}
              title="Quizz"
              onClick={() => {
                changeTab("quizz");
              }}
            />
          </li>
          <li>
            <ButtonGeneral
              className={styles.navLiOptions}
              title="Projects"
              onClick={() => {
                changeTab("projects");
              }}
            />
          </li>
        </ul>
      </div>
      {/* <Questions className="question-navbar-icon-container" /> */}

      {/* navBar - phone version */}
      {/* NEEED TO CHECK THE PHONE VERSION
         <div className={styles.headerSection}>
        <div onClick={() => setNavaBar(!navBar)} className="navBarIcon2">
          {navBar ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
          {navBar === true && (
            <>
              <div className="navBar-mobile-container">
                <Questions className="navBarIcon" />
                <div className="icon_container_mobile-version">
                  <a
                    href="https://github.com/valery2590"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GitIcon} className="iconHeader" alt="git_Icon" />
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    <img
                      src={WhatsappIcon}
                      className="iconHeader"
                      alt="whatsapp_Icon"
                    />
                  </a>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1pIMFghw77B2UhCLjzBg9SkHB3i-jAxpS"
                    download="cv.valery"
                  >
                    <img src={cvIcon} className="iconHeader" alt="cv_Icon" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/valery-figueroa-huaman-01517982/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={LinkdinIcon}
                      className="iconHeader"
                      alt="linkdin_Icon"
                    />
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
        
              </div>
         */}
    </div>
  );
};

export default Header;
