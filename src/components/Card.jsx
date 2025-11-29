import React from 'react';
import styled from 'styled-components';

const Card = () => {
    return (
        <StyledWrapper>

         {/* ⭐ SECTION HEADING ⭐ */}
            <div className="section-heading">
                <h2>SOCIAL LINKS</h2>
                <p>Connect with me</p>
            </div>

            <div className="card">
                <div className="background">
                </div>
                <div className="logo">
                    Socials
                </div>

               {/* LinkedIn */}
<a 
  href="https://www.linkedin.com/in/atul-sharma-a50aa1184/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <div className="box box1">
    <span className="icon">
      <svg className="svg" viewBox="0 0 448 512">
        <path d="M100.28 448H7.4V148.9h92.88zM53.84 110C24.34 110 0 85.66 0 56.22A56.22 56.22 0 0 1 53.84 0a56.22 56.22 0 0 1 53.76 56.22c0 29.44-24.32 53.78-53.76 53.78zM447.9 448h-92.7V302.4c0-34.7-.7-79.3-48.3-79.3-48.4 0-55.9 37.8-55.9 76.8V448h-92.8V148.9H248v40.8c12.4-23.6 42.7-48.3 87.9-48.3 94 0 112 61.9 112 142.3V448z"/>
      </svg>
    </span>
  </div>
</a>

{/* GitHub */}
<a 
  href="https://github.com/atulsharma097" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <div className="box box2">
    <span className="icon">
      <svg className="svg" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 
        7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
        -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
        0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 
        2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.04 2.2-.82 
        2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 
        2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
        1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 
        8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    </span>
  </div>
</a>


{/* X (Twitter) */}
<a 
  href="https://x.com/Atul_sharma0927" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <div className="box box3">
    <span className="icon">
      <svg className="svg" viewBox="0 0 512 512">
        <path d="M389.2 48l-183.3 256 .3 .4 143.2 159.6h-54.7l-143.2-159.6 183.8-256h54.4zm122.8-48l-169.7 256 169.7 256h-66.3L275.2 256 445.7 0h66.3zM0 0l169.7 256L0 512h66.3l169.5-256L66.3 0H0z"/>
      </svg>
    </span>
  </div>
</a>


                <div className="box box4" />
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 200px;
    height: 200px;
    background: #001a25; /* dark cyan blue */
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.2);
    transition: all 1s ease-in-out;
    border: 2px solid rgba(0, 255, 255, 0.4);
    margin: 50px auto;
  }

    /* ⭐ Heading Styling ⭐ */
  .section-heading {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 70px;
  }

  .section-heading h2 {
    font-size: 40px;
    font-weight: 800;
    color: #00ffff;
    text-shadow: 0 0 10px rgba(0,255,255,0.4);
  }

  .section-heading p {
    font-size: 16px;
    color: #aefaff;
    margin-top: 5px;
  }

  .background {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      #0ea5e9 0%,     /* blue */
      #06b6d4 40%,    /* teal */
      #00ffff 100%    /* cyan */
    );
  }

  .logo {
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    transition: all 0.6s ease-in-out;
    font-size: 1.3em;
    font-weight: 600;
    color: #e0fcff;
    letter-spacing: 3px;
  }

  .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
  }

  .icon .svg {
    fill: rgba(255, 255, 255, 0.85);
    width: 100%;
    transition: all 0.5s ease-in-out;
  }

  .box {
    position: absolute;
    padding: 10px;
    text-align: right;
    background: rgba(0, 255, 255, 0.15);
    border-top: 2px solid rgba(0, 255, 255, 0.6);
    border-right: 1px solid rgba(0, 255, 255, 0.6);
    border-radius: 10% 13% 42% 0% / 10% 12% 75% 0%;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
    transform-origin: bottom left;
    transition: all 1s ease-in-out;
  }

  .box:hover .svg {
    fill: white;
  }

  /* Instagram */
  .box1 {
    width: 70%;
    height: 70%;
    bottom: -70%;
    left: -70%;
  }
  .box1::before {
    background: radial-gradient(circle, #00e5ff, #0ea5e9, #06b6d4);
    opacity: 0;
    transition: 0.5s;
  }
  .box1:hover::before {
    opacity: 1;
  }

  /* Twitter/X */
  .box2 {
    width: 50%;
    height: 50%;
    bottom: -50%;
    left: -50%;
    transition-delay: 0.2s;
  }
  .box2::before {
    background: radial-gradient(circle, #00eaff, #00c8ff);
    opacity: 0;
    transition: 0.5s;
  }
  .box2:hover::before {
    opacity: 1;
  }

  /* Discord */
  .box3 {
    width: 30%;
    height: 30%;
    bottom: -30%;
    left: -30%;
    transition-delay: 0.4s;
  }
  .box3::before {
    background: radial-gradient(circle, #00c2ff, #0099ff);
    opacity: 0;
    transition: 0.5s;
  }
  .box3:hover::before {
    opacity: 1;
  }

  .box4 {
    width: 10%;
    height: 10%;
    bottom: -10%;
    left: -10%;
    transition-delay: 0.6s;
  }

  .card:hover {
    transform: scale(1.1);
  }

  .card:hover .box {
    bottom: -1px;
    left: -1px;
  }

  .card:hover .logo {
    transform: translate(70px, -52px);
    letter-spacing: 0px;
  }`;


export default Card;  


