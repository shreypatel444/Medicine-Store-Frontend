import { useState,useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import pic8 from "../assets/pic8.jpg";
import pic9 from "../assets/pic9.jpg";
import pic10 from "../assets/pic10.jpg";
import pic11 from "../assets/pic11.jpg";
import pic12 from "../assets/pic12.jpg";
import "../style/Gallary.css";

const images = [pic3, pic2, pic1, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isMobile, currentIndex]);

  return (
    <div className="gallery-container">
      <img
        src={isMobile ? images[0] : images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="gallery-image"
      />
      {!isMobile && (
        <>
          <button onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))} className="gallery-button left">
            <FiChevronLeft size={32} />
          </button>
          <button onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))} className="gallery-button right">
            <FiChevronRight size={32} />
          </button>
        </>
      )}
    </div>
  );
};

export default PhotoGallery;
