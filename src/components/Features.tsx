import Image from 'next/image';
import React from 'react'

const Features = () => {
  return (
    <div className='mt-[50px] relative flex flex-col items-center justify-center font-montserrat'>
        <div className='relative flex flex-col items-center justify-center  w-full '>
        <Image src="/blur1.png" width={500} height={500} alt='' className='object-contain mb-[-280px] left-0 right-0'/>
        <Image src="/blur3.svg" width={2830} height={1415} alt='' className='object-cover w-[100vw] '/>
        <p className='absolute  top-[400px] font-medium md:text-[58px] text-[32px] text-[#F0F0F0]  font-montserrat  w-full text-center md:w-[905px]'>World’s most accurate email  verifier and validator online</p>
        </div>
    </div>
  )
}

export default Features;