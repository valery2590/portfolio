import "./Contact.css"
import Logo from "../logo/Logo"

const Contact = ()=>{
    return(
            <div className="contact__container">
                    <div className="email_contact_section">Email</div>
                    <div className="logo_contact_section"><Logo style="logo_footer" /></div>
                    <div className="phone_contact_section">Phone</div>
            </div>
    )
}
export default Contact;