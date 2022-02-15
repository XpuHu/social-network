import { connect } from "react-redux";
import Friends from "./Friends";
import { compose } from "redux";
import { selectFriends } from "../../../redux/selectors/usersSelectors";

const mapStateToProps = (state) => {
   return {
      friends: selectFriends(state)
   }
}

export default compose(
   connect(mapStateToProps)
)(Friends);
