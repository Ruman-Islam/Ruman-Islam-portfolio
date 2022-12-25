import SkillCard from "./SkillCard";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import nodeJs from "../assets/nodeJs.png";
import tailwind from "../assets/tailwind-css.png";
import bootstrap from "../assets/Bootstrap.png";
import express from "../assets/express.png";
import git from "../assets/git.png";
import firebase from "../assets/firebase-logo-vector.svg";
import heroku from "../assets/heroku-logo.png";
import npm from "../assets/npm.png";
import mongodb from "../assets/mongodb.png";
import axios from "../assets/axios.png";
import reactQuery from "../assets/react-query.png";
import netlify from "../assets/netlify.svg";
import postman from "../assets/Postman_(software).png";
import daisyui from "../assets/logo-4.svg";
import vscode from "../assets/Visual_Studio.png";
import antDesign from "../assets/ant-design.png";
import "../styles/Intro.css";

const allSkills1 = [
  { img: html, css: "html" },
  { img: css, css: "css" },
  { img: js, css: "javascript" },
  { img: react, css: "react" },
  { img: nodeJs, css: "nodejs" },
  { img: tailwind, css: "tailwind" },
  { img: bootstrap, css: "bootstrap" },
  { img: express, css: "express" },
  { img: git, css: "git" },
  { img: firebase, css: "firebase" },
];

const allSkills2 = [
  { img: heroku, css: "heroku" },
  { img: npm, css: "npm" },
  { img: mongodb, css: "mongodb" },
  { img: axios, css: "axios" },
  { img: reactQuery, css: "reactQuery" },
  { img: netlify, css: "netlify" },
  { img: postman, css: "postman" },
  { img: daisyui, css: "daisyui" },
  { img: vscode, css: "vscode" },
  { img: antDesign, css: "antDesign" },
];

const Skills = () => {
  return (
    <div
      className="skill-logo-container"
    >
      <p className="text-[24px] font-bold mb-5 no-underline">
        Technologies I know and familiar with
      </p>
      <div class="flag">
        <div class="flagWave">
        {allSkills1?.map((skill, index) =>
                    <SkillCard
                        key={index}
                        img={skill?.img}
                        css={skill?.css}
                    />
                )}
        {allSkills2?.map((skill, index) =>
                    <SkillCard
                        key={index}
                        img={skill?.img}
                        css={skill?.css}
                    />
                )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
