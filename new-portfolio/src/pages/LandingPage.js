import Projects from "../components/projects/Projects"
import Questions from "../components/questions/Questions"
import "./LandingPage.css"



const Landing = ()=>{
    return(
        <div className="landingPage__container">
            <Questions />
            <Projects />


        </div>
    )
}
export default Landing; 