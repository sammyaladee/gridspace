"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/assets/logo.png";
import gridspace from "@/assets/GridSpace.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-16 py-3">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="GridSpace logo"
            width={50}
            height={50}
            className="object-cover relative bottom-0.5 sm:bottom-1 left-2 p-2"
          />
          <Image
            src={gridspace}
            alt="GridSpace text"
            height={25}
            className="object-contain p-2 -ml-2"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm lg:pl-55 font-medium text-gray-600">
          <Link href="#">How it works</Link>
          <Link href="#">Host a Space</Link>
          <Link href="#">About</Link>
        </nav>

        {/* Right Actions (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#"
            className="text-sm font-bold text-gray-800 hover:text-gray-900"
          >
            Become a Host
          </Link>
          <button className="px-3 py-1 rounded-md bg-orange-500 text-white text-sm font-medium hover:bg-orange-600">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-sm font-medium text-gray-600 bg-white border-t border-gray-200">
          <Link href="#" className="block">
            How it works
          </Link>
          <Link href="#" className="block">
            Host a Space
          </Link>
          <Link href="#" className="block">
            About
          </Link>
          <div className="flex flex-col gap-2 pt-2">
            <Link
              href="#"
              className="text-sm font-bold text-gray-800 hover:text-gray-900"
            >
              Become a Host
            </Link>
            <button className="w-full px-3 py-2 rounded-md bg-orange-500 text-white text-sm font-medium hover:bg-orange-600">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
