import React from "react";
import { loginUser } from "../../redux/authReducer";
import { compose } from "redux";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import { selectIsAuth } from "../../redux/selectors/authSelectors";

const LoginContainer = (props) => {

   if (props.isAuth) {
      return <Redirect to={ 'profile' } />
   }

   return (
      <div>
         <h1>Login</h1>
         <LoginForm loginUser={ props.loginUser } />
      </div>
   )
}

export const mapStateToProps = (state) => {
   return {
      isAuth: selectIsAuth(state)
   }
}

export default compose(
   connect(mapStateToProps, { loginUser })
)(LoginContainer);
