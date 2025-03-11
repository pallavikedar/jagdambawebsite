"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
 
} from "lucide-react";
import { MdLocationOn,MdEmail } from "react-icons/md";
import { FaFacebookF,FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../public/logo.jpg";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container-fluid header-top bg-black">
      <div className=" container flex items-center justify-between ">
        <div className="flex items-center justify-between h-[125px] w-[400px] bg-slate-950 text-left transform ">
          <Link
            href="/"
            className="navbar-brand h-[125px] w-[200px] flex items-center"
          >
            <Image
              src={logo}
              alt="Jagdamba"
              className="h-auto w-auto rounded-lg"
            />
          </Link>

          {/* <div className="rotate-[77deg] h-11 w-24 bg-black relative -right-[56px] top-5 rounded-sm"></div> */}
        </div>

        <div className="w-full h-full  ">
          <div
            className="topbar px-0 py-2 hidden lg:block"
            style={{ height: "45px" }}
          >
            <div className="flex flex-row justify-between items-center">
              <div className="col-span-5 text-center lg:text-left mb-0  text-gray-500">
                <div className="flex flex-wrap justify-center lg:justify-center">
                  <div className="border-r border-orange-500 pr-4 flex items-center">
                    <Link
                      href="#"
                      className="text-muted-foreground text-sm font-small flex items-center gap-2 transition-colors duration-300 hover:text-primary"
                    >
                      <MdLocationOn 
                        color="#d66502"
                        className="h-5 w-5 text-orange-500"
                      />
                      <span>Find A Location</span>
                    </Link>
                  </div>

                  <div className=" border-primary/30 pr-4 flex items-center pl-2">
                    <Link
                      href="#"
                      className="text-muted-foreground text-sm font-small flex items-center gap-2 transition-colors duration-300 hover:text-primary"
                    >
                      <MdEmail
                        color="#d66502"
                        className="h-5 w-5 text-orange-500"
                      />
                      <span> info@example.com</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-3 text-right ">
                <div className="flex justify-between    text-white">
                  <div className="flex border-r border-orange-600 pr-3 ">
                    <Link
                      href="#"
                      className="p-0 text-primary hover:text-secondary transition-colors mr-3"
                    >
                      <FaFacebookF color="#d66502" className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="p-0 text-primary hover:text-secondary transition-colors mr-3"
                    >
                      <FaTwitter color="#d66502" className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      className="p-0 text-primary hover:text-secondary transition-colors mr-3"
                    >
                      < FaInstagram color="#d66502" className="h-4 w-4" />
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-bar w-full bg-white shadow-md  ">
      <nav className=" w-full flex items-center justify-between px-4 lg:px-8 py-4">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row items-center w-full lg:w-auto absolute lg:static top-16 left-0 bg-white lg:bg-transparent shadow-md lg:shadow-none p-4 lg:p-0 z-10`}
        >
          <Link href="#" className="nav-item py-2 px-4 text-gray-700 hover:text-orange-500 font-medium">
            Home
          </Link>
          <Link
            href="#"
            className="nav-item py-2 px-4 font-medium text-gray-700 hover:text-orange-500 transition-colors"
          >
            About
          </Link>
          <Link
            href="#"
            className="nav-item py-2 px-4 font-medium text-gray-700 hover:text-orange-500 transition-colors"
          >
            Service
          </Link>
          <Link
            href="#"
            className="nav-item py-2 px-4 font-medium text-gray-700 hover:text-orange-500 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="nav-item py-2 px-4 font-medium text-gray-700 hover:text-orange-500 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Get Solution Button */}
        <div className="pl-3 mt-4 lg:mt-0 ">
                  <Link
                    href="#"
                    className="btn-primary py-2 px-4 rounded-md text-white font-medium "
                  >
                    Get Solution
                  </Link>
                </div>
      </nav>
    </div>
        </div>
      </div>
    </div>
  );
}
