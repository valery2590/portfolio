import React from "react";
import styles from "../../styles/generalStyles.module.scss";

const EachProject = ({ name, link, link2, img, img2 }) => {
  return (
    <div className={styles.projectCard}>
      <p>{name}</p>
      <div className={styles.projectCardIconsContainer}>
        <span>
          <a
            href={link}
            target="_blank"
            title="link"
            rel="noreferrer"
            className={styles.projectCardIconContainer}
          >
            <img src={img} className={styles.projectCardIcons} alt="link" />
          </a>
        </span>

        <span>
          <a
            href={link2}
            target="_blank"
            title="link2"
            rel="noreferrer"
            className={styles.projectCardIconContainer}
          >
            <img src={img2} className={styles.projectCardIcons} alt="link2" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default EachProject;
