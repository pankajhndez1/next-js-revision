import React from "react";

const MemoCompB = ({ magicalArr, setMagicalArr }) => {
  const myArr = new Array(300000).fill(0).map((ele, i) => {
    return {
      item: ele + i,
      isMagical: i === 290000,
    };
  });

  console.log(magicalArr, "magicalArr");
  return (
    <div>
      <button className="p-4 rounded-md cursor-pointer bg-red-500 border-2 border-black" onClick={() => setMagicalArr(myArr)}>
        Change Arr
      </button>
    </div>
  );
};

export default MemoCompB;
