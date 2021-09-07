import { useState } from "react";
import { useHistory } from "react-router";
import "./Questions.css"

const Questions = ({className})=>{
    const history = useHistory();
    const [click, setClick] = useState(false);
    
    return(
                <div className={className}>
                
                <div className={click ? "question_clicked": "question"}
                onClick={()=> {history.push("/myhistory");setClick(!click)}}>
                    <p>Who I was</p></div>
                    
                <div className={click ? "question_clicked": "question"} 
                onClick={()=> {history.push("/myhistory");setClick(!click)}}>
                    <p>Who I am</p>
                </div>

                <div className="question"  
                onClick={()=> history.push("/myhistory")}>
                    <p>Who I'll become</p>
                </div>

                <div className="question"  
                onClick={()=> history.push("/whyPage")}>
                    <p>Why</p>
                    </div>
            </div>
    )
}

export default Questions; 