import { connect } from "react-redux";
import ProfileHeader from "./ProfileHeader";
import { compose } from "redux";

const mapStateToProps = (state) => {
   return {
      header: state.profilePage.header
   }
}

export default compose(
   connect(mapStateToProps)
)(ProfileHeader);
