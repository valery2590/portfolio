import React from 'react';
import "./Header.css"
import Logo from "../logo/Logo"
import GitIcon from "../../assets/git-icon.svg"
import WhatsappIcon from "../../assets/whatsapp-symbol.svg"
import LinkdinIcon from "../../assets/linkedin-icon-2.svg"
import PhotoProfile from "../../assets/profile_picture.png"
import { useHistory} from "react-router-dom"
import ModalSkills from '../skills/ModalSkills';




const Header = ()=>{
    const history = useHistory();
    return (
        <div className="header__container">
            <div className="header_logo_container"><Logo style="logo_header"/></div>
            <div className="profile_section">
                <img src={PhotoProfile} className="profilePicture"  alt="profile_Picture" onClick={()=> history.push("/")}/>
                <p className="name_title">Valery Figueroa Huamán</p>
                <p className="position_title">Web Developer</p>
            </div>
            <div >
                <div className="headerIcon_container">
                <a href="https://github.com/valery2590" target="_blank">
                    <img src={GitIcon} className="iconHeader" alt="git_Icon"/>
                </a>   
                <a href="https://wa.me/34680535856" target="_blank"> 
                    <img src={WhatsappIcon} className="iconHeader" alt="whatsapp_Icon"/>
                </a>          
                <a href="https://www.linkedin.com/in/valery-figueroa-huam%C3%A1n-01517982/" target="_blank">      
                    <img src={LinkdinIcon} className="iconHeader" alt="linkdin_Icon"/>
                 </a>
                </div>
               
                 <ModalSkills style="skills_header" />
            </div>
        </div>
    )
}


export default Header; 