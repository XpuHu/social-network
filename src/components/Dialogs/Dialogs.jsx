import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';

const Dialogs = ({ dialogs, messages }) => {

   const dialogsElements = dialogs.map(({ name, id, avatar }) => (
      <DialogItem key={ id } name={ name } id={ id } avatar={ avatar } />
   ));

   return (
      <div className={ styles.dialogs }>
         <div className={ styles.dialogsList }>{ dialogsElements }</div>
         <Messages
            messages={ messages }
         />
      </div>
   );
};

export default Dialogs;
