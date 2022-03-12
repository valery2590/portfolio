import  "./ProjectsButton.css"
import { useHistory } from "react-router"

const ProjectsButton =()=>{


    const history = useHistory();

    const focus = ()=>{
        if(window.screen.width >= 421){
              window.scrollTo(0,400);
        }
    }


    return (

        <div className="projects_section_container" >
            <p className="projects" onClick={()=>{
                focus()
                history.push("/projects")}}>Projects</p>
        </div>
    )
}

export default ProjectsButton