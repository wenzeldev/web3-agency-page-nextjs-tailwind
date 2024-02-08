import Link from "next/link";

export default function Navbar() {
  return (
    <div className="z-50 flex w-11/12 lg:w-1080 justify-between items-center px-3 lg:px-5 py-2 lg:py-3 h-fit backdrop-blur-lg fixed my-3 lg:my-8 rounded-full font-semibold">
      <div>
        <h3 className="text-xl lg:text-2xl font-semibold lg:font-bold text-white tracking-wider">NoTse</h3>
      </div>
      <div className="flex-row list-none gap-5 text-white hidden lg:flex">
        <li>Services</li>
        <li>About</li>
        <li>Clients</li>
      </div>
      <div>
        <Link href={"/"}>
          <button className="bg-white border-2 py-1 px-3 lg:py-2 lg:px-5 rounded-full border-white">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
