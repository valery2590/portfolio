import React from 'react';
import  "./EachProject.css"

const EachProject = ({name, link, link2,img, img2}) => {
    return (
        
            <div className="project_link"> 
                <p className="link_project">{name}</p>
                <div className="links_images">
                    <a href={link} target="_blank" title="link">
                        <img src={img} className="headerIconProject" alt="link"/></a>                              
                    <a href={link2} target="_blank" title="link2">
                        <img src={img2} className="headerIconProject" alt="link2"/></a> 
                </div>
            </div>
      
    );
};

export default EachProject;