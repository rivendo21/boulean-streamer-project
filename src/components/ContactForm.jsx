import { useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import "./ContactForm.css";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("");

  // threshold 0 to trigger partially visible, trigger multiple times
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/form", form);
      setStatus("Success! Sent.");
      setForm({ name: "", email: "" });
    } catch (err) {
      setStatus("Error sending form.");
    }
  }

  return (
    <div className="form-wrapper">
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={`gamer-form ${inView ? "in-view" : "out-of-view"}`}
      >
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

      <p className={`status-msg ${status ? "show" : ""}`}>{status}</p>
    </div>
  );
}

export default ContactForm;
