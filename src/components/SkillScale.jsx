import React from 'react';
import styled from 'styled-components';

const SkillScale = () => {
  return (
    <StyledWrapper>

      {/* ⭐ SECTION HEADING ⭐ */}
      <div className="section-heading">
        <h2>SKILL SCALE</h2>
        <p>My technical proficiency levels</p>
      </div>

      <div className="container">

        <div className="skill-box">
          <span className="title">JavaScript</span>
          <div className="skill-bar">
            <span className="skill-per javascript">
              <span className="tooltip">80</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">HTML</span>
          <div className="skill-bar">
            <span className="skill-per html">
              <span className="tooltip">90</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">CSS</span>
          <div className="skill-bar">
            <span className="skill-per css">
              <span className="tooltip">90</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">React</span>
          <div className="skill-bar">
            <span className="skill-per react">
              <span className="tooltip">70</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">Node.js</span>
          <div className="skill-bar">
            <span className="skill-per nodejs">
              <span className="tooltip">60</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">TailwindCSS</span>
          <div className="skill-bar">
            <span className="skill-per tailwindcss">
              <span className="tooltip">70</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">MongoDB</span>
          <div className="skill-bar">
            <span className="skill-per mongodb">
              <span className="tooltip">60</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">Postman</span>
          <div className="skill-bar">
            <span className="skill-per postmen">
              <span className="tooltip">70</span>
            </span>
          </div>
        </div>

      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

  /* ⭐ Section Heading ⭐ */
  .section-heading {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 70px;
  }

  .section-heading h2 {
    font-size: 40px;
    font-weight: 800;
    color: #00ffff;
    letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(0,255,255,0.4);
  }

  .section-heading p {
    font-size: 16px;
    color: #aefaff;
    margin-top: 5px;
  }

  /* ⭐ Skill Card ⭐ */
  .container {
    position: relative;
    max-width: 500px;
    width: 100%;
    background: #001a25; 
    margin: 0 auto;
    padding: 20px 25px;
    border-radius: 16px;
    user-select: none;
    border: 2px solid rgba(0, 255, 255, 0.4);
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.2);
  }

  .container .skill-box {
    width: 100%;
    margin: 25px 0;
  }

  .skill-box .title {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #aefaff;
    margin-bottom: 5px;
  }

  .skill-box .skill-bar {
    height: 10px;
    width: 100%;
    border-radius: 8px;
    background: rgba(0, 255, 255, 0.15);
    position: relative;
  }

  /* Animated bar */
  .skill-bar .skill-per {
    position: relative;
    display: block;
    height: 100%;
    border-radius: 6px;
    background: linear-gradient(
      90deg,
      #06b6d4,
      #0ea5e9,
      #00ffff
    );
    box-shadow: 0 0 10px #00ffff;
    animation: grow 2s ease-out forwards;
    width: 0;
  }

  /* 🎯 Correct Target Widths for ALL Skills */

  .skill-per.javascript {
    --target-width: 80%;
    animation-delay: 0.1s;
  }

  .skill-per.html {
    --target-width: 90%;
    animation-delay: 0.15s;
  }

  .skill-per.css {
    --target-width: 90%;
    animation-delay: 0.2s;
  }

  .skill-per.react {
    --target-width: 60%;
    animation-delay: 0.25s;
  }

  .skill-per.nodejs {
    --target-width: 50%;
    animation-delay: 0.3s;
  }

  .skill-per.tailwindcss {
    --target-width: 70%;
    animation-delay: 0.35s;
  }

  .skill-per.mongodb {
    --target-width: 60%;
    animation-delay: 0.4s;
  }

  .skill-per.postmen {
    --target-width: 70%;
    animation-delay: 0.45s;
  }

  /* Animation */
  @keyframes grow {
    0% {
      width: 0%;
      opacity: 1;
    }
    100% {
      width: var(--target-width);
      opacity: 1;
    }
  }

  /* Tooltip */
  .skill-per .tooltip {
    position: absolute;
    right: -14px;
    top: -28px;
    font-size: 10px;
    font-weight: bold;
    color: #001a25;
    padding: 3px 7px;
    border-radius: 4px;
    background: #00ffff;
    box-shadow: 0 0 10px #00ffff;
    z-index: 3;
  }

  .tooltip::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -3px;
    height: 10px;
    width: 10px;
    background: #00ffff;
    transform: translateX(-50%) rotate(45deg);
  }

`;

export default SkillScale;
