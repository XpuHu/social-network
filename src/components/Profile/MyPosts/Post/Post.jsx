import React from 'react';
import styles from './Post.module.css';

const Post = ({ message, likesCount, avatar }) => {
   return (
      <div className={styles.item}>
         <div className={styles.avatar}>
            <img
               src={avatar}
               alt=''
            />
         </div>
         <div className={styles.content}>
            <div className={styles.message}>{message}</div>
            <div className={styles.likes}>
               <span>{`like ${likesCount}`}</span>
            </div>
         </div>
      </div>
   );
};

export default Post;
