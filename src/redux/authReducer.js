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
            ...action.data,
            isAuth: true
         }
      case SET_USER_ID:
         return {
            ...state,
            userId: action.userId
         }
      case SET_AUTH_FALSE:
         return {
            ...state,
            userId: null,
            email: null,
            login: null,
            isAuth: false
         }
      default:
         return state;
   }
}

// ACTION CREATORS
const setAuthUserData = (userId, email, login) => ( { type: SET_USER_DATA, data: { userId, email, login } } );
const setUserId = (userId) => ( { type: SET_USER_ID, userId } )
const setIsAuthFalse = () => ( { type: SET_AUTH_FALSE } )


// THUNK CREATORS
export const getUserAuth = () => {
   return (dispatch) => {
      authAPI.getAuthUserData().then(data => {
         if (data !== undefined) {
            let { id, email, login } = data;
            dispatch(setAuthUserData(id, email, login));
         }

      })
   }
}

export const loginUser = (email, password, rememberMe) => {
   return (dispatch) => {
      authAPI.loginUser(email, password, rememberMe).then(userId => {
         dispatch(setUserId(userId));
      })
   }
}

export const logoutUser = () => {
   return (dispatch) => {
      authAPI.logoutUser().then(() => {
         dispatch(setIsAuthFalse());
      })
   }
}


export default authReducer;
