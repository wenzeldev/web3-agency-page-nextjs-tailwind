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

      <div className="flex flex-col items-center justify-center w-screen lg:w-1080 h-screen text-white font-black lg:text-9xl text-7xl gap-5 px-1 lg:px-0 lg:gap-0">
        <div className="w-full lg:w-1080 h-screen flex flex-col items-center justify-center absolute">

          <div className="rounded-full w-2/3 lg:w-600 lg:h-96 h-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl z-0 opacity-75 lg:rotate-45"></div>

        </div>

        <h1 className="text-left text-clip w-full z-10">CRYPTO</h1>
        <h2 className="z-10">WEB-3</h2>
        <h2 className="z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text text-right text-transparent italic w-full px-6">
          AGENCY
        </h2>
      </div>

      <div className="flex flex-col lg:items-left items-center justify-center w-full lg:w-1080 lg:h-screen h-fit gap-10 text-white px-3 lg:px-0">
        <h2 className="left w-72 lg:w-1080 font-medium text-4xl lg:text-5xl">
          Our featured services
        </h2>

        <div className="flex lg:flex-row flex-col justify-between w-full lg:w-1080 gap-5 lg:gap-0">
          <div className="flex justify-center items-center">
            <div className="bg-indigo-500 h-64 lg:h-96 w-72 blur-2xl z-10 absolute"></div>
            <div className="flex flex-col h-64 lg:h-96 w-72 bg-indigo-500 p-7 justify-between text-4xl lg:text-5xl font-medium rounded-3xl z-20">
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

          <div className="flex justify-center items-center">
            <div className="bg-purple-500 h-64 lg:h-96 w-72 blur-2xl z-10 absolute"></div>
            <div className="flex flex-col h-64 lg:h-96 w-72 bg-purple-500 p-7 justify-between text-4xl lg:text-5xl font-medium rounded-3xl z-20">
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
          </div>

          <div className="flex justify-center items-center">
            <div className="bg-pink-500 h-64 lg:h-96 w-72 blur-2xl z-10 absolute"></div>
            <div className="flex flex-col h-64 lg:h-96 w-72 bg-pink-500 p-7 justify-between text-4xl lg:text-5xl font-medium rounded-3xl z-20">
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
      </div>

      <div className="flex items-center lg:justify-left justify-center w-72 lg:w-1080 h-screen text-white ">
        <div className="w-full lg:w-2/3 z-20">
          <h2 className="font-medium text-4xl">About NoTse</h2>
          <p className="py-5 leading-7">
            Welcome to NoTse, your gateway to the future of the web. We're a
            cutting-edge Web3 agency, merging creativity with blockchain
            innovation to craft immersive digital experiences. From NFTs to
            DeFi, we're your partners in navigating the decentralized landscape.
            Join us as we redefine the digital world, one block at a time.
          </p>
          <div className="flex flex-row gap-2 lg:gap-5">
            <button className="bg-white py-1 lg:py-2 px-2 lg:px-4 rounded-full text-black font-medium">
              Get to know us
            </button>
            <button className="bg-white py-2 px-4 rounded-full text-black font-medium">
              We're hiring
            </button>
          </div>
        </div>
        <div className="absolute w-56 lg:w-1080 h-72 rounded-full bg-gradient-to-r p-1 from-pink-900 to-pink-500 blur-3xl z-0"></div>
      </div>

      <div className="flex items-center justify-center w-full lg:w-1080 h-fit lg:h-screen ">
        <div className="w-72 h-fit lg:w-4/5 lg:h-1/4 rounded-3xl bg-gradient-to-r p-1 from-indigo-500 via-purple-500 to-pink-500">
          <div className="flex lg:flex-row flex-col justify-between items-left w-full h-full rounded-3xl bg-black p-5">
            <div className="flex flex-col w-full lg:w-4/5 text-white pb-5">
              <h3 className="text-5xl lg:text-6xl font-normal pb-5">Let's get started!</h3>
              <p>
                Download our full Engagement Marketing Services Brochure,
                containing client case studies, and service details
              </p>
            </div>
            <button className="hover:rotate-45 transition-all bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-fit h-fit p-7">
              <Image src={arrow_out} alt="" className=" w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      <div className="list-none flex flex-col items-center justify-center w-full lg:w-1080 h-fit py-10 text-white">
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
