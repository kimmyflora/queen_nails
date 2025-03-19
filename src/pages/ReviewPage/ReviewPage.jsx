import React, { useState, useEffect } from "react";
import "./ReviewPage.css";

export default function ReviewPage() {
  const [formData, setFormData] = useState({
    nailTech: "",
    rating: 0,
    comment: "",
    name: ""
  });
  const [reviews, setReviews] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const adminPassword = "Queennails2014"; // Your password

  const nailTechs = ["Amy", "Leena", "Kimmy", "Cindy", "Jenny", "Helen", "Mimi", "Tammy", "Kelly", "Kathy", "John"];

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("nailTechReviews") || "[]");
    console.log("Loaded reviews:", storedReviews); // Log initial reviews
    setReviews(storedReviews);
    const adminCheck = localStorage.getItem("isAdmin");
    if (!adminCheck) {
      const password = prompt("Enter admin password (leave blank if not admin):");
      console.log("Password entered:", password); // Log password attempt
      if (password === adminPassword) {
        setIsAdmin(true);
        localStorage.setItem("isAdmin", "true");
        console.log("Admin authenticated");
      }
    } else if (adminCheck === "true") {
      setIsAdmin(true);
      console.log("Admin already authenticated");
    }
  }, []);

  const handleStarClick = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nailTech || formData.rating === 0) {
      alert("Please select a nail tech and provide a rating!");
      return;
    }

    const newReview = {
      ...formData,
      name: formData.name || "Anonymous",
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    };
    const updatedReviews = [...reviews, newReview];
    console.log("Submitting review:", newReview); // Log new review
    setReviews(updatedReviews);
    localStorage.setItem("nailTechReviews", JSON.stringify(updatedReviews));
    setSubmitted(true);
    setFormData({ nailTech: "", rating: 0, comment: "", name: "" });
  };

  const handleDelete = (id) => {
    console.log("Attempting to delete review with ID:", id); // Log delete attempt
    if (!isAdmin) {
      alert("Only the admin can delete reviews!");
      console.log("Delete blocked: Not admin");
      return;
    }
    if (window.confirm("Are you sure you want to delete this review?")) {
      const updatedReviews = reviews.filter(review => review.id !== id);
      console.log("Updated reviews after deletion:", updatedReviews); // Log after filter
      setReviews(updatedReviews);
      localStorage.setItem("nailTechReviews", JSON.stringify(updatedReviews));
      console.log("Reviews saved to localStorage:", JSON.parse(localStorage.getItem("nailTechReviews"))); // Log saved state
    }
  };

  const groupedReviews = nailTechs.reduce((acc, tech) => {
    acc[tech] = reviews
      .filter(review => review.nailTech === tech)
      .sort((a, b) => b.id - a.id);
    return acc;
  }, {});

  const getAverageRating = (tech) => {
    const techReviews = groupedReviews[tech];
    if (!techReviews || techReviews.length === 0) return 0;
    const totalRating = techReviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / techReviews.length).toFixed(1);
  };

  const renderAverageStars = (average) => {
    const fullStars = Math.floor(average);
    const hasHalfStar = average % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="star half-filled">★</span>);
      } else {
        stars.push(<span key={i} className="star">★</span>);
      }
    }
    return stars;
  };

  return (
    <div className="review-container">
      <section className="review-hero">
        <h1>Client Reviews</h1>
        <p>Share your experience with our talented nail techs—every good review helps them earn a small bonus and makes us sparkle! 🌟</p>
      </section>

      <section className="review-form-section">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="review-form">
            <h2>Leave a Review</h2>
            <div className="form-group">
              <label>Nail Technician:</label>
              <select name="nailTech" value={formData.nailTech} onChange={handleChange} required>
                <option value="" disabled>Select a nail tech</option>
                {nailTechs.map(tech => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Rating:</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map(star => (
                  <span
                    key={star}
                    className={`star ${formData.rating >= star ? "filled" : ""}`}
                    onClick={() => handleStarClick(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Comment:</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Tell us about your experience..."
                rows="5"
              />
            </div>

            <div className="form-group">
              <label>Your Name (optional):</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Leave blank to stay anonymous"
              />
            </div>

            <button type="submit" className="submit-btn">Submit Review</button>
          </form>
        ) : (
          <div className="thank-you">
            <h2>Thank You!</h2>
            <p>Your review has been added below—your kind words help our nail techs earn a bonus! Want to share more feedback?</p>
            <button onClick={() => setSubmitted(false)} className="submit-btn">Add Another Review</button>
          </div>
        )}
      </section>

      <section className="reviews-display">
        <h2>All Reviews</h2>
        <div className="reviews-grid">
          {nailTechs.map(tech => (
            <div key={tech} className="tech-reviews">
              <div className="tech-header">
                <h3>{tech}</h3>
                <div className="average-rating">
                  <span>Avg: {getAverageRating(tech)} </span>
                  {renderAverageStars(getAverageRating(tech))}
                </div>
              </div>
              {groupedReviews[tech]?.length > 0 ? (
                groupedReviews[tech].map((review) => (
                  <div key={review.id} className="review-card">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? "star filled" : "star"}>★</span>
                      ))}
                    </div>
                    <p className="comment">{review.comment || "No comment provided."}</p>
                    <p className="reviewer">— {review.name} <span className="review-date">({review.date})</span></p>
                    {isAdmin && (
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(review.id)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p className="no-reviews">No reviews yet for {tech}. Be the first!</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}