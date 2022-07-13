import { stopSubmit } from "redux-form";
import { AuthAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

// ACTION CREATORS

export const setAuthUserData = (userId, email, login, isAuth = true) => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
});

// THUNK CREATORS

export const authTC = () => async (dispatch) => {
  let response = await AuthAPI.auth();

  if (response.resultCode === 0) {
    let { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login));
  }
};

export const loginTC = (formData) => async (dispatch) => {
  let response = await AuthAPI.login(formData);

  if (response.resultCode === 0) {
    dispatch(authTC());
  } else {
    dispatch(
      stopSubmit("Login", {
        _error: response.messages[0],
      })
    );
  }
};

export const logoutTC = () => async (dispatch) => {
  let response = await AuthAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReduser;
