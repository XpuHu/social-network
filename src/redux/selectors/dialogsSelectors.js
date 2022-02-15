export const selectDialogs = (state) => {
   return state.dialogsPage.dialogs;
}

export const selectMessages = (state) => {
   return state.dialogsPage.messages;
}

// export const selectAvatar = (state) => {
//    return selectProfile(state).photos.large;
// }
//
// export const selectStatus = (state) => {
//    return state.profilePage.status;
// }
//
// export const selectPosts = (state) => {
//    return state.profilePage.posts;
// }
