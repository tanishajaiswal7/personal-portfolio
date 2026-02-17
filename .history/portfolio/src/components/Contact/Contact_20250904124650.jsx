import React, { useState } from 'react';
import './Contact.css'; 


const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("❌ Failed to send message.");
    }
  } catch (err) {
    console.error(err);
    alert("⚠️ Something went wrong.");
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="contact-section">
      
      <div className="contact-heading">
        <h1>Reach Out to Me</h1>
        <p>We would love to hear from you! Please fill out the form below for any freelance services.</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
          />
        </div>

       <button type="submit" className="submit-btn" disabled={loading}>
  {loading ? "Sending..." : "Submit"}
</button>

      </form>
    </section>
  );
};

export default Contact;
