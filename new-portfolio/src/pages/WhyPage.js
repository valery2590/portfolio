import React from 'react';
import Questions from '../components/questions/Questions';
import { useHistory } from "react-router";
import "./WhyPage.css"

const WhyPage = () => {

    const history = useHistory();
    return (
        <div className="whyPage__container">
           <Questions className="questions_container_sidebar" 
            onClickA={()=> history.push("/myhistory")}
            onClickB={()=> history.push("/myhistory")}
            onClickC={()=> history.push("/myhistory")}
            />
            <p>why you need hire me? good question</p>

            <p>click on the next button to show you why!</p>
        </div>
    );
};

export default WhyPage;