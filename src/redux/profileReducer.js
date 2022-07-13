import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";
const SAVE_PHOTO_ERROR = "SAVE-PHOTO-ERROR";

let initialState = {
  bio: {
    avatar: null,
    wallpaper:
      "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    name: null,
    birthday: null,
    city: null,
    status: null,
  },
  error: null,
  posts: [
    {
      id: 1,
      message: "Приветствую, мои хорошие",
      likes: 12,
    },
    {
      id: 2,
      message: "Я тут решил бахнуть соцсетку",
      likes: 45,
    },
    {
      id: 3,
      message:
        "Но оказалось, что для этого надо учить реакт, а это довольно замудренная штука",
      likes: 8,
    },
    {
      id: 4,
      message: "Но ничего, я начал, а значит нужно довести дело до конца 🚀",
      likes: 18,
    },
    {
      id: 5,
      message: "Проверяем как работают BLL и UI в одной связке",
      likes: 18,
    },
  ],
  profile: null,
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        message: action.message.trim(),
        likes: 0,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      if (newPost.message.length > 0 && newPost.message !== "\n") {
        stateCopy.posts.push(newPost);
      }
      return stateCopy;
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    case SAVE_PHOTO_ERROR: {
      return {
        ...state,
        profile: { ...state.profile },
        error: action.error,
      };
    }
    default:
      return state;
  }
};

// ACTION CREATORS

export const addPost = (message) => ({
  type: ADD_POST,
  message,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos,
  };
};
export const savePhotoError = (error) => {
  return {
    type: SAVE_PHOTO_ERROR,
    error,
  };
};

// THUNK CREATORS

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getUserStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  } else {
    setInterval(dispatch(savePhotoError(response.data.messages[0])), 100);
    setTimeout(function () {
      clearInterval(dispatch(savePhotoError(null)));
    }, 5000);
  }
};

export default profileReduser;
