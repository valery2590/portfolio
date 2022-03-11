import { useState } from "react";
import { useHistory } from "react-router";
import "./Questions.css"

const Questions = ({className, onClickA, onClickB, onClickC})=>{
    const history = useHistory();
    const [click, setClick] = useState(false);

    
    return(
                <div className={className}>
                <div className="question"
                    onClick={()=> history.push("/myStory")}>
                    <p>My Story</p></div>
                    
              

                <div className="question"
                onClick={()=> history.push("/quiz")}>
                    <p>Quiz</p>
                    </div>

                    <div className="question"
                onClick={()=> history.push("/projects")}>
                    <p>Projects</p></div>
                </div>
    )
}

export default Questions; 