import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Image from '../Image';
import Feature from '../../assets/feature.png';
import Square from '../../assets/square.png';
import BoxSqare from '../../assets/boxSqare.png';
import User from '../../assets/usericon.png';

const Features = () => {
  return (
    <>
 
           
           <section>
            <Container>
                <Heading Tag='h3' className='mt-40 text-center text-4xl font-bold font-poppins text-[#00CBB8] '><span className='text-[#2F327D]'>Our</span> Features</Heading>
                <Paragraph className='text-center mb-5'>This very extraordinary feature, can make learning activities more efficient</Paragraph>
                <div className="flex justify-between items-center py-25">
                    <div className="">
                        <Image imgSrc={Feature}/>
                    </div>
                    <div className="">
                        <Heading Tag='h2' className='text-[40px] font-semibold font-poppins w-135.5 text-[#2F327D] mb-12.5'>A <span className='text-[#00CBB8]'>user interface</span> designed for the classroom</Heading>
                        <ul>
                            <li className='flex items-center text-[22px] font-normal font-poppins text-[#696984] w-120.5 mb-10'><Image imgSrc={Square} className={'w-15 h-15 rounded-[50%]'}/> Teachers don’t get lost in the grid view and have a dedicated Podium space.</li>
                            <li className='flex items-center text-[22px] font-normal font-poppins text-[#696984] w-120.5 mb-10'><Image imgSrc={BoxSqare} className={'w-15 h-15 rounded-[50%]'}/> TA’s and presenters can be moved to the front of the class.</li>
                            <li className='flex items-center text-[22px] font-normal font-poppins text-[#696984] w-120.5'><Image imgSrc={User} className={'w-15 h-15 rounded-[50%]'}/>Teachers can easily see all students and class data at one time.</li>
                        </ul>
                    </div>
                </div>
            </Container>
           </section>
         
    
    </>
  )
}

export default Features