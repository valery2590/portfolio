import { useState } from "react";
import { useHistory } from "react-router";
import "./Questions.css"

const Questions2 = ({className})=>{
    const history = useHistory();
    const [clicked, setClicked] = useState(
{
    A:false,
    B: false,
    C: false
}


    );

    return(
                <div className={className}>
                
               
                
                <div >
                    <p>hello</p></div>

                    <div >
                    <p>bye</p></div>

                    <div >
                    <p>hello again</p></div>
            </div>
    )
}

export default Questions2; 