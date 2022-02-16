import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';
import NewMessageForm from "../../Common/NewMessageForm/NewMessageForm";
import userPhoto from "../../../assets/images/avatar.png";

const MyPosts = ({ posts, avatar, addNewPost, }) => {

   const addNewPostHandler = (newPostText) => {
      addNewPost(newPostText);
   };

   const postsElements = posts.map(({ id, message, likesCount, avatar }) => (
      <Post
         key={ id }
         message={ message }
         likesCount={ likesCount }
         avatar={ avatar }
      />
   ));

   return (
      <div className={ styles.posts }>
         <h1>My posts</h1>
         <h2>New post</h2>
         <div className={ styles.newPostBlock }>
            <div className={ styles.avatar }>
               <img src={ avatar ? avatar : userPhoto } alt='' />
            </div>
            <NewMessageForm addNewMessageHandler={ addNewPostHandler } />
            {/*<textarea*/ }
            {/*   value={newPostText}*/ }
            {/*   onChange={updateNewPostTextHandler}*/ }
            {/*   type='text'*/ }
            {/*   className={styles.text}*/ }
            {/*/>*/ }
            {/*<button className={styles.submit} onClick={addNewPostHandler}>*/ }
            {/*   send*/ }
            {/*</button>*/ }
         </div>
         <h2>Other posts</h2>
         { postsElements }
      </div>
   );
};

export default MyPosts;
