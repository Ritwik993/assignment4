const HeroSection = () => {
    return (
      <div className="flex flex-col items-center justify-center text-center p-4 mt-[100px]">
        <h1 className="text-[36px] md:text-[72px] leading-[44px] md:leading-[74px] bg-clip-text bg-gradient-to-b from-[#EBEBEB] to-[#A3A3A3] text-transparent max-w-full md:max-w-[682px] ">
          <span className="font-semibold">Email Checker</span> <br/> <span className="font-regular">and </span><span className="font-semibold">Verifier</span>
        </h1>
        <p className="text-[#E0E0E0] text-base md:text-lg">
          Reduce bounce rate and improve your email marketing performance with our verifier.
        </p>
      </div>
    );
  }
  
  export default HeroSection;
  