import React from "react";
import { projectsData } from "../../lib/data";
import ProjectPreview from "../sub/ProjectPreview";

const Projects = () => {
  return (
    <div className="justify-items-center">
      <p className="text-gray-200 text-s font-bold mb-4">PROJECTS</p>
      <div className="space-y-8">
        {projectsData.map((project) => (
          <div>{<ProjectPreview {...project} />}</div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
