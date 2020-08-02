import React from "react";
import { RouteComponentProps } from "react-router";

interface MatchParams {
  id: string;
}

interface ComponentProps extends RouteComponentProps<MatchParams> {} // For react-router params types
const ProjectDetails = (props: ComponentProps) => {
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Project Title-{props.match.params.id}
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            quia molestiae, libero, unde facilis accusantium, voluptatibus
            aliquam natus culpa hic ipsa! Dicta inventore tenetur molestias
            reprehenderit illo officia eaque magni?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-tet">
          <div>Posted by the Srinivasan</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
