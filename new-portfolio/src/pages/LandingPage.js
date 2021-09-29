import Projects from "../components/projects/Projects"
import Questions from "../components/questions/Questions"
import { useHistory } from "react-router";
import "./LandingPage.css"



const Landing = ()=>{

    const history = useHistory();

    return(
        <div className="landingPage__container">
            <Questions className="questions_container_row" 
            onClickA={()=> history.push("/myhistory")}
            onClickB={()=> history.push("/myhistory")}
            onClickC={()=> history.push("/myhistory")}


            />

            <Projects/>
        </div>
    )
}
export default Landing; 