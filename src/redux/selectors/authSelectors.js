export const selectIsAuth = (state) => {
   return state.auth.isAuth;
}

export const selectUserId = (state) => {
   return state.auth.userId;
}

export const selectLogin = (state) => {
   return state.auth.login;
}
