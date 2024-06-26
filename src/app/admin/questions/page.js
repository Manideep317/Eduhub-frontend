"use client"
import React, { useState } from "react";
import Modal from "../_components/QuestionsModal";
import Question from "../_components/Question";
export default function Page() {
  const [modal, setModal] = useState(false);

  function handleClick(){
    console.log(modal);
    setModal(true);
  };
  return (
    <main className="w-full bg-white">
      <button
        className="bg-[#989898] border-2 border-[#989898] hover:bg-white hover:text-[#989898] mx-[3rem] rounded-full px-[0.7rem] py-[0.2rem] text-white font-bold text-[1.25rem]"
        onClick={()=>handleClick()}
      >
        +
      </button>
      {modal&&<Modal onClose={()=>setModal(false)} />}
      <div className="my-[1rem]">
        <Question/>
      </div>
    </main>
  );
}