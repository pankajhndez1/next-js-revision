import React from "react";

const MealsLayout = ({ children }) => {
  return (
    <div>
      <h1>MealsLayout</h1>
      <div className="bg-gray-600">{children}</div>
    </div>
  );
};

export default MealsLayout;
