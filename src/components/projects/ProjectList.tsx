import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Project } from "../../redux/reducers/project";

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = (props: ProjectListProps) => {
  const { projects } = props;
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project, i) => (
          <ProjectSummary key={i} project={project} />
        ))}
    </div>
  );
};

export default ProjectList;
