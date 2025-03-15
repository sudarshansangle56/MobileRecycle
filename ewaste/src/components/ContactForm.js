import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    productType: "",
    productCompany: "",
    purchaseDate: "",
    price: "",
    imei: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          productType: "",
          productCompany: "",
          purchaseDate: "",
          price: "",
          imei: "",
        });
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1 d-flex align-items-center justify-content-center bg-light p-4">
        <div className="container p-4 rounded" style={{ width: "85%", backgroundColor: "white" }}>
          <h1 className="text-center mb-4">E-Waste Submission Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-center">
              <label className="form-label">Customer Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control mx-auto border border-primary" placeholder="Enter your name" required style={{ width: "60%" }} />
            </div>

            <div className="mb-3 text-center">
              <label className="form-label">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control mx-auto border border-primary" placeholder="Enter your email" required style={{ width: "60%" }} />
            </div>

            <div className="mb-3 text-center">
              <label className="form-label">Contact Number</label>
              <input type="tel" name="contact" value={formData.contact} onChange={handleChange} className="form-control mx-auto border border-primary" placeholder="Enter your contact number" required pattern="[0-9]{10}" title="Enter a valid 10-digit phone number" style={{ width: "60%" }} />
            </div>

            <div className="mb-3 text-center">
              <label className="form-label">Product Type</label>
              <select name="productType" value={formData.productType} onChange={handleChange} className="form-select mx-auto border border-primary" required style={{ width: "60%" }}>
                <option value="">Select Product Type</option>
                <option>Laptop</option>
                <option>Mobile</option>
                <option>Tablet</option>
                <option>TV</option>
                <option>Watch</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mb-3 text-center">
              <label className="form-label">Product Company</label>
              <select name="productCompany" value={formData.productCompany} onChange={handleChange} className="form-select mx-auto border border-primary" required style={{ width: "60%" }}>
                <option value="">Select Company</option>
                <option>Apple</option>
                <option>Samsung</option>
                <option>Dell</option>
                <option>HP</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mb-3 text-center">
              <label className="form-label">Date of Purchase</label>
              <input type="date" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} className="form-control mx-auto border border-primary" required style={{ width: "60%" }} />
            </div>

            <div className="mb-3 text-center">
              <label className="form-label">IMEI Number (Optional)</label>
              <input type="text" name="imei" value={formData.imei} onChange={handleChange} className="form-control mx-auto border border-primary" placeholder="Enter IMEI number (if available)" style={{ width: "60%" }} />
            </div>

            <div className="mb-3 text-center">
              <label className="form-label">Original Price (INR)</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} className="form-control mx-auto border border-primary" placeholder="Enter price in INR" required style={{ width: "60%" }} />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4">Submit</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ContactForm;
