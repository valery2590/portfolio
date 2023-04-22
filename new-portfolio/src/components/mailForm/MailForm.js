import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import "./MailForm.css"
import Modal from 'react-modal'


Modal.setAppElement('#root')

const MailForm = ({ name, src, className, className2 }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_lausod2', 'template_abu8jdt', e.target, 'user_iWFLiJoHRNUY2yoUbWCKE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setModalIsOpen(false)
    }

    return (
        <>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={
                    {
                        overlay: {
                            background: '#C0C0C0',
                            width: '100%',
                            margin: '0 auto',
                        },
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            border: 'none',
                            overflow: 'hidden',
                            background: '#C0C0C0',
                        }
                    }
                }
            >

                <form onSubmit={sendEmail} className="form__container">

                    <p className="form_title" id="title">Please fill in to contact me</p>
                    <input type="text" placeholder="Your Name" name="name" className="form_input" id="input1" />
                    <input type="email" placeholder="Your Email" name="email" className="form_input" id="input2" />
                    <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" placeholder="Phone Number" name="number" className="form_input" id="input3" />
                    <textarea type="text" placeholder="Your Message" name="message" className="form_textarea" id="input4" />
                    <input type="submit" value="Send" className="button_submit" id="button" />
                </form>

            </Modal>
            <div onClick={() => setModalIsOpen(true)} className="mailform-texto-button">
                {name}
            </div>
        </>

    );
};

export default MailForm;