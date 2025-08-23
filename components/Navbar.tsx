import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import gridspace from "@/assets/GridSpace.png";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-16 py-0 border-b border-gray-200">
      {/* Left: Logo + Nav grouped */}
      <div className="flex items-center gap-120">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="GridSpace logo"
              width={60}
              height={60}
              className="object-cover relative -top-1 left-2 p-2"
            />
            <Image
              src={gridspace}
              alt="GridSpace text"
              height={30}
              className="object-contain p-2 -ml-2"
            />
          </div>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
          <Link href="#">How it works</Link>
          <Link href="#">Host a Space</Link>
          <Link href="#">About</Link>
        </nav>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <Link
          href="#"
          className="text-sm font-bold text-gray-800 hover:text-gray-900"
        >
          Become a Host
        </Link>
        <button className="px-2 py-1 rounded-md bg-orange-500 text-white text-sm font-medium hover:bg-orange-600">
          Sign Up
        </button>
      </div>
    </header>
  );
}
