import React from 'react';
import Questions from '../components/questions/Questions';
import { useHistory } from "react-router";
import "./WhyPage.css"
import Trivia from '../components/trivia/Trivial.js';

const WhyPage = () => {

    const history = useHistory();
    return (
        <div className="whyPage__container">
           <Questions className="questions_container_sidebar" 
            onClickA={()=> history.push("/myhistory")}
            onClickB={()=> history.push("/myhistory")}
            onClickC={()=> history.push("/myhistory")}
            />
        
            <div className="whyPage_section">

            <Trivia />

            {/* <div>
                <p>Best way to know WHY you need to hire me</p>
            </div>
            <div>
            <p>image of party</p>
            <p>Let's see if you have paid attention to history</p>
            </div>


            <button> Let's play
            </button> */}
            </div>
        
        </div>
    );
};

export default WhyPage;