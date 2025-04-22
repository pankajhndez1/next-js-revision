"use client";
import Modal from "@/components/modal";
import { handleFormDataSubmit } from "@/server";
import React from "react";
import { useActionState } from "react";

const Community = () => {
  //  for the server action only !!
  //  to hanlde the errors at the backend !!
  const [intialState, handleFormSubmit] = useActionState(handleFormDataSubmit, {
    error: null,
  });

  

  return (
    <div>
      <form
        action={handleFormSubmit}
        className="bg-red-500 flex flex-col w-fit p-2 gap-4"
      >
        <div className="flex justify-center items-center gap-4">
          <label htmlFor="name">Name</label>
          <input
            className="bg-grey-400 border border-grey-200"
            id="name"
            name="name"
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <label htmlFor="Class"> Class</label>
          <input
            className="bg-grey-400 border border-grey-200"
            id="class"
            name="class"
          />
        </div>
        <button
          type="submit"
          className="border-1 border-grey-400 bg-black text-white"
        >
          Submit
        </button>
      </form>
      <Modal />
    </div>
  );
};

export default Community;
