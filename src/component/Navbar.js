import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { MenuIcon, XIcon } from "@heroicons/react/outline";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-gradient-to-r from-purple-100 via-purple-200 to bg-purple-100 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl ml-7 font-bold italic mr-10 sm:text-4xl">Flexable</h1>
          <ul className="hidden text-black md:flex ml-20 pl-32   mx-10 text-xl p-5 md:space-x-8">
            <li>
              <Link to="home" smooth={true} duration={500} class="cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="nightlife" smooth={true} offset={-200} duration={500} class="cursor-pointer">
                Nightlife
              </Link>
            </li>
            <li>
              <Link to="restaurants" smooth={true} offset={-50} duration={500} class="cursor-pointer">
                Restaurants
              </Link>
            </li>
            <li>
              <Link to="greeklife" smooth={true} offset={-100} duration={500} class="cursor-pointer">
                Greeklife
              </Link>
            </li>
            <li>
              <Link to="about us" smooth={true} offset={-50} duration={500} class="cursor-pointer">
                About us
              </Link>
            </li>
            <li>
              <Link
                to="partnerwithus"
                smooth={true}
                offset={-50}
                duration={500}
                class="cursor-pointer"
              >
                Partner with us !
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <a href="https://marketplace.flexabledats.com/"><button  className="text-white bg-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full mx-5 text-xl italic px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Sign In
          </button></a>
          <a href="https://marketplace.flexabledats.com/"><button className="text-white bg-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-xl italic  px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-5">Sign Up</button></a>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute text-black bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500} class="cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="nightlife"
            smooth={true}
            offset={-200}
            duration={500}
            class="cursor-pointer"
          >
            Nightlife
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="restaurants"
            smooth={true}
            offset={-50}
            duration={500}
            class="cursor-pointer"
          >
            Restaurants
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="greeklife"
            smooth={true}
            offset={-100}
            duration={500}
            class="cursor-pointer"
          >
            Greeklife
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about us"
            smooth={true}
            offset={-50}
            duration={500}
            class="cursor-pointer"
          >
           About us
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="partnerwithus"
            smooth={true}
            offset={-50}
            duration={500}
            class="cursor-pointer"
          >
          Partner with us !
          </Link>
        </li>

        <div className="flex flex-col my-4">
        <a href="https://marketplace.flexabledats.com/"><button className="bg-transparent text-black hover:text-purple-800 px-8 ">
            Sign In
          </button></a>
          <a href="https://marketplace.flexabledats.com/"><button className="bg-transparent text-black hover:text-purple-800 px-8 ">Sign Up</button></a>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
