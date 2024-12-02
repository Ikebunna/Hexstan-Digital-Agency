import React from "react";
import logoname from "../assets/res/Frame 4.png";
import locicon from "../assets/res/Vector.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#07203D] h-[350px] w-full mt-[100px]">
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
    </footer>
  );
};
export default Footer;
