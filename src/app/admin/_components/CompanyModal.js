"use client"
import React,{useState} from 'react';
import addCompany from "@/lib/addCompany";
export default function Modal({onClose}) {
  const [data, setData] = useState({
    CompanyID: "",
    Name: "",
    Url: ""
  });

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setData((prevData)=>({
      ...prevData,
      [name]:value,
    }));
  }


  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const response = await addCompany(data);
      console.log("Company added successfully!");
      console.log(response);
    } catch (error) {
      console.error("Error adding company:", error);
    }
  }

  console.log("hello")
  return (
    <div className='w-[100vw] z-50 h-[100vh] fixed top-0 left-0 bg-[#00000050] flex items-center justify-center'>
      <div className="bg-white py-[1rem] md:w-[40vw] w-[80vw] p-4 rounded shadow-lg">
        <header className='text-[1.5rem] flex justify-between my-[1rem] font-bold'>
          <div className="">Add Company</div>
          <button onClick={onClose} className='px-[0.75rem] text-[1rem] rounded-full bg-black border-2 border-black hover:bg-white hover:text-black text-white'>x</button>
        </header>
        <div className='w-full'>
          <form onSubmit={handleSubmit} className="w-full px-[1rem] flex flex-col gap-[1.5rem]">
          <div className="w-full flex flex-col gap-2">
          <label htmlFor="" className="font-semibold">Company Id</label>
          <input type="text" onChange={handleChange} name='CompanyID' value={data.CompanyID} className="w-full border-2 border-[#efefef] px-2 py-1 rounded-sm" placeholder='Enter company name' />
        </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="" className="font-semibold">Company Name</label>
              <input type="text" onChange={handleChange} name='Name' value={data.Name} className="w-full border-2 border-[#efefef] px-2 py-1 rounded-sm" placeholder='Enter company name' />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="" className="font-semibold">Image url</label>
              <input type="text" value={data.Url} onChange={handleChange} name='Url' className="w-full border-2 text-black border-[#efefef] px-2 py-1 rounded-sm" placeholder='Enter image url' />
            </div>
            <div className="my-[1rem]">
              <button className='bg-black text-white px-[1rem] rounded-md py-[0.5rem]' type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}