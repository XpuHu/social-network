import styles from './Messages.module.css';
import Message from './Message/Message';
import NewMessageContainer from './NewMessage/NewMessageContainer';

const Messages = ({ messages }) => {

   const messagesElements = messages.map(({ message, id, my, avatar }) => (
      <Message key={id} message={message} id={id} my={my} avatar={avatar} />
   ));

   return (
      <div className={styles.messages}>
         <div className={styles.messagesBlock}>{messagesElements}</div>
         <NewMessageContainer />
      </div>
   );
};

export default Messages;
