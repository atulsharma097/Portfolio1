import React from 'react';
import resumePDF from "../assets/ATULSHARMACV1.pdf";

const Button = () => {
  return (

      

    <a 
      href={resumePDF} 
      download="Atul_Sharma_Resume.pdf"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <button className="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]">
        Resume

        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className="w-5 h-5 animate-bounce"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" 
          />
        </svg>

      </button>
    </a>
  );
}

export default Button;

