import React, { memo } from "react";

const CompA = ({ car, getStringVal }) => {
  return (
    <div>
      CompA {car} {getStringVal()}
    </div>
  );
};

export default memo(CompA);
