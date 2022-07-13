import { createSelector } from "reselect";

export const getUsersSelector = (state) => {
  return state.usersPage.users;
};

export const getPageSize = (state) => {
  return state.usersPage.page;
};

export const getUsersCount = (state) => {
  return state.usersPage.usersCount;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowInProgress = (state) => {
  return state.usersPage.followInProgress;
};

export const getUsersMassive = createSelector(getUsersSelector, (users) => {
  return users.filter((u) => true);
});
