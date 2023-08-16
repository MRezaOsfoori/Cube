import React from "react";




const Card = ({ title, content, logo }) => {
  return (
    
      <div className="  p-[8px]  hover:bg-blue-200 rounded-xl ">
        <div className=" py-[8px] flex  rounded">
          <div className="w-[48px]  flex justify-center items-center">{logo}</div>
          <div className="flex flex-col justify-center ">
            <p className="text-[14px] font-normal  leading-[24.8px]">{title}</p>
            <p className="text-[12px] text-gray-400 font-normal  leading-[24.8px]">{content}</p>

          </div>

          <div className="w-[24px] flex justify-end pl-2 items-center flex-1">
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.64603 12.8422L1.36503 7.5612C1.08203 7.2782 0.926025 6.9012 0.926025 6.5002C0.926025 6.0992 1.08203 5.7232 1.36503 5.4392L6.64603 0.158203L7.35302 0.865203L2.07202 6.1462C1.97802 6.2412 1.92602 6.3662 1.92602 6.5002C1.92602 6.6342 1.97802 6.7592 2.07202 6.8542L7.35302 12.1352L6.64603 12.8422Z" fill="#C2C6CE"/>
  </svg>

          </div>

        </div>
        
       
        
      </div>
    
  );
};

export default Card;
