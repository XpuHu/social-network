import styles from './Messages.module.css';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const Messages = ({ messages, newMessageText, dispatch }) => {
   const messagesElements = messages.map(({ message, id, my, avatar }) => (
      <Message key={id} message={message} id={id} my={my} avatar={avatar} />
   ));

   return (
      <div className={styles.messages}>
         <div className={styles.messagesBlock}>{messagesElements}</div>
         <NewMessage newMessageText={newMessageText} dispatch={dispatch} />
      </div>
   );
};

export default Messages;
