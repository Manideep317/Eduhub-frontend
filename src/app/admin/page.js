import getCompanies from "@/lib/getCompanies"
export default async function page() {
  const red=await getCompanies();
  console.log(red);
  return (
    <main className='bg-[#efefef] text-[#292929] w-full h-screen'>
      <div className="">
        
      </div>
    </main>
  )
}