import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = ( {posts} ) => {
   // const posts = [
   //    { id: 1, message: 'Hey, how are you?', likesCount: 5 },
   //    { id: 2, message: `It's my first post!`, likesCount: 20 },
   // ];

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
                  src='https://home.quality-store.ru/img/products/68723-vyshivki-krestom-gornyj-hrustal-rukodelie-5d-almaznyj-vyshivka-sdelaj-sam-almaznyj-zhivopis-lev-fotografij-almazov-mozaika-home-decor-p997-vysokokachestvennye-vyshivka-s-kristallami.jpg'
                  alt=''
               />
            </div>
            <textarea type='text' className={styles.text} />
            <button className={styles.submit}>send</button>
         </div>
         <h2>Other posts</h2>
         { postsElements }
      </div>
   );
};

export default MyPosts;
