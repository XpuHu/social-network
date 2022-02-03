import React from 'react';
import {
   addNewPostCreator,
   updateNewPostTextCreator,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      avatar: state.profilePage.profile.photos.small,
      newPostText: state.profilePage.newPostText
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addNewPost: () => {
         dispatch(addNewPostCreator())
      },
      updateNewPostText: (newText) => {
         dispatch(updateNewPostTextCreator(newText))
      }
   }
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(MyPosts);
