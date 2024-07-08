import React from "react";

const Header = () => {
  return (
    <div className="relative z-[-1]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          <div>
            <h1>Fresh & Healthy Meal Plan Delivery in Miami</h1>
            <p>Delicious Meals Delivered to Your Door From $132.95 per week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
