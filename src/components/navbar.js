import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex w-1080 justify-between items-center px-5 py-3 h-fit backdrop-blur-lg fixed my-8 rounded-full font-semibold">
      <div>
        <h3 className="text-2xl font-bold text-white tracking-wider">NoTse</h3>
      </div>
      <div className="flex flex-row list-none gap-5 text-white">
        <li>Services</li>
        <li>About</li>
        <li>Clients</li>
      </div>
      <div>
        <Link href={"/"}>
          <button className="bg-white border-2 py-2 px-5 rounded-full border-white">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
