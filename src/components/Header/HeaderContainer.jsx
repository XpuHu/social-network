import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getUserAuth } from "../../redux/authReducer";

class HeaderContainer extends React.Component {

   componentDidMount() {
      this.props.getUserAuth();
   }

   render() {
      return (
         <Header { ...this.props } />
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

export default connect(mapStateToProps, { getUserAuth })(HeaderContainer);
