import React from "react";
import Phonecard from "./Phonecard";

function Categ() {
  return (
    <div className="cate">
      <div className="head">
        <h2>Sell Your Old Device Now</h2>
      </div>

      <div className="cardcall">
        <Phonecard
          link="https://s3no.cashify.in/builder/cd13764b153e46e19f9c6551ee52b5e6.webp?p=default&s=lg"
          desc="Get the Best Value for Your Old Phone! Trade Now."
        />
        <Phonecard
          link="https://s3no.cashify.in/builder/e6ba507509994216936925bdfeb6cfa8.webp?p=default&s=lg"
          desc="Upgrade & Sell Your Old Laptop for Instant Cash!"
        />
        <Phonecard
          link="https://s3no.cashify.in/builder/1a1126c5c49f47b29cbb3aa63e6b385e.webp?p=default&s=lg"
          desc="Turn Your Old TV into Cash Today!"
        />
        <Phonecard
          link="https://s3no.cashify.in/builder/a12ac14b386b4b5286d424a83db4cad5.webp?p=default&s=lg"
          desc="Exchange Your Old Tablet for the Best Price!"
        />
        <Phonecard
          link="https://s3no.cashify.in/builder/b6a95f2838184c9889711ea20f6ff468.webp?p=default&s=lg"
          desc="Sell Your Old Smartwatch & Upgrade Easily!"
        />
        <Phonecard
          link="https://s3no.cashify.in/builder/bdd27d377ce34bb0b73c8f1b4a860bbd.webp?p=default&s=lg"
          desc="Trade Your Camera for Best Deal!"
        />
        <Phonecard
          link="https://s3no.cashify.in/builder/d5a0ca0dd00e4291939f33651efcc942.webp?p=default&s=lg"
          desc="Sell Your Old Earphones & Upgrade to the Latest Sound!"
        />
        <Phonecard
          link="https://s3no.cashify.in/builder/a7c5f3ad01c64ab285a5b6bb019b47e1.webp?p=default&s=lg"
          desc="Recycle Your Old Washing Machine for Instant Money!"
        />
      </div>
    </div>
  );
}

export default Categ;
