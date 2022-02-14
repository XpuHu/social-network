import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import { Redirect, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import Preloader from "../Common/Preloader/Preloader";

class ProfileContainer extends React.Component {

   componentDidMount() {

      let userId = this.props.match.params.userId;
      if ( !userId) {
         // userId = 22015;
         userId = this.props.userId;
         if (userId) {
            this.props.getUserProfile(userId);
            this.props.getUserStatus(userId);
         } else {
            this.props.history.push('/login');
         }
      } else {
         this.props.getUserProfile(userId);
         this.props.getUserStatus(userId);
      }
   }

   render() {
      return (
         <div>
            <Profile { ...this.props } updateUserStatus={ this.props.updateUserStatus } />
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      userId: state.auth.userId
   }
}

export default compose(
   // withAuthRedirect,
   connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
   withRouter
)(ProfileContainer);
