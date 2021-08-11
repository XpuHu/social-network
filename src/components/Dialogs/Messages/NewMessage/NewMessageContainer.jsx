import React from 'react';
import {
   addNewMessageCreator,
   updateNewMessageTextCreator,
} from '../../../../redux/dialogsReducer';
import NewMessage from './NewMessage';

const NewMessageContainer = ({ newMessageText, dispatch }) => {

   const addNewMessage = () => {
      dispatch(addNewMessageCreator());
   };

   const updateNewMessageText = (newText) => {
      dispatch(updateNewMessageTextCreator(newText));
   };

   return (
      <NewMessage
         addNewMessage={addNewMessage}
         updateNewMessageText={updateNewMessageText}
         newMessageText={newMessageText}
      />
   );
};

export default NewMessageContainer;
