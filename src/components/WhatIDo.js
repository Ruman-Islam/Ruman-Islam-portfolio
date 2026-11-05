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
          I develop responsive storefronts, booking platforms, admin dashboards and mobile apps. My work includes payments, authentication, real-time communication, media processing, SEO and automated testing. I also work with Cocos Creator and manage VPS hosting with Hostinger and Cloudflare. Explore my{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="/about-me"
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
