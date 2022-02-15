import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { selectDialogs, selectMessages } from "../../redux/selectors/dialogsSelectors";

const mapStateToProps = (state) => {
   return {
      dialogs: selectDialogs(state),
      messages: selectMessages(state)
   }
}

export default compose(
   connect(mapStateToProps),
   withAuthRedirect
)(Dialogs);
