import authReducer, { authState } from "./auth";
import projectReducer, { projectState } from "./project";
import { combineReducers, Reducer } from "redux";
import { firestoreReducer } from "redux-firestore";

export interface ApplicationState {
  auth: authState;
  project: projectState;
}

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
});

export type State = ReturnType<typeof rootReducer>;
export default rootReducer;
