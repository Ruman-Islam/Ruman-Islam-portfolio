import React from "react";
import { NavLink } from "react-router-dom";
import Skills from "../components/Skills";

const WhatIDo = () => {
  return (
    <div className="flex flex-col text-white py-10">
      <div className="about">
        <h1 className="title">What I Do</h1>
        <div className="horizontal-line"></div>
        <br />
        <p className="text-[16px]    no-underline">
          I’m a Frontend Developer and Programmer with highly interest in
          JavaScrips and Modern web tech like ReactJS, NextJS. I have experience
          in web development using JavaScript. Also I built many frontend and MERN Stack web
          applications. I’m passionate to make a clean, beautiful, professional,
          responsive website and maximum optimized way so that it performs well.
          As a programmer, I love taking challenges and love being part of the
          solution. My hobby is keeping myself updated with all latest
          technologies and tools. Do you want to find out more about my
          experience? Check out my{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1TGHI_gJUaZ32R2yVKxBBh6sMmKrq5bOB/view?usp=sharing"
          >
            online resume
          </a>{" "}
          and <NavLink to="/projects">project portfolio</NavLink>.
        </p>
        <Skills />
      </div>
    </div>
  );
};

export default WhatIDo;
