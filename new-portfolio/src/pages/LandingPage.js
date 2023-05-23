import ProjectsButton from "../components/projects/ProjectsButton"
import Questions from "../components/questions/Questions"
import { useHistory } from "react-router";
import "./LandingPage.css"
import ModalSkills from "../components/skills/ModalSkills";
import PhotoProfile from "../assets/profile-picture2.jpeg"




const Landing = ()=>{

    const history = useHistory();
   
    const focus = ()=>{
        if(window.screen.width >= 320){
              window.scrollTo(0,0);
        }
    }

    return(
        <div className="landingPage__container">

            
             <div className="profile_section">
                <img 
                src="https://ucarecdn.com/d08c48c3-476a-4df5-aacd-8a59624062cc/" 
                className="profilePicture"  
                alt="profile_Picture" 
                onClick={()=> {
                    focus();
                    history.push("/")}}/>
                    <div className='name-title-container'>
                        {/* <p className="surname_title">Figueroa</p>
                        <p className="secondLastName_title">Huamán</p> */}
                        <p className="name_title">Hey! My name is Valery, I am a Software developer. I've been doing this for a couple of years.</p>
                        <p className="name_title">Happy to learn new things, eager to discover new features and enjoy my time because I love what I do.</p>
                        <div className="landing-page-btn-container">
                        <button  className="button-read-more" onClick={() => {history.push("/myStory"); focus();}}>Read more!</button> 
                        <button className="button-download-cv"> <a href="https://drive.google.com/uc?export=download&id=1pIMFghw77B2UhCLjzBg9SkHB3i-jAxpS" download="cv.valery">Dowload CV</a></button>
                        </div>
                    </div>
            </div> 
            {/* <Questions className=""/>   */}

            {/* <Questions className="questions_container_row"/>  
            <ModalSkills style="skills_button" onClick={()=>history.push("/quiz")}/>
            <ProjectsButton/> */}
        </div>
    )
}
export default Landing; 