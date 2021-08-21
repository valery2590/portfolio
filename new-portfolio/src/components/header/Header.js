import "./Header.css"
import Logo from "../logo/Logo"
import GitIcon from "../../assets/git-icon.svg"
import WhatsappIcon from "../../assets/whatsapp-symbol.svg"
import LinkdinIcon from "../../assets/linkedin-icon-2.svg"
import PhotoProfile from "../../assets/profile_picture.png"
import {Link, useHistory} from "react-router-dom"


const Header = ()=>{
    const history = useHistory();
    return (
        <div className="header__container">
            <div className="header_logo_container"><Logo style="logo_header"/></div>
            <div>
                <img src={PhotoProfile} className="profilePicture"  onClick={()=> history.push("/")}/>
            </div>
            <div className="headerIcon_container">
                <Link to={{ pathname: "https://github.com/valery2590" }} target="_blank">
                    <img src={GitIcon} className="headerIcon"/>
                </Link>             
                <img src={WhatsappIcon} className="headerIcon"/>
                <Link to={{pathname: "https://www.linkedin.com/in/valery-figueroa-huam%C3%A1n-01517982/"}} target="_blank">
                        <img src={LinkdinIcon} className="headerIcon"/>
                </Link>
          
                </div>
        </div>
    )
}

export default Header; 