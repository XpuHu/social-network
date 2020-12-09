import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = ({ posts, avatar }) => {
   const postsElements = posts.map(({ id, message, likesCount }) => (
      <Post key={id} message={message} likesCount={likesCount} />
   ));

   return (
      <div className={styles.posts}>
         <h1>My posts</h1>
         <h2>New post</h2>
         <div className={styles.newPost}>
            <div className={styles.avatar}>
               <img
                  src={avatar}
                  alt=''
               />
            </div>
            <textarea type='text' className={styles.text} />
            <button className={styles.submit}>send</button>
         </div>
         <h2>Other posts</h2>
         {postsElements}
      </div>
   );
};

export default MyPosts;
