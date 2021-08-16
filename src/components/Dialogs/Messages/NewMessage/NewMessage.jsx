import React from 'react';
import styles from './NewMessage.module.css';

const NewMessage = ({
                       newMessageText,
                       addNewMessage,
                       updateNewMessageText,
                    }) => {
   const addNewMessageHandler = () => {
      addNewMessage();
   };

   const updateNewMessageTextHandler = (e) => {
      const newText = e.target.value;
      updateNewMessageText(newText);
   };

   return (
      <div className={ styles.messageBlock }>
         <textarea
            onChange={ updateNewMessageTextHandler }
            value={ newMessageText }
            className={ styles.messageInput }
            key={`123`}
         />
         <button onClick={ addNewMessageHandler } className={ styles.submit }>
            Send
         </button>
      </div>
   );
};

export default NewMessage;
