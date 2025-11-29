import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full py-20 px-6 text-center">
      
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-cyan-400 tracking-wide mb-4">
        ABOUT ME
      </h2>
      <p className="text-gray-300 text-lg max-w-3xl mx-auto">
        Get to know who I am and what I do
      </p>

      {/* Card */}
      <div className="max-w-4xl mx-auto mt-10 bg-black/40 backdrop-blur-xl border border-cyan-800/40 rounded-3xl p-10 shadow-[0_0_20px_#00ffff40]">

        <p className="text-gray-300 leading-8 text-lg">
          Hello! I’m <span className="text-cyan-400 font-semibold">Atul Sharma</span>, 
          a passionate and self-motivated 
          <span className="text-cyan-300 font-semibold"> Frontend Developer </span>  
           who loves building clean, modern and interactive web applications.
          I specialize in <span className="text-cyan-300">HTML, CSS, JavaScript, and React.js</span>, 
          and I enjoy turning ideas into real functional products.
        </p>

        <p className="text-gray-300 leading-8 text-lg mt-6">
          I have worked on multiple projects including an 
          E-Commerce platform, Weather App, Excuse Generator,  
          QR Generator, Drumkit App and more — which helped me understand 
          real-world problem-solving, APIs, UI/UX, responsive design 
          and component-based architecture.
        </p>

        <p className="text-gray-300 leading-8 text-lg mt-6">
          I’m continuously learning and improving my skills in 
          <span className="text-cyan-300"> React.js, Node.js, TailwindCSS and MongoDB</span>.  
          I believe in consistency, discipline, and growing every day.  
          My goal is to contribute to impactful projects and work in a professional environment 
          where I can collaborate, learn and build amazing digital experiences.
        </p>

      </div>
    </div>
  );
};

export default AboutSection;
