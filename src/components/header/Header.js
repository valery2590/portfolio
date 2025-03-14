import { React, useState, useEffect } from "react";
import styles from "../../styles/generalStyles.module.scss";
import ButtonGeneral from "../ButtonGeneral";
import { useHistory } from "react-router-dom";
import { iconsData, languageList, navList } from "../../utils/values";


const Header = () => {
  const [currentTab, setCurrentTab] = useState(
    localStorage.getItem("currentTab")
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
    const interval = setInterval(() => {
      const savedTab = localStorage.getItem("currentTab");
      if (savedTab !== currentTab) {
        setCurrentTab(savedTab);
        history.push(savedTab);
      }
    }, 100); 

    return () => clearInterval(interval);
  }, [currentTab, history]);

  const changeLang = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem("currentLang", lang);
    window.location.reload();
  };

  useEffect(() => {
    if (currentTab) {
      localStorage.setItem("currentTab", currentTab);
    }
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
                          showMobileMenu();
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
              {navList.map((item, key) => (
                <li key={key} className={styles.navLiItems}>
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
              {iconsData.map((item, key) => (
                <li key={key} className={styles.navLiIcons}>
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
