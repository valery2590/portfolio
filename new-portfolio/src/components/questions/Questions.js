import { useHistory } from "react-router";
import "./Questions.css";

const Questions = ({ className, onClickA, onClickB, onClickC }) => {
  const history = useHistory();

const focus = ()=>{
    if(window.screen.width >= 421){
          window.scrollTo(0,100);
    }
}

 

  return (
    <div className={className}>
      <span
        className="question"
        onClick={() => {
          history.push("/myStory");
          focus();
        }}
      >My Story
      </span>

      <span
        className="question"
        onClick={() => {
            focus();
          history.push("/quiz");
        }}
      >Quiz
      </span>

      <span
        className="question"
        onClick={() => {
            focus();
          history.push("/projects");
        }}
      >Projects
      </span>
    </div>
  );
};

export default Questions;
