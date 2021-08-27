import React from 'react';
import  "./Projects.css"

const EachProject = ({name, link, link2,img, img2}) => {
    return (
        
              <div className="project_link"> 
                        <p className="link_project">{name}</p>
                        <div>
                        <a href={link} target="_blank">
                            <img src={img} className="headerIconProject"/> </a>  
                        <a href={link2} target="_blank">
                            <img src={img2} className="headerIconProject"/> </a> 
                        </div>
                </div>
      
    );
};

export default EachProject;