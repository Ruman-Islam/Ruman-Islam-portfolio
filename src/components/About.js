import React from "react";
import { NavLink } from "react-router-dom";
import resume from "../assets/Ruman Islam(Resume Frontend).pdf";
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
            <span>F</span>
            <span>r</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>e</span>
            <span>n</span>
            <span>d</span> {" "}
            <span>D</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </h2>
          <p className="text-[16px] no-underline">
            A self-motivated, ambitious and enthusiastic web designer and
            developer with highly interested in MERN stack development. To work
            in software industry with modern web technologies of different local
            and multinational Software/IT agency of Bangladesh and world-wide
            and grow rapidly with increasing skills and responsibilities. Check
            out my project <NavLink to="/projects">project portfolio</NavLink>{" "}
            and{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1TGHI_gJUaZ32R2yVKxBBh6sMmKrq5bOB/view?usp=sharing"
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
