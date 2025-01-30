import ProjectsButton from "../components/projects/ProjectsButton";
import Questions from "../components/questions/Questions";
import { useHistory } from "react-router";
import "./LandingPage.css";
import ModalSkills from "../components/skills/ModalSkills";
import PhotoProfile from "../assets/profile-picture2.jpeg";
import { useState } from "react";
import ButtonGeneral from "../components/ButtonGeneral";

const Landing = () => {
  const history = useHistory();

  const questions = {
    yes: "Good",
    no: "no good",
  };

  const [answered, setAnswered] = useState(false);

  const focus = () => {
    if (window.screen.width >= 320) {
      window.scrollTo(0, 0);
    }
  };
  const focusRead = () => {
    window.scrollTo(1000, 1000);
  };

  return (
    <div className="landingPage__container">
      <div className="profile_section">
        {/* <img 
                src="https://ucarecdn.com/d08c48c3-476a-4df5-aacd-8a59624062cc/" 
                className="profilePicture"  
                alt="profile_Picture" 
                onClick={()=> {
                    focus();
                    history.push("/")}}/> */}
        <div className="name-title-container">
          {/* <p className="surname_title">Figueroa</p>
                        <p className="secondLastName_title">Huamán</p> */}
          <p className="name_title">
            Hey! My name is Valery, I am a Software developer. I've been doing
            this for a couple of years.
          </p>
          <p className="name_title">
            Happy to learn new things, eager to discover new features and enjoy
            my time because I love what I do.
          </p>
          <div className="landing-page-btn-container">
            <ButtonGeneral
              title={"Read more!"}
              onClick={() => {
                setAnswered(true);
                focusRead();
              }}
            />
            <ButtonGeneral title={"Dowload CV"} />
            {/* <button className="button-download-cv">
              {" "}
              <a
                href="https://drive.google.com/uc?export=download&id=1pIMFghw77B2UhCLjzBg9SkHB3i-jAxpS"
                download="cv.valery"
              >
                Dowload CV
              </a>
            </button> */}
          </div>
          {answered && (
            <>
              <div>
                <p>Are you sure you want to read it?</p>
                <p>I think is much easier if you download my cv</p>
                <p>Or, you can just hire me 🤣🤣 </p>
                <ButtonGeneral
                  title={"ok, click here"}
                  onClick={() => {
                    history.push("/myStory");
                    focus();
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Landing;
