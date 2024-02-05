import Image from "next/image";

import Navbar from "@/components/navbar";

import arrow_out from "/public/arrow_outward_FILL0_wght400_GRAD0_opsz24.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-1080 h-screen text-white font-black text-9xl">
        <h1 className="text-left w-full">CRYPTO</h1>
        <h2>WEB-3</h2>
        <h2 className="text-right w-full italic ">AGENCY</h2>
      </div>

      <div className="flex flex-col items-center justify-center w-lvw h-32 ">
        <div className="flex flex-col items-center justify-center w-lvw h-12 bg-transparent rotate-2 border-2"></div>
      </div>

      <div className="flex flex-col items-center justify-center w-1080 h-screen gap-10 text-white">
        <h2 className="left w-1080 font-extrabold text-7xl">Our featured services</h2>

        <div className="flex flex-row justify-between w-1080">
          <div className="flex flex-col h-96 w-72 bg-indigo-500 shadow-lg shadow-indigo-500/80 p-5 justify-between text-5xl font-extrabold rounded-3xl">
            <h3 className="">01</h3>
            <h3 className="">
              WEB3 <br />
              Services
            </h3>
            <button className="flex flex-row justify-between items-center w-full h-10 px-3 border rounded-xl">
              <span className="text-base font-normal">Learn more</span>
              <Image src={arrow_out} alt="" className="fill-white" />
            </button>
          </div>
            <div className="flex flex-col h-96 w-72 bg-indigo-500 shadow-lg shadow-indigo-500/80 p-5 justify-between text-5xl font-extrabold rounded-3xl">
              <h3 className="">01</h3>
              <h3 className="">
                WEB3 <br />
                Services
              </h3>
              <button className="flex flex-row justify-between items-center w-full h-10 px-3 border rounded-xl">
                <span className="text-base font-normal">Learn more</span>
                <Image src={arrow_out} alt="" className="fill-white" />
              </button>
            </div>
            <div className="flex flex-col h-96 w-72 bg-indigo-500 shadow-lg shadow-indigo-500/80 p-5 justify-between text-5xl font-extrabold rounded-3xl">
              <h3 className="">01</h3>
              <h3 className="">
                WEB3 <br />
                Services
              </h3>
              <button className="flex flex-row justify-between items-center w-full h-10 px-3 border rounded-xl">
                <span className="text-base font-normal">Learn more</span>
                <Image src={arrow_out} alt="" className="fill-white" />
              </button>
            </div>

        </div>
        
      </div>
    </div>
  );
}
