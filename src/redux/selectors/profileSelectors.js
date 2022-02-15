export const selectProfile = (state) => {
   return state.profilePage.profile;
}

export const selectDescription = (state) => {
   return selectProfile(state).aboutMe;
}

export const selectAvatar = (state) => {
   return selectProfile(state).photos.large;
}

export const selectStatus = (state) => {
   return state.profilePage.status;
}

export const selectPosts = (state) => {
   return state.profilePage.posts;
}
