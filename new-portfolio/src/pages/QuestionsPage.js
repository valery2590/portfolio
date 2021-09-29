import Questions from "../components/questions/Questions";
import "./QuestionsPage.css"
import miniYo from "../assets/mini_yo.jpeg"
import smallTree1 from "../assets/small-tree.jpeg"
import middleTree2 from "../assets/middle-tree.jpeg"
import bigTree3 from "../assets/big-tree.jpeg"
import { useState } from "react";


const QuestionsPage = ()=>{

        const smallTree = smallTree1;
        const middleTree = middleTree2;
        const bigTree = bigTree3;

        const [question, setQuestion] = useState(smallTree)

    return(

        <div className="questionsPage__container">
            <Questions className="questions_container_sidebar"
            onClickA= {()=> setQuestion(smallTree)}
            onClickB={()=> setQuestion(middleTree)}
            onClickC ={()=> setQuestion(bigTree)}
            />


            
            <div className="myHistory__container">
                
            {question ===  smallTree &&(
                 <div className="history_section">
                      <div className="text_history_section"> 
                        <p className="question_title_history">Who was I?</p>
                        <p className="question_text_history">Born in Perú, had the chance to come to Spain when I was 10 years old.
                        After 4 years in University, I got my Tourism Degree in Barcelona, this fact helped me to work in several different companies 
                        until I achieved the Senior Customer Care Manager position.</p>
                    </div>
                    <div className="picture_history_section">
                        <img src={smallTree} alt="small_plant" className="question_picture"/>
                    </div>

                    </div>)}


 {question ===  middleTree &&(
                    <div className="history_section">
                <div className="text_history_section">
                    <p className="question_title_history">Who am I?</p>
                    <p className="question_text_history">Working as a Manager had the privilege to learn more about coding since I was trying to make more efficient my duties and my colleagues' duties.
                    I have created tools to improve my daily work. So, last year I decided to push this love for code, I entered a 5 months Full-Stack Bootcamp since I wanted to be a programmer. Here I am now.
                    Someone who has the courage to change their carreer,
                    someone who has the guts to start over.</p>
                </div>
                <div className="picture_history_section">
                <img src={middleTree} alt="baby_groot" className="question_picture"/>
                </div>
             
                 </div>)}

                 {question ===  bigTree &&(
               <div className="history_section">
                <div className="text_history_section">
                    <p className="question_title_history">Who will I become?</p>
                    <p className="question_text_history">Hopefully, I will become the same person, however, with more experience. Someone who wants to learn more, to discover more. I do not think there is an end. 
                    And the moment I would think there is one, probably I would have failed. </p>
                </div>
                <div className="picture_history_section">  
                    <img src={bigTree} alt="big_tree" className="question_picture"/>            
                </div>
               </div>)}
               
              


                  
                    
          

               

            </div>
            
        </div>
      
    )
}
export default QuestionsPage;