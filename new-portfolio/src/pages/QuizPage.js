import React, { useState } from 'react';
import Questions from '../components/questions/Questions';
import { useHistory } from "react-router";
import "./QuizPage.css"
import Trivia from '../components/trivia/Trivial.js';

const QuizPage = ({ textButton }) => {

    const history = useHistory();
    const [show, setShow] = useState(false);
    const [button, setButton] = useState(false);

    const test = () => {
        setButton(true);
        setShow(true);
    }

    return (
        <div className="whyPage__container">
            <Questions className="questions_container_sidebar"
                onClickA={() => history.push("/myhistory")}
                onClickB={() => history.push("/myhistory")}
                onClickC={() => history.push("/myhistory")} />

            <div className="whyPage_section">

                {show === false && (
                    <>
                        <div className='title_WhyPage'>
                            <p>Best way to know WHY you need to hire me</p>
                        </div>
                        <div className='subtitle_WhyPage'>
                            <p>Let's see if you have paid attention to my history</p>
                        </div>
                        <div className='button_container_WhyPage'>
                            <button onClick={() => { setShow(true); test() }} className='quizButton_section' > Let's play</button>
                        </div>
                    </>
                )}


                {show === true && (
                    <div className='trivia_container_whyPage'>
                        <Trivia />
                        <button onClick={() => setShow(false)} className='quizButton_section' value={button}>Leave for now</button>
                        {/* <div className='trivia-button-close'>
                        </div> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizPage;