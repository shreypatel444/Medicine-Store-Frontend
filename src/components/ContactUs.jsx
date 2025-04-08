import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/ContactUs.css"; // Ensure your CSS is correct
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isUserLoggedIn = localStorage.getItem("token"); // Check login status

    if (!isUserLoggedIn) {
      toast.error("⚠️ Please log in before sending a message!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });

      setTimeout(() => navigate("/login"), 2000); // Redirect after 2s
      return;
    }

    // Validation checks
    if (!formData.firstName || formData.firstName.length < 3) {
      toast.error("⚠️ First Name must be at least 3 characters long!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    if (!formData.lastName || formData.lastName.length < 3) {
      toast.error("⚠️ Last Name must be at least 3 characters long!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });

      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("⚠️ Please enter a valid email address!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      toast.error("⚠️ Phone Number must be exactly 10 digits!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    if (!formData.message.trim()) {
      toast.error("⚠️ Message cannot be empty!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const toastId = toast.success("🎉 Message Sent Successfully!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
          pauseOnHover: true,
          closeOnClick: true,
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => toast.dismiss(toastId), 2000);
        navigate("/");
      } else {
        toast.error("❌ Failed to send message. Try again!", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
        console.log("Failed to send message.", response);
      }
    } catch (error) {
      toast.error("❌ Server error! Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <div className="new_home_web" id="contact">
      <div className="responsive-container-block big-container">
        <img
          className="imgBG"
          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw65.png"
          alt="Background"
        />
        <div className="responsive-container-block textContainer">
          <div className="topHead">
            <p className="text-blk heading">
              Get in
              <span className="orangeText"> touch</span>
            </p>
            <div className="orangeLine" id="w-c-s-bgc_p-2-dm-id"></div>
          </div>
          <p className="text-blk subHeading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="responsive-container-block container">
          <div
            className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line"
            id="i69b"
          >
            <form className="form-box" onSubmit={handleSubmit}>
              <div className="container-block form-wrapper">
                <div className="responsive-container-block">
                  <div className="left4">
                    <div
                      className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                      id="i10mt-2"
                    >
                      <input
                        className="input"
                        id="ijowk-2"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <input
                        className="input"
                        id="indfi-2"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                      <input
                        className="input"
                        id="ipmgh-2"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                      />
                    </div>
                    <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 lastPhone">
                      <input
                        className="input"
                        id="imgis-2"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div
                    className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                    id="i634i-2"
                  >
                    <textarea
                      className="textinput"
                      id="i5vyy-2"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button className="send" type="submit" id="w-c-s-bgc_p-1-dm-id">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
