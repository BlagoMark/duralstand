import { usersAPI } from "../api/api";
const ON_SEARCH_USERS_CHANGE = "ON-SEARCH-USERS-CHANGE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SHOW_MORE_USERS = "SHOW-MORE-USERS";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOW_PROGRESS = "TOGGLE-IS-FOLLOW-PROGRESS";

let initialState = {
  users: [],
  page: 1,
  usersCount: 12,
  currentPage: 1,
  searchText: "",
  isFetching: true,
  followInProgress: false,
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case ON_SEARCH_USERS_CHANGE: {
      let stateCopy = { ...state };
      let text = action.text;
      stateCopy.searchText = text;
      return stateCopy;
    }
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId || u.userId === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    case SHOW_MORE_USERS: {
      return {
        ...state,
        page: action.page,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOW_PROGRESS: {
      return { ...state, followInProgress: action.followInProgress };
    }
    default:
      return state;
  }
};

// ACTION CREATORS

export const onSearchUsersChangeAC = (text) => ({
  type: ON_SEARCH_USERS_CHANGE,
  text: text,
});

export const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const follow = (userId) => ({
  type: FOLLOW,
  userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const onShowMoreUsers = (page) => ({
  type: SHOW_MORE_USERS,
  page,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleIsFollowInProgress = (followInProgress) => ({
  type: TOGGLE_IS_FOLLOW_PROGRESS,
  followInProgress,
});

// THUNK CREATORS

export const getUsers = (page, usersCount) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let response = await usersAPI.getUsers(page, usersCount);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
};

export const getUserForProfile = (userId) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let response = await usersAPI.getUsers(userId);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
};

export const onShowMoreBtn = (usersCount) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  initialState.currentPage++;
  let response = await usersAPI.showMoreUsers(
    initialState.currentPage,
    usersCount
  );
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
};

export const followTC = (id) => {
  return (dispatch) => {
    toggleFollowing(dispatch, id, usersAPI.follow, follow);
  };
};
export const unfollowTC = (id) => {
  return (dispatch) => {
    toggleFollowing(dispatch, id, usersAPI.unfollow, unfollow);
  };
};

export const toggleFollowing = async (
  dispatch,
  id,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleIsFollowInProgress(true));
  let response = await apiMethod(id);

  if (response.resultCode === 0) {
    dispatch(actionCreator(id));
  }

  dispatch(toggleIsFollowInProgress(false));
};

export default usersReduser;
