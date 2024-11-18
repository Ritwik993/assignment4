"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
        setValue((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setIsVisible(false);
            return prev;
          }
          return prev + 1;
        });
      }, 100);
    
    return () => {
      clearInterval(timer);
    };
  }, [isVisible]); 

  const handleClick = () => {
    setIsVisible(true);
    setValue(0); // Reset value when starting the process
  };

  return (
    <div className="flex flex-col items-center justify-center text-center p-4 mt-[50px] z-[10]">
      <h1 className="text-[36px] md:text-[72px] leading-[44px] md:leading-[74px] bg-clip-text bg-gradient-to-b from-[#EBEBEB] to-[#A3A3A3] text-transparent max-w-full w-full md:w-auto z-[10] font-montserrat">
        <span className="font-semibold">Email Checker</span> <br className="md:inline-block hidden" /> <span className="font-regular">and </span><span className="font-semibold">Verifier</span>
      </h1>
      <p className="text-[#E0E0E0] text-[18px] z-[10] mt-[10px] leading-[30px] font-montserrat">
        Reduce bounce rate and improve your email marketing <br className="md:inline-block hidden" /> performance with our verifier.
      </p>
      <div className="flex z-[10] items-center">
        {!isVisible && (
          <>
            <input
              type="text"
              className="md:w-[590px] w-[90vw] px-[20px] py-[10px] bg-gradient-to-r from-[#45588F] via-[#303B61] to-[#272A49] rounded-[18px] outline-none z-[10] text-[#F0F0F0] placeholder-[#F0F0F0] h-[58px] mt-[28px]"
              placeholder="Enter an email to verify"
            />
            <button
              className="md:px-[30px] px-[20px] h-[50px] bg-gradient-to-br from-[#2D58BD] via-[#3A78D0] to-[#1892F5] text-white rounded-[12px] font-montserrat font-medium md:text-[20px] text-[16px] z-[10] mt-[28px] md:ml-[-120px] ml-[-90px]"
              onClick={handleClick}
            >
              Verify
            </button>
          </>
        )}
      </div>
      {isVisible && (
        <>
          <p className="text-[16px] text-[#E0E0E0] mt-[28px] z-[10]">Verifying your email in real-time...</p>
          <div className="w-[380px] h-[10px] relative mt-[44px] bg-gradient-to-b from-[#280E42] to-[#221D47] rounded-[40px] z-[10] overflow-hidden">
            <div
              className="bg-gradient-to-b from-[#2B70B5] via-[#1575E9] to-[#2EC2F1] h-full z-[10] absolute"
              style={{ width: `${value}%` }}
            />
          </div>
        </>
      )}
      <p className="mt-[100px] text-[24px] text-[#E0E0E0] font-montserrat mb-[40px] z-[10]">
        Modern companies are using <span className="font-semibold">Verifier</span>
      </p>
      <div className="flex items-center justify-center w-full flex-wrap gap-[50px] z-[10]">
      <Image src="/1.svg" alt="" width={250} height={31} className=" object-cover z-[10]"/>
      <Image src="/2.svg" alt="" width={190} height={31} className=" object-cover z-[10]"/>
      <Image src="/3.svg" alt="" width={104} height={42} className=" object-cover z-[10]"/>
      <Image src="/4.svg" alt="" width={58} height={36} className=" object-cover z-[10]"/>
      <Image src="/6.png" alt="" width={77} height={44} className=" object-cover z-[10]"/>
      </div>
    </div>
  );
};

export default HeroSection;
