import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';
import StoreContext from "../../storeContext";

const Dialogs = () => {


   return (
      <StoreContext.Consumer>
         {
            (store) => {
               const state = store.getState();
               const { dialogsPage } = state;
               const { dispatch } = store;

               const dialogsElements = dialogsPage.dialogs.map(({ name, id, avatar }) => (
                  <DialogItem key={ id } name={ name } id={ id } avatar={ avatar } />
               ));
               return (
                  <div className={ styles.dialogs }>
                     <div className={ styles.dialogsList }>{ dialogsElements }</div>
                     <Messages
                        messages={ dialogsPage.messages }
                        newMessageText={ dialogsPage.newMessageText }
                        dispatch={ dispatch }
                     />
                  </div>
               );
            }
         }
      </StoreContext.Consumer>

   );
};

export default Dialogs;
