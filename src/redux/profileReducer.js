import { profileAPI } from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
   posts: [
      {
         id: 1,
         message: 'Hey, how are you?',
         likesCount: 5,
         avatar:
            'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      },
      {
         id: 2,
         message: `It's my first post!`,
         likesCount: 20,
         avatar:
            'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      },
   ],
   // profile: {
   //    header: {
   //       image:
   //          'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
   //       label: 'header',
   //    },
   //    info: {
   //       avatar:
   //          'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
   //       description: 'description',
   //    },
   // },
   profile: null,
   header: {
      image:
         'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
      label: 'header',
   },
   status: '----'
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_NEW_POST:
         return {
            ...state,
            posts: [...state.posts, {
               id: state.posts.length + 1,
               message: action.newPostText,
               likesCount: 0,
               avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
            }],
            newPostText: ''
         }
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         }
      case SET_USER_STATUS:
         return {
            ...state,
            status: action.status
         }
      case DELETE_POST:
         return {
            ...state,
            posts: state.posts.filter(post => post.id !== action.postId)
         }
      default:
         return state;
   }
};

// ACTION CREATORS
export const addNewPostCreator = (newPostText) => ( { type: ADD_NEW_POST, newPostText: newPostText } );
const setUserProfile = (profile) => ( {
   type: SET_USER_PROFILE,
   profile
} );
export const deletePost = (postId) => ( { type: DELETE_POST, postId } )

const setUserStatus = (status) => ( { type: SET_USER_STATUS, status } );


// THUNK CREATORS
export const getUserProfile = (userId) => {
   return (dispatch) => {
      profileAPI.getUserProfile(userId).then(data => {
         dispatch(setUserProfile(data));
      })
   }
}

export const getUserStatus = (userId) => {
   return (dispatch) => {
      profileAPI.getUserStatus(userId).then(status => {
         dispatch(setUserStatus(status));
      })
   }
}

export const updateUserStatus = (status) => {
   return (dispatch) => {
      profileAPI.setUserStatus(status).then(() => {
         dispatch(setUserStatus(status));
      })
   }
}

export default profileReducer;
