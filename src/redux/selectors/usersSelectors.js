import { createSelector } from "reselect";

export const selectAllUsers = (state) => {
   return state.usersPage.users;
}

export const selectCurrentPage = (state) => {
   return state.usersPage.currentPage;
}

export const selectPageSize = (state) => {
   return state.usersPage.pageSize;
}

export const selectTotalUsersCount = (state) => {
   return state.usersPage.totalUsersCount;
}

export const selectIsFetching = (state) => {
   return state.usersPage.isFetching;
}

export const selectFollowingInProgress = (state) => {
   return state.usersPage.followingInProgress;
}

export const selectFriends = createSelector(selectAllUsers,  (users) => {
   return users.filter( user => user.followed);
})

export const selectAllFriends = (state) => {
   return state.usersPage.followedUsers;
}

