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
                    <div className="project_link1">
                        <a className="link_project" href="https://github.com/valery2590/knou-react" target="_blank">Knou</a>
                    </div>
                    <div className="project_link2"><a className="link_project" target="_blank"> Picturest</a></div>
                    <div className="project_link3"> <a className="link_project">BPM</a></div>
                    <div className="project_link4"> <a className="link_project">Action Patern</a> </div>
                    <div className="project_link4"> <a href="https://valery2590.github.io/cryptoCoin/" className="link_project" target="_blank">Crypto Coin Search</a> </div>
                </div>
                }
        </div>
    )
}

export default Projects