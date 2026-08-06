import React, { useState } from "react";

const Paragraph = ({ className = "", children }) => {
  const [isExpand, setIsExpand] = useState(false);

  const text = typeof children === "string" ? children : "";
  const word = text.split(" ");

  const textLong = word.length > 50;
  const displayText = isExpand ? text : word.slice(0, 50).join(" ");

  return (
    <>
      <p className={`${className} text-[16px] font-normal text-[#696984] font-poppins`}>
        {displayText}
        {!isExpand && textLong && "..."}
      </p>

      {textLong && (
        <button
          onClick={() => setIsExpand(!isExpand)}
          className="text-blue-500 text-sm font-medium mt-1 underline cursor-pointer"
        >
          {isExpand ? "Read Less" : "Read More"}
        </button>
      )}
    </>
  );
};

export default Paragraph;