import React from "react";
import translated from "../components/translations";
import GitIcon from "../assets/git-icon.svg";
import WhatsappIcon from "../assets/whatsapp-symbol.svg";
import LinkdinIcon from "../assets/linkedin-icon-2.svg";
import cvIcon from "../assets/cv.svg";
import phoneIcon from "../assets/phone-icon.svg";
import emailIcon from "../assets/email.svg";

const smallTreeText = (
  <>
    <b>{translated("Hello! Welcome to my story.")}</b>{" "}
    {translated(
      "Here comes a sum up of my life. Born in Perú 🇵🇪 on 1990, raised in Barcelona 🇪🇸 and I have been living in several places: 🇬🇧, 🇮🇪, 🇫🇮, 🇱🇰, 🇪🇸, 🇮🇹."
    )}
    <br />
    <br />
    {translated(
      "I studied Tourism in university, so I know how to handle clients and also I am able to speak in English 👌🏽, Italian 🤌🏽, Spanish ✌🏽 and Catalan 👍🏽"
    )}
    <br />
    <br />
    {translated(
      "I found the programming world at some job because I created some tools. After that, I fell in love instantly...❤️ So I ended up doing a full-stack developer course and finally found a tech job and some projects. 🧑🏽‍💻"
    )}
  </>
);

const middleTreeText = (
  <>
    {translated(
      "After a few years, I am currently a Solutions Developer. I was lucky to find a job in which I learned a lot. Also, I have created some tools and helped different departments."
    )}
    <br />
    <br />
    {translated(
      "However, nowadays, I can create integrations to connect applications. Furthermore, I am dealing with client's requests."
    )}
    <br />
    <br />
    {translated(
      "As a good student, I am all the time studying and improving my code. Just to face new challenges with a good preparation."
    )}
  </>
);

const bigTreeText = (
  <>
    {translated(
      "My future is becoming quite interesting, I am gathering different projects, not only personals. So in case you would like to hire, I'll be more than happy to assist you."
    )}
    <br />
    <br />
  </>
);

const iconsData = [
  {
    src: GitIcon,
    alt: "git_Icon",
    href: "https://github.com/valery2590",
  },
  {
    src: cvIcon,
    alt: "cv_Icon",
    href:
      "https://drive.google.com/uc?export=download&id=1tp7Pnm5JjW5R6tKKLUC5BaASqDxwzrOE",
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

export {
  bigTreeText,
  smallTreeText,
  middleTreeText,
  languageList,
  navList,
  iconsData,
};
