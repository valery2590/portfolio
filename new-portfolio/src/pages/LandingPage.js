import Header from "../components/header/Header"
import Projects from "../components/projects/Projects"
import Questions from "../components/questions/Questions"
import Contact from "../components/contact/Contact"
import "./LandingPage.css"
import ModalSkills from "../components/skills/ModalSkills"



const Landing = ()=>{
    return(
        <div className="landingPage__container">
            <Header />
            <Questions />
           <ModalSkills style="skills_header" />
            <Projects />
            <Contact />

        </div>
    )
}
export default Landing; 