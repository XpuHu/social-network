import { connect } from "react-redux";
import ProfileHeader from "./ProfileHeader";

const mapStateToProps = (state) => {
   return {
      header: state.profilePage.profile.header
   }
}

const ProfileHeaderContainer = connect(mapStateToProps)(ProfileHeader);

export default ProfileHeaderContainer;
