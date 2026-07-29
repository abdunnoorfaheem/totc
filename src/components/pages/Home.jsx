import React from "react";
import { useLocation } from "react-router-dom";
import Container from "../Container";
import Button from "../Button";
import Image from "../Image";
import Woman from "../../assets/woman.png";
import { FaCirclePlay } from "react-icons/fa6";

const Home = () => {
  let location = useLocation();

  let isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && (
        <section className='bg-[url("./src/assets/banner.png")] py-10 h-[1100px] '>
          <Container>
            <div className="flex">
              <div className="pt-56">
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
                    <Button className={"flex items-center gap-x-4 text-[#252641] text-2xl font-poppins"}><FaCirclePlay  className="text-white text-6xl"/>Watch how it works</Button>
                  </div>
                </div>
              </div>
              <div className="">
                <Image imgSrc={Woman} imgAlt={"image Woman"} className={"w-full h-full"} />
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

export default Home;
