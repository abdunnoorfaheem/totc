import React from "react";
import Container from "../Container";
import StudentImg from "../../assets/students.png";
import Button from "../Button";
import Heading from "../Heading";

const Portal = () => {
  return (
    <>
      <section>
        <Container>
          <div className="mb-19">
            <div className="text-center">
              <Heading
                Tag="h3"
                className="md:text-[44px] font-semibold font-poppins text-[#00CBB8] m-auto mb-6">
                <span className="text-[#2F327D]">What is</span> TOTC?
              </Heading>
              {/* <h3 className='text-[44px] font-semibold font-poppins text-[#00CBB8] m-auto mb-6'><span className='text-[#2F327D] '>What is</span> TOTC?</h3> */}
              <p className="text-[#696984] md:w-222 text-xl font-normal font-poppins m-auto">
                TOTC is a platform that allows educators to create online
                classes whereby they can store the course materials online;
                manage assignments, quizzes and exams; monitor due dates; grade
                results and provide students with feedback all in one place.
              </p>
            </div>
          </div>
          <div className="">
            <div className="md:flex justify-evenly text-white">
              <div className="bg-[url('./assets/instructor.png')] h-100 w-full bg-no-repeat bg-center flex flex-col justify-center items-center">
                <h5 className="text-2xl font-semibold font-poppins mb-4">
                  FOR INSTRUCTORS
                </h5>
                <Button
                  className={
                    "text-[22px] font-medium font-poppins border py-6 px-9.5 rounded-[80px] hover:bg-[#23BDEE] hover:border-none duration-300"
                  }
                >
                  Start a class today
                </Button>
              </div>
              <div className="bg-[url('./assets/students.png')] h-100 w-full bg-no-repeat bg-center flex flex-col justify-center items-center">
                <h5 className="text-2xl font-semibold font-poppins mb-4">
                  FOR INSTRUCTORS
                </h5>
                <Button
                  className={
                    "text-[22px] font-medium font-poppins border py-6 px-9.5 rounded-[80px] hover:bg-[#23BDEE] hover:border-none duration-300"
                  }
                >
                  Start a class today
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Portal;
