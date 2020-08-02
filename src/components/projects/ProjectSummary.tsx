import React from "react";
import { Project } from "../../redux/reducers/project";

interface ProjectSummaryProps {
  project: Project;
}

const ProjectSummary = (props: ProjectSummaryProps) => {
  const { project } = props;
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3"></div>
      <span className="card-title">{project.title}</span>
      <p>{project.content}</p>
      <p className="grey-text">3rd Spetember 2 am</p>
    </div>
  );
};

export default ProjectSummary;
