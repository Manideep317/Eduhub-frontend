import Image from "next/image";
import Link from 'next/link'
import about from '../../public/about_us.jpg'
import line from '../../public/line.png'
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="flex max-md:w-screen font-inter min-w-screen bg-white flex-col items-center text-black justify-between">
    <Navbar/>
      <div className="px-2 flex min-h-screen min-w-screen flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[4rem] max-md:text-[2rem] font-bold text-black">Welcome to Eduhub</h1>
          <p className="text-[1.25rem] text-center text-slate-600">Facilitating the exchange of interview questions among students and providing assistance in job search endeavors</p>
          <Link href="/" className="mt-7 bg-black hover:ring-2 hover:ring-black hover:bg-white hover:shadow-lg hover:text-black text-white py-3 px-3 rounded-md">Check our plans</Link>
        </div>
        <div className="absolute bottom-[5rem] max-md:bottom-[2rem] text-center mx-[1rem] bg-black text white max-md:px-[0.5rem] max-md:py-[0.5rem] px-[1rem] py-[1rem] rounded-full text-white">
          <p className="text-[1.1rem] max-md:text-[0.9rem] text-center font-normal">Striving for the advancement of students' futures and revolutionizing the hiring process</p>
        </div>
      </div>
      <div className="">
        <div className="text-center my-[3vh]" id="features">
          <h2 className="text-[2rem] font-semibold max-sm:mb-[2rem] sm:mb-[4rem]">Features</h2>
          <div className="px-[5vh]">
            <div className=" w-[50%] max-sm:w-[100%] p-[1rem] ring-2 ring-slate-300 rounded-lg">
              <h3 className="font-semibold max-sm:text-[1.25rem] text-[1.5rem]">Share your interview questions</h3>
              <p className="max-sm:text-[0.9rem]">
                Unlock success by sharing your interview questions. Empower fellow students with valuable insights. Build a community of knowledge and preparation.</p>
            </div>
            <Image src={line} className="max-sm:left-0 scale-100 relative max-md:left-[5vw] left-1/4 transform scale-x-[-1]" />
            <div className="w-[50%] p-[1rem] max-sm:w-[100%] ring-2 ring-slate-300 rounded-lg sm:relative left-1/2">
              <h3 className="font-semibold max-sm:text-[1.25rem] text-[1.5rem]">Write and share your interview experience</h3>
              <p className="max-sm:text-[0.9rem]">Document and contribute your invaluable interview encounters. Empower fellow students with firsthand insights and strategies.</p>
            </div>
            <Image src={line} className="max-sm:left-0 relative max-md:left-[5vw] left-1/4" />
            <div className="w-[50%] p-[1rem] max-sm:w-[100%] ring-2 ring-slate-300 rounded-lg">
              <h3 className="text-[1.5rem] max-sm:text-[1.25rem] font-semibold">Tap into alumni for mentorship and referrals.</h3>
              <p className="max-sm:text-[0.9rem]">Unlock the power of alumni networks for invaluable mentorship and referral opportunities. Connect with experienced professionals to guide you through your career journey.</p>
            </div>
            <Image src={line} className="max-sm:left-0 scale-100 relative max-md:left-[5vw] left-1/4 transform scale-x-[-1]" />
            <div className="max-sm:mb-[1rem] w-[50%] p-[1rem] ring-2 ring-slate-300 max-sm:w-[100%] rounded-lg sm:relative left-1/2">
              <h3 className="text-[1.5rem] max-sm:text-[1.25rem] font-semibold">Grow your profile alongside peers</h3>
              <p className="max-sm:text-[0.9rem]">Growing your profile alongside peers is key to success. Collaborate, learn, and expand your skills together. At Eduhub, we empower mutual growth and achievement</p>
            </div>
          </div>

        </div>
      </div>
      <div className="" id="aboutus">
        <div className="text-center my-[3vh]">
          <h2 className="text-[1.5rem] font-semibold max-sm:mb-[2rem] sm:mb-[3rem]">About us</h2>
          <div className="px-[5vh]">
            <div className="flex max-md:flex-col items-center">
            <div className="md:w-1/2 flex items-center justify-center">
            <Image src={about} className="w-full rounded-2xl"/>
            </div>
            <p className="text-lg mx-[2vw] md:w-1/2">
            Eduhub is a platform dedicated to facilitating the sharing of interview experiences among students from various universities. Our goal is to create a centralized repository of interview questions and insights to help students better prepare for their future interviews.
            </p>

            </div>
          </div>
        </div>
      </div>
      <div className="">
      
      </div>
    </main>
  );
}
