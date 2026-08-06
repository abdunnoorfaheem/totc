import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Image from '../Image';
import Class from '../../assets/classroom.png';

const Material = () => {
  return (
    <>
    
    <section className='py-12'>
        <Container>
              
              <div className="flex justify-between items-center">
                <div className="w-[49%] relative">
                    <Heading Tag='h4' className='text-[#2F327D] text-4xl font-medium font-poppins'>Everything you can do in a physical classroom, <span className='text-[#00CBB8]'>you can do with TOTC</span></Heading>
                    <Paragraph className='text-xl font-poppins font-normal w-117.5 my-7.5 leading-[180%]'>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</Paragraph>
                    <div className="">
                        <a href="#" className='text-[#696984] text-[22px] font-normal font-poppins underline'>Learn more</a>
                    </div>
                    <div className="h-18.25 w-18.25 bg-[#33EFA0] rounded-[50%] absolute -top-6 -left-7 -z-1"></div>
                    <div className="h-7.5 w-7.5 bg-[#33EFA0] rounded-[50%] absolute right-78 bottom-28"></div>
                   
                </div>
                <div className="w-[49%]">
                    <div className="relative">
                        <Image imgSrc={Class}/>
                        <div className="bg-[#23BDEE] h-35 w-35 rounded-[20px] absolute -top-5 -left-5 -z-1"></div>
                        <div className="bg-[#33EFA0] h-58 w-58 rounded-[20px] absolute right-15 -bottom-5 -z-1"></div>
                    </div>
                </div>
              </div>

        </Container>
    </section>
    
    </>
  )
}

export default Material