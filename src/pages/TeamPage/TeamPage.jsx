import React from "react";
import "./TeamPage.css";

export default function TeamPage() {
  return (
    <div className="team-section">
      <h2>Meet Our Team</h2>
      <p>
      Our team of skilled nail technicians is dedicated to providing exceptional care and expertise. 
      With years of experience and a passion for creativity, each member delivers flawless manicures, pedicures, and more,
       tailored to suit your unique style and preferences. Click on any nail technician to learn more about their specialties 
       and skills.
      </p>
      <div className="team-cards">
        {[
          {
            name: "Amy",
            specialty: "Acrylic, Gel X, Hard Gel",
            bio: "With 15+ years of experience across five states, Amy is a skilled nail artist known for her precision, creativity, and patience, ensuring clients leave with nails they love.",
          },
          {
            name: "Cindy",
            specialty: "Acrylic, Gel X, Hard Gel",
            bio: "With over 20 years of experience and previous salon ownership, Cindy brings her expert nail artistry skills to our team, helping clients feel confident and beautiful.",
          },
          {
            name: "Helen",
            specialty: "Waxing, Facial, Gel Manicure",
            bio: "With over 20 years of experience across multiple states and salons, Helen is the owner of Queen Nails where her primary focus is ensuring every client's complete satisfaction and happiness.",
          },
          {
            name: "Jenny",
            specialty: "Acrylic",
            bio: "Jenny is a seasoned nail technician with over 10 years of experience, specializing in high-quality nail care and maintenance. She’s known for her friendly demeanor and reliable service, ensuring every client leaves feeling satisfied with their nails.",
          },
          {
            name: "John",
            specialty: "Pedicure",
            bio: "John is an experienced nail technician with over 10 years in the industry, specializing in ingrown toenail removal and pedicures. Known for his expertise and care, he ensures his clients receive top-notch foot care and comfort.",
          },
          {
            name: "Kathy",
            specialty: "Pedicure",
            bio: "Kathy is a skilled nail technician with over 10 years of experience, specializing in ingrown toenail removal and pedicures. She’s dedicated to providing thorough, gentle care to help her clients maintain healthy, happy feet.",
          },
          {
            name: "Kelly",
            specialty: "Pedicure & Massages",
            bio: "Kelly – Manicure, Gel & Pedicure Specialist With over 10 years of experience, Kelly is an expert in manicures, gel nails, and pedicures. She focuses on providing high-quality nail care and a relaxing experience, ensuring every client leaves feeling refreshed and polished.",
          },
          {
            name: "Kimmy",
            specialty: "Acrylic, Hard Gel & Designs",
            bio: "Kimmy is an experienced nail technician with 8 years of expertise in acrylics and nail design, known for her creativity and precision. With a knack for building strong client relationships, she ensures every appointment is not only beautiful but also enjoyable and conversational.",
          },
          {
            name: "Leena",
            specialty: "Acrylic, Hard Gel, Gel X",
            bio: "",
          },
          {
            name: "Mimi",
            specialty: "Pedicure",
            bio: "Mimi is an experienced nail technician with 8 years in the industry, specializing in ingrown toenail treatments and pedicures. Known for her gentle touch and attention to detail, she provides personalized, high-quality care, ensuring every client leaves feeling relaxed and well-cared-for.",
          },
          {
            name: "Tammy",
            specialty: "Pedicure",
            bio: "Tammy is an experienced nail technician with over 10 years in the field, specializing in ingrown toenail treatments and pedicures. She is known for her gentle approach and commitment to providing excellent foot care.",
          },
          
          // Add other team members here...
        ].map((tech, index) => (
          <div className="team-card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <h3>{tech.name}</h3>
                <p className="specialty">Specialty: {tech.specialty}</p>
              </div>
              <div className="card-back">
                <p className="bio">{tech.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
