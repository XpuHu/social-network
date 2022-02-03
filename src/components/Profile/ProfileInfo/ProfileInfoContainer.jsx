import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import { compose } from "redux";

const mapStateToProps = (state) => {
   return {
      description: state.profilePage.profile.aboutMe,
      avatar: state.profilePage.profile.photos.large
   }
}

export default compose(
   connect(mapStateToProps)
)(ProfileInfo);
