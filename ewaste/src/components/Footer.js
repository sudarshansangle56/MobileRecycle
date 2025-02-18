import React from "react";

function Footer() {
  return (
    <footer
      className="d-flex flex-column align-items-center justify-content-center border-top"
      style={{ height: "390px", backgroundColor: "rgb(244, 207, 207)" }}
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
        <div className="mx-3">
          <h5>Quick Links</h5>
          <ul className="nav flex-column">
            <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>

        <div className="mx-3">
          <h5>Support</h5>
          <ul className="nav flex-column">
            <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Contact Us</a></li>
            <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Help Center</a></li>
            <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Terms of Service</a></li>
          </ul>
        </div>

        <div className="mx-3">
          <h5>Follow Us</h5>
          <ul className="nav flex-column">
            <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Facebook</a></li>
            <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">Instagram</a></li>
            <li className="nav-item"><a href="#" className="nav-link p-0 text-muted">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-muted mt-4">© {new Date().getFullYear()}  EcoRestore</p>
    </footer>
  );
}

export default Footer;
