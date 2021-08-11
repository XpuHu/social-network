import React from 'react';
import {
   addNewPostCreator,
   updateNewPostTextCreator,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from "../../../storeContext";

const MyPostsContainer = () => {
   return (
      <StoreContext.Consumer>
         {
         (store) => {
            const state = store.getState();
            const { posts, newPostText, profile } = state.profilePage;
            const { dispatch } = store;
            const addNewPost = () => {
               dispatch(addNewPostCreator());
            };

            const updateNewPostText = (newText) => {
               dispatch(updateNewPostTextCreator(newText));
            };
            return (
               <MyPosts
                  posts={ posts }
                  avatar={ profile.info.avatar }
                  newPostText={ newPostText }
                  addNewPost={ addNewPost }
                  updateNewPostText={ updateNewPostText }
               />
            )
         }
      }
      </StoreContext.Consumer>

   );
};

export default MyPostsContainer;
