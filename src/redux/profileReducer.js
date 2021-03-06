const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
   profile: {
      header: {
         image:
            'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
         label: 'header',
      },
      info: {
         avatar:
            'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
         description: 'description',
      },
   },
   newPostText: '',
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_NEW_POST:
         addNewPost(state);
         return state;
      case UPDATE_NEW_POST_TEXT:
         updateNewPostText(state, action.newText);
         return state;
      default:
         return state;
   }
};

const addNewPost = (state) => {
   state.posts.push({
      id: state.posts.length + 1,
      message: state.newPostText,
      likesCount: 0,
      avatar:
         'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
   });
   state.newPostText = '';
};

const updateNewPostText = (state, newText) => {
   state.newPostText = newText;
};

export const addNewPostCreator = () => ({ type: ADD_NEW_POST });
export const updateNewPostTextCreator = (newText) => ({
   type: UPDATE_NEW_POST_TEXT,
   newText,
});

export default profileReducer;
