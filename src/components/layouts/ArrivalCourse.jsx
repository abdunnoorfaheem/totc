import React from "react";
import Image from "../Image";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

const ArrivalCourse = ({ ImageSrc, headingText, paragraphText }) => {

  
  return (
    
    <div className="px-6 py-6 shadow-box rounded-[20px] bg-white h-full flex flex-col justify-between">
      <div>
        <Image
          imgSrc={ImageSrc}
          imgAlt={"Image"}
          className={"m-auto py-4 h-40 w-40 object-cover"}
        />

        <Heading
          Tag="h4"
          className="text-[#2F327D] text-xl font-medium font-poppins text-center mb-2"
        >
          {headingText}
        </Heading>

        <Paragraph className={"text-center"}>
          {paragraphText}
        </Paragraph>
      </div>
    </div>
  );
};

export default ArrivalCourse;