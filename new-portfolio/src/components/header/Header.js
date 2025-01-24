import { React, useState } from "react";
//import "./Header.css";
import GitIcon from "../../assets/git-icon.svg";
import WhatsappIcon from "../../assets/whatsapp-symbol.svg";
import LinkdinIcon from "../../assets/linkedin-icon-2.svg";
import { useHistory } from "react-router-dom";
import Questions from "../questions/Questions";
import cvIcon from "../../assets/cv.svg";
import styles from "../../styles/generalStyles.module.scss";

const Header = () => {
  const history = useHistory();
  const [navBar, setNavaBar] = useState(false);
  const whatsappUrl = "https://wa.me/34680535856";

  return (
    <div className="header__container">
      <div className={styles.headerIconSection}>
        <ul className={styles.navContainer}>
          <li className={styles.navLiIcons}>
            {" "}
            <a
              href="https://github.com/valery2590"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitIcon} className={styles.navIconImg} alt="git_Icon" />
            </a>
          </li>
          <li className={styles.navLiIcons}>
            {" "}
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <img
                src={WhatsappIcon}
                className={styles.navIconImg}
                alt="whatsapp_Icon"
              />
            </a>
          </li>
          <li className={styles.navLiIcons}>
            {" "}
            <a
              href="https://drive.google.com/uc?export=download&id=1pIMFghw77B2UhCLjzBg9SkHB3i-jAxpS"
              download="cv.valery"
            >
              <img src={cvIcon} className={styles.navIconImg} alt="cv_Icon" />
            </a>
          </li>
          <li className={styles.navLiIcons}>
            <a
              href="https://www.linkedin.com/in/valery-figueroa-huaman-01517982/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LinkdinIcon}
                className={styles.navIconImg}
                alt="linkdin_Icon"
              />
            </a>
          </li>
        </ul>
      </div>

      <div
        className="name-title-header"
        onClick={() => {
          history.push("/");
        }}
      >
        <p className="name-title-text"> Valery Figueroa Huamán</p>
      </div>

      <div className="iconSection">
        <Questions className="question-navbar-icon-container" />

        {/* navBar - phone version */}
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
    </div>
  );
};

export default Header;
