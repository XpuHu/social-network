import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import { compose } from "redux";
import {
   selectAvatar,
   selectDescription,
   selectStatus
} from "../../../redux/selectors/profileSelectors";

const mapStateToProps = (state) => {
   return {
      description: selectDescription(state),
      avatar: selectAvatar(state),
      status: selectStatus(state)
   }
}

export default compose(
   connect(mapStateToProps)
)(ProfileInfo);
