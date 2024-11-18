import Image from "next/image";

const Navbar=()=>{
    return(
        <div className=" flex items-center  gap-[10px] mt-[10px]  text-center h-[80px]">
            <div className="imageContainer flex flex-col items-center justify-center  h-full ml-[10px]">
            <Image src="/logo.svg" alt="" width={50} height={50} className=" h-full"/>
            </div>
            <div className="flex flex-col justify-center items-center h-[100px] ">
             <h2 className="text-[24px] text-white  font-nexa ">Verifier</h2>
            </div>
         </div>
    )
}

export default Navbar;