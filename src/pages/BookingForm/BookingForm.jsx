import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingForm.css";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    nailTech: "",
  });

  const [loading, setLoading] = useState(false);

  const getOperatingHours = (dateStr) => {
    if (!dateStr) return { minTime: "09:00", maxTime: "19:00" };
    const date = new Date(dateStr);
    const day = date.getDay();
    
    if (day === 6) return { minTime: "09:00", maxTime: "18:00" };
    else if (day === 0) return { minTime: "10:00", maxTime: "17:00" };
    else return { minTime: "09:00", maxTime: "19:00" };
  };

  const closedDates = [
    "2025-01-01", "2025-04-20", "2025-05-26", "2025-07-04",
    "2025-09-01", "2025-11-27", "2025-12-25"
  ];

  const nailTechSchedules = {
    "Amy": [0, 1, 4, 5, 6],    // Sun, Mon, Thu, Fri, Sat
    "Leena": [2, 3, 4, 5, 6],  // Tue, Wed, Thu, Fri, Sat
    "Kimmy": [2, 4, 6],        // Tue, Thu, Sat
    "Cindy": [1, 2, 3, 4],     // Mon-Thu
    "Jenny": [5, 6],           // Fri, Sat
    "Helen": [0, 1, 3, 5],     // Sun, Mon, Wed, Fri
    "Mimi": [2, 4, 6],         // Tue, Thu, Sat
    "Tammy": [1, 2, 3],        // Mon-Wed
    "Kelly": [4, 5, 6],        // Thu-Sat
    "Kathy": [0, 1, 2, 5, 6],  // Sun, Mon, Tue, Fri, Sat
    "John": [3, 4, 5]          // Wed-Fri
  };

  const isSalonClosed = (dateStr) => closedDates.includes(dateStr);

  const getAvailableNailTechs = (dateStr) => {
    if (!dateStr || isSalonClosed(dateStr)) return [];
    const date = new Date(dateStr);
    const day = date.getDay();
    return Object.keys(nailTechSchedules).filter(tech => 
      nailTechSchedules[tech].includes(day)
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "time") {
      const { minTime, maxTime } = getOperatingHours(formData.date);
      if (value < minTime || value > maxTime) {
        alert(`Please select a time between ${minTime} and ${maxTime} for this day!`);
        return;
      }
    }
    if (name === "nailTech" && value) {
      const availableTechs = getAvailableNailTechs(formData.date);
      if (!availableTechs.includes(value)) {
        const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(formData.date).getDay()];
        alert(`${value} is not available on ${dayName}. Please choose another nail tech.`);
        return;
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    if (!date) {
      setFormData({ ...formData, date: "", time: "", nailTech: "" });
      return;
    }
    const dateStr = date.toISOString().split("T")[0];
    if (isSalonClosed(dateStr)) {
      alert("The salon is closed on this date. Please select a different date.");
      return;
    }
    setFormData({ ...formData, date: dateStr, time: "", nailTech: "" });
  };

  const validateTime = (time, dateStr) => {
    if (!time || !dateStr) return false;
    const { minTime, maxTime } = getOperatingHours(dateStr);
    return time >= minTime && time <= maxTime;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.date) {
      alert("Please select a date!");
      return;
    }
    if (isSalonClosed(formData.date)) {
      alert("Sorry, the salon is closed on this date!");
      return;
    }
    if (!formData.time || !validateTime(formData.time, formData.date)) {
      const { minTime, maxTime } = getOperatingHours(formData.date);
      const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(formData.date).getDay()];
      alert(`Please select a time between ${minTime} and ${maxTime} for ${dayName}!`);
      return;
    }
    const availableTechs = getAvailableNailTechs(formData.date);
    if (!formData.nailTech || !availableTechs.includes(formData.nailTech)) {
      alert("Please select a nail tech available on this day!");
      return;
    }
    setLoading(true);
    const scriptURL = "https://script.google.com/macros/s/AKfycbzprJMpzuk8yQg9wRFhkzXvwRm43FSnJtJKiHX4DX2CnNfTTvdpaD5aNa1SleEzqQ8W/exec";
    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Appointment booked successfully!");
      setFormData({ name: "", phone: "", date: "", time: "", nailTech: "" });
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const availableNailTechs = getAvailableNailTechs(formData.date);
  const { minTime, maxTime } = getOperatingHours(formData.date);

  return (
    <div className="booking-container">
      <h2>Book Your Appointment</h2>
      <p>Hours: Mon-Fri 9:00 AM - 7:00 PM, Sat 9:00 AM - 6:00 PM, Sun 10:00 AM - 5:00 PM</p>
      <p>Closed: New Year's Day, Easter, Memorial Day, 4th of July, Labor Day, Thanksgiving, Christmas</p>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />

        <label>Phone Number:</label>
        <input 
          type="tel" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
        />

        <label>Date:</label>
        <DatePicker
          selected={formData.date ? new Date(formData.date) : null}
          onChange={handleDateChange}
          minDate={new Date()}
          filterDate={(date) => !closedDates.includes(date.toISOString().split("T")[0])}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select a date"
          required
        />

        <label>Time:</label>
        <input 
          type="time" 
          name="time" 
          value={formData.time} 
          onChange={handleChange} 
          min={minTime}
          max={maxTime}
          step="1800"
          required 
          disabled={!formData.date || isSalonClosed(formData.date)}
        />

        <label>Choose Your Nail Tech:</label>
        <select 
          name="nailTech" 
          value={formData.nailTech} 
          onChange={handleChange} 
          required
          disabled={!formData.date || isSalonClosed(formData.date)}
          className="nail-tech-select" // Added class for styling
        >
          <option value="" disabled>
            {availableNailTechs.length > 0 ? "Select a nail tech" : "No nail techs available"}
          </option>
          {availableNailTechs.map(tech => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>

        <button 
          type="submit" 
          className="submit-btn" 
          disabled={loading || !formData.date || isSalonClosed(formData.date)}
        >
          {loading ? "Booking..." : "Submit Appointment"}
        </button>
      </form>
    </div>
  );
}