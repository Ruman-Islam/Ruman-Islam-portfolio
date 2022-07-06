import SkillCard from "./SkillCard";
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import nodeJs from '../assets/nodeJs.png';
import tailwind from '../assets/tailwind-css.png';
import bootstrap from '../assets/Bootstrap.png';
import express from '../assets/express.png';
import git from '../assets/git.png';
import firebase from '../assets/firebase-logo-vector.svg';
import heroku from '../assets/heroku-logo.png';
import npm from '../assets/npm.png';
import mongodb from '../assets/mongodb.png';
import axios from '../assets/axios.png';
import reactQuery from '../assets/react-query.png';
import netlify from '../assets/netlify.svg';
import postman from '../assets/Postman_(software).png';
import daisyui from '../assets/logo-4.svg';
import vscode from '../assets/Visual_Studio.png';
import antDesign from '../assets/ant-design.png';

const allSkills = [
    { img: html },
    { img: css },
    { img: js },
    { img: react },
    { img: nodeJs },
    { img: tailwind },
    { img: bootstrap },
    { img: express },
    { img: git },
    { img: firebase },
    { img: heroku },
    { img: npm },
    { img: mongodb },
    { img: axios },
    { img: reactQuery },
    { img: netlify },
    { img: postman },
    { img: daisyui },
    { img: vscode },
    { img: antDesign }
]

const Skills = () => {
    return (
        <div className="w-10/12 flex flex-col h-full mt-10
        justify-center items-center mx-auto">
            <p className="text-[24px] font-bold mb-5">Technologies I know and familiar with</p>
            <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-5">
                {allSkills?.map((skill, index) =>
                    <SkillCard
                        key={index}
                        img={skill?.img}
                    />
                )}
            </div>
        </div>
    );
};

export default Skills;