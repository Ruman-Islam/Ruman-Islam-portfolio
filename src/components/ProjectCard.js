import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectCard = ({ project, project: { id, img, name, description } }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div
      className="flex flex-col md:flex-row justify-between
         items-center h-full"
    >
      <div
        className={`w-full md:w-10/12 ${
          pathname.includes("/projects") ? "2xl:w-8/12" : "2xl:w-12/12"
        }`}
      >
        <img style={{height: '250px'}} className="w-full" src={img} alt="" />
      </div>
      <div className="p-2 md:p-5 2xl:p-10 w-full md:w-10/12 2xl:w-12/12">
        <div>
          <h1 className="text-[30px] 2xl:text-[35px] text-[#02cfb4] font-bold">
            {name}
          </h1>
          <p style={{ textDecoration: "none" }} className="gray-text">
            {description}
          </p>
        </div>
        <div>
          <h1
            className={`text-[16px] 2xl:text-[18px] font-semibold text-white
                     ${pathname.includes("/projects") ? "my-2" : "my-1"}`}
          >
            Technology
          </h1>
          <div className="project-tech-wrapper">
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
            <span>MERN</span>
          </div>
          <div className="mt-3 text-white project light-border-bottom pb-3">
            <a
              className="px-5 py-1 hover:text-white bg-[#06283D] hover:bg-[#02cfb4] rounded uppercase mr-1"
              type="button"
              target="_blank"
              rel="noopener noreferrer"
              href={project?.liveLink}
            >
              preview
            </a>
            <button
              onClick={() => navigate(`/project-detail/${id}`)}
              className="px-5 py-1 bg-[#06283D] hover:bg-[#02cfb4] rounded uppercase"
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
