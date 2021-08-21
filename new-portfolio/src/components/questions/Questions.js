import { useState } from "react";
import { useHistory } from "react-router";
import "./Questions.css"

const Questions = ()=>{
    const history = useHistory();
    const [click, setClick] = useState(false);
    
    return(
        <div className="questions__section__container">
            <div className="question_container">
                
                <p className={click ? "question_clicked": "question"}  onClick={()=> {history.push("/myhistory");setClick(!click)}}>Who I was</p>
                <p className={click ? "question_clicked": "question"} onClick={()=> {history.push("/myhistory");setClick(!click)}}>Who I am</p>
                <p className="question"  onClick={()=> history.push("/myhistory")}>Who I will be</p>
                <p className="question"  onClick={()=> history.push("/")}>Why</p>
            </div>
        </div>
    )
}

export default Questions; 