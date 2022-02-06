import { addNewPostCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      avatar: state.profilePage.profile.photos.small
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
