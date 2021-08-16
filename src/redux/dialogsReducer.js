const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
   dialogs: [
      {
         id: 1,
         name: 'Dymich',
         avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
      },
      {
         id: 2,
         name: 'Viktor',
         avatar:
            'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png',
      },
      {
         id: 3,
         name: 'Sveta',
         avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
      },
      {
         id: 4,
         name: 'Andrey',
         avatar:
            'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
      },
      {
         id: 5,
         name: 'Slava',
         avatar:
            'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png',
      },
   ],
   messages: [
      {
         id: 1,
         message: 'Yo',
         my: false,
         avatar:
            'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      },
      {
         id: 2,
         message: 'Hi',
         my: true,
         avatar:
            'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
      },
      {
         id: 3,
         message: 'How are you?',
         my: false,
         avatar:
            'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      },
   ],
   newMessageText: ``,
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_NEW_MESSAGE:
         return {
            ...state,
            messages: [...state.messages, {
               id: state.messages.length + 1,
               message: state.newMessageText,
               my: true,
               avatar:
                  'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
            }],
            newMessageText: ''
         }
      case UPDATE_NEW_MESSAGE_TEXT:
         return {
            ...state,
            newMessageText: action.newText
         }
      default:
         return state;
   }
};

export const addNewMessageCreator = () => ( { type: ADD_NEW_MESSAGE } );
export const updateNewMessageTextCreator = (newText) => ( {
   type: UPDATE_NEW_MESSAGE_TEXT,
   newText,
} );

export default dialogsReducer;
