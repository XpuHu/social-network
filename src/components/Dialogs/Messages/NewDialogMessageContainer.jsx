import React from "react";
import { connect } from "react-redux";
import { addNewMessageCreator } from "../../../redux/dialogsReducer";
import NewMessageForm from "../../Common/NewMessageForm/NewMessageForm";
import { compose } from "redux";

class NewDialogMessageContainer extends React.Component {

   render() {
      return (
         <NewMessageForm addNewMessageHandler={ this.props.addNewMessage } />
      )
   }
}

const mapStateToProps = (state) => {
   return {}
}

const mapDispatchToProps = (dispatch) => {
   return {
      addNewMessage: (newMessageText) => {
         dispatch(addNewMessageCreator(newMessageText))
      }
   }
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(NewDialogMessageContainer);
