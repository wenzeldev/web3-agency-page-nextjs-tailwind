import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/navbar";

import arrow_out from "/public/arrow_outward_FILL0_wght400_GRAD0_opsz24.svg";
import instagram_icon from "/public/instagram_icon.svg";
import linkedin_icon from "/public/linkedin_icon.svg";
import tiktok_icon from "/public/tiktok_icon.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-950 overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-1080 h-screen text-white font-black text-9xl">
        <div className="w-1080 h-screen flex flex-col items-left justify-center absolute">
          <div className="rounded-full w-600 h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl z-0 opacity-75 rotate-45"></div>
        </div>

        <h1 className="text-left w-full z-10">CRYPTO</h1>
        <h2 className="z-10">WEB-3</h2>
        <h2 className="z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-right text-transparent italic w-full px-6">
          AGENCY
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center w-lvw h-32 ">
        <div className="flex flex-col items-center justify-center w-lvw h-12 bg-transparent rotate-2 border-2">
          <h2 className="text-white">
            BLOCKCHAIN NETWORK SECURED | BLOCKCHAIN NETWORK SECURED | BLOCKCHAIN
            NETWORK SECURED | BLOCKCHAIN NETWORK SECURED | BLOCKCHAIN NETWORK
            SECURED | BLOCKCHAIN NETWORK SECURED |{" "}
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-left justify-center w-1080 h-screen gap-10 text-white">
        <h2 className="left w-1080 font-medium text-5xl">
          Our featured services
        </h2>

        <div className="flex flex-row justify-between w-1080">
          <div className="flex flex-col h-96 w-72 bg-indigo-500 p-7 justify-between text-5xl font-medium rounded-3xl">
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
          <div className="flex flex-col h-96 w-72 bg-purple-500 p-7 justify-between text-5xl font-medium rounded-3xl">
            <h3 className="">02</h3>
            <h3 className="">
              NFT <br />
              Services
            </h3>
            <button className="flex flex-row justify-between items-center w-full h-10 px-3 border rounded-xl">
              <span className="text-base font-normal">Learn more</span>
              <Image src={arrow_out} alt="" className="fill-white" />
            </button>
          </div>
          <div className="flex flex-col h-96 w-72 bg-pink-500 p-7 justify-between text-5xl font-medium rounded-3xl">
            <h3 className="">03</h3>
            <h3 className="">
              Defi <br />
              Services
            </h3>
            <button className="flex flex-row justify-between items-center w-full h-10 px-3 border rounded-xl">
              <span className="text-base font-normal">Learn more</span>
              <Image src={arrow_out} alt="" className="fill-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-1080 h-screen">
        <div className="w-4/5 h-1/4 rounded-3xl bg-gradient-to-r p-1 from-indigo-500 via-purple-500 to-pink-500">
          <div className="flex flex-row justify-between items-center w-full h-full rounded-3xl bg-black p-5">
            <div className="flex flex-col w-4/5 text-white">
              <h3 className="text-6xl font-normal pb-5">Let's get started!</h3>
              <p>
                Download our full Engagement Marketing Services Brochure,
                containing client case studies, and service details
              </p>
            </div>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-7">
              <Image src={arrow_out} alt="" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      <div className="list-none flex flex-col items-center justify-center w-1080 h-fit py-10 text-white">
        <div className="flex flex-row items-center justify-between w-full p-10">
          <h2 className="text-3xl">NoTse</h2>
          <div className="flex flex-row items-start justify-center gap-10">
            <div className="text-sm leading-7">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Clients</li>
              <li>Get started</li>
            </div>
            <div className="flex flex-row items-center justify-center gap-10">
              <li>
                <Image
                  className="w-6"
                  alt="Instagram Icon"
                  src={instagram_icon}
                />
              </li>
              <li>
                <Image
                  className="w-6"
                  alt="linkedin_icon"
                  src={linkedin_icon}
                />
              </li>
              <li>
                <Image className="w-6" alt="tiktok_icon" src={tiktok_icon} />
              </li>
            </div>
          </div>
        </div>

        <div className="border-t w-full p-10 flex flex-row items-center justify-between text-xs">
          <Link href={""}>
            <p>©2024 made by Wenzel Natebus</p>
          </Link>
          <div className="flex flex-row gap-5">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies Settings</li>
          </div>
        </div>
      </div>
    </div>
  );
}
