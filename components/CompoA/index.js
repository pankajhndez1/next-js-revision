import React, { memo } from "react";

const CompA = ({ car, getStringVal }) => {
  console.log("I am Comp AAAA");
  return (
    <div>
      CompA {car} {getStringVal()}
    </div>
  );
};

export default memo(CompA);
