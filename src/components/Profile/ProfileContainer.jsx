import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

   componentDidMount() {

      let userId = this.props.match.params.userId;
      if ( !userId) {
         userId = 2;
      }
      this.props.getUserProfile(userId);
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default withAuthRedirect(connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent));
