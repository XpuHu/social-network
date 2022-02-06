import React from "react";
import { loginUser } from "../../redux/authReducer";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";

class LoginContainer extends React.Component {
   render() {
      return (
         <div>
            <h1>Login</h1>
            <LoginForm loginUser={ this.props.loginUser } />
         </div>
      )
   }
}

export const mapStateToProps = (state) => {
   return {}
}

export default compose(
   withAuthRedirect,
   connect( mapStateToProps, { loginUser})
)(LoginContainer);
