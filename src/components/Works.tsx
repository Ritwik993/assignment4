import Image from "next/image";

const Work=()=>{
    return(
        <div className="mt-[120px] flex flex-col md:items-center justify-center font-montserrat z-[10]  md:w-auto w-[90vw] m-auto md:text-center text-left">
            <h1 className="md:text-[58px] text-[36px] font-medium text-[#F0F0F0] z-[10]">How it works</h1>
            <p className="text-[#E0E0E0] md:text-[18px] text-[16px] z-[10] mt-[24px]">It’s super easy to verify your email addresses with Verifier.</p>
            <div className=" flex items-center gap-[112px] flex-wrap justify-center mt-[72px]">
                <div className="flex flex-col justify-center items-center">
                    <Image src="/11.svg" alt="" width={100} height={100} className="object-cover mb-[36px]"/>
                    <p className="text-[20px] font-medium text-[#F0F0F0] mb-[10px]">Upload</p>
                    <p className="text-[16px] text-[#E0E0E0]">Upload your email lists in <br/>.csv format</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image src="/16.svg" alt="" width={100} height={100} className="object-cover mb-[36px]"/>
                    <p className="text-[20px] font-medium text-[#F0F0F0] mb-[10px]">Verify</p>
                    <p className="text-[16px] text-[#E0E0E0]">Let Verifier perform,<br/> ensuring email validity</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image src="/13.svg" alt="" width={100} height={100} className="object-cover mb-[36px]"/>
                    <p className="text-[20px] font-medium text-[#F0F0F0] mb-[10px]">Download</p>
                    <p className="text-[16px] text-[#E0E0E0]">Download your clean and<br/> verified email list</p>
                </div>
            </div>
        </div>
    )
}

export default Work;