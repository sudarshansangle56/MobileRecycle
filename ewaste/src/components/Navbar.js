import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <a class="navbar-brand" href="#">
          EcoRestore
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          <Link className="nav-link" to="/">
                Home
              </Link>
            <li className="nav-item flex">
             
              <Link className="nav-link" to="/sell">
                Recycle
              </Link>
            </li>
            <li className="nav-item flex">
             
             <Link className="nav-link" to="/admin">
               Admin
             </Link>
           </li>
           <li className="nav-item flex">
             
             <Link className="nav-link" to="/login">
               Login
             </Link>
           </li>
          
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
