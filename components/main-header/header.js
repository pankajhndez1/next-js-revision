import React from "react";
import logo from "@/assets/image.jpg";
import Image from "next/image";
import ImagePicker from "../ImagePicker";

const MainHeader = () => {
  return (
    <div>
      <div>
        <Image height={100} width={100} src={logo} alt="logo" />
      </div>
      <div>
        <h1>MainHeader</h1>
      </div>
      <ImagePicker />
    </div>
  );
};

export default MainHeader;
