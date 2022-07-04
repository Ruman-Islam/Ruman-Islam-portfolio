import SkillCard from "./SkillCard";
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import nodeJs from '../assets/nodeJs.png';
import others from '../assets/terminal.png';
import PageTitle from './PageTitle';

const allSkills = [
    { img: html, language: 'HTML', features: ['HTML5', 'Semantic HTML', 'JSX'] },
    { img: css, language: 'CSS', features: ['CSS3', 'Bootstrap', 'Tailwind', 'MaterialUI'] },
    { img: js, language: 'JavaScript', features: ['ES5', 'ES6', 'DOM'] },
    { img: react, language: 'React JS', features: ['Hooks', 'Context API', 'React Router'] },
    { img: nodeJs, language: 'Back-end (Basic)', features: ['Node JS', 'Express JS', 'MongoDB', 'REST API'] },
    { img: others, language: 'Others (Tools)', features: ['Git and Github', 'VS Code', 'NPM', 'Postman'] }
]

const Skills = () => {
    return (
        <div className="w-10/12 flex flex-col h-full mt-10
        justify-center items-center mx-auto">
            <PageTitle title="Skills" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {allSkills?.map(skill =>
                    <SkillCard
                        key={skill?.language}
                        img={skill?.img}
                        language={skill?.language}
                        features={skill?.features}
                    />
                )}
            </div>
        </div>
    );
};

export default Skills;