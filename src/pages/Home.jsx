import React from "react";
import Navbar from "../components/Navbar";
import Gallary from "../components/Gallary";
import Card from "../components/Card";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Gallary />
      <AboutUs />
      <Card />
      <ContactUs />
      <Footer />
    </>
  );
}
