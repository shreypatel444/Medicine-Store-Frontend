import React from "react";
import "../style/CategoryCon.css"; 
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";

const HealthSections = () => {
    const sections = [
        { id: 1, name: "Diabetes", image: pic1 },
        { id: 2, name: "Cold & Flu", image: pic2 },
        { id: 3, name: "Heart Care", image: pic3 },
        { id: 4, name: "Skin Care", image: pic4 },
        { id: 5, name: "Pain Relief", image: pic2 },
        { id: 6, name: "Allergy", image: pic1 },
        { id: 7, name: "Digestive Health", image: pic3 },
        { id: 8, name: "Eye Care", image: pic2 },
        { id: 9, name: "Oral Care", image: pic4 },
        { id: 10, name: "Bone & Joint Health", image: pic1 },
        { id: 11, name: "Mental Wellness", image: pic3 },
        { id: 12, name: "Liver Care", image: pic2 },
        { id: 13, name: "Kidney Health", image: pic4 },
        { id: 14, name: "Women’s Health", image: pic1 },
        { id: 15, name: "Men’s Health", image: pic2 },
        { id: 16, name: "Respiratory Health", image: pic3 },
        { id: 17, name: "Immunity Boosters", image: pic4 },
        { id: 18, name: "Weight Management", image: pic2 },
        { id: 19, name: "Energy & Stamina", image: pic1 },
        { id: 20, name: "Hair Care", image: pic3 },
    ];
    

  const handleSectionClick = (name) => {
    alert(`Showing medicines for ${name}`);
  };

  return (
    <div className="health-container">
      <h2 className="health-title">Health Sections</h2>
      <div className="health-grid">
        {sections.map((section) => (
          <div key={section.id} className="health-card">
            <img
              src={section.image}
              alt={section.name}
              className="health-image"
            />
            <h3 className="health-name">{section.name}</h3>
            <button
              className="health-btn"
              onClick={() => handleSectionClick(section.name)}
            >
              View Medicines
            </button>
          </div>
        ))}
      </div>

      <div className="home-container">
        <button className="home-btn" onClick={() => (window.location.href = "/")}>
          Go Home
          <div className="arrow-box">
            <div className="arrow-icon"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HealthSections;
