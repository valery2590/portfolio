import  "./Projects.css"
import { useHistory } from "react-router"

const Projects =()=>{


    const history = useHistory();


    return (

        <div className="projects_section_container" >
            <p className="projects" onClick={()=>{history.push("/projects")}}>Projects</p>
              
        </div>
    )
}

export default Projects