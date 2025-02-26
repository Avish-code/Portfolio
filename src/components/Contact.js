import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  // State to store user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mess: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8888/message/add", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Message sent successfully:", response.data);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", mess: "" }); // Reset form after submission
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations or just a friendly chat!
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-input"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="contact-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mess"
          placeholder="Your Message"
          className="contact-textarea"
          value={formData.mess}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

