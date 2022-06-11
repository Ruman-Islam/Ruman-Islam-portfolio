

const SkillCard = ({ language, img, features }) => {
    return (
        <div className="pattern-dots-md gray-light hover:transform hover:scale-105 duration-500 cursor-pointer">
            <div className="rounded bg-gray-800 p-4 w-64 h-64 2xl:h-80 2xl:w-80">
                <div className="text-white bg-white w-10 h-10 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0 p-2">
                    <img src={img} alt="" />
                </div>
                <div className="flex-grow text-white">
                    <h2 className="text-xl 2xl:text-3xl text-white title-font font-medium mb-3">{language}</h2>
                    <ul>
                        {features?.map((feature, index) => <li className="text-lg 2xl:text-xl" key={index}>- {feature}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;