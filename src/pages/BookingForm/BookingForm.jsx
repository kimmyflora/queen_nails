import React, { useState } from "react";
import "./BookingForm.css"; // Make sure you have this CSS file

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    nailTech: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbxo46jJNwKl8kJQKOQVdCyKVNq_lPWMvevV9ovGN0k5rRvhlgclv4WHUV1CAihEmjk/exec";

    const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
    
      try {
        const response = await fetch(scriptURL, requestOptions);
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const result = await response.json();
    
        if (result.status === "success") {
          alert("Appointment booked successfully!");
          setFormData({ name: "", phone: "", date: "", time: "", nailTech: "" });
        } else {
          alert("Failed to book appointment. Please try again.");
        }
      } catch (error) {
        console.error("Error booking appointment:", error);
        alert("Something went wrong. Please try again.");
      }
    };

  return (
    <div className="booking-container">
      <h2>Book Your Appointment</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Phone Number:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <label>Time:</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />

        <label>Choose Your Nail Tech:</label>
        <select name="nailTech" value={formData.nailTech} onChange={handleChange} required>
          <option value="">Select a nail tech</option>
          <option value="Amy">Amy</option>
          <option value="Leena">Leena</option>
          <option value="Kimmy">Kimmy</option>
          <option value="Cindy">Cindy</option>
          <option value="Jenny">Jenny</option>
          <option value="Helen">Helen</option>
          <option value="Mimi">Mimi</option>
          <option value="Tammy">Tammy</option>
          <option value="Kelly">Kelly</option>
          <option value="Kathy">Kathy</option>
          <option value="John">John</option>
        </select>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Booking..." : "Submit Appointment"}
        </button>
      </form>
    </div>
  );
}
