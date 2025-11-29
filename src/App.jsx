// App.jsx
import React from 'react';
import './index.css';
import LightRays from './components/LightRays';
import PillNav from './components/PillNav';
import ProfileCard from './components/ProfileCard';
import DecryptedText from './components/DecryptedText';
import LogoLoop from './components/LogoLoop';
import { SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";
import ProjectSection from "./components/ProjectSection";
import Card from './components/Card';
import SkillScale from './components/SkillScale';
import Button from './components/Button';
import AboutSection from './components/AboutSection';


import { ParticleNameReveal } from './components/ParticleNameReveal';
import EducationSection from './components/EducationSection';



const techLogos = [
  { node: <SiReact color="#00ffff" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs color="#00ffff" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiMongodb color="#00ffff" />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiExpress color="#00ffff" />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiNodedotjs color="#00ffff" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiTailwindcss color="#00ffff" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];



// // Alternative with image sources
// const imageLogos = [
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ];


const App = () => {
  return (
    <div className="bg-black w-full min-h-screen">
      {/* 🌟 Light Rays Background - Fixed Position */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        {/* 🔝 Navigation */}
        <div className="w-full py-6">
          <PillNav
            logo="../src/assets/react.svg"
            items={[
              { label: 'Home', href: '#' },
              { label: 'About', href: '#about' },
              { label: 'Project', href: '#project' },
              { label: 'Skills', href: '#skills' },
              { label: 'Contact', href: '#social-links' },
            ]}

            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#ffffff"
            pillColor="#060010"
            hoveredPillTextColor="#ffffff"
            pillTextColor="white"
          />
        </div>

        {/* 🎯 Hero Section - Text and Profile Card */}
        <div className="container mx-auto px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[500px]">
            {/* Left Side - Animated Text */}
            <div className="flex flex-col justify-center space-y-8">
              <div style={{ minHeight: '4rem', display: 'flex', alignItems: 'center' }}>
                <DecryptedText
                  text="WEB DEVELOPER"
                  speed={100}
                  maxIterations={20}
                  characters="ABCD1234!?"
                  animateOn="view"
                  className="text-5xl font-bold text-cyan-400 tracking-wider leading-none"
                  parentClassName="inline-block"
                  encryptedClassName="text-gray-600"
                />
              </div>

              <div style={{ minHeight: '6rem', display: 'flex', alignItems: 'center' }}>
                <DecryptedText
                  text="ATUL SHARMA"
                  animateOn="view"
                  revealDirection="center"
                  speed={80}
                  sequential={true}
                  className="text-7xl font-black text-white tracking-tight leading-none"
                  parentClassName="inline-block"
                  encryptedClassName="text-gray-700"
                />
              </div>

              <div className="pt-4">
                <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                  Crafting beautiful and functional web experiences with modern technologies.
                </p>
              </div>
            </div>

            {/* Right Side - Profile Card */}
            <div className="flex justify-center lg:justify-end">
              <ProfileCard
                name="Atul Sharma"
                title="Web Developer"
                handle="atulsharma"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/src/assets/Untitled-design-3.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => {
                  document.querySelector("#social-links")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden', }}>
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover

            fadeOut
            fadeOutColor="black"
            ariaLabel="Technology partners"
          />
        </div>
       <div id="project">
  <ProjectSection />
</div>

       <div id="skills">
  <SkillScale />
</div>
        <div id="social-links">
        <Card />
        </div>
        <div className="flex justify-center my-16">
          <Button />
        </div>
        {/* <div className="flex justify-center my-16">
          <ParticleNameReveal name="Atul Sharma" particleCount={900} width={900} height={320} />
        </div> */}
        <div id="about">
          <EducationSection />
        </div>
        <div id="about">
          <AboutSection />
        </div> 
      </div>
    </div>
  );
};

export default App;