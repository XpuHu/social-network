const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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
