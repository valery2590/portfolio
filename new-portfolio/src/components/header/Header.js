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
  const focus = () => {
    if (window.screen.width >= 421) {
      window.scrollTo(0, 150);
    }
  };

  const changeTab = (path) => {
    focus();
    history.push(`${path}`);
  };

  const iconsData = [
    {
      src: GitIcon,
      alt: "git_Icon",
      href: "https://drive.google.com/uc?export=download&id=1pIMFghw77B2UhCLjzBg9SkHB3i-jAxpS",
    },
    {
      src: cvIcon,
      alt: "cv_Icon",
      href: "https://drive.google.com/uc?export=download&id=1pIMFghw77B2UhCLjzBg9SkHB3i-jAxpS",
    },
    {
      src: LinkdinIcon,
      alt: "linkedin_icon",
      href: "https://www.linkedin.com/in/valery-figueroa-huaman-01517982/",
    },
    {
      src: phoneIcon,
      alt: "phone_icon",
      href: "tel:0034680535856",
    },
    {
      src: emailIcon,
      alt: "email_icon",
      href: "mailto:valeryfigueroah@gmail.com",
    },
    {
      src: WhatsappIcon,
      alt: "whatsapp_Icon",
      href: "https://wa.me/34680535856",
    },
  ];

  const navList = [
    {
      title: "Home",
      tab: "",
    },
    {
      title: "My story",
      tab: "my-story",
    },
    {
      title: "Quizz",
      tab: "quizz",
    },
    {
      title: "Projects",
      tab: "projects",
    },
  ];

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerSection}>
        <ul className={styles.navContainer}>
          {navList.map((item) => (
            <li className={styles.navLiItems}>
              <ButtonGeneral
                className={styles.navLiOptions}
                title={item.title}
                onClick={() => {
                  changeTab(`${item.tab}`);
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.headerSection}>
        <ul className={styles.navIconsContainer}>
          {iconsData.map((item) => (
            <li className={styles.navLiIcons}>
              <ButtonGeneral
                iconClassName={styles.navIconImg}
                icon={true}
                alt={item.alt}
                href={item.href}
                src={item.src}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
