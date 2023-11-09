import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  SelectOutlined,
  // RightOutlined,
  // LeftOutlined,
  GithubOutlined,
  SyncOutlined,
} from "@ant-design/icons";
// import { Carousel } from "antd";
import ScrollUpBtn from "../../components/ScrollUpBtn";
import CopyRight from "../../components/CopyRight";
import "../../styles/ProjectDetail.css";
import Carousel from "../../components/Carousel";

const ProjectDetail = () => {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const project = data?.find((pg) => +pg.id === +id);
        setProject(project);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <SyncOutlined className="text-[#02cfb4] text-[50px]" spin />
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <br />
      <br />
      <br />
      <div>
        <Carousel project={project} />
        <div className="project-detail-title-container">
          <div>
            <h1 className="text-[#cbdceb] text-3xl font-bold">
              {project?.name}
            </h1>
            <h1 className="text-[#02cfb4] text-xl font-bold mt-1 mb-2">
              {project?.title}
            </h1>
          </div>
          <div>
            <a
              title="Live site"
              target="_blank"
              rel="noopener noreferrer"
              href={project?.liveLink}
            >
              <SelectOutlined />
            </a>
            {project?.gitClient && (
              <a
                title="Frontend repository"
                target="_blank"
                rel="noopener noreferrer"
                href={project?.gitClient}
              >
                <GithubOutlined />
              </a>
            )}
            {project?.gitServer && (
              <a
                title="Frontend repository"
                target="_blank"
                rel="noopener noreferrer"
                href={project?.gitServer}
              >
                <GithubOutlined />
              </a>
            )}
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="project-detail text-sm leading-normal">
          <h1 className="projectDetailBorderBottom">Overview</h1>
          {/* <p>{project?.overview}</p> */}
          <div dangerouslySetInnerHTML={{ __html: project?.overview }}></div>
        </div>
        <br />
        {/* <div className="project-detail">
          <h1 className="projectDetailBorderBottom">Features</h1>
          <ul className="list-disc pl-5">
            {project?.features?.map((ft, index) => (
              <li key={index}>{ft}</li>
            ))}
          </ul>
        </div> */}
        <br />
        <div className="project-detail">
          <h1 className="text-white text-4xl projectDetailBorderBottom">
            Technology
          </h1>
          <ul className="my-5 grid grid-cols-1 md:grid-cols-4 gap-3">
            {project?.technology?.map((tech, index) => (
              <li
                style={{ color: "white" }}
                className="px-5 py-1 bg-[#06283D] capitalize"
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ScrollUpBtn />
      <br />
      <br />
      <br />
      <CopyRight />
    </div>
  );
};

export default ProjectDetail;
