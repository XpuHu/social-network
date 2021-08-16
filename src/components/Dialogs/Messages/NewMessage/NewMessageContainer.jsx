import NewMessage from './NewMessage';
import { connect } from "react-redux";
import { addNewMessageCreator, updateNewMessageTextCreator } from "../../../../redux/dialogsReducer";

const mapStateToProps = (state) => {
   return {
      newMessageText: state.dialogsPage.newMessageText
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addNewMessage: () => {
         dispatch(addNewMessageCreator())
      },
      updateNewMessageText: (newText) => {
         dispatch(updateNewMessageTextCreator(newText))
      }
   }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
