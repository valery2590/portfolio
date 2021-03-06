import {React, useState} from 'react';
import "./Header.css"
import Logo from "../logo/Logo"
import GitIcon from "../../assets/git-icon.svg"
import WhatsappIcon from "../../assets/whatsapp-symbol.svg"
import LinkdinIcon from "../../assets/linkedin-icon-2.svg"
import PhotoProfile from "../../assets/profile_picture.png"
import { useHistory} from "react-router-dom"
import ModalSkills from '../skills/ModalSkills';
import Questions from '../questions/Questions';
import cvIcon from '../../assets/cv.svg'


const Header = ()=>{
    const history = useHistory();
    const [navBar, setNavaBar] = useState(false)

    const focus = ()=>{
        if(window.screen.width >= 421){
              window.scrollTo(0,0);
        }
    }

    return (
        <div className="header__container">
            <div className="header_logo_container">
                <Logo style="logo_header"
                   onClick={()=>setNavaBar(!navBar)} />
            </div>

            <div className="profile_section">
                <img 
                src={PhotoProfile} 
                className="profilePicture"  
                alt="profile_Picture" 
                onClick={()=> {
                    focus()
                    history.push("/")}}/>


                <p className="name_title">Valery Figueroa Huamán</p>
            </div>
            
            <div className="headerIcon_container">
                

            <div className="iconSection">
                    {/* navBar - phone version */}
                    <div onClick={()=>setNavaBar(!navBar)} className="navBarIcon2">
                            {navBar ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)}
                            {navBar === true &&( <>
                            <Questions className="navBarIcon"/>
                            </>)}
                    </div>
                    {/* navBar - phone version */}

                        <div className='icon_container'>
                            <a href="https://github.com/valery2590"  target="_blank" rel="noreferrer">
                            <img src={GitIcon} className="iconHeader" alt="git_Icon"/></a>   
                            <a href="https://wa.me/34680535856" target="_blank" rel="noreferrer"> 
                            <img src={WhatsappIcon} className="iconHeader" alt="whatsapp_Icon"/></a>  
                            <a href="https://drive.google.com/uc?export=download&id=1pIMFghw77B2UhCLjzBg9SkHB3i-jAxpS" download="cv.valery">
                                <img src={cvIcon} className="iconHeader" alt="cv_Icon"/></a>        
                            <a href="https://www.linkedin.com/in/valery-figueroa-huaman-01517982/"  target="_blank" rel="noreferrer">      
                            <img src={LinkdinIcon} className="iconHeader" alt="linkdin_Icon"/></a>
                        </div>
                  
                    </div>

                <div className="skills_header_hidden">
                    <ModalSkills style="skills_header_button" />
                </div>
            </div>
        </div>
    )
}


export default Header; 