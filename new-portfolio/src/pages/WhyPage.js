import React from 'react';
import Questions from '../components/questions/Questions';
import "./WhyPage.css"

const WhyPage = () => {
    return (
        <div className="whyPage__container">
            <Questions className="questions_container_sidebar"/>
            <p>why you need hire me? good question</p>

            <p>click on the next button to show you why!</p>
        </div>
    );
};

export default WhyPage;