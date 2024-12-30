import React, { useState } from "react";

import icon from "../assets/oLogo.png";
import lens from "../assets/search.png";
import arrow from "../assets/downArrow.png";
import search from "../assets/search.jpg";
import userIcon from "../assets/userIcon.png";
import { Login } from "./Login";
import { useAuth } from "./AuthProvider";

import { User } from "react-feather";

export const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout); // Clear any pending timeout
    setIsOpen(true); // Show the dropdown immediately
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setIsOpen(false); // Delay hiding the dropdown to ensure smooth interaction
    }, 200); // Adjust the delay time as needed
  };

  const { isAuthenticated, userDetails, logout } = useAuth();

  const [loginPop, setLoginPop] = useState(false);
  return (
    <>
      <div className="flex  p-4 bg-slate-100 shadow-md justify-between items-center">
        <img src={icon} alt="" className="w-15 h-11" />

        <div className="flex items-center gap-6">
          <div className="hidden md:flex border-2 border-spacing-1 w-72 p-2 border-black ml-6 bg-white">
            <img src={lens} alt="" className="w-6 h-5 mt-1" />
            <input placeholder="Location" className="ml-3 outline-none" />
            {/* <img src={arrow} alt="" className="w-8 h-7 " /> */}
          </div>

          <div className="hidden md:flex h-12 ml-4 border-2 border-black bg-white">
            <input
              onChange={(e) => props(e.target.value)}
              type="text"
              placeholder="find car,mobile phones and more "
              className="ml-3 w-96  outline-none"
            />
            <img src={search} alt="" />
          </div>
        </div>

        <div className="hidden md:flex h-12 p-3 ml-10 cursor-pointer">
          <h1 className="font-semibold">ENGLISH</h1>
          <img src={arrow} alt="" className="w-8 h-7" />
        </div>
        {/* new code */}
        {isAuthenticated ? (
          
        ) : (
          <button
            className="flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline"
            onClick={() => setLoginPop(true)}
          >
            Login
          </button>
        )}
        {/* <div
          onClick={() => setLoginPop(!loginPop)}
          className="flex h-12 p-3 ml-6 cursor-pointer underline  hover:no-underline"
        >
          <h1 className="font-bold text-lg">login</h1>
        </div> */}
        <div className="w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full drop-shadow-lg  border-4 border-yellow-500 items-center justify-center">
          <h1 className="font-bold text-lg">+sell</h1>
        </div>
      </div>
      {loginPop && <Login setLoginPop={setLoginPop} />}
    </>
  );
};
