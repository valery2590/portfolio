import ProjectsButton from "../components/projects/ProjectsButton";
import Questions from "../components/questions/Questions";
import { useHistory } from "react-router";
import "./LandingPage.css";
import ModalSkills from "../components/skills/ModalSkills";
import PhotoProfile from "../assets/profile-picture2.jpeg";
import { useState } from "react";
import ButtonGeneral from "../components/ButtonGeneral";
import MailForm from "../components/mailForm/MailForm";

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

  const textEmailName = (
    <a className="phone_text">
      <span>Send a message</span>
      <svg
        className="email-icon-footer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
      </svg>
    </a>
  );

  

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
            
            <MailForm name={textEmailName} />
          </div>
          {answered && (
            <>
              <div>
                <p>Why don't you send a message first?</p>
                <p>I'll be more than happy to have a meeting with you.</p>
                <ButtonGeneral
                  title={"or, read my story"}
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
