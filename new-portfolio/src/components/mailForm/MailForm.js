import React, { useContext, useState, useRef } from 'react';
import emailjs from 'emailjs-com'
import "./MailForm.css"
import Modal from 'react-modal'
import { text } from '@fortawesome/fontawesome-svg-core';


Modal.setAppElement('#root')

const MailForm = ({ name, src, className, className2 }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [valueInput, setValueInput] = useState({
        nombre: '',
        email: '',
        phone: '',
        textarea: '',
    })
    console.log(valueInput.nombre)
     //const [inputName, setInputName] = useState('')
    const inputRef = useRef()

    function handleChangeInput(e) {
        setValueInput({
            ...valueInput,
            [e.target.name] : e.target.value
       })
       console.log([e.target.name]+ ': ' + e.target.value)
       setConfirmationMessage('')
    }

    function modalFunction (){
        setModalIsOpen(true)
        setConfirmationMessage('')
    } 
    function sendEmail(e) {
        e.preventDefault();
        let nombrefield = valueInput.nombre;
        let email = valueInput.email;
        let phone = valueInput.phone;
        let textarea = valueInput.textarea;

          if(nombrefield !== '' & email !== '' & phone !== '' & textarea !== ''){
            console.log(nombrefield +' '+ email +' '+ phone +' '+ textarea) 
            emailjs.sendForm('service_lausod2', 'template_abu8jdt', e.target, 'user_iWFLiJoHRNUY2yoUbWCKE')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset();
            setConfirmationMessage('Message has been sent correctly')
            setValueInput({
                nombre: '',
                email: '',
                phone: '',
                textarea: '',
            })
            setTimeout(() => {
                setModalIsOpen(false)
            }, 2000);
        } else {
            setConfirmationMessage('You must fill your details')
        }

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
                    <input type="text" onChange={handleChangeInput} placeholder="Your Name" name="nombre" className="form_input" id="inputName" value={valueInput.nombre}/>
                    <input type="email" onChange={handleChangeInput}  placeholder="Your Email" name="email" className="form_input" id="inputEmail" value={valueInput.email} />
                    <input type="phone" onChange={handleChangeInput}  placeholder="Phone Number" name="phone" className="form_input" id="inputTel"  value={valueInput.phone}/>
                    <textarea type="text" onChange={handleChangeInput}  placeholder="Your Message" name="textarea" className="form_textarea" id="iinputTextarea" value={valueInput.textarea} />
                    <input type="submit" value="Send" className="button_submit" id="button" />
                    {confirmationMessage && (<span className={confirmationMessage === 'Message has been sent correctly' ? 'message-valid':'message-not-valid'}>{confirmationMessage}</span>)}

                    {/* {confirmationMessage && (<span className='confirmationMessage-text'>{confirmationMessage}</span>)} */}

                </form>

            </Modal>
            <div onClick={modalFunction} className="mailform-texto-button">
                {name}
            </div>
        </>

    );
};

export default MailForm;