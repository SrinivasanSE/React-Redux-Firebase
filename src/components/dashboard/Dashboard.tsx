import React from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { State } from "../../redux/reducers";
import { Project } from "../../redux/reducers/project";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

interface DashBoardProps {
  projects: Project[];
}

const Dashboard = (props: DashBoardProps) => {
  const { projects } = props;
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    projects: state.project.projects,
  };
};
export default connect(mapStateToProps, null)(Dashboard);
