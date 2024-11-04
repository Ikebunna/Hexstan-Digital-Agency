import React from "react";
import logo from "../../res/image 50.png";
import bgimage from "../../res/image.png";

const Home = () => {
  // document.title = "";
  return (
    <div>
      <div>
        <header>
          <div className="flex justify-between px-8 py-4">
            <img className="w-[70px] h-[70px]" src={logo} alt="hexstan logo" />
            <div className="py-6 mr-10000">Hexstan Digital Agency</div>
            <div className="flex gap-[51px]">
              <button>Home</button>
              <button>Our Service</button>
              <button>About Us</button>
              <button>Contact</button>
              <button className="my-3 bg-[#972D6B;] w-[135px] h-[50px] text-[#FFFFFF]">
                Login
              </button>
              <button>Sign Up</button>
            </div>
          </div>
        </header>
      </div>
      <div>
        <img className="" src={bgimage} alt="" />
      </div>
    </div>
  );
};

export default Home;
