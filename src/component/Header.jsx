import React, { useState } from "react";
import logo from "../assets/res/image 50.png";
import harmburg from "../assets/res/hamburger-menu-more-svgrepo-com.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <div className="flex justify-between items-center px-8 py-4 w-full">
        <div className="flex gap-5">
          <img
            className="w-[70px] h-[70px] md: w-[50px] h-[40px]"
            src={logo}
            alt="hexstan logo"
          />
          <p className="py-6 text-[#07203D] hidden md:block">
            Hexstan Digital Agency
          </p>
        </div>
        <img
          onClick={() => setShowMenu(true)}
          className="block md:hidden w-8 h-8"
          src={harmburg}
          alt=""
        />
        <div className="hidden md:flex items-center gap-[51px] font-medium text-[15px] leading-4 text-[#07203D] hover:text-[#972D6B]">
          <button>Home</button>
          <button>Our Service</button>
          <Link to={"/about"}>About Us</Link>
          <button>Contact</button>
          <button className="my-3 border-2 border-[#972D6B] hover:bg-[#972D6B] bg-[white] w-[135px] h-[50px] text-[#972D6B] hover:text-[white]">
            Login
          </button>
          <button>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
