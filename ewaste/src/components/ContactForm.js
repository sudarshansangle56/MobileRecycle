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
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully to the company!");

    const existingData = JSON.parse(localStorage.getItem("submittedForms")) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem("submittedForms", JSON.stringify(updatedData));

    setFormData({
      name: "",
      email: "",
      contact: "",
      productType: "",
      productCompany: "",
      purchaseDate: "",
      price: "",
    });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1 d-flex align-items-center justify-content-center bg-light p-4">
        <div
          className="container p-4 rounded"
          style={{ width: "85%", backgroundColor: "white" }} // White background
        >
          <h1 className="text-center mb-4">E-Waste Submission Form</h1>
          <form onSubmit={handleSubmit}>
            {/* Customer Name */}
            <div className="mb-3 text-center">
              <label className="form-label">Customer Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control mx-auto border border-primary" // Blue border
                placeholder="Enter your name"
                required
                style={{ width: "60%" }}
              />
            </div>

            {/* Email Address */}
            <div className="mb-3 text-center">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control mx-auto border border-primary"
                placeholder="Enter your email"
                required
                style={{ width: "60%" }}
              />
            </div>

            {/* Contact Number */}
            <div className="mb-3 text-center">
              <label className="form-label">Contact Number</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="form-control mx-auto border border-primary"
                placeholder="Enter your contact number"
                required
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit phone number"
                style={{ width: "60%" }}
              />
            </div>

            {/* Product Type */}
            <div className="mb-3 text-center">
              <label className="form-label">Product Type</label>
              <select
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                className="form-select mx-auto border border-primary"
                required
                style={{ width: "60%" }}
              >
                <option value="">Select Product Type</option>
                <option>Laptop</option>
                <option>Mobile</option>
                <option>Tablet</option>
                <option>TV</option>
                <option>Watch</option>
                <option>Other</option>
              </select>
            </div>

            {/* Product Company */}
            <div className="mb-3 text-center">
              <label className="form-label">Product Company</label>
              <select
                name="productCompany"
                value={formData.productCompany}
                onChange={handleChange}
                className="form-select mx-auto border border-primary"
                required
                style={{ width: "60%" }}
              >
                <option value="">Select Company</option>
                <option>Apple</option>
                <option>Samsung</option>
                <option>Dell</option>
                <option>HP</option>
                <option>Other</option>
              </select>
            </div>

            {/* Date of Purchase */}
            <div className="mb-3 text-center">
              <label className="form-label">Date of Purchase</label>
              <input
                type="date"
                name="purchaseDate"
                value={formData.purchaseDate}
                onChange={handleChange}
                className="form-control mx-auto border border-primary"
                required
                style={{ width: "60%" }}
              />
            </div>

            {/* Original Price */}
            <div className="mb-3 text-center">
              <label className="form-label">Original Price (INR)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="form-control mx-auto border border-primary"
                placeholder="Enter price in INR"
                required
                s style={{ width: "60%" }}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ContactForm;
