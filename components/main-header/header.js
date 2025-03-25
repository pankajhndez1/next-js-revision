import React from "react";
import logo from "@/assets/image.jpg";
import Image from "next/image";

const MainHeader = () => {
    console.log(logo,'logo')
  return (
    <div>
      <div>
        <Image height={100} width={100} src={logo} alt="logo" />
      </div>
      <div>
        <h1>MainHeader</h1></div>
    </div>
  );
};

export default MainHeader;
