"use client"
import getCompanies from "@/lib/getCompanies";
import Company from "./Company";
import { useEffect, useState } from "react";

export default function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const res = await getCompanies();
        console.log(res);
        // Ensure res is an array
        setCompanies(Array.isArray(res) ? res : []);
      } catch (error) {
        console.error('Error fetching companies:', error);
        setCompanies([]); // Ensure companies is an array even if there's an error
      }
    }
    fetchCompanies();
  }, []);

  return (
    <div className="w-full grid place-items-center text-center">
      <div className="grid place-items-center max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-x-[1rem] justify-between">
        {
          companies.map((data, id) => (
            <Company key={id} {...data} />
          ))
        }
      </div>
    </div>
  );
}
