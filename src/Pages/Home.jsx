import React from "react";
import logo from "../../res/image 50.png";
import bgimage from "../../res/image.png";
import who from "../../res/Group 6550.png";
import rectangle from "../../res/Mask group.png";
import map from "../../res/Group 35922.png";
import vect from "../../res/vector.png";
import vectline from "../../res/vector 60.png";
import vect1 from "../../res/vector (1).png";
import vect2 from "../../res/vector (3).png";
import aboutuspic from "../../res/image (1).png";
import vectline1 from "../../res/vector 64.png";

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
      <div>
        <div className="bg-[#07203D] h-[350px] w-[1257px] mt-[120px]">
          <div>
            <img
              className="flex absolute w-[68px] h-[58px] mt-[50px] ml-[50px]"
              src={vect}
              alt=""
            />
            <p className="absolute font-[montserrat] text-[white] font-medium text-[24px] w-[164px] h-[29px] ml-[50px] mt-[115px]">
              Our Mission
            </p>
            <p className="absolute font-[montserrat] text-[white] font-extralight text-[15px] ml-[50px] mt-[160px] leading-[19px]">
              Our mission is to empower businesses with <br />
              creative digital and print solutions that bring <br />
              ideas to life.
            </p>
          </div>
          <img
            className="absolute ml-[430px] mt-[50px]"
            src={vectline}
            alt=""
          />
          <div>
            <img
              className="absolute w-[68px] h-[58px] ml-[470px] mt-[50px]"
              src={vect1}
              alt=""
            />
            <p className="absolute font-[montserrat] text-[white] font-medium text-[24px] w-[164px] h-[29px] ml-[470px] mt-[115px]">
              Our Vision
            </p>
            <p className="absolute font-[montserrat] text-[white] font-extralight text-[15px] ml-[470px] mt-[160px] leading-[19px]">
              Our vision is to empower businesses with <br />
              creative digital and print solutions that bring <br />
              ideas to life.
            </p>
          </div>
          <img
            className="absolute ml-[845px] mt-[50px]"
            src={vectline}
            alt=""
          />
          <div>
            <img
              className="absolute w-[65px] h-[58px] ml-[890px] mt-[50px]"
              src={vect2}
              alt=""
            />
            <p className="absolute font-[montserrat] text-[white] font-medium text-[24px] w-[164px] h-[29px] ml-[890px] mt-[115px]">
              Core Values
            </p>
            <p className="absolute font-[montserrat] text-[white] font-extralight text-[15px] ml-[890px] mt-[155px] leading-[19px]">
              Our core value is to empower businesses with
              <br />
              creative digital and print solutions that bring <br />
              ideas to life.
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <img
            className="absolute ml-[50px] mt-[130px] w-[480px] h-[540px]"
            src={aboutuspic}
            alt=""
          />
        </div>
        <div>
          <p className="absolute mt-[135px] ml-[720px] font-[montserrat] text-[black] text-[32px] font-semibold">
            About Us
          </p>
          <img
            className="absolute mt-[200px] ml-[720px]"
            src={vectline1}
            alt=""
          />
          <p className="absolute mt-[250px] ml-[720px] text-[black] text-[20px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />{" "}
            do eiusmod tempor incididunt ut labore et dolore magna <br />
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />{" "}
            bullamco laboris nisi ut aliquip ex ea commodo consequat. <br />{" "}
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse{" "}
            <br /> cillum dolore eu fugiat nulla pariatur. Excepteur sint <br />{" "}
            occaecat cupidatat non proident, sunt in culpa qui officia <br />
            deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
