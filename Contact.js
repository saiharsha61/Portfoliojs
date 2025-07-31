import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add email sending functionality here, or use Formspree, EmailJS, etc.
    alert('Form submitted!');
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
      <a href="mailto:youremail@example.com">Email Me</a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
    </section>
  );
}

export default Contact;
