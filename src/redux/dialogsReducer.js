const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
   switch (action.type) {
      case ADD_NEW_MESSAGE:
         addNewMessage(state);
         return state;
      case UPDATE_NEW_MESSAGE_TEXT:
         updateNewMessageText(state, action.newText);
         return state;

      default:
         return state;
   }
};

const addNewMessage = (state) => {
   state.messages.push({
      id: state.messages.length + 1,
      message: state.newMessageText,
      my: true,
      avatar:
         'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
   });
   state.newMessageText = '';
};

const updateNewMessageText = (state, newText) => {
   state.newMessageText = newText;
};

export const addNewMessageCreator = () => ({ type: ADD_NEW_MESSAGE });
export const updateNewMessageTextCreator = (newText) => ({
   type: UPDATE_NEW_MESSAGE_TEXT,
   newText,
});

export default dialogsReducer;
