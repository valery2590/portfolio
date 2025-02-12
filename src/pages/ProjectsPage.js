import React from "react";
import GitIcon from "../assets/git-icon.svg";
import Web from "../assets/web.svg";
import EachProject from "../components/projects/EachProject";
import styles from "../styles/generalStyles.module.scss";

const ProjectsPage = () => {
  return (
    <div className={styles.projectsPageContainer}>
      <EachProject
        name="Knou"
        img={GitIcon}
        img2={Web}
        link="https://github.com/valery2590/knou-react"
        link2="https://hardcore-hawking-033be2.netlify.app/"
      />
      <EachProject
        name="Image Seeker"
        link="https://github.com/valery2590/images_seeker"
        img={GitIcon}
        link2="https://valery2590.github.io/images_seeker/"
        img2={Web}
      />
      <EachProject
        name="Email Signature"
        link="https://github.com/valery2590/email"
        img={GitIcon}
        link2="https://email-signature-v.herokuapp.com/"
        img2={Web}
      />
      <EachProject
        name="Crypto Coin Search"
        link="https://github.com/valery2590/cryptoCoin"
        img={GitIcon}
        link2="https://valery2590.github.io/cryptoCoin/"
        img2={Web}
      />
      <EachProject
        name="Product App"
        link="https://github.com/valery2590/productApp"
        img={GitIcon}
        link2="https://valery2590.github.io/productApp/"
        img2={Web}
      />
    </div>
  );
};

export default ProjectsPage;
