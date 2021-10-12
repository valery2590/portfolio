import { useState } from "react";
import { useHistory } from "react-router";
import "./Questions.css"

const Questions = ({className, onClickA, onClickB, onClickC})=>{
    const history = useHistory();
    const [click, setClick] = useState();

    
    return(
                <div className={className}>
                    {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}

                <div className={click ? "question_clicked": "question"}
                onClick={onClickA}>
                    <p>Who was I?</p></div>
                    
                <div className={click ? "question_clicked": "question"} 
                onClick={onClickB}>
                    <p>Who am I?</p>
                </div>

                <div className={click ? "question_clicked": "question"}
                onClick={onClickC}>
                    <p>Who will I become?</p>
                </div>

                <div className={click ? "question_clicked": "question"}
                onClick={()=> history.push("/whyPage")}>
                    <p>Why?</p>
                    </div>

                    <div className="question"
                onClick={()=> history.push("/projects")}>
                    <p>Projects?</p></div>
            </div>
    )
}

export default Questions; 