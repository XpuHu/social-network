import { connect } from "react-redux";
import Friends from "./Friends";
import { compose } from "redux";

const mapStateToProps = (state) => {
   return {
      friends: state.sidebar.friends,
      followedUsers: state.usersPage.users.filter((user) => user.followed === true)
   }
}

export default compose(
   connect(mapStateToProps)
)(Friends);
