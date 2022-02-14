import React from "react";
import { loginUser } from "../../redux/authReducer";
import { compose } from "redux";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";

class LoginContainer extends React.Component {
   render() {

      if(this.props.isAuth) {
         return <Redirect to={'profile'} />
      }

      return (
         <div>
            <h1>Login</h1>
            <LoginForm loginUser={ this.props.loginUser } />
         </div>
      )
   }
}

export const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth
   }
}

export default compose(
   connect( mapStateToProps, { loginUser})
)(LoginContainer);
