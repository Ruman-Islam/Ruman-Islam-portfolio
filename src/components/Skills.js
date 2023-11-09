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
import nextjs from "../assets/nextjs-icon.png";
import redux from "../assets/redux.png";
import mui from "../assets/mui.png";
import nextauth from "../assets/logo-sm.png";
import jira from "../assets/jira-logo.webp";
import trello from "../assets/Trello_logo.png";
import typeScript from "../assets/typescript_logo.png";
import scss from "../assets/Sass_Logo.png";
import rhf from "../assets/rhf.png";
import "../styles/Intro.css";

const allSkills1 = [
  { img: html },
  { img: css },
  { img: js },
  { img: typeScript },
  { img: react },
  { img: nextjs },
  { img: bootstrap },
  { img: tailwind },
  { img: daisyui },
  { img: mui },
  { img: antDesign },
  { img: scss },
  { img: rhf },
  { img: git },
  { img: firebase },
  { img: redux },
  { img: axios },
  { img: reactQuery },
];

const allSkills2 = [
  { img: npm },
  { img: postman },
  { img: heroku },
  { img: netlify },
  { img: nextauth },
  { img: mongodb },
  { img: nodeJs },
  { img: express },
  { img: vscode },
  { img: jira },
  { img: trello },
];

const Skills = () => {
  return (
    <div className="skill-logo-container">
      <p className="text-[24px] font-bold mb-5 no-underline">
        Technologies I know and familiar with
      </p>
      <div class="flag">
        <div class="flagWave">
          {allSkills1?.map((skill, index) => (
            <SkillCard key={index} img={skill?.img} css={skill?.css} />
          ))}
          {allSkills2?.map((skill, index) => (
            <SkillCard key={index} img={skill?.img} css={skill?.css} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
