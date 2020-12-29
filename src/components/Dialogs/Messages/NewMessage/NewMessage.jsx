import React from 'react';
import {
   addNewMessageCreator,
   updateNewMessageTextCreator,
} from '../../../../redux/dialogsReducer';
import styles from './NewMessage.module.css';

const NewMessage = ({ newMessageText, dispatch }) => {
   const addNewMessageHandler = () => {
      dispatch(addNewMessageCreator());
   };

   const updateNewMessageTextHandler = (e) => {
      const newText = e.target.value;
      dispatch(updateNewMessageTextCreator(newText));
   };

   return (
      <div className={styles.messageBlock}>
         <textarea
            onChange={updateNewMessageTextHandler}
            value={newMessageText}
            className={styles.messageInput}
         ></textarea>
         <button onClick={addNewMessageHandler} className={styles.submit}>
            Send
         </button>
      </div>
   );
};

export default NewMessage;
