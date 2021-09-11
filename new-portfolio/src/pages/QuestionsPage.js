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
                        <p className="pastHistory_section_first">Who I was</p>
                        <p className="pastHistory_section_first">Born in Perú, had the chance to come to Spain when I was 10 years old
                            </p>
                    </div>
                    <div className="pastHistory_section_item">photo</div>
                    <img src={babyGroot} alt="baby_groot" className="question_picture"/>
                </div>

                <div className="history_section">
                    <div className="presentHistory_section_question">
                        <p className="presentHistory_section_first">Who I am</p>
                        <p className="presentHistory_section_first">Someone who Had the chance to work several years in different tourist companies, since I spent 4 great years of my life at University getting a Tourism Degree, learning languages, business administration</p>
                    </div>
                    <div className="presentHistory_section_item">photo</div>
                    <img src={babyGroot} alt="baby_groot" className="question_picture"/>
                </div>

                <div className="history_section">
                    <div className="futureHistory_section_question">
                        <p className="futureHistory_section_first">Who I will be</p>
                        <p className="futureHistory_section_first">Someone who Had the chance to work several years in different tourist companies, since I spent 4 great years of my life at University getting a Tourism Degree, learning languages, business administration</p>
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