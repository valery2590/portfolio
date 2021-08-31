import React from 'react';
import emailjs from 'emailjs-com'
import "./MailForm.css"



const MailForm = () => {
   

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
        <div className="Mailform__container">
            <form onSubmit={sendEmail} className="form__container">
                <input type="text"  placeholder="Your Name" name="name"/>
                <input type="email"  placeholder="Your Email" name="email"/>
                <input type="text" placeholder="Subject" name="subject" />
                <textarea type="text" placeholder="Your Message" name="message" />
                <input type="submit" value="Send"/>
            </form>
        </div>
    );
};

export default MailForm;