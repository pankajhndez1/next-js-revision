"use client";
import MemoCompA from "@/components/MemoCompA";
import MemoCompB from "@/components/MemoCompB";
import React, { useMemo, useState } from "react";

// Corrected: i === 290000 to actually match one item
const myArr = new Array(300000).fill(0).map((ele, i) => {
  return {
    item: ele + i,
    isMagical: i === 290000,
  };
});

const MemoHookExample = () => {
  const [count, setCount] = useState(0);
  const [magicalArr, setMagicalArr] = useState(myArr);

  const handleCount = () => setCount((prev) => prev + 1);

  // Memoized check for isMagical === true
  const checkIfNumberIs2900K = useMemo(
    () => magicalArr?.find((ele) => ele?.isMagical === true),
    [magicalArr]
  );
  useMemo(() => {
    setCount(0);
  }, [magicalArr]);

  return (
    <div>
      <MemoCompA count={count} handleCount={handleCount} />
      <MemoCompB magicalArr={magicalArr} setMagicalArr={setMagicalArr} />

      {/* Displaying the memoized result */}
      <div style={{ marginTop: "20px" }}>
        Magical Item:{" "}
        {checkIfNumberIs2900K
          ? `${checkIfNumberIs2900K.item} (isMagical)`
          : "Not Found"}
      </div>
    </div>
  );
};

export default MemoHookExample;
