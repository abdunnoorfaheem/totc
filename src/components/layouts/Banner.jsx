import React from "react";
import { useLocation } from "react-router-dom";
import Container from "../Container";
import Button from "../Button";
import Image from "../Image";
import Woman from "../../assets/woman.png";
import { FaCirclePlay } from "react-icons/fa6";
import DateL from '../../assets/date.png'
import Mail from '../../assets/mail.png'
import Avatar from '../../assets/avatar.png'
import Bar from '../../assets/bar.png'

const Banner = () => {

    let location = useLocation();
    
      let isHomePage = location.pathname === "/";
  return (
     <>
      {isHomePage && (
        <section className='bg-[url("./src/assets/banner.png")]'>
          <Container>
            <div className="flex justify-between">
              <div className="pt-56 ">
                <h1 className="text-[54px] font-bold font-poppins text-white w-170.25 ">
                  <span className="text-[#F48C06]">Studying </span>Online is now
                  much easier
                </h1>
                <p className="font-nunitoSans text-2xl text-white w-130.75 py-10">
                  TOTC is an interesting platform that will teach you in more an
                  interactive way
                </p>
                <div className="flex gap-x-6">
                  <Button
                    className={
                      "text-2xl font-poppins font-semibold md:px-12 md:py-4 px-8 py-2  rounded-[80px]  hover:bg-white hover:opacity-[0.30]  bg-white duration-300 ease-in text-[#5B5B5B] "
                    }
                  >
                    Join for free
                  </Button>
                  <div className="">
                    <Button
                      className={
                        "flex items-center gap-x-4 text-[#252641] text-2xl font-poppins "
                      }
                    >
                      <FaCirclePlay className="text-white text-6xl shrink-0" />
                      <span className="hover:bg-white px-6 py-4 hover:rounded-[80px]  duration-500">Watch how it works</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative ">
                <Image
                  imgSrc={Woman}
                  imgAlt={"image Woman"}
                  className={" ml-25"}
                />
                <div className="flex gap-x-4 bg-white w-75 p-6 rounded-[20px] opacity-80 absolute top-85 ">
                  <div className="">
                    <Image imgSrc={DateL}/>
                  </div>
                  <div className="">
                    <h5 className="text-xl font-bold font-nunitoSans text-[#595959]">250k</h5>
                    <h6 className="text-[20px] font-semibold font-nunitoSans text-[#545567]">Assisted Student</h6>
                  </div>
                </div>
                <div className="flex gap-x-4 bg-white w-93 p-6 rounded-[20px] opacity-80 absolute right-0 top-135">
                  <div className="">
                    <Image imgSrc={Mail}/>
                  </div>
                  <div className="">
                    <h5 className="text-xl font-bold font-nunitoSans text-[#595959]">Congratulations</h5>
                    <h6 className="text-[20px] font-semibold font-nunitoSans text-[#545567]">Your admission completed</h6>
                  </div>
                </div>
               <div className="bg-white w-93 p-6 rounded-[20px] opacity-80 absolute bottom-40">
                 <div className="flex gap-x-4  ">
                  <div className="">
                    <Image imgSrc={Avatar}/>
                  </div>
                  <div className="">
                    <h5 className="text-xl font-bold font-nunitoSans text-[#595959]">User Experience Class</h5>
                    <h6 className="text-[20px] font-semibold font-nunitoSans text-[#545567]">Today at 12.00 PM</h6>
                  </div>
                 
                </div>
                 <div className="text-center mt-6 mb-7">
                    <button className="bg-[#D8587E] text-white py-3 px-12 rounded-[80px]">Join Now</button>
                  </div>
               </div>
               <div className="absolute top-55 right-10">
                <Image imgSrc={Bar}/>
               </div>
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  )
}

export default Banner