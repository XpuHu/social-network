import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/authReducer";
import { compose } from "redux";

class HeaderContainer extends React.Component {

   render() {
      return (
         <Header { ...this.props } logoutUser={ this.props.logoutUser } />
      )
   }
}

const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      userId: state.auth.userId,
      login: state.auth.login
   }
}

export default compose(
   connect(mapStateToProps, { logoutUser })
)(HeaderContainer);
