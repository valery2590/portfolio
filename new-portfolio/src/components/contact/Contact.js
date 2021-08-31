import "./Contact.css"
import Logo from "../logo/Logo"
import MailForm from "../mailForm/MailForm"


const Contact = ()=>{
    return(
            <div className="contact__container">
                <div className="contact_items">
                    <div className="email_contact_section" ><p>Email</p></div>
                    <div className="logo_contact_section"><Logo style="logo_footer"/></div>
                    <a className="phone_contact_section" href="https://wa.me/34680535856" target="_blank">
                        Phone</a>
                </div>
                    
            </div>
    )
}
export default Contact;