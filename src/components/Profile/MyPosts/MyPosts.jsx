import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = ({ posts, avatar, newPostText, dispatch }) => {
   const newPost = React.createRef();

   const addNewPostHandler = () => {
      dispatch({ type: 'ADD-NEW-POST' });
   };

   const updateNewPostTextHandler = () => {
      const newText = newPost.current.value;
      const action = { type: 'UPDATE-NEW-POST-TEXT', newText };
      dispatch(action);
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
               ref={newPost}
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
