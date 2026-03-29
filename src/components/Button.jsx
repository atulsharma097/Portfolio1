import React from 'react';
import { motion } from 'framer-motion';
import resumePDF from "../assets/ATULSHARMACV1.pdf";

const Button = () => {
  return (
    <a 
      href={resumePDF} 
      download="Atul_Sharma_Resume.pdf"
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block"
    >
      <motion.button 
        whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(0, 255, 255, 0.4)" }}
        whileTap={{ scale: 0.97 }}
        className="relative overflow-hidden cursor-pointer flex items-center justify-center gap-3 bg-black/60 backdrop-blur-md px-8 py-4 rounded-full text-cyan-400 font-bold tracking-widest uppercase border border-cyan-400/50 hover:bg-cyan-950/40 transition-colors duration-300 shadow-[0_0_15px_rgba(0,255,255,0.15)]"
      >
        <span className="relative z-10">Resume</span>

        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          className="w-5 h-5 animate-bounce relative z-10"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" 
          />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cyan-500/20 to-transparent pointer-events-none" />
      </motion.button>
    </a>
  );
}

export default Button;

