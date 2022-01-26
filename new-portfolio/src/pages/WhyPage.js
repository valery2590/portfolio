import React , {useState} from 'react';
import Questions from '../components/questions/Questions';
import { useHistory } from "react-router";
import "./WhyPage.css"
import Trivia from '../components/trivia/Trivial.js';

const WhyPage = () => {

    const history = useHistory();
    const [show, setShow] = useState(false);
    return (
        <div className="whyPage__container">
           <Questions className="questions_container_sidebar" 
            onClickA={()=> history.push("/myhistory")}
            onClickB={()=> history.push("/myhistory")}
            onClickC={()=> history.push("/myhistory")}
            />
        
            <div className="whyPage_section">
            <div className='title_WhyPage'>
                <p>Best way to know WHY you need to hire me</p>
                </div>
                <div className='subtitle_WhyPage'>
                    <p>image of party</p>
                    <p>Let's see if you have paid attention to my history</p>
                    
            </div>
            <div className='button_container_WhyPage'><button onClick={()=>setShow(true)} className='button_WhyPage'> Let's play</button>
            <button onClick={()=>setShow(false)} className='button_WhyPage'> Leave it for another day!</button>
            
            </div>
            { show === true &&(<Trivia />)}
            </div>
        
        </div>
    );
};

export default WhyPage;