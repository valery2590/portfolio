import React from 'react';
import GitIcon from "../assets/git-icon.svg"
import Web from "../assets/web.svg"
import EachProject from "../components/projects/EachProject";


const ProjectsPage = () => {
    return (
        <div>
<div className="name_projects_section">
                    <EachProject name="Knou" 
                                img={GitIcon}
                                img2={Web}
                                link="https://github.com/valery2590/knou-react"  
                                link2="https://hardcore-hawking-033be2.netlify.app/"/>

                    <EachProject name="Picturest" 
                                link="https://github.com/valery2590/images-seeker"  
                                img={GitIcon}
                                link2="https://valery2590.github.io/cryptoCoin/" 
                                img2={Web}/>

                    <EachProject name="BPM" 
                                link="https://github.com/valery2590/cryptoCoin"  
                                img={GitIcon}
                                link2="https://valery2590.github.io/cryptoCoin/" 
                                img2={Web}/>

                    <EachProject name="Action Patern" 
                                link="https://github.com/valery2590/cryptoCoin"  
                                img={GitIcon}
                                link2="https://valery2590.github.io/cryptoCoin/" 
                                img2={Web}/>

                    <EachProject name="Crypto Coin Search" 
                            link="https://github.com/valery2590/cryptoCoin"  
                            img={GitIcon}
                            link2="https://valery2590.github.io/cryptoCoin/" 
                            img2={Web}/>

                    <EachProject name="Crypto Coin Search" 
                            link="https://github.com/valery2590/cryptoCoin"  
                            img={GitIcon}
                            link2="https://valery2590.github.io/cryptoCoin/" 
                            img2={Web}/>
                    
                </div>
        </div>
    );
};

export default ProjectsPage;