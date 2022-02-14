import { getUserAuth } from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
   initialized: false
}

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_INITIALIZED:
         return {
            ...state,
            initialized: true
         }
      default:
         return state;
   }
}

// ACTION CREATORS
const setInitialized = () => ( { type: SET_INITIALIZED } );

// THUNK CREATORS
export const initialize = () => {
   return (dispatch) => {
      let promise = dispatch(getUserAuth());
      Promise.all([promise])
         .then(() => {
            dispatch(setInitialized());
         })
   }
}

export default appReducer;
