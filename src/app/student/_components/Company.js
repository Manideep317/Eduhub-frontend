import Image from 'next/image'
import React from 'react'
export default function Company({ _id, companyid, name, url }) {
  return (
    <div className='border-2  max-sm:h-[4rem] sm:w-[250px] flex flex-col justify-between lg:w-[350px]  md:max-w-[50vw] flex-col p-4 max-sm:w-[90vw] md:h-[370px] sm:h-[380px]  max-md:min-h-[400px] py-[0.75rem] rounded-lg my-4 px-[0.75rem]'>
      <Image src={url.src} height={400} width={400} alt='name' />
    </div>
  )
}
