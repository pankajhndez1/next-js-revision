import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="bg-black opacity-50">
      {isOpen && (
        <dialog open={isOpen} className="bg-red-500 min-h-screen min-w-screen " onClick={router.back}>
          <h1>Hii there</h1>
        </dialog>
      )}
      <button onClick={handleClick}>CLick</button>
    </div>
  );
};

export default Modal;
