"use client"
import addQuestion from "@/lib/addQuestions"
import { useEffect, useState } from "react"
export default function page() {
const handleClick = async () => {
  try {
    const response = await addQuestion(passData);
    console.log("this works");
    console.log(response);
  } catch (error) {
    console.log("error occured");
    console.log(error);
  }
}
return (
  <main className='w-full bg-white'>
    <button className="bg-[#989898] border-2 border-[#989898] hover:bg-white hover:text-[#989898] mx-[3rem] rounded-full px-[0.7rem] py-[0.2rem] text-white font-bold text-[1.25rem]" onClick={handleClick}>+</button>
  </main>
)
}
