import "./Contact.css"
import Logo from "../logo/Logo"
import MailForm from "../mailForm/MailForm"



const Contact = ({ onClick }) => {

    const focus = () => {
        if (window.screen.width >= 421) {
            window.scrollTo(0, 0);
        }
    }
    const iconEmail = <svg className="email-icon-footer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" /></svg>;

    const textEmailName =  <a className="phone_text" ><span>Email</span><svg className="email-icon-footer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" /></svg></a>
    return (
        <div className="contact__container">
            {window.screen.width <= 421 && (
                <div className="contact_items">
                    <div className="email_contact_section" >
                    <MailForm name={iconEmail}/>
                    </div>
                    <div className="whatsapp_contact_section">
                        <a className="phone_text" href="https://wa.me/34680535856" target="_blank" rel="noreferrer">
                            <svg className="whatsapp-icon-footer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z" /></svg></a>
                    </div>
                    <div className="phone_contact_section">
                        <a className="phone_text" href="tel:0034680535856" rel="noreferrer">
                            <svg className="phone-icon-footer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 0v3h-8c-1.104 0-2 .896-2 2v17c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2v-22h-2zm-6 21h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 4h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 4h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm0-3h-8v-8h8v8z" /></svg></a>
                    </div>
                    </div>
            )}
            {/* version desktop & tablet */}
            {window.screen.width >= 422 && (
                <div className="contact_items">

                    <div className="email_contact_section" >
                        <MailForm name={textEmailName}/>
                    </div>
                    <div className="whatsapp_contact_section">
                        <a className="phone_text" href="https://wa.me/34680535856" target="_blank" rel="noreferrer">
                            <span>Whatsapp</span>
                            <svg className="whatsapp-icon-footer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z" /></svg></a>
                    </div>
                    <div className="phone_contact_section">
                        <a className="phone_text" href="tel:0034680535856" rel="noreferrer">
                            <span>Phone</span>
                            <svg className="phone-icon-footer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M16 0v3h-8c-1.104 0-2 .896-2 2v17c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2v-22h-2zm-6 21h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 4h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm3 4h-2v-1h2v1zm0-2h-2v-1h2v1zm0-2h-2v-1h2v1zm0-3h-8v-8h8v8z" /></svg></a>
                    </div>

                </div>
            )}
        </div>
    )
}
export default Contact;