import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
        {sent && <p className="success">Message sent ✅</p>}
      </form>
    </div>
  );
};

export default Contact;
