import React from "react";
import Container from "../Container";

const Counter = () => {
  return (
    <>
      <section>
        <Container>
          <div className="py-10">
            <h4 className="text-5xl font-bold font-roboto text-center pb-4 text-[#2F327D]">
              Our Success
            </h4>
            <p className="text-center text-[#010514] w-154.25 m-auto text-lg opacity-[0.8]">
              Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
              sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
              ultrices eu ornare tristique vel nisl orci.{" "}
            </p>
          </div>
          <div className="py-20">
            <div className="md:flex justify-between items-center">
              <div className="text-center">
                <h3 className="text-8xl bg-linear-to-t from-sky-500 to-indigo-500 text-transparent bg-clip-text">15K+</h3>
                <p className="text-[32px] text-[#010514] opacity-[0.8]">Students</p>
              </div>
              <div className="text-center">
                <h3 className="text-8xl bg-linear-to-t  from-[#136CB5] to-[#49BBBD] text-transparent bg-clip-text">75%</h3>
                <p className="text-[32px] text-[#010514] opacity-[0.8]">Total success</p>
              </div>
              <div className="text-center">
                <h3 className="text-8xl bg-linear-to-t  from-[#136CB5] to-[#49BBBD] text-transparent bg-clip-text">35</h3>
                <p className="text-[32px] text-[#010514] opacity-[0.8]">Main questions</p> 
              </div>
              <div className="text-center">
                <h3 className="text-8xl bg-linear-to-t  from-[#136CB5] to-[#49BBBD] text-transparent bg-clip-text">26</h3>
                <p className="text-[32px] text-[#010514] opacity-[0.8]">Chief experts</p>
              </div>
              <div className="text-center">
                <h3 className="text-8xl bg-linear-to-t  from-[#136CB5] to-[#49BBBD] text-transparent bg-clip-text">16</h3>
                <p className="text-[32px] text-[#010514] opacity-[0.8]">Years of experience</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Counter;
