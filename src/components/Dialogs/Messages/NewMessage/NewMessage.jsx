import React from 'react';
import styles from './NewMessage.module.css';

const NewMessage = ({ newMessageText, dispatch }) => {
   const newMessage = React.createRef();
   const addNewMessageHandler = () => {
      dispatch({ type: 'ADD-NEW-MESSAGE' });
   };

   const updateNewMessageTextHandler = () => {
      const newText = newMessage.current.value;
      const action = { type: 'UPDATE-NEW-MESSAGE-TEXT', newText };
      dispatch(action);
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
