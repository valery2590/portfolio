import { React, useState, useEffect } from "react";
import GitIcon from "../../assets/git-icon.svg";
import WhatsappIcon from "../../assets/whatsapp-symbol.svg";
import LinkdinIcon from "../../assets/linkedin-icon-2.svg";
import { useHistory } from "react-router-dom";
import cvIcon from "../../assets/cv.svg";
import styles from "../../styles/generalStyles.module.scss";
import ButtonGeneral from "../ButtonGeneral";
import phoneIcon from "../../assets/phone-icon.svg";
import emailIcon from "../../assets/email.svg";
import translated from "../translations";

const Header = () => {
  const [currentTab, setCurrentTab] = useState(
    localStorage.getItem("currentTab") || ""
  );

  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem("currentLang") || "en"
  );
  const [showMenu, setShowMenu] = useState(true);
  const [showMobile, setShowMobile] = useState(window.innerWidth);

  const history = useHistory();
  const focus = () => {
    if (window.screen.width >= 421) {
      window.scrollTo(0, 150);
    }
  };

  const changeTab = (path) => {
    focus();
    setCurrentTab(path);
    localStorage.setItem("currentTab", path);
    history.push(path);
  };

  useEffect(() => {
    const savedTab = localStorage.getItem("currentTab");
    if (savedTab) {
      setCurrentTab(savedTab);
      history.push(savedTab);
    }
  }, [history]);

  const changeLang = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem("currentLang", lang);
    window.location.reload();
  };

  useEffect(() => {
    console.log(currentLang, "current...");
  }, [currentLang]);

  useEffect(() => {
    if (currentTab) {
      localStorage.setItem("currentTab", currentTab);
    }
    console.log(currentTab, "current tab");
  }, [currentTab]);

  const showMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowMobile(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [showMobile]);

  const iconsData = [
    {
      src: GitIcon,
      alt: "git_Icon",
      href:
        "https://drive.google.com/uc?export=download&id=1pIMFghw77B2UhCLjzBg9SkHB3i-jAxpS",
    },
    {
      src: cvIcon,
      alt: "cv_Icon",
      href:
        "https://drive.google.com/uc?export=download&id=1pIMFghw77B2UhCLjzBg9SkHB3i-jAxpS",
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
      title: translated("Home"),
      tab: "",
    },
    {
      title: translated("My story"),
      tab: "my-story",
    },
    {
      title: "Quizz",
      tab: "quizz",
    },
    {
      title: translated("Projects"),
      tab: "projects",
    },
  ];

  const languageList = [
    {
      lang: "EN",
      id: "en",
      emoji: "🇬🇧",
    },
    {
      lang: "ES",
      id: "es",
      emoji: "🇪🇸",
    },
    {
      lang: "IT",
      id: "it",
      emoji: "🇮🇹",
    },
  ];

  return (
    <div className={styles.headerContainer}>
      {showMobile < 768 ? (
        <>
          <div className={styles.headerMobileContainer}>
            <div
              className={styles.headerTitleName}
              onClick={() => {
                changeTab("");
              }}
            >
              <p>Valery Figueroa Huamán</p>
            </div>
            <div className={styles.headerMobileIcon}>
              {showMenu && (
                <i className="fas fa-bars" onClick={showMobileMenu}></i>
              )}
              {!showMenu && (
                <i className="fas fa-times" onClick={showMobileMenu}></i>
              )}
            </div>
          </div>

          <div className={styles.headerSection}>
            {!showMenu && (
              <>
                <ul className={styles.navContainer}>
                  {navList.map((item, key) => (
                    <li
                      key={key}
                      className={`${styles.navLiItems} ${
                        item.tab === currentTab ? styles.active : ""
                      }`}
                      onClick={() => {
                        changeTab(`${item.tab}`);
                        showMobileMenu();
                      }}
                    >
                      <ButtonGeneral
                        className={styles.navLiOptions}
                        title={item.title}
                      />
                    </li>
                  ))}
                </ul>
                <ul className={styles.navIconsContainer}>
                  {iconsData.map((item, key) => (
                    <li className={styles.navLiIcons} key={key}>
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
                <ul className={styles.navLangContainer}>
                  {languageList.map((item, key) => (
                    <li key={key} className={styles.navLiItemsLang}>
                      <ButtonGeneral
                        title={item.emoji}
                        className={`${styles.navLiOptions} ${
                          item.id === currentLang ? styles.active : ""
                        }`}
                        onClick={() => {
                          changeLang(item.id);
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className={styles.headerSection}>
            <ul className={styles.navContainer}>
              {navList.map((item) => (
                <li className={styles.navLiItems}>
                  <ButtonGeneral
                    className={`${styles.navLiOptions} ${
                      item.tab === currentTab ? styles.active : ""
                    }`}
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
          <div className={styles.stickySocialMedia}>
            <ul className={styles.navLangContainer}>
              {languageList.map((item, key) => (
                <li key={key} className={styles.navLiItems}>
                  <ButtonGeneral
                    title={item.emoji}
                    className={`${styles.navLiOptions} ${
                      item.id === currentLang ? styles.active : ""
                    }`}
                    onClick={() => {
                      changeLang(item.id);
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
