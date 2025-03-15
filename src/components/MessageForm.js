import React, { useRef, useState } from "react";
import styles from "../styles/generalStyles.module.scss";
import ButtonGeneral from "./ButtonGeneral";
import translated from "./translations";
import emailjs from "emailjs-com";
import { useHistory } from "react-router";

const MessageForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const history = useHistory();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    phone: "",
    message: "",
  });
  const formRef = useRef(null);

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setConfirmationMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, number, message } = formData;

    if (name && email && number && message) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE,
          process.env.REACT_APP_EMAILJS_TEMPLATE,
          formRef.current,
          process.env.REACT_APP_EMAILJS_PASSWORD
        )
        .then(
          (result) => {
            //console.log(result.text);
            setConfirmationMessage(
              translated("Message has been sent correctly")
            );
            localStorage.setItem("currentTab", "my-story");
            history.push("/my-story");
          },
          (error) => {
            //console.error(error.text);
            setConfirmationMessage(
              translated("There was an error sending your message")
            );
          }
        );
      setFormData({ name: "", email: "", number: "", message: "" });

      setTimeout(() => {
        closeModal();
      }, 2000);
    } else {
      setConfirmationMessage(translated("You must fill your details"));
    }
  };

  return (
    <>
      <ButtonGeneral
        title={translated("Message")}
        className={styles.landingPageButton}
        onClick={openModal}
      />
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>{translated("Please fill in to contact me")}</h2>
            <form onSubmit={sendEmail} ref={formRef}>
              {["name", "email", "number", "message"].map((field) => (
                <div key={field} className={styles.formField}>
                  {field === "message" ? (
                    <textarea
                      name={field}
                      placeholder={translated(`Your ${field}`)}
                      value={formData[field]}
                      onChange={handleChangeInput}
                      className={styles.formTextarea}
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={translated(`Your ${field}`)}
                      value={formData[field]}
                      onChange={handleChangeInput}
                      className={styles.formInput}
                    />
                  )}
                </div>
              ))}

              <div className={styles.messageFormButtonsContainer}>
                <div className={styles.sendButtonMailContainer}>
                  <ButtonGeneral
                    title={translated("Send")}
                    className={styles.sendButtonMail}
                    onClick={sendEmail}
                  />
                </div>

                <div className={styles.sendButtonMailContainer}>
                  <ButtonGeneral
                    title={translated("Close")}
                    className={styles.sendButtonMail}
                    onClick={closeModal}
                  />
                </div>
              </div>

              {confirmationMessage && (
                <span
                  className={
                    confirmationMessage ===
                    translated("Message has been sent correctly")
                      ? "message-valid"
                      : "message-not-valid"
                  }
                >
                  {confirmationMessage}
                </span>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageForm;
