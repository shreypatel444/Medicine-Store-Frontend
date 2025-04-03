import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import qrcode from "../assets/qrcode.png";
import "../style/PaymentPage.css";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          navigate("/bill");
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `00:${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="payment-container">
      <h2>Scan QR Code to Pay</h2>
      <div className="qr-code-container">
        <img src={qrcode} alt="QR Code" className="qr-code" />
      </div>
      <p className="timer-text">Redirecting in {formatTime(timeLeft)}</p>
    </div>
  );
};

export default PaymentPage;