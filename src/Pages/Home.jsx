import React from "react";
import logo from "../../res/image 50.png";
import bgimage from "../../res/image.png";
import who from "../../res/Group 6550.png";
import rectanglee from "../../res/Mask group.png";
import mapp from "../../res/Group 35922.png";
import vec from "../../res/Vector.png";
import vectline from "../../res/Vector 60.png";
import vect1 from "../../res/Vector (1).png";
import vect2 from "../../res/Vector (3).png";
import aboutuspic from "../../res/image (1).png";
import vectline1 from "../../res/Vector 64.png";
import linee from "../../res/Line 2.png";
import hugeicon from "../../res/hugeicons.png";
import brandpic from "../../res/image (2).png";

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
            src={rectanglee}
            alt=""
          /> */}
          <img
            className="w-[400px] h-[350px] mt-[100px] ml-[200px]"
            src={who}
            alt=""
          />
          {/* <img src={mapp} alt="" /> */}
        </div>
      </div>
      <div>
        <div className="bg-[#07203D] h-[350px] w-[1257px] mt-[120px]">
          <div>
            <img
              className="flex absolute w-[68px] h-[58px] mt-[50px] ml-[50px]"
              src={vec}
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
            className="absolute ml-[50px] mt-[130px] w-[480px] h-[600px]"
            src={aboutuspic}
            alt=""
          />
        </div>
        <div>
          <p className="absolute mt-[135px] ml-[680px] font-[montserrat] text-[black] text-[32px] font-semibold">
            About Us
          </p>
          <img
            className="absolute mt-[200px] ml-[680px]"
            src={vectline1}
            alt=""
          />
          <p className="absolute mt-[250px] ml-[650px] text-[black] text-[18px] font-normal">
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
      <div className="bg-[#F2F2F2] w-[1257px] h-[672px] mt-[860px]">
        <p className="absolute font-[montserrat] text-[black] text-[40px] font-medium ml-[270px] mt-[100px]">
          Printing
        </p>
        <img
          className="absolute ml-[450px] mt-[100px] text-[black]"
          src={linee}
          alt=""
        />
        <p className="absolute font-[montserrat] text-[black] text-[40px] font-medium ml-[475px] mt-[100px]">
          Branding
        </p>
        <img
          className="absolute ml-[680px] mt-[100px] text-[black]"
          src={linee}
          alt=""
        />
        <p className="absolute font-[montserrat] text-[black] text-[40px] font-medium ml-[700px] mt-[100px]">
          Software Solutions
        </p>
        <div>
          <img
            className="absolute ml-[180px] mt-[330px] w-[141px] h-[141px]"
            src={hugeicon}
            alt=""
          />
          <p className="absolute ml-[130px] mt-[480px] text-[32px] text-[black] font-[montserrat] font-light">
            Branding-Printing
          </p>
        </div>
        <div>
          <img
            className="absolute ml-[570px] mt-[330px] w-[141px] h-[141px]"
            src={hugeicon}
            alt=""
          />
          <p className="absolute ml-[440px] mt-[480px] text-[32px] text-[black] font-[montserrat] font-light">
            Web Design & Development
          </p>
        </div>
        <div>
          <img
            className="absolute ml-[980px] mt-[330px] w-[141px] h-[141px]"
            src={hugeicon}
            alt=""
          />
          <p className="absolute ml-[930px] mt-[480px] text-[32px] text-[black] font-[montserrat] font-light">
            Graphics Design
          </p>
        </div>
      </div>
      <div className="bg-[#EDEDED] w-[1257px] h-[2000px]">
        <div>
          <p className="text-[black] text-[40px] font-[montserrat] font-bold pt-[70px] ml-[500px]">
            Our{" "}
            <span className="text-[#972D6B] font-[montserrat]">Service</span>
          </p>
          <img
            className="absolute mt-[3px] ml-[515px]"
            src={vectline1}
            alt=""
          />
        </div>
        <div>
          <img
            className="absolute w-[400px] h-[330px] mt-[90px] ml-[170px]"
            src={brandpic}
            alt=""
          />
          <p className="absolute text-[30.32px] font-semibold ml-[620px] mt-[170px] font-poppins text-[black]">
            Branding
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
