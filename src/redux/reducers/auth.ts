interface actionType {
  type: string;
  payload: any;
}
export interface authState {
  name: string;
}
export const defaultState: authState = {
  name: "",
};

const auth = (state = defaultState, action: actionType) => {
  return state;
};

export default auth;
