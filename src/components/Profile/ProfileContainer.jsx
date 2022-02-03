import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

   componentDidMount() {

      let userId = this.props.match.params.userId;
      if ( !userId) {
         userId = 2;
      }
      this.props.getUserProfile(userId);
      this.props.getUserStatus(userId);
   }

   render() {
      return (
         <div>
            <Profile { ...this.props } />
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile
   }
}

export default compose(
   withAuthRedirect,
   connect(mapStateToProps, { getUserProfile, getUserStatus }),
   withRouter
)(ProfileContainer);
