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
import devpic from "../../res/image (3).png";
import graphpic from "../../res/image (4).png";
import choosepic from "../../res/image 2.png";
import choosepic1 from "../../res/image (5).png";
import logoname from "../../res/Frame 4.png";
import locicon from "../../res/Vector.png";

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
        <p className="absolute font-[montserrat] text-[black] text-[38px] font-medium ml-[270px] mt-[100px]">
          Printing
        </p>
        <img
          className="absolute ml-[450px] mt-[100px] text-[black]"
          src={linee}
          alt=""
        />
        <p className="absolute font-[montserrat] text-[black] text-[38px] font-medium ml-[475px] mt-[100px]">
          Branding
        </p>
        <img
          className="absolute ml-[680px] mt-[100px] text-[black]"
          src={linee}
          alt=""
        />
        <p className="absolute font-[montserrat] text-[black] text-[38px] font-medium ml-[700px] mt-[100px]">
          Software Solutions
        </p>
        <div>
          <img
            className="absolute ml-[180px] mt-[330px] w-[141px] h-[141px]"
            src={hugeicon}
            alt=""
          />
          <p className="absolute ml-[130px] mt-[480px] text-[29px] text-[black] font-[montserrat] font-light">
            Branding-Printing
          </p>
        </div>
        <div>
          <img
            className="absolute ml-[570px] mt-[330px] w-[141px] h-[141px]"
            src={hugeicon}
            alt=""
          />
          <p className="absolute ml-[440px] mt-[480px] text-[29px] text-[black] font-[montserrat] font-light">
            Web Design & Development
          </p>
        </div>
        <div>
          <img
            className="absolute ml-[980px] mt-[330px] w-[141px] h-[141px]"
            src={hugeicon}
            alt=""
          />
          <p className="absolute ml-[930px] mt-[480px] text-[29px] text-[black] font-[montserrat] font-light">
            Graphics Design
          </p>
        </div>
      </div>
      <div className="bg-[#EDEDED] w-[1257px] h-[1450px]">
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
            className="absolute w-[400px] h-[330px] mt-[90px] ml-[140px]"
            src={brandpic}
            alt=""
          />
          <p className="absolute text-[30.32px] font-semibold ml-[580px] mt-[170px] font-poppins text-[black]">
            Branding
          </p>
          <p className="absolute text-[12px] text-[#383B40] ml-[580px] mt-[240px] font-normal">
            With a strong foundation in branding and printing, I bring brands to
            life with cohesive <br />
            and impactful visual identities. <br /> <br /> My approach combines
            strategic branding—developing logos, color schemes, and <br />
            messaging—with high-quality print design for materials like business
            cards, brochures, <br />
            and signage.
          </p>
        </div>
        <div>
          <img
            className="absolute w-[400px] h-[330px] mt-[500px] ml-[640px]"
            src={devpic}
            alt=""
          />
          <p className="absolute align-[right] text-[28px] font-semibold ml-[270px] mt-[570px] font-poppins text-[black]">
            Software Development
          </p>
          <p className="absolute text-right text-[12px] text-[#383B40] ml-[100px] mt-[640px] font-normal">
            With expertise in web development and software design, I build
            responsive, user-friendly <br /> websites and applications that meet
            both functional and aesthetic needs. <br /> <br />
            i have over 2 years of experience working in the software
            development industry, and <br />I am proficient in several server
            side languages and systems used for software development.
          </p>
        </div>
        <div>
          <img
            className="absolute w-[400px] h-[290px] mt-[900px] ml-[170px]"
            src={graphpic}
            alt=""
          />
          <p className="absolute text-[30.32px] font-semibold ml-[630px] mt-[950px] font-poppins text-[black]">
            Graphics Design
          </p>
          <p className="absolute text-[12px] text-[#383B40] ml-[630px] mt-[1000px] font-normal">
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
      <div>
        <div>
          <img
            className="absolute w-[358px] h-[457px] ml-[90px] mt-[70px]"
            src={choosepic}
            alt=""
          />
        </div>
        <div>
          <img
            className="absolute w-[650px] h-[200px] ml-[510px] mt-[70px]"
            src={choosepic1}
            alt=""
          />
          <p className="absolute ml-[670px] mt-[290px] font-[montserrat] text-[black] font-semibold text-[33px]">
            Why Choose Us?
          </p>
          <p className="absolute text-justify mt-[360px] ml-[520px] text-[black] text-[18px]">
            We believe in delivering value for money. Our services are
            competitively priced <br />
            without compromising on quality, giving you high-end results that
            fit within your <br /> budget, whether you’re ordering branded
            merchandise or developing a complex <br /> software platform.
          </p>
        </div>
      </div>
      <div className="bg-[#07203D] h-[350px] w-[1257px] mt-[650px]">
        <div>
          <img
            className="absolute w-[320px] h-[38px] ml-[200px] mt-[50px]"
            src={logoname}
            alt=""
          />
          <p className="absolute font-[montserrat] text-[#FFFFFF] text-[14px] ml-[180px] mt-[125px] font-light">
            We wholeheartedly believe in integrity, treating our <br />
            clients, partners, and employees with genuine <br /> respect and
            fairness in every interaction.
          </p>
        </div>
        <div className="font-[montserrat]">
          <p className="absolute text-[white] text-[24px] mt-[45px] ml-[680px] font-[montserrat]">
            Quick links
          </p>
          <div className="text-[#FFFFFF] absolute mt-[90px] ml-[680px] font-thin">
            <p className="leading-8">
              Home <br />
              Our Service <br />
              About Us <br />
              Contact Us
            </p>
          </div>
        </div>
        <div>
          <p className="absolute text-[white] text-[24px] mt-[45px] ml-[900px] font-[montserrat]">
            Contact Us
          </p>
          <img
            className="absolute ml-[900px] mt-[110px]"
            src={locicon}
            alt=""
          />
          <p className="absolute text-[#FFFFFF] text-[15px] mt-[110px] ml-[930px] font-[montserrat] font-thin">
            Abuja, Nigeria
          </p>
          <p className="absolute text-[#FFFFFF] text-[15px] mt-[150px] ml-[930px] font-[montserrat] font-thin">
            +2348166067804
          </p>
          <p className="absolute text-[#FFFFFF] text-[15px] mt-[190px] ml-[930px] font-[montserrat] font-thin">
            hexstandigitalagency@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
