import React from 'react';
import {
   addNewPostCreator,
   updateNewPostTextCreator,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = ({ profilePage, dispatch }) => {
   const { posts, newPostText, profile } = profilePage;

   const addNewPost = () => {
      dispatch(addNewPostCreator());
   };

   const updateNewPostText = (newText) => {
      dispatch(updateNewPostTextCreator(newText));
   };

   return (
      <MyPosts
         posts={posts}
         avatar={profile.info.avatar}
         newPostText={newPostText}
         addNewPost={addNewPost}
         updateNewPostText={updateNewPostText}
      />
   );
};

export default MyPostsContainer;
