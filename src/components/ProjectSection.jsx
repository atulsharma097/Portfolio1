// import { image } from "framer-motion/client";
import React from "react";
import ecom from "../assets/e-com.jpg";
import weather from "../assets/weatherapp.jpg";
// import { image } from "framer-motion/client";
import drumkit from "../assets/drumkit.jpg";
import vibecommerce from "../assets/vibecommerce.jpg";
import excusegen from "../assets/excusegen.jpg";
import qrgenerator from "../assets/qrgenerator.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack ecommerce solution with user auth & payment integration.",
    demo: "https://classy-kringle-133a1e.netlify.app/",
    image: ecom

  },
  {
    title: "Vibe-Commerce",
    desc: "Developed a full-stack e-commerce web application featuring product listings, a shopping cart, and secure checkout using React and Node js.",
    demo: "#",
    image: vibecommerce
  },
  {
    title: "Weather Dashboard",
    desc: "Built a responsive weather application using React.js to display real-time weather data",
    demo: "https://weather-app-sigma-one-71.vercel.app/",
    image: weather
  },
  {
    title: "DrumKit",
    desc: "This project is a simple and interactive Drumkit Web App built using HTML, CSS, and JavaScript",
    demo: "#",
    image: drumkit
  },
  
  {
    title: "Excuse Generator",
    desc: "The Excuse Generator is a fun and creative web tool built using HTML, CSS, and JavaScript that instantly produces random excuses with just one click",
    demo: "#",
    image: excusegen
  },
  {
    title: "QR-Generator",
    desc: "The tool allows users to type anything—links, messages, or plain text—and generate a clean, high-quality QR code with a single click.",
    demo: "#",
    image: qrgenerator
  },
];

const ProjectSection = () => {
  return (
    <div className="py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-cyan-400 tracking-wide">
          PROJECT SHOWCASE
        </h2>
        <p className="text-gray-300 mt-3 text-lg">
          Explore my recent work
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, index) => (
          <div
            key={index}
            className="rounded-3xl border border-cyan-800/40 bg-black/40 p-6 backdrop-blur-xl transition-all hover:border-cyan-400/60 hover:shadow-[0_0_20px_#00ffff50]"
          >
            {/* Image */}
            <div className="w-full h-40 overflow-hidden rounded-xl mb-4">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />

            </div>
            <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm mb-5">{p.desc}</p>

            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-black rounded-full"
            >
              View Demo
            </a>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
