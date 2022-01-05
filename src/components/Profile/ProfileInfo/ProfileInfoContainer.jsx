import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo";

const mapStateToProps = (state) => {
   return {
      description: state.profilePage.profile.aboutMe,
      avatar: state.profilePage.profile.photos.large
   }
}

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;
