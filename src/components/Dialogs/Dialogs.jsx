import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = ( {dialogs, messages} ) => {

   const dialogsElements = dialogs.map(({ name, id }) => (
      <DialogItem key={id} name={name} id={id} />
   ));
   const messagesElements = messages.map(({ message, id }) => (
      <Message key={id} message={message} id={id} />
   ));

   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogsList}>{dialogsElements}</div>
         <div className={styles.messages}>{messagesElements}</div>
      </div>
   );
};

export default Dialogs;
