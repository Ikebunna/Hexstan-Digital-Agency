import React from "react";
import logo from "../../res/image 50.png";
import bgimage from "../../res/image.png";
import who from "../../res/Group 6550.png";
import rectanglee from "../../res/Mask group.png";
import mapp from "../../res/Group 35922.png";
import vec from "../../res/Vectorr.png";
import vectline from "../../res/Vector 60.png";
import vect1 from "../../res/Vector (1).png";
import vect2 from "../../res/Vector (3).png";
import aboutuspic from "../../res/image (1).png";
import vectline1 from "../../res/Vector 64.png";
import linee from "../../res/Line 2.png";
import hugeicon from "../../res/hugeicons.png";
import brandpic from "../../res/image (2).png";
import devpic from "../../res/image (3).png";
import graphpic from "../../res/image (4).png";
import choosepic from "../../res/image 2.png";
import choosepic1 from "../../res/image (5).png";
import rock from "../../res/rocket.png.png";
import google from "../../res/Vector (2).png";
import diamond from "../../res/Vector (4).png";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Home = () => {
  // document.title = "";
  return (
    <div className=" max-w-[1440px] mx-auto">
      <div>
        <Header />
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
          <button className="flex-col absolute bg-[#972D6B;] w-[120px] h-[40px] border-2 border-[#972D6B] hover:bg-[#972D6B] bg-[#363f47] text-[white] hover:text-[white] mt-[470px] ml-[40px] font-[montserrat] text-[16px] font-medium leading-[19.5px]">
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
      <div className="flex w-full justify-center items-center gap-[260px]">
        <div className="">
          <p className="font-[montserrat] text-[32px] font-semibold leading-[43.52px] text-[#972D6B] pt-[100px]">
            <span className="text-[black]">Who</span> We Are
          </p>
          <p className="mt-5 text-[17px] leading-[30.08px] font-normal opacity-80">
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
          <button className="bg-[#972D6B;] w-[120px] h-[40px] text-[#FFFFFF] mt-[30px] font-[montserrat] text-[16px] font-medium leading-[19.5px]">
            See more
          </button>
        </div>
        <div>
          {/* <img
            className="w-[200px] h-[150px] mt-[100px] ml-[150px]"
            src={rectanglee}
            alt=""
          /> */}
          <img className="w-[350px] h-[300px] mt-[100px]" src={who} alt="" />
          {/* <img src={mapp} alt="" /> */}
        </div>
      </div>
      <div>
        <div className="bg-[#07203D] h-[350px] w-full mt-[120px] items-center flex justify-center gap-4 ">
          <div className="flex flex-col pl-6 pr-6 pb-[70px]">
            <div className="relative inline">
              <img
                className="absolute w-[68px] h-[58px] top-0 left-0"
                src={vec}
                alt=""
              />
              <img
                className="absolute w-[50px] h-[40px] top-2 left-2 "
                src={rock}
                alt=""
              />
            </div>
            <p className="font-[montserrat] text-[white] font-medium text-[24px] w-[164px] h-[29px]  mt-[70px]">
              Our Mission
            </p>
            <p className="font-[montserrat] text-[white] font-extralight text-[15px] leading-[19px] mt-[20px]">
              Our mission is to empower businesses with <br />
              creative digital and print solutions that bring <br />
              ideas to life.
            </p>
          </div>
          <img className="pb-[30px]" src={vectline} alt="" />
          <div className="flex flex-col pl-6 pr-6 pb-[70px]">
            <div className="relative">
              <img
                className="absolute w-[68px] h-[58px] top-0 left-0"
                src={vect1}
                alt=""
              />
              <img
                className="absolute w-[35px] h-[28px] top-3 left-4"
                src={google}
                alt=""
              />
            </div>
            <p className=" font-[montserrat] text-[white] font-medium text-[24px] w-[164px] h-[29px] mt-[70px]">
              Our Vision
            </p>
            <p className=" font-[montserrat] text-[white] font-extralight text-[15px]  mt-[20px] leading-[19px]">
              Our vision is to empower businesses with <br />
              creative digital and print solutions that bring <br />
              ideas to life.
            </p>
          </div>
          <img className="pb-[30px]" src={vectline} alt="" />
          <div className="flex flex-col pl-6 pr-6 pb-[70px]">
            <div className="relative">
              <img
                className="absolute w-[65px] h-[58px] top-0 left-0"
                src={vect2}
                alt=""
              />
              <img
                className="absolute w-[38px] h-[28px] top-3 left-3"
                src={diamond}
                alt=""
              />
            </div>
            <p className=" font-[montserrat] text-[white] font-medium text-[24px] w-[164px] h-[29px]  mt-[70px]">
              Core Values
            </p>
            <p className=" font-[montserrat] text-[white] font-extralight text-[15px] mt-[20px] leading-[19px]">
              Our core value is to empower businesses with
              <br />
              creative digital and print solutions that bring <br />
              ideas to life.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center gap-[120px]">
        <div>
          <img
            className="mt-[130px] w-[400px] h-[450px]"
            src={aboutuspic}
            alt=""
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-7">
          <div className="pl-2">
            <p className="font-[montserrat] text-[black] text-[32px] font-semibold">
              About Us
            </p>
            <img className="" src={vectline1} alt="" />
          </div>
          <p className="text-[black] text-[18px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />{" "}
            do eiusmod tempor incididunt ut labore et dolore magna <br />
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />{" "}
            bullamco laboris nisi ut aliquip ex ea commodo consequat. <br />{" "}
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse{" "}
            <br /> cillum dolore eu fugiat nulla pariatur. Excepteur sint <br />{" "}
            occaecat cupidatat non proident, sunt in culpa qui officia <br />
            deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="bg-[#F2F2F2] w-full h-[602px] mt-[120px] flex flex-col gap-[120px] pt-[100px] justify-start items-center">
        <div className="flex justify-center items-center gap-6">
          <p className="font-[montserrat] text-[black] text-[30px] font-medium mt-[20px]">
            Printing
          </p>
          <img className="mt-[20px] text-[#202020]" src={linee} alt="" />
          <p className="font-[montserrat] text-[black] text-[30px] font-medium mt-[20px]">
            Branding
          </p>
          <img className="mt-[20px] text-[#202020]" src={linee} alt="" />
          <p className="font-[montserrat] text-[black] text-[30px] font-medium mt-[20px]">
            Software Solutions
          </p>
        </div>
        <div className="flex gap-[70px]">
          <div className="flex justify-center items-center flex-col">
            <img className="w-[121px] h-[121px]" src={hugeicon} alt="" />
            <p className="text-[25px] text-[black] font-[montserrat] font-light">
              Branding-Printing
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img className=" w-[121px] h-[121px]" src={hugeicon} alt="" />
            <p className="text-[25px] text-[black] font-[montserrat] font-light">
              Web Design & Development
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[121px] h-[121px]" src={hugeicon} alt="" />
            <p className="text-[25px] text-[black] font-[montserrat] font-light">
              Graphics Design
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#EDEDED] w-full h-[1450px] flex flex-col justify-center items-center gap-6">
        <div className="">
          <p className="text-[black] text-[40px] font-[montserrat] font-bold">
            Our{" "}
            <span className="text-[#972D6B] font-[montserrat]">Service</span>
          </p>
          <img className="pl-3" src={vectline1} alt="" />
        </div>
        <div className="flex items-center justify-center gap-[50px] pt-[70px]">
          <div>
            <img className=" w-[400px] h-[330px]" src={brandpic} alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[30.32px] font-semibold font-poppins text-[black]">
              Branding
            </p>
            <p className="text-[12px] text-[#383B40] font-normal">
              With a strong foundation in branding and printing, I bring brands
              to life with cohesive <br />
              and impactful visual identities. <br /> <br /> My approach
              combines strategic branding—developing logos, color schemes, and{" "}
              <br />
              messaging—with high-quality print design for materials like
              business cards, brochures, <br />
              and signage.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[50px] pt-[70px]">
          <div className="flex flex-col gap-5">
            <p className="text-right text-[28px] font-semibold font-poppins text-[black]">
              Software Development
            </p>
            <p className="text-right text-[12px] text-[#383B40] font-normal">
              With expertise in web development and software design, I build
              responsive, user-friendly <br /> websites and applications that
              meet both functional and aesthetic needs. <br /> <br />
              i have over 2 years of experience working in the software
              development industry, and <br />I am proficient in several server
              side languages and systems used for software development.
            </p>
          </div>
          <div>
            <img className="w-[400px] h-[330px] " src={devpic} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-[50px] py-[70px]">
          <div>
            <img className="w-[400px] h-[330px]" src={graphpic} alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[30.32px] font-semibold font-poppins text-[black]">
              Graphics Design
            </p>
            <p className="text-[12px] text-[#383B40] font-normal">
              With a passion for visual storytelling, I specialize in graphic
              design that communicates ideas <br />
              clearly and creatively. My skills span digital and print media,
              including flyers, business cards, <br /> and layouts. <br />
              <br /> I focus on creating visually compelling designs that align
              with brand identities and captivate <br /> audiences. I deliver
              high-quality graphics that enhance brand appeal and achieve
              strategic goals.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-[70px] gap-[50px]">
        <div>
          <img className="pt-5 w-[358px] h-[457px]" src={choosepic} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-7">
          <img className="w-[650px] h-[200px]" src={choosepic1} alt="" />
          <p className="font-[montserrat] text-[black] font-semibold text-[33px]">
            Why Choose Us?
          </p>
          <p className="text-justify text-[black] text-[18px]">
            We believe in delivering value for money. Our services are
            competitively priced <br />
            without compromising on quality, giving you high-end results that
            fit within your <br /> budget, whether you’re ordering branded
            merchandise or developing a complex <br /> software platform.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
