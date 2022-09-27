import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_6912jgl', 'template_nxmathh', form.current, 'IIBjjcjGKvHQDurqZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

    return (
        <div className="m-5">
            <h3>Contact</h3>
            <form ref={form} onSubmit={sendEmail} className="form-control border-0">
                <div className="form-group m-2">
                    <label for="name">Name</label>
                    <input name="from_name" type="text" className="form-control col-8" />    
                </div>
                <div className="form-group m-2">
                    <label for="email">Email</label>
                    <input name="reply_to" type="email" className="form-control col-8" />    
                </div>
                <div className="form-group m-2">
                    <label for="message">Message</label>
                    <textarea name="message" type="text" className="form-control col-8"></textarea>    
                </div>
                <div className="form-group m-2">
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    )
};