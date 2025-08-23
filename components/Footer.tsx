import Link from "next/link";
import logo from "@/assets/logo.png";
import gridspace from "@/assets/GridSpace.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-6 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Row: Logo + Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
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
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm">
            <Link href="#" className="text-gray-600 hover:text-gray-800">About</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Contact</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Terms</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">Investors and Partners</Link>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-300 w-full" />

        {/* Bottom Row: Copyright + Privacy/Terms */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-2 md:gap-0">
          <p className="text-xs font-bold text-black text-center md:text-left">
            Copyright © 2025, GridSpace. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-xs text-gray-400 hover:text-gray-600">Privacy Policy</Link>
            <Link href="#" className="text-xs text-gray-400 hover:text-gray-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
