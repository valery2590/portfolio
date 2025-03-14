import translated from "../components/translations";
import GitIcon from "../assets/git-icon.svg";
import WhatsappIcon from "../assets/whatsapp-symbol.svg";
import LinkdinIcon from "../assets/linkedin-icon-2.svg";
import cvIcon from "../assets/cv.svg";
import phoneIcon from "../assets/phone-icon.svg";
import emailIcon from "../assets/email.svg";

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

export { languageList, navList, iconsData };
