import "./Contact.css"
import Logo from "../logo/Logo"
import MailForm from "../mailForm/MailForm"



const Contact = ({onClick})=>{

    const focus = ()=>{
        if(window.screen.width >= 421){
              window.scrollTo(0,0);
        }
    }
    return(
            <div className="contact__container">
                <div className="contact_items">
                    <div className="email_contact_section" >
                        <MailForm name="Email"/>
                    </div>
                    <div className="logo_contact_section">
                        <Logo style="logo_footer"
                        onClick={focus}/> 
                    </div>
                    <div className="phone_contact_section">
                        <a className="phone_text" href="https://wa.me/34680535856" target="_blank">
                        Phone</a>
                    </div>
                </div>
            </div>
    )
}
export default Contact;