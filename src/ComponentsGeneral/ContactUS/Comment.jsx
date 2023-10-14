import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './ContactUS.css';

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_znvej0f",
        "template_53fslma",
        form.current,
        "JlsFN8d0J5Fj_5ezw"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="comment-container">
      <form className="form-contact" ref={form} onSubmit={sendEmail}>
        <label className="label-contact">Name</label>
        <input className="input-contact" type="text" name="user_name" />
        <label className="label-contact" >Email</label>
        <input className="input-contact" type="email" name="user_email" />
        <label className="label-contact" >Comment</label>
        <textarea className="textarea-contact" name="message" />
        <input className="input-contact" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
