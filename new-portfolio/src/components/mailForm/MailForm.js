import React, {useState} from 'react';
import emailjs from 'emailjs-com'
import "./MailForm.css"
import Modal from 'react-modal'

Modal.setAppElement('#root')

const MailForm = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_lausod2', 'template_abu8jdt', e.target, 'user_iWFLiJoHRNUY2yoUbWCKE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <>
        <div onClick={()=>setModalIsOpen(true)}>Open modal</div>
        <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}
        style={
            {
                overlay:{
                    background: 'grey'
                }
            }
        }>  
        <div className="Mailform__container">
                <form onSubmit={sendEmail} className="form__container">
                <p className="form_title">Please fill in to contact me</p>
                <input type="text"  placeholder="Your Name" name="name" className="form_input"/>
                <input type="email"  placeholder="Your Email" name="email" className="form_input"/>
                <input type="text" placeholder="Subject" name="subject" className="form_input" />
                <textarea type="text" placeholder="Your Message" name="message" className="form_textarea" />
                <input type="submit" value="Send" className="button_submit"/>
            </form>  
            
           
        </div>
        </Modal>
       
        </>
        
    );
};

export default MailForm;