import React from "react";
import Container from "../Container";
import Image from "../Image";
import Logo from "../../assets/logo.png";
import Button from "../Button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
   
 

  return (
    <>
      <header className="bg-[url('./src/assets/banner.png')]">
        <Container>
          <div className="flex justify-between items-center py-8 bg-no-repeat bg-center bg-cover">
            <div className="">
                <Link to={"/"}><Image imgSrc={Logo} imgAlt={"Logo"}/></Link>
            </div>
            <div className="">
              <ul className="flex gap-x-12 md:text-[22px] text-[14px] font-poppins text-white font-normal ">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/courses"}>Courses</Link></li>
                <li><Link to={"/service"}>Service</Link></li>
                <li><Link to={"/blog"}>Blog</Link></li>
                <li><Link to={"/aboutUs"}>About Us</Link></li>
              </ul>
            </div>
            <div className="flex gap-x-4">
              <Button className={'text-[#5B5B5B] font-poppins md:text-[22px] font-medium md:px-12 md:py-4 px-8 py-3  rounded-[80px]  hover:bg-white hover:opacity-[0.30]  bg-white duration-300 ease-in'}>
                Login
              </Button>
              <Button className={'text-[#5B5B5B] font-poppins md:text-[22px] font-medium md:px-12 md:py-4 px-8 py-3 rounded-[80px]  hover:bg-white hover:opacity-[0.30] bg-white duration-300 ease-in'}>
                Sign Up
              </Button>
           </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
