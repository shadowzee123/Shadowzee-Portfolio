import { db } from "firebase"; // your firebase config
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'; // Import the CSS

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert('✅ Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      console.error('❌ Failed to send message:', error);
      alert('❌ Message failed to send, please try again.');
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Write your message..." required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
