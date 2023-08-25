import React, { Component, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/ContactForm.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const ContactForm = ({ updateSubmitted }) => {

    const handleSubmit = (e) => {
        console.log("Submitted");
        updateSubmitted(true);
    };

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ml42g4g', 'template_7sl24jp', form.current, 'P7AHNq5qWMhYyx4UM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    console.log("Submitted");
    updateSubmitted(true);
  };

    return (

            // {/* <button type="button" class="contact-btn">Contact me</button> */}
<section className="contact">
  <div>
    <h1>Send me a message 🚀 </h1>
    {/* <p> 
      Feel free to send me an email about anything you might be interested in!
    </p> */}
    <form ref={form} onSubmit={sendEmail} id="contact-form">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your Name" required />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Your Email" required />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="Your Message" required defaultValue={""} />
      <div className="submit-btn">
      <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</section>

        );
}
 
export default ContactForm;