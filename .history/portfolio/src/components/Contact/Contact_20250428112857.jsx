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
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the data to a server or handle the submission here
    console.log('Form Submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="contact-section">
      
      <div className="contact-heading">
        <h1>Reach Out to Me</h1>
        <p>We would love to hear from you! Please fill out the form below.</p>
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

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
