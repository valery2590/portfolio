import "./Logo.css";
import logoVFH from "../../assets/logoVFH.svg"
import { useHistory } from "react-router";

const Logo = ({style})=>{
    const history = useHistory();
    return(
    <div className="logo__container">
        <img src={logoVFH} alt="logo"  className={style} onClick={()=> history.push("/")}/>
    </div>
    )
}
export default Logo; 
