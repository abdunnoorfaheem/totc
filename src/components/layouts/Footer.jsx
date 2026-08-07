import React from "react";
import Image from "../Image";
import Logo from "../../assets/logo.png";
import Container from "../Container";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#252641] pt-18 pb-10 text-[#B2B3CF]">
        <Container>
          <div className="flex items-center justify-center gap-x-20 ">
            <div className="border-r border-[#626381]">
              <Image className={"mr-12"} imgSrc={Logo} />
            </div>
            <h5 className="text-[22px] font-semibold text-white font-poppins w-40 ">Virtual Class for Zoom</h5>
          </div>
          <div className="text-center py-24">
            <h5 className="text-[26px] font-medium font-poppins mb-5">Subscribe to get our Newsletter</h5>
            <input className="border border-[#83839A] text-[20px] font-normal font-poppins text-[#83839A] py-3.5 pl-8 rounded-[80px] outline-0" type="text" placeholder="Your Email" />
            <button className="bg-[#49BBBD] text-white text-[22px] font-medium font-poppins py-3.5 px-8.5 rounded-[60px] ml-5">Subscribe</button>
          </div>
         <div className="">
           <div className="flex justify-center gap-x-10">
            <h5 className="text-[#B2B3CF] text-[22px] font-normal font-poppins">Career</h5>
            <h5 className="text-[#B2B3CF] text-[22px] font-normal font-poppins"><span className="mr-8">|</span>Privacy Policy </h5>
            <h5 className="text-[#B2B3CF] text-[22px] font-normal font-poppins"><span className="mr-8">|</span>Terms & Conditions</h5>
          
          </div>
          <div className="text-center mt-5">
            <p className="text-[#B2B3CF] text-[22px] font-normal font-poppins">&copy; 2026 Class Technologies Inc. </p>
          </div>
         </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
