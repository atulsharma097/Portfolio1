import React, { useState } from "react";

export default function EducationSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const education = [
{
  degree: "Bachelor of Arts (B.A)",
  field: "Arts & Humanities",
  institution: "University of Jammu",
  location: "Jammu, India",
  duration: " 2023",
  grade: "Completed",
 achievements: [
  "Studied a broad range of subjects that strengthened critical thinking and communication skills.",
  "Completed multiple research-based assignments and presentations during the course.",
  "Actively participated in cultural, literary, and academic activities organized by the university.",
],
  logo: "🎓",
  color: "from-blue-500 to-cyan-500",
  glowColor: "rgba(59,130,246,0.45)",
},


{
  degree: "MERN Stack Certification",
  field: "Full-Stack Web Development",
  institution: "Professional Certification",
  location: "ThinkNEXT Technologies - digital marketing industrial training internship chandigarh mohali",
  duration: "2025",
  grade: "Certified",
  achievements: [
    "Hands-on experience with React, Node.js, Express and MongoDB",
    "Built and deployed projects including an e-commerce app",
    "Improved skills in REST APIs, state management and deployment",
  ],
  logo: "💻",
  color: "from-indigo-500 to-violet-500",
  glowColor: "rgba(99, 102, 241, 0.45)",
},

{
  degree: "Professional Training",
  field: "WordPress, SEO & Digital Marketing",
  institution: "via ENS Digital / Tricity Infra (work-led learning)",
  location: "Jammu / Chandigarh / Remote",
  duration: "2018 - 2021",
  grade: "Practical Experience",
  achievements: [
    "Developed and managed responsive WordPress websites",
    "Implemented SEO strategies to improve organic search performance",
    "Planned and executed social media & paid campaigns for lead generation",
  ],
  logo: "🌐",
  color: "from-emerald-400 to-cyan-400",
  glowColor: "rgba(20, 184, 166, 0.45)",
},

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 animate-pulse" />
              <h2 className="relative text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Education
              </h2>
            </div>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey and achievements that shaped my career
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

          {/* Education cards */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? "md:ml-0" : "md:ml-auto"
                } md:w-[calc(50%-3rem)] w-full pl-20 md:pl-0`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-8 md:left-auto ${
                    index % 2 === 0 ? "md:right-[-2.6rem]" : "md:left-[-2.6rem]"
                  } top-8 transform -translate-x-1/2 md:translate-x-0 z-20`}
                >
                  <div className="relative">
                    <div
                      className={`absolute inset-0 blur-xl bg-gradient-to-r ${edu.color} opacity-60 animate-pulse`}
                      style={{
                        animation: hoveredIndex === index ? "pulse 1s infinite" : "none",
                      }}
                    />
                    <div
                      className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center text-2xl border-4 border-slate-900 shadow-lg transform transition-all duration-300 ${
                        hoveredIndex === index ? "scale-125 rotate-12" : "scale-100"
                      }`}
                    >
                      {edu.logo}
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`group relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 transition-all duration-500 ${
                    hoveredIndex === index
                      ? "transform md:scale-105 shadow-2xl"
                      : "shadow-lg"
                  }`}
                  style={{
                    boxShadow:
                      hoveredIndex === index
                        ? `0 20px 60px ${edu.glowColor}, 0 0 40px ${edu.glowColor}`
                        : "0 10px 30px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {/* Gradient border on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${edu.color} opacity-0 transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-20" : ""
                    }`}
                  />

                  <div className="relative z-10">
                    {/* Duration badge */}
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div
                        className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${edu.color} text-white text-sm font-semibold shadow-lg`}
                      >
                        {edu.duration}
                      </div>
                      <div className="px-4 py-1.5 rounded-full bg-slate-700/50 text-gray-300 text-sm font-medium">
                        {edu.grade}
                      </div>
                    </div>

                    {/* Degree info */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p
                      className={`text-lg font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-3`}
                    >
                      {edu.field}
                    </p>

                    {/* Institution */}
                    <div className="flex items-start gap-2 mb-6">
                      <svg
                        className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <div>
                        <p className="text-white font-medium">{edu.institution}</p>
                        <p className="text-gray-400 text-sm">{edu.location}</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <p className="text-gray-300 font-semibold text-sm uppercase tracking-wide mb-3">
                        Key Achievements
                      </p>
                      {edu.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 group/item"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${edu.color} mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`}
                          />
                          <p className="text-gray-300 text-sm leading-relaxed group-hover/item:text-white transition-colors duration-300">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${edu.color} opacity-10 rounded-bl-full transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-30" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-xl rounded-full border border-slate-700/50">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-gray-400 text-sm font-medium">
              Continuous learner • Always evolving
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { EducationSection };