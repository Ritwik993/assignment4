import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Work from "@/components/Works";
import Image from "next/image";

const Home=()=>{
  return(
   <div>
    <HeroSection/>
    <Work/>
    <Features/>
   </div>
  )
}

export default Home;