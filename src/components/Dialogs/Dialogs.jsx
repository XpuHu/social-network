import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ state }) => {
   const dialogsElements = state.dialogs.map(({ name, id, avatar }) => (
      <DialogItem key={id} name={name} id={id} avatar={avatar} />
   ));
   const messagesElements = state.messages.map(
      ({ message, id, my, avatar }) => (
         <Message
            key={id}
            message={message}
            id={id}
            my={my}
            avatar={avatar}
         />
      )
   );

   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogsList}>{dialogsElements}</div>
         <div className={styles.messages}>{messagesElements}</div>
      </div>
   );
};

export default Dialogs;
