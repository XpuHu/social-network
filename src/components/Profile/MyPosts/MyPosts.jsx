import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';
import {
   addNewPostCreator,
   updateNewPostTextCreator,
} from '../../../redux/profileReducer';

const MyPosts = ({
   posts,
   avatar,
   newPostText,
   addNewPost,
   updateNewPostText,
}) => {
   const addNewPostHandler = () => {
      addNewPost();
   };

   const updateNewPostTextHandler = (e) => {
      const newText = e.target.value;
      updateNewPostText(newText);
   };

   const postsElements = posts.map(({ id, message, likesCount, avatar }) => (
      <Post
         key={id}
         message={message}
         likesCount={likesCount}
         avatar={avatar}
      />
   ));

   return (
      <div className={styles.posts}>
         <h1>My posts</h1>
         <h2>New post</h2>
         <div className={styles.newPost}>
            <div className={styles.avatar}>
               <img src={avatar} alt='' />
            </div>
            <textarea
               value={newPostText}
               onChange={updateNewPostTextHandler}
               type='text'
               className={styles.text}
            />
            <button className={styles.submit} onClick={addNewPostHandler}>
               send
            </button>
         </div>
         <h2>Other posts</h2>
         {postsElements}
      </div>
   );
};

export default MyPosts;
