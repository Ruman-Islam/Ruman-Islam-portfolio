

const SkillCard = ({ img }) => {
    return (
        <div className="w-20 h-20">
            <img className="w-full h-full object-contain" src={img} alt="" />
        </div>
    );
};

export default SkillCard;