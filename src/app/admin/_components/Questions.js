"use client"
import getQuestions from "@/lib/getQuestions";
import { useEffect, useState } from "react";
import Question from "./Question";

export default function Companies() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await getQuestions();
        console.log(res);
        // Ensure res is an array
        setQuestions(Array.isArray(res) ? res : []);
      } catch (error) {
        console.error('Error fetching companies:', error);
        setQuestions([]); // Ensure companies is an array even if there's an error
      }
    }
    fetchQuestions();
  }, []);

  return (
    <div className="w-full grid place-items-center text-center">
      <div className="grid place-items-center max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-x-[1rem] justify-between">
        {
          questions.map((data, id) => (
            <Question key={id} {...data} />
          ))
        }
      </div>
    </div>
  );
}
