import React, { Component, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/ContactForm.css"


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
  };

    return (
            <section class="contact">
                <div>

                    <h1>Contact Me </h1>
                    {/* <p> 
                        Feel free to send me an email about anything you might be interested in!
                    </p> */}
                    <form ref={form} onSubmit={sendEmail} id="contact-form">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />

                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                        <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                        
                        <button type="submit" class="submit-btn" onClick={handleSubmit}>Send Message</button>
                        
                    </form>
                </div>
            </section>

        );
}
 
export default ContactForm;