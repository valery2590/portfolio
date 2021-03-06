import ProjectsButton from "../components/projects/ProjectsButton"
import Questions from "../components/questions/Questions"
import { useHistory } from "react-router";
import "./LandingPage.css"
import ModalSkills from "../components/skills/ModalSkills";



const Landing = ()=>{

    const history = useHistory();
   

    return(
        <div className="landingPage__container">

            <Questions className="questions_container_row"/>  


            <ModalSkills style="skills_button" onClick={()=>history.push("/quiz")}/>
            <ProjectsButton/>
        </div>
    )
}
export default Landing; 