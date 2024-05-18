"use client"
import addQuestion from "@/lib/addQuestions"
import { useEffect, useState } from "react"
export default function page() {
  const [QuestionId, useQuestionId] = useState("1");
  const [Company, useCompany] = useState("ganesh bhai");
  const [Title, seTitle] = useState("www.mulpuriganesh.com");
  const [text, setText] = useState("JAI BALAYYA");
  const [answer, setAnswer] = useState("JAI GANESH SAI!!");
  const data = {
    "QuestionID": "1",
    "Company":{
      "CompanyID": "1",
        "Name": "Google",
          "Url": "www.google.com"

    },
    "Title": "question",
    "Text": "question text",
    "Answer": "answer for the question ",
};
const handleClick = async () => {
  try {
    const response = await addQuestion(data);
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
