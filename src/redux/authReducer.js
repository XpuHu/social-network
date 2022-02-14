import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_ID = 'SET_USER_ID';
const SET_AUTH_FALSE = 'SET_AUTH_FALSE';

const initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.payload
         }
      case SET_USER_ID:
         return {
            ...state,
            userId: action.userId
         }
      default:
         return state;
   }
}

// ACTION CREATORS
const setAuthUserData = (userId, email, login, isAuth) => ( { type: SET_USER_DATA, payload: { userId, email, login, isAuth } } );

// THUNK CREATORS
export const getUserAuth = () => {
   return (dispatch) => {
      authAPI.getAuthUserData().then(data => {
         if (data !== undefined) {
            let { id, email, login } = data;
            dispatch(setAuthUserData(id, email, login, true));
         }

      })
   }
}

export const loginUser = (email, password, rememberMe, setStatus) => {
   return (dispatch) => {
      authAPI.loginUser(email, password, rememberMe, setStatus).then(() => {
         dispatch(getUserAuth());
      })
   }
}

export const logoutUser = () => {
   return (dispatch) => {
      authAPI.logoutUser().then(() => {
         dispatch(setAuthUserData(null, null, null, false));
      })
   }
}

export default authReducer;
