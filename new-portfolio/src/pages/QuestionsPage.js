import Questions from "../components/questions/Questions";
import "./QuestionsPage.css"
import babyGroot from "../assets/baby-groot.svg"



const QuestionsPage = ()=>{
    return(
        <>
          
        <div className="questionsPage__container">
            
          
                <Questions className="questions_container_sidebar"/>
      
            <div className="myHistory__container">
                
                <div className="history_section">
                    <div className="pastHistory_section"> 
                        <p className="pastHistory_section_first">Who was I?</p>
                        <p className="pastHistory_section_first">Born in Perú, had the chance to come to Spain when I was 10 years old.
                        After 4 years in University, I got my Tourism Degree in Barcelona,this fact helped to work in several different companies 
                        until I achieved Senior Manager Customer Care position. 
                            </p>
                    </div>
                    <div className="pastHistory_section_item">photo</div>
                    <img src={babyGroot} alt="baby_groot" className="question_picture"/>
                </div>

                <div className="history_section">
                    <div className="presentHistory_section_question">
                        <p className="presentHistory_section_first">Who am I?</p>
                        <p className="presentHistory_section_first">Working as a Manager had the privilige to learn more about coding 
                        since I was trying to make more efficient
                        my duties and my colleagues' duties.
                        I have created tools to improve my daily work.
                        So, last year I decided to push this love for code, I entered in a 5 months Full Stack Bootcamp, 
                        since I wanted to be a programmer.</p>
                    </div>
                    <div className="presentHistory_section_item">photo</div>
                    <img src={babyGroot} alt="baby_groot" className="question_picture"/>
                </div>

                <div className="history_section">
                    <div className="futureHistory_section_question">
                        <p className="futureHistory_section_first">Who will I become?</p>
                        <p className="futureHistory_section_first">Someone who had the courage to change their carreer,
                        someone who had the guts to start over. Someone who will study more about codes.</p>
                    </div>
                    <div className="futureHistory_section_item">photo</div>
                    <img src={babyGroot} alt="baby_groot" className="question_picture"/>
                </div>

            </div>
            
        </div>
        </>
    )
}
export default QuestionsPage;