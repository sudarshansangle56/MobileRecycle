import React from "react";
import Carousel from "./Carousel";
import  { useState, useEffect } from "react";
import Work from "./Work";
import Categ from "./Categ";
import VIsion from "./VIsion";
import Footer from "./Footer";

function Front() {
  const texts = [
    "Securely & Sustainably!",
    "Responsibly & Efficiently!",
    "Safely & Smartly!",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Change text
        setFade(true); // Start fade-in effect
      }, 700); // Wait for fade-out before changing text
    }, 8000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="ok">
        <div className="">
        <img
          src="/bgremove.png"
           className="rotating-image"
          alt="Recycle Logo"
          style={{ width: "90px", height: "90px" }}
        />
          <h1>
            Recycle Your E-Waste <br />
            <span className={`animated-text ${fade ? "fade-in" : "fade-out"}`}>
              {texts[index]}
            </span>
          </h1>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
      <Work />
      <Categ />
      <VIsion />
    </div>
  );
}

export default Front;
