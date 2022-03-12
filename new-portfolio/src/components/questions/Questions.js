import { useState } from "react";
import { useHistory } from "react-router";
import "./Questions.css";

const Questions = ({ className, onClickA, onClickB, onClickC }) => {
  const history = useHistory();
  const [click, setClick] = useState(false);

const focus = ()=>{
    if(window.screen.width >= 421){
          window.scrollTo(0,400);
    }
}

 

  return (
    <div className={className}>
      <div
        className="question"
        onClick={() => {
          history.push("/myStory");
          focus();
        }}
      >
        <p>My Story</p>
      </div>

      <div
        className="question"
        onClick={() => {
            focus();
          history.push("/quiz");
        }}
      >
        <p>Quiz</p>
      </div>

      <div
        className="question"
        onClick={() => {
            focus();
          history.push("/projects");
        }}
      >
        <p>Projects</p>
      </div>
    </div>
  );
};

export default Questions;
