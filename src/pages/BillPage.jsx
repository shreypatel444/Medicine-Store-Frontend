import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../style/BillPage.css";

const InvoicePage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const navigate = useNavigate();
  const companyName = "PharmaNet Pvt Ltd";  
  const todayDate = new Date().toLocaleDateString();
  const invoiceNumber = Math.floor(100000 + Math.random() * 900000); // Random Invoice Number

  const generatePDF = () => {
    const invoice = document.getElementById("invoice-content");
    html2canvas(invoice, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      
      // Title and Company Header
      pdf.setFontSize(18);
      pdf.text(companyName, 14, 20);
      pdf.setFontSize(12);
      pdf.text(`Invoice No: #${invoiceNumber}`, 14, 30);
      pdf.text(`Date: ${todayDate}`, 14, 38);
      pdf.line(10, 42, 200, 42); // Horizontal Line

      // Add Image of Invoice
      pdf.addImage(imgData, "PNG", 10, 45, 190, 0);
      
      // Footer
      pdf.setFontSize(10);
      pdf.text("Thank you for your purchase!", 14, 280);
      pdf.text("PharmaNet Pvt Ltd, Address: XYZ Street, City, 123456", 14, 285);
      
      pdf.save(`Invoice_${invoiceNumber}.pdf`);
    });
  };

  return (
    <div className="invoice-container">
      <div id="invoice-content" className="invoice-box">
        <h2 className="company-name">{companyName}</h2>
        <p>Invoice No: <strong>#{invoiceNumber}</strong></p>
        <p>Date: {todayDate}</p>
        <hr />
        <h3>Invoice</h3>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price}</td>
                <td>₹{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Total: ₹{totalPrice}</h3>
      </div>

      <button className="invoice-download-btn" onClick={generatePDF}>
        📄 Download Invoice
      </button>
      <button className="invoice-back-btn" onClick={() => navigate("/")}>
        🏠 Back to Home
      </button>
    </div>
  );
};

export default InvoicePage;
