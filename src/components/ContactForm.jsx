import { useState } from "react";
import axios from "axios";
import "./ContactForm.css"; // add this

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/form", form);
      setStatus("Success! Sent.");
      setForm({ name: "", email: "" });
    } catch (err) {
      setStatus("Error sending form.");
    }
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="gamer-form">
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="gamer-input"
        />

        <input
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="gamer-input"
        />

        <button type="submit" className="gamer-button">
          Submit
        </button>
      </form>

      <p className="status-msg">{status}</p>
    </div>
  );
}

export default ContactForm;
