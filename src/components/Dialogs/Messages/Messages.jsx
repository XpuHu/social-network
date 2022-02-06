import styles from './Messages.module.css';
import Message from './Message/Message';
import NewDialogMessageContainer from './NewDialogMessageContainer';

const Messages = ({ messages }) => {

   const messagesElements = messages.map(({ message, id, my, avatar }) => (
      <Message key={id} message={message} id={id} my={my} avatar={avatar} />
   ));

   return (
      <div className={styles.messages}>
         <div className={styles.messagesBlock}>{messagesElements}</div>
         <NewDialogMessageContainer />
      </div>
   );
};

export default Messages;
