import Projects from "../components/projects/Projects"
import Questions from "../components/questions/Questions"
import "./LandingPage.css"



const Landing = ()=>{
    return(
        <div className="landingPage__container">
            <Questions className="questions_container_row" />
            <Projects />
        </div>
    )
}
export default Landing; 