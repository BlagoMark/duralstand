import { authTC } from "./authReducer";

const SET_INITIALIZED_APP = "SET-INITIALIZED-APP";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_APP:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const initializingSuccess = () => ({
  type: SET_INITIALIZED_APP,
});

export const initialize = () => async (dispatch) => {
  await dispatch(authTC());
  dispatch(initializingSuccess());
};

export default appReducer;
