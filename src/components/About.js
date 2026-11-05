import React from "react";
import { NavLink } from "react-router-dom";
import resume from "../assets/Ruman_Islam_Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "../styles/About.css";

const About = () => {
  return (
    <div className="text-white py-8 about-box">
      <div className="about-box-left">
        <div className="about">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold">
            Ruman Islam
          </h1>
          <h2 className="text-white text-2xl pl-1 mt-2 mb-5 my-name-box">
            Full-Stack &amp; Mobile App Developer</h2>
          <p className="text-[16px] no-underline">
            I’m a full-stack and mobile app developer based in Hunan, China, currently working at DevRiser. I build React and Next.js websites, Node.js APIs and React Native mobile apps. I independently developed five client websites from end to end. Explore my <NavLink to="/projects">project portfolio</NavLink>{" "}
            and{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={resume}
            >
              online resume
            </a>
            .
          </p>
        </div>
        <div className="flex mt-5 flex-col md:flex-row">
          <button className="resume-btn mr-0 md:mr-2 mb-2 md:mb-0">
            <FontAwesomeIcon icon={faBriefcase} className="text-white" />
            <NavLink to="/projects">View Projects</NavLink>
          </button>
          <button className="resume-btn resume-btn-download">
            <FontAwesomeIcon icon={faFileLines} className="text-white" />
            <a href={resume} download={resume} className="ml-1 text-white">
              Download Resume
            </a>
          </button>
        </div>
      </div>
      {/* <div className="about-box-right">
        <div id="box">
          <div id="borderLeft"></div>
          <div id="borderRight"></div>
          <div id="borderTop"></div>
          <div id="borderBottom"></div>
          <div className="profile-image-container"></div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
