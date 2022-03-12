import "./Logo.css";
import logoVFH from "../../assets/logoVFH.svg"
import { useHistory } from "react-router";

const Logo = ({style , onClick})=>{
    const history = useHistory();
    const focus = ()=>{
        if(window.screen.width >= 421){
              window.scrollTo(0,0);
        }
    }
    return(
    <div className="logo__container">
        <img src={logoVFH} alt="logo"  className={style} 
        onClick={()=> {
            onClick()
            focus()
            history.push("/")}}/>
    </div>
    )
}
export default Logo; 
