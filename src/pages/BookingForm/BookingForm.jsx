import React, { useState, useEffect } from "react";
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
  const [bookings, setBookings] = useState([]);

  const scriptURL = "https://script.google.com/macros/s/AKfycbzprJMpzuk8yQg9wRFhkzXvwRm43FSnJtJKiHX4DX2CnNfTTvdpaD5aNa1SleEzqQ8W/exec";

  useEffect(() => {
    fetch(scriptURL, { method: "GET" })
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error("Error fetching bookings:", error));
  }, []);

  const getOperatingHours = (dateStr) => {
    if (!dateStr) return { minTime: "09:00", maxTime: "18:00" }; // Default Mon-Fri
    const date = new Date(dateStr);
    const day = date.getDay();
    if (day === 6) return { minTime: "09:00", maxTime: "17:00" }; // Saturday: 9 AM - 5 PM
    else if (day === 0) return { minTime: "10:00", maxTime: "16:00" }; // Sunday: 10 AM - 4 PM
    else return { minTime: "09:00", maxTime: "18:00" }; // Mon-Fri: 9 AM - 6 PM
  };

  // Generate time slots with half-hour intervals in 12-hour format
  const getTimeSlots = (dateStr) => {
    const { minTime, maxTime } = getOperatingHours(dateStr);
    const minHour = parseInt(minTime.split(":")[0], 10);
    const maxHour = parseInt(maxTime.split(":")[0], 10);
    const slots = [];
    
    for (let hour = minHour; hour <= maxHour; hour++) {
      const period = hour < 12 ? "AM" : "PM";
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      
      // Full hour (e.g., 9:00 AM)
      slots.push(`${displayHour}:00 ${period}`);
      
      // Half hour (e.g., 9:30 AM), but only if within maxTime
      if (hour < maxHour || (hour === maxHour && maxTime.endsWith(":30"))) {
        slots.push(`${displayHour}:30 ${period}`);
      }
    }
    
    return slots;
  };

  const getClosedDates = (year) => {
    const dates = [
      `${year}-01-01`,
      `${year}-07-04`,
      `${year}-12-25`,
    ];
    const may = new Date(year, 4, 31);
    while (may.getDay() !== 1) may.setDate(may.getDate() - 1);
    dates.push(`${year}-05-${String(may.getDate()).padStart(2, "0")}`);
    const sept = new Date(year, 8, 1);
    while (sept.getDay() !== 1) sept.setDate(sept.getDate() + 1);
    dates.push(`${year}-09-${String(sept.getDate()).padStart(2, "0")}`);
    const nov = new Date(year, 10, 1);
    let thursdays = 0;
    while (thursdays < 4) {
      if (nov.getDay() === 4) thursdays++;
      if (thursdays < 4) nov.setDate(nov.getDate() + 1);
    }
    dates.push(`${year}-11-${String(nov.getDate()).padStart(2, "0")}`);
    const easter = new Date(year, 3, 1);
    while (easter.getDay() !== 0) easter.setDate(easter.getDate() + 1);
    dates.push(`${year}-04-${String(easter.getDate()).padStart(2, "0")}`);
    return dates;
  };

  const closedDates = [];
  for (let year = 2025; year <= 2030; year++) {
    closedDates.push(...getClosedDates(year));
  }

  const nailTechSchedules = {
    "Amy": [1, 4, 5, 6],
    "Leena": [2, 3, 4, 5, 6],
    "Kimmy": [5, 6, 0, 1],
    "Cindy": [1, 2, 3, 4],
    "Jenny": [5, 6],
    "Helen": [0, 1, 2, 3, 4, 5, 6],
    "Mimi": [5],
    "Tammy": [1, 2, 3],
    "Kelly": [4, 5, 6],
    "Kathy": [0, 1, 2, 5, 6],
    "John": [6, 0]
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

  const isDoubleBooked = (date, time, nailTech) => {
    return bookings.some(booking => 
      booking.date === date && 
      booking.time === time && 
      booking.nailTech === nailTech
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "time") {
      if (formData.nailTech && isDoubleBooked(formData.date, value, formData.nailTech)) {
        alert("This time slot is already booked for the selected nail tech. Please choose a different time.");
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
      if (formData.time && isDoubleBooked(formData.date, formData.time, value)) {
        alert("This time slot is already booked for the selected nail tech. Please choose a different time or tech.");
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
    const [hour, minute] = time.split(" ")[0].split(":");
    const period = time.split(" ")[1];
    let hour24 = parseInt(hour, 10);
    if (period === "PM" && hour24 !== 12) hour24 += 12;
    if (period === "AM" && hour24 === 12) hour24 = 0;
    const time24 = `${String(hour24).padStart(2, "0")}:${minute}`;
    return time24 >= minTime && time24 <= maxTime;
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
    if (isDoubleBooked(formData.date, formData.time, formData.nailTech)) {
      alert("This time slot is already booked for the selected nail tech. Please choose a different time or tech.");
      return;
    }

    setLoading(true);
    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Appointment booked successfully!");
      setBookings([...bookings, { date: formData.date, time: formData.time, nailTech: formData.nailTech }]);
      setFormData({ name: "", phone: "", date: "", time: "", nailTech: "" });
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const availableNailTechs = getAvailableNailTechs(formData.date);
  const timeSlots = formData.date ? getTimeSlots(formData.date) : [];

  return (
    <div className="booking-container">
      <h2>Book Your Appointment</h2>
      <p>Mon - Fri 9:00 AM - 7:00 PM </p>
      <p>Sat 9:00 AM - 6:00 PM </p>
      <p> Sun 10:00 AM - 5:00 PM</p>
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
          dateFormat="MMMM d, yyyy"
          placeholderText="Select a date"
          required
        />
        <label>Time:</label>
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          disabled={!formData.date || isSalonClosed(formData.date)}
        >
          <option value="" disabled>Select a time</option>
          {timeSlots.map(slot => (
            <option key={slot} value={slot}>{slot}</option>
          ))}
        </select>
        <label>Choose Your Nail Tech:</label>
        <select 
          name="nailTech" 
          value={formData.nailTech} 
          onChange={handleChange} 
          required
          disabled={!formData.date || isSalonClosed(formData.date)}
          className="nail-tech-select"
        >
          <option value="" disabled>
            {availableNailTechs.length > 0 ? "Select a nail tech" : "No nail techs available"}
          </option>
          {availableNailTechs.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
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