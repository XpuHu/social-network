import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getUserAuth, logoutUser } from "../../redux/authReducer";
import { compose } from "redux";

class HeaderContainer extends React.Component {

   componentDidMount() {
      this.props.getUserAuth();
   }

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
   connect(mapStateToProps, { getUserAuth, logoutUser })
)(HeaderContainer);
