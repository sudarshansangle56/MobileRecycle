import React from "react";
import { useNavigate } from "react-router-dom";

function Phonecard({ link, desc }) {
  const navigate = useNavigate(); // React Router navigation hook

  const handleCardClick = () => {
    navigate("/sell"); // Navigate to the sell page
  };

  return (
    <div className="card" style={{ width: "18rem", height: "270px", cursor: "pointer" }} onClick={handleCardClick}>
      <img className="card-img-top" src={link} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
}

export default Phonecard;
