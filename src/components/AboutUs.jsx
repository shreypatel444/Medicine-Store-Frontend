import React from "react";
import "../style/AboutUs.css";
import logoAboutUs from "../assets/logoAboutUs.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-container" id="about">
      <h1 className="about-us-title">About Us</h1>
      <div className="about-us-content">
        <div className="about-us-text">
          <p>
            Welcome to Medicine Store, your trusted online destination for
            high-quality and affordable medicines. We believe in providing our
            customers with easy access to a wide range of pharmaceutical
            products that can help them lead healthier and happier lives.
          </p>
          <p>
            At Medicine Store, we strive to offer you the best shopping
            experience by offering a user-friendly interface, fast delivery, and
            great customer support. Our extensive collection of products
            includes over-the-counter medications, prescription drugs, wellness
            products, and more. We work with reputable suppliers and trusted
            brands to ensure the quality and authenticity of every item.
          </p>
        </div>
        <div className="about-us-image">
          <img src={logoAboutUs} alt="Medicine Store" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
