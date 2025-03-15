import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="d-flex flex-column align-items-center justify-content-center border-top text-white"
      style={{ height: "390px", backgroundColor: "rgb(37, 134, 66,0.77)" }}
    > 
      {/* Logo Section */}
      <div className="mb-3">
        <img
          src="/bgremove.png"
          alt="Recycle Logo"
          className="rotating-image"
          style={{ width: "170px", height: "170px" }}
        />
      </div>

      {/* Navigation Links */}
      <div className="d-flex flex-wrap justify-content-center w-100 text-center">
        <div className="mx-4">
          <h5 className="fs-5">Quick Links</h5>
          <ul className="nav flex-column">
            <li className="nav-item"><Link to="/" className="nav-link p-0 text-white fs-6">Home</Link></li>
            <li className="nav-item"><Link to="/vision" className="nav-link p-0 text-white fs-6">Vision</Link></li>
            <li className="nav-item"><Link to="/sell" className="nav-link p-0 text-white fs-6">Sell</Link></li>
          </ul>
        </div>

        <div className="mx-4">
          <h5 className="fs-5">Support</h5>
          <ul className="nav flex-column">
            <li className="nav-item"><Link to="/admin" className="nav-link p-0 text-white fs-6">Admin</Link></li>
            <li className="nav-item"><Link to="/login" className="nav-link p-0 text-white fs-6">Login</Link></li>
            <li className="nav-item"><a href="#" className="nav-link p-0 text-white fs-6">Help Center</a></li>
          </ul>
        </div>

        <div className="mx-4">
          <h5 className="fs-5">Follow Us</h5>
          <ul className="nav flex-column">
            <li className="nav-item"><a href="#" className="nav-link p-0 text-white fs-6">Facebook</a></li>
            <li className="nav-item"><a href="#" className="nav-link p-0 text-white fs-6">Instagram</a></li>
            <li className="nav-item"><a href="#" className="nav-link p-0 text-white fs-6">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-white mt-4 fs-6">© {new Date().getFullYear()} EcoRestore</p>
    </footer>
  );
}

export default Footer;
