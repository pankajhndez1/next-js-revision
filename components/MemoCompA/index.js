import React from "react";

const MemoCompA = ({ count, handleCount }) => {
  return (
    <div>
      <div className="bg-red-500">
        <h1 className="bg-blue-500">{count}</h1>
        <button
          className="border-2 bg-yellow-500 rounded-md p-3 cursor-pointer"
          onClick={handleCount}
        >
          inc count
        </button>
      </div>
    </div>
  );
};

export default MemoCompA;
