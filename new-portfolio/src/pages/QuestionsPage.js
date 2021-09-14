import Questions from "../components/questions/Questions";
import "./QuestionsPage.css"
import miniYo from "../assets/mini_yo.jpeg"
import smallTree from "../assets/small-tree.jpeg"
import middleTree from "../assets/middle-tree.jpeg"
import bigTree from "../assets/big-tree.jpeg"


const QuestionsPage = ()=>{
    return(

        <div className="questionsPage__container">
            <Questions className="questions_container_sidebar"/>
            <div className="myHistory__container">
                
                <div className="history_section">
                    <div className="pastHistory_section"> 
                        <p className="question_title_history">Who was I?</p>
                        <p className="question_text_history">Born in Perú, had the chance to come to Spain when I was 10 years old.
                        After 4 years in University, I got my Tourism Degree in Barcelona,this fact helped to work in several different companies 
                        until I achieved Senior Customer Care Manager position.</p>
                    </div>
                    <div className="picture_history_section">
                        <img src={miniYo} alt="mini_Yo" className="question_picture"/>
                        <img src={smallTree} alt="small_plant" className="question_picture_two"/>
                    </div>
                    
                </div>

                <div className="history_section">
                    <div className="presentHistory_section">
                        <p className="question_title_history">Who am I?</p>
                        <p className="question_text_history">Working as a Manager had the privilige to learn more about coding 
                        since I was trying to make more efficient
                        my duties and my colleagues' duties.
                        I have created tools to improve my daily work.
                        So, last year I decided to push this love for code, I entered in a 5 months Full Stack Bootcamp, 
                        since I wanted to be a programmer. Here I am now.</p>
                    </div>
                    <div className="picture_history_section">
                    <img src={middleTree} alt="baby_groot" className="question_picture"/>
                    <img src={middleTree} alt="baby_groot" className="question_picture"/>
                    </div>
                </div>

                <div className="history_section">
                    <div className="futureHistory_section_question">
                        <p className="question_title_history">Who will I become?</p>
                        <p className="question_text_history">Someone who had the courage to change their carreer,
                        someone who had the guts to start over. Someone who will study more about codes. I know my right time will come.</p>
                    </div>
                  
                    <div className="picture_history_section">
                    <img src={middleTree} alt="baby_groot" className="question_picture"/>
                    <img src={bigTree} alt="baby_groot" className="question_picture"/>
                    </div>
                </div>

            </div>
            
        </div>
      
    )
}
export default QuestionsPage;