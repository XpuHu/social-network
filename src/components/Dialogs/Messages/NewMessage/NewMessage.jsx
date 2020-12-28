import React from 'react';
import {
   addNewMessageActionCreator,
   updateNewMessageTextActionCreator,
} from '../../../../redux/store';
import styles from './NewMessage.module.css';

const NewMessage = ({ newMessageText, dispatch }) => {
   const newMessage = React.createRef();
   const addNewMessageHandler = () => {
      dispatch(addNewMessageActionCreator());
   };

   const updateNewMessageTextHandler = () => {
      const newText = newMessage.current.value;
      dispatch(updateNewMessageTextActionCreator(newText));
   };

   return (
      <div className={styles.messageBlock}>
         <textarea
            onChange={updateNewMessageTextHandler}
            value={newMessageText}
            ref={newMessage}
            className={styles.messageInput}
         ></textarea>
         <button onClick={addNewMessageHandler} className={styles.submit}>
            Send
         </button>
      </div>
   );
};

export default NewMessage;
