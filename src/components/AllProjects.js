import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { SyncOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

const AllProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const projects = pathname.includes("project") ? data : data.slice(0, 3);
        setProjects(projects);
        setLoading(false);
      });
  }, [pathname]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <SyncOutlined className="text-[#02cfb4] text-[50px]" spin />
      </div>
    );
  }

  return (
    <div>
      <div>
        {projects?.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
