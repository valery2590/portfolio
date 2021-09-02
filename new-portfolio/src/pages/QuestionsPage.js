import Header from "../components/header/Header";
import Questions from "../components/questions/Questions";
import Contact from "../components/contact/Contact"
import "./QuestionsPage.css"
import babyGroot from "../assets/baby-groot.svg"
import MailForm from "../components/mailForm/MailForm";
import ModalSkills from "../components/skills/ModalSkills"



const QuestionsPage = ()=>{
    return(
        <>
            <Header/>
            <Questions/>
            <ModalSkills style="skills_header" />
        <div className="questionsPage__container">
      
            <div className="myHistory__container">
                
                <div className="pastHistory_section">
                    <div className="pastHistory_section_question"> 
                        <p className="pastHistory_section_first">Who I was</p>
                        <p className="pastHistory_section_first">Born in Perú, had the chance to come to Spain</p>
                    </div>
                    <div className="pastHistory_section_item">photo</div>
                    <img src={babyGroot} alt="baby_groot" className="question_picture"/>
                </div>

                <div className="presentHistory_section">
                    <div className="presentHistory_section_question">
                        <p className="presentHistory_section_first">Who I am</p>
                        <p className="presentHistory_section_first">Someone who Had the chance to work several years in different tourist companies, since I spent 4 great years of my life at University getting a Tourism Degree, learning languages, business administration</p>
                    </div>
                    <div className="presentHistory_section_item">photo</div>
                    <img src={babyGroot} alt="baby_groot" className="question_picture"/>
                </div>

                <div className="futureHistory_section">
                    <div className="futureHistory_section_question">
                        <p className="futureHistory_section_first">Who I will be</p>
                        <p className="futureHistory_section_first">Someone who Had the chance to work several years in different tourist companies, since I spent 4 great years of my life at University getting a Tourism Degree, learning languages, business administration</p>
                    </div>
                    <div className="futureHistory_section_item">photo</div>
                    <img src={babyGroot} alt="baby_groot" className="question_picture"/>
                </div>

            </div>
            
        </div>
        <Contact />
        </>
    )
}
export default QuestionsPage;