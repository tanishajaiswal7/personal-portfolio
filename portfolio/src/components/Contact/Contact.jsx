import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Thanks for reaching out! I’ll contact you soon.");
        setFormData({
          name: '',
          email: '',
          service: '',
          budget: '',
          timeline: '',
          message: '',
        });
      } else {
        alert("❌ Failed to send message.");
      }
    } catch {
      alert("⚠️ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-heading">
        <h1>Let’s Work Together</h1>
        <p>Share your project details and I’ll get back to you within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        
        <input name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        
        <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />

        <select name="service" required value={formData.service} onChange={handleChange}>
          <option value="">Select Service</option>
          <option value="Web Development">Web Development</option>
          <option value="Backend / API">Backend / API</option>
          <option value="Full Stack Project">Full Stack Project</option>
          <option value="Bug Fixing">Bug Fixing</option>
          <option value="Freelance / Internship">Freelance / Internship</option>
        </select>

        <select name="budget" required value={formData.budget} onChange={handleChange}>
          <option value="">Budget Range</option>
          <option value="5k-10k">₹5k – ₹10k</option>
          <option value="10k-25k">₹10k – ₹25k</option>
          <option value="25k+">₹25k+</option>
        </select>

        <select name="timeline" required value={formData.timeline} onChange={handleChange}>
          <option value="">Timeline</option>
          <option value="ASAP">ASAP</option>
          <option value="1-2 weeks">1–2 Weeks</option>
          <option value="1 month+">1 Month+</option>
        </select>

        <textarea
          name="message"
          placeholder="Describe your project..."
          required
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          <span>{loading ? "Sending..." : "Send Message"}</span>
        </button>
      </form>
    </section>
  );
};

export default Contact;
