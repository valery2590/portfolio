import React from 'react';
import Header from '../components/header/Header';
import Questions from '../components/questions/Questions';
import ModalSkills from '../components/skills/ModalSkills';

const WhyPage = () => {
    return (
        <div>
            <Header/>
            <Questions className="questions_section_sidebar"/>
            <ModalSkills  style="skills_header"/>
            <p>why you need hire me? good question</p>

            <p>click on the next button to show you why!</p>
        </div>
    );
};

export default WhyPage;