import React from "react";
import logo from "../../res/image 50.png";
import bgimage from "../../res/image.png";
import who from "../../res/Group 6550.png";
import rectangle from "../../res/Mask group.png";
import map from "../../res/Group 35922.png";

const Home = () => {
  // document.title = "";
  return (
    <div>
      <div>
        <header>
          <div className="flex justify-between items-center px-8 py-4">
            <div className="flex gap-5">
              <img
                className="w-[70px] h-[70px]"
                src={logo}
                alt="hexstan logo"
              />
              <p className="py-6 mr-10000 text-[#07203D]">
                Hexstan Digital Agency
              </p>
            </div>
            <div className="flex gap-[51px] font-medium text-[15px] leading-4 text-[#07203D]">
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
        <div>
          <p className="flex-col absolute font-extrabold text-[52px] text-[#FFFFFF] leading-[63.39px] font-[montserrat] pt-[150px] pl-[40px]">
            Elevate Your Brand <br />
            With Our
            <span className="ml-3 text-[#972D6B] font-[montserrat]">
              Digital
            </span>
            <br />& Print Services
          </p>
          <p className="flex-col absolute text-[#FFFFFF] font-hindu font-normal text-[18px] leading-[28.82px] mt-[380px] ml-[40px]">
            We create expertly-graphics, software designs and branding items.{" "}
            <br /> We print products like business cards, brochures and flyers
            etc.
          </p>
          <button className="flex-col absolute bg-[#972D6B;] w-[120px] h-[40px] text-[#FFFFFF] mt-[470px] ml-[40px] font-[montserrat] text-[16px] font-medium leading-[19.5px]">
            See more
          </button>
        </div>
        <div>
          <img
            className="bg-gradient-to-r from-rgba(7, 32, 61, 1) to-rgba(7, 32, 61, 0)"
            src={bgimage}
            alt=""
          />
        </div>
      </div>
      <div className="flex">
        <div>
          <p className="font-[montserrat] text-[32px] font-semibold leading-[43.52px] text-[#972D6B] pt-[100px] pl-[50px]">
            <span className="text-[black]">Who</span> We Are
          </p>
          <p className="ml-[50px] mt-5 text-[17px] leading-[30.08px] font-normal opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim{" "}
            <br />
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
            <br />
            aliquip ex ea commodo consequat. Duis aute irure dolor in <br />
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla{" "}
            <br />
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa <br />
            qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="bg-[#972D6B;] w-[120px] h-[40px] text-[#FFFFFF] mt-[30px] ml-[50px] font-[montserrat] text-[16px] font-medium leading-[19.5px]">
            See more
          </button>
        </div>
        <div>
          {/* <img
            className="w-[200px] h-[150px] mt-[100px] ml-[150px]"
            src={rectangle}
            alt=""
          /> */}
          <img
            className="w-[400px] h-[350px] mt-[100px] ml-[200px]"
            src={who}
            alt=""
          />
          {/* <img src={map} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
