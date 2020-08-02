export interface Project {
  title: string;
  content: string;
}

export interface actionType {
  type: string;
  payload: any;
}

export interface projectState {
  projects: Project[];
  error: string;
}

const defaultState: projectState = {
  projects: [
    {
      title: "super",
      content: "dkfsknjsng",
    },
  ],
  error: "",
};

const project = (state = defaultState, action: actionType): projectState => {
  switch (action.type) {
    case "CREATE_PROJECT":
      return {
        ...state,
        projects: action.payload,
      };
    case "CREATE_PROJECT_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default project;
