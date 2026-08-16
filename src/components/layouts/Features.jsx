import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Image from "../Image";
import Feature from "../../assets/feature.png";
import Square from "../../assets/square.png";
import BoxSqare from "../../assets/boxSqare.png";
import User from "../../assets/usericon.png";
import ToolImg from "../../assets/toolsPartImage.png";
import view from "../../assets/view.png";
import Send from "../../assets/send.png";
import Educators from '../../assets/educator.png';
import Discussions from '../../assets/discussions.png'


const Features = () => {
  return (
    <>
      <section>
        <Container>
          <Heading
            Tag="h3"
            className="mt-40 text-center text-4xl font-bold font-poppins text-[#00CBB8] "
          >
            <span className="text-[#2F327D]">Our</span> Features
          </Heading>
          <Paragraph className="text-center mb-5">
            This very extraordinary feature, can make learning activities more
            efficient
          </Paragraph>
          <div className="flex justify-between items-center py-25">
            <div className="">
              <Image imgSrc={Feature} />
            </div>
            <div className="">
              <Heading
                Tag="h2"
                className="text-[40px] font-semibold font-poppins w-135.5 text-[#2F327D] mb-12.5"
              >
                A <span className="text-[#00CBB8]">user interface</span>{" "}
                designed for the classroom
              </Heading>
              <ul>
                <li className="flex items-center text-[22px] font-normal font-poppins text-[#696984] w-120.5 mb-10">
                  <Image
                    imgSrc={Square}
                    className={"w-15 h-15 rounded-[50%]"}
                  />{" "}
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                </li>
                <li className="flex items-center text-[22px] font-normal font-poppins text-[#696984] w-120.5 mb-10">
                  <Image
                    imgSrc={BoxSqare}
                    className={"w-15 h-15 rounded-[50%]"}
                  />{" "}
                  TA’s and presenters can be moved to the front of the class.
                </li>
                <li className="flex items-center text-[22px] font-normal font-poppins text-[#696984] w-120.5">
                  <Image imgSrc={User} className={"w-15 h-15 rounded-[50%]"} />
                  Teachers can easily see all students and class data at one
                  time.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-25">
        <Container>
          <div className="flex justify-between items-center">
            <div className="">
              <Heading className="text-[40px] font-semibold font-poppins text-[#2F327D] w-98.25 mb-5">
                <span className="text-[#00CBB8]">Tools</span> For Teachers And
                Learners
              </Heading>
              <Paragraph className="text-[#696984] text-[22px] font-normal font-poppins w-142">
                Class has a dynamic set of teaching tools built to be deployed
                and used during class. Teachers can handout assignments in
                real-time for students to complete and submit.
              </Paragraph>
            </div>
            <div className="">
              <Image imgSrc={ToolImg} />
            </div>
          </div>
        </Container>
      </section>
      <section className="pb-25">
        <Container>
          <div className="flex justify-between items-center">
            <div className="W-[48%]">
              <div className="">
                <div className="shadow-card rounded-[19px] py-8.5 px-6.5  w-[465px] relative">
                  <div className="bg-[#CDD8FF] text-[#717FB0] inline-block py-2 px-8 rounded-[72px]">
                    Question 1
                  </div>
                  <Heading
                    className="text-[31px] font-poppins font-semibold text-[#55578D] my-9 w-[359px]"
                    Tag="H4"
                  >
                    True or false? This play takes place in Italy
                  </Heading>
                  <div className="">
                    <Image
                      className={"relative w-165  "}
                      imgSrc={view}
                    />
                  </div>
                  <div className="shadow-cardTwo py-5 px-7 rounded-[19px] absolute  left-35 -bottom-10 bg-white">
                    <div className="flex gap-x-7]">
                      <div className="">
                        <Image imgSrc={Send} />
                      </div>
                      <Heading
                        Tag="h5"
                        className="text-[#41BE90] font-poppins font-semibold text-[20px] leading-[160%]  w-47.5"
                      >
                        Your answer was sent successfully
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="W-[48%]">
              <Heading className="text-[40px] font-semibold font-poppins leading-[160%] text-[#2F327D] w-86.75">
                Assessments, <span className="text-[#00CBB8]">Quizzes</span>,
                Tests
              </Heading>
              <Paragraph className="text-[22px] font-normal font-poppins leading-[180%] w-130">
                Easily launch live assignments, quizzes, and tests. Student
                results are automatically entered in the online gradebook.
              </Paragraph>
            </div>
          </div>
        </Container>
      </section>
      <section className="pb-35">
        <Container>
          <div className="flex justify-between items-center">
            <div className="">
              <Heading className="text-[#2F327D] text-[40px] font-semibold font-poppins w-105 leading-[160%] mb-5"><span className="text-[#00CBB8]">Class Management</span> Tools for Educators</Heading>
              <Paragraph className="text-[#696984] w-119.5 leading-[180%]">Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
</Paragraph>
            </div>
            <div className="">
              <Image imgSrc={Educators}/>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="flex justify-between items-center">
            <div className="">
              <Image imgSrc={Discussions} imgAlt={"Discussions image"}/>
            </div>
            <div className="">
              <Heading Tag="h3" className="text-[#00CBB8] text-[40px] font-semibold font-poppins w-[274px]"><span className="text-[#2F327D]">One-on-One</span> Discussions</Heading>
              <p className="text-[#696984] w-[505px] text-[22px] leading-[180%] font-normal font-poppins">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
            </div>
          </div>
          <div className="text-center pb-14.25 ">
            <a href="#" className="border border-[#49BBBD] px-9.25 py-4.25 rounded-[80px] text-[#49BBBD] hover:bg-[#49BBBD] hover:border-0 hover:text-[#fff]">See more features</a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Features;
