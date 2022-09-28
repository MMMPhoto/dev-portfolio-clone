import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef();
    const [formName, setName] = useState('');
    const [formEmail, setEmail] = useState('');
    const [formMessage, setMessage] = useState('');
    const [warningMessage, setWarningMessage] = useState('');

    const sendEmail = (event) => {
        event.preventDefault();

        if (formName.trim().length === 0 || formEmail.trim().length === 0 || formMessage.trim().length === 0) {
            setWarningMessage('All fields must be completed!');
            return;
        } else setWarningMessage('');

        emailjs.sendForm('service_6912jgl', 'template_nxmathh', form.current, 'IIBjjcjGKvHQDurqZ')
            .then((result) => {
                console.log(result.text);
                setWarningMessage('Email sent!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="m-5">
            <h3>Contact</h3>
            <form ref={form} onSubmit={sendEmail} className="form-control border-0">
                <div className="form-group m-2">
                    <label htmlFor="from_name">Name</label>
                    <input name="from_name" type="text" value={formName} onChange={(e) => setName(e.target.value)} className="form-control col-8" />    
                </div>
                <div className="form-group m-2">
                    <label htmlFor="reply_to">Email</label>
                    <input name="reply_to" type="email" value={formEmail} onChange={(e) => setEmail(e.target.value)} className="form-control col-8" />    
                </div>
                <div className="form-group m-2">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" type="text" value={formMessage} onChange={(e) => setMessage(e.target.value)} className="form-control col-8"></textarea>    
                </div>
                <div className="form-group m-2 d-flex flex-row">
                    <input type="submit" value="Send" />
                    <p className="ms-5">{warningMessage}</p>                 
                </div>
            </form>
        </div>
    )
};