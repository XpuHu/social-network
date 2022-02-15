import { addNewPostCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from "react-redux";
import { compose } from "redux";
import { selectAvatar, selectPosts } from "../../../redux/selectors/profileSelectors";

const mapStateToProps = (state) => {
   return {
      posts: selectPosts(state),
      avatar: selectAvatar(state)
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addNewPost: (newPostText) => {
         dispatch(addNewPostCreator(newPostText))
      }
   }
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(MyPosts);
