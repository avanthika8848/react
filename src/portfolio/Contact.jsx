import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact submit:", form);
    alert("Thanks! Your message was recorded in the console.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-section">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input name="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Message
          <textarea name="message" value={form.message} onChange={handleChange} />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
