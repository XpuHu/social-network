import { connect } from "react-redux";
import { addNewMessageCreator } from "../../../redux/dialogsReducer";
import NewMessageForm from "../../Common/NewMessageForm/NewMessageForm";
import { compose } from "redux";

export default compose(
   connect(null, { addNewMessage: addNewMessageCreator })
)(NewMessageForm);
