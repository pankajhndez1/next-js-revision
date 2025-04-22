"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const ImagePicker = () => {
  const clicker = useRef();
  const [imagePreview, setImagePreview] = useState(null);

  const handleClick = () => {
    return clicker?.current?.click();
  };

  const handleChange = (e) => {
  
    const currentImage = e.target.files[0];
    const blob = new Blob([currentImage], { type: "image/jpeg" });
    const blobURL = URL.createObjectURL(blob);
    
    setImagePreview(blobURL);
  };

  return (
    <div>
      <input
        type="file"
        id="file"
        name="file"
        accept="image/jpeg, image/png, image/svg+xml"
        ref={clicker}
        onChange={(e) => handleChange(e)}
      />
      <button type="button" onClick={handleClick} className="cursor-pointer">
        Log File
      </button>
      {imagePreview &&<img src={imagePreview} alt="Selected image preview"/>}
    </div>
  );
};

export default ImagePicker;
