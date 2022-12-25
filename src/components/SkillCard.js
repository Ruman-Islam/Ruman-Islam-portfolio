
const SkillCard = ({ img, css }) => {
  return (
    <div className={`tech-img-box logo-${css}`}>
      {/* <span className={`span-${css}-1`}></span>
      <span className={`span-${css}-2`}></span> */}
      <img className="logo" src={img} alt="" />
      <span>{css}</span>
    </div>
  );
};

export default SkillCard;
