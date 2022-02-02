import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage
   }
}

const DialogsContainer = withAuthRedirect(connect(mapStateToProps)(Dialogs));

export default DialogsContainer;
