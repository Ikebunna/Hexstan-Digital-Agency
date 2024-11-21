import React, { useState } from "react";
import logo from "../assets/res/image 50.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <div className="flex justify-between items-center px-8 py-4 w-full">
        <div className="flex gap-5">
          <img className="w-[70px] h-[70px]" src={logo} alt="hexstan logo" />
          <p className="py-6 mr-10000 text-[#07203D]">Hexstan Digital Agency</p>
        </div>
        <div onClick={() => setShowMenu(true)} className="block md:hidden">
          menu
        </div>
        <div className="hidden md:flex gap-[51px] font-medium text-[15px] leading-4 text-[#07203D] hover:text-[#972D6B]">
          <button>Home</button>
          <button>Our Service</button>
          <button>About Us</button>
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
