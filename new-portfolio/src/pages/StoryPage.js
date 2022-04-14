import Questions from "../components/questions/Questions";
import "./StoryPage.css"
import smallTree1 from "../assets/small-tree.jpeg"
import middleTree2 from "../assets/middle-tree.jpeg"
import bigTree3 from "../assets/big-tree.jpeg"
import { useState } from "react";
import cvIcon from "../assets/cv.png"





const QuestionsPage = ()=>{

        const smallTree = smallTree1;
        const middleTree = middleTree2;
        const bigTree = bigTree3;

        const [question, setQuestion] = useState(smallTree, middleTree, bigTree)

    return(

        <div className="questionsPage__container">
            <Questions className="questions_container_sidebar"/>
            <div className="secction_story" >
                <div className="question_secction_button">
                <div className="question_I"
                    onClick={()=>{setQuestion(smallTree)}}>
                        <p>Who was I?</p></div>
                        
                    <div className="question_I"
                    onClick={()=>{setQuestion(middleTree)}}>
                        <p>Who am I?</p>
                    </div>

                    <div className="question_I"
                    onClick={()=>{setQuestion(bigTree)}}>
                        <p>Who will I become?</p>
                    </div>
                </div>

                <div className="myHistory__container">
                    {question ===  smallTree &&(
                        <div className="history_section">
                            <div>
                            <p className="question_title_history">Who was I?</p>
                            </div>
                            <div className="text_history_section"> 
                                
                                <p className="question_text_history">Perhaps, you are wondering why you are reading when you can hear it, well, this is just to sum up my history. </p>
                                <p className="question_text_history">I was born in Perú and raised in Barcelona. I think this is the reason why I decided to study Tourism for four 4 years at the University. 
                                    Furthermore, I realized that it was easy for me to learn other languages. The first one was Catalan in Barcelona. However, that time was not my coding time. It was too soon for me to realize.</p>
                                <p className="question_text_history">I had the chance to live for a while in several European cities, however, the one I loved the most was Derry (Northern Ireland), that place is astonishing.
                                                                    Definitely, I should retire there</p>
                            </div>
                            <div className="picture_history_section">
                                <img src={smallTree} alt="small_plant" className="question_picture"/>
                            </div>
                            </div>
                            )}
                    {question ===  middleTree &&(
                        <div className="history_section">
                                <div><p className="question_title_history">Who am I?</p></div>
                        <div className="text_history_section">
                            <p className="question_text_history">This question is much easier to respond to, I am someone who struggles the Customer Care position by implementing new tools to improve our daily work. </p>
                            <p className="question_text_history">I know, it does not look like is the task for the job position I have, however, I realized that I can do more. I am not saying that I am a superhero, I just want to do the best I can. </p>
                            <p className="question_text_history">So, besides all my duties, I decided to be a self-learner to get the necessary to create tools. But then, I realized that it was not enough, I needed to go further, I needed to go deeper. That was the moment I made a Full-Stack Bootcamp for 5 months. </p>
                            <p className="question_text_history">Do you really want to know who am I? someone who has the courage to adapt and the guts to start over.</p>
                        </div>
                        <div className="picture_history_section">
                        <img src={middleTree} alt="baby_groot" className="question_picture"/>
                        </div>
                        </div>)}
                    {question ===  bigTree &&(
                    <div className="history_section">
                        <div><p className="question_title_history">Who will I become?</p></div>
                        <div className="text_history_section">
                            <p className="question_text_history">This question is tricky, I mean, we cannot see the future, unless you are a fortune-teller, otherwise, we will never have an answer.</p>
                            <p className="question_text_history">However, we can say what we would like to accomplish after time.</p>
                            <p className="question_text_history">I want to learn more. I want to have more challenges.</p>
                            <p className="question_text_history">Ready to become a challenge to me?</p>
                            <p className="question_text_history"><span className="cv_title">Take a look at my personal CV</span> </p> 
                            <a href='https://drive.google.com/file/d/1pIMFghw77B2UhCLjzBg9SkHB3i-jAxpS/view?usp=sharing' target="_blank" rel="noreferrer"> <img src={cvIcon} alt="cv" className="cv_icon" /></a>
                        </div>
                        <div className="picture_history_section">  
                            <img src={bigTree} alt="big_tree" className="question_picture"/>            
                        </div>
                    </div>)}
                </div>


            </div>
            
        </div>
    )
}
export default QuestionsPage;
