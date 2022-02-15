import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/authReducer";
import { compose } from "redux";
import { selectIsAuth, selectLogin, selectUserId } from "../../redux/selectors/authSelectors";

class HeaderContainer extends React.Component {

   render() {
      return (
         <Header { ...this.props } logoutUser={ this.props.logoutUser } />
      )
   }
}

const mapStateToProps = (state) => {
   return {
      isAuth: selectIsAuth(state),
      userId: selectUserId(state),
      login: selectLogin(state)
   }
}

export default compose(
   connect(mapStateToProps, { logoutUser })
)(HeaderContainer);
