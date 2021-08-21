import  "./Projects.css"
import {useState} from "react"
import { Link } from "react-router-dom";

const Projects =()=>{

    const [show, setShow] = useState(false);


    return (
        <div>
        <div className="projects_section_container" >
            <p className="projects" onClick={()=>{setShow(!show)}}>Projects - click to see the magic</p>
        </div>
                {show === true && 
                <div className="name_projects_section">
                    <div className="project_link1"><Link className="link_project" to={{ pathname: "https://github.com/valery2590/knou-react" }} target="_blank"> Knou</Link></div>
                    <div className="project_link2"><Link className="link_project" to={{ pathname: "https://github.com/valery2590/picturest-react" }} target="_blank"> Picturest</Link></div>
                    <div className="project_link3"> <Link className="link_project">BPM</Link></div>
                    <div className="project_link4"> <Link className="link_project">Action Patern</Link> </div>
                </div>
                }
        </div>
    )
}

export default Projects