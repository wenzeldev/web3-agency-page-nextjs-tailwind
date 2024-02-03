import Image from "next/image";

import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-1080 h-screen text-white font-black text-9xl">
        <h1 className="text-left w-full">CRYPTO</h1>
        <h2>WEB-3</h2>
        <h2 className="text-right w-full italic ">AGENCY</h2>
      </div>

      <div className="flex flex-col items-center justify-center w-lvw h-12 bg-transparent rotate-2 border-2">
      </div>

      <div className="flex flex-col items-center justify-center w-1080 h-screen text-white font-black text-9xl"></div>
    </div>
  );
}
