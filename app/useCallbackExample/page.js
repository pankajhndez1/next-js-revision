'use client'
import CompA from "@/components/CompoA";
import CompB from "@/components/CompoB";
import React, { useState } from "react";
import { useCallback } from "react";

const UseCallbackExamplePage = () => {
  const [count, setCount] = useState(0);

  
  const getStringVal =  useCallback(
    () => {
      return 'abc'
    },
    [],
  )
  const handleCount = () => setCount((prev) => prev + 1);
  return (
    <div>
      <CompA car="BMW" getStringVal={getStringVal} />
      <CompB count={count} handleCount={handleCount}/>
    </div>
  );
};

export default UseCallbackExamplePage;
