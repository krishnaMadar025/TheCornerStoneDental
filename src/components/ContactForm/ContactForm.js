// ContactForm.js
import React, { useState } from "react";
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 if (!formData.name.trim()) {
      alert("Please enter your Name");
      return;
    }
    if (!formData.mobile.trim()) {
      alert("Please enter your Mobile number");
      return;
    }
    if (!formData.service.trim()) {
      alert("Please select a Service");
      return;
    }

    const response = await fetch("http://127.0.0.1:8000/api/send-email/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });  

    if (response.ok) {
      alert("Appointment request sent!");
      setFormData({ name: "", email: "", service: "", mobile: "", message: "" }); // reset
   
    } else {
      alert("Failed to send email.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label>Name<span style={{color: "red"}}>*</span></label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name..."
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="col-lg-6">
          <div className="form-group">
            <label>E-mail Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email address..."
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-group">
            <label>Service<span style={{color: "red"}}>*</span></label>
            <select
              name="service"
              className="form-control"
              value={formData.service}
              onChange={handleChange}
            >
            <option value="">-- Select Service --</option>
            <option>Root Canal</option>            
            <option>Endodontic Surgery</option>
            <option>Digital Impression System</option>
            <option>Advanced Gum Treatment</option>
            <option>Braces And Invisaligners</option>
            <option>Smile Designing</option>
            <option>Veneers And Crowns</option>
            <option>Dental Implant</option>
            <option>Full Mouth Rehabilitation</option>
            <option>Teeth Whitening</option>
            <option>Routine Dental Cleanings</option>
            <option>Extractions</option>
            <option>Gum Disease Treatments</option>
            <option>Teeth Filling</option>
            <option>Children Dentistry</option>
            <option>Dental Jewellery</option>
            </select>
          </div> 
        </div>

        <div className="col-lg-6">
          <div className="form-group">
            <label>Mobile<span style={{color: "red"}}>*</span></label>
            <input
              type ="text"
              name="mobile"
              className="form-control"
              placeholder="Enter your mobile number..."
              rows="3"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
        </div>


        <div className="col-lg-12">
          <div className="form-group">
            <label>Messages</label>
            <textarea
              name="message"
              className="form-control"
              placeholder="Enter your message..."
              rows="3"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <button type="submit" className="btn appointment-btn">
            Book an appointment
          </button>
        </div>

        <div className="col-lg-6">
          <div className="appointment-call">
            <div className='icon'>
              <img src={icon} alt="icon" />
            </div>
            <div className='call-text'>
              <p>Contact Us</p>
              <h6>9845117800</h6>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
