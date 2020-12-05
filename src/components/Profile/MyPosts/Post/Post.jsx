import React from 'react';
import styles from './Post.module.css';

const Post = ({ message, likesCount }) => {
   return (
      <div className={styles.item}>
         <div className={styles.avatar}>
            <img
               src='https://home.quality-store.ru/img/products/68723-vyshivki-krestom-gornyj-hrustal-rukodelie-5d-almaznyj-vyshivka-sdelaj-sam-almaznyj-zhivopis-lev-fotografij-almazov-mozaika-home-decor-p997-vysokokachestvennye-vyshivka-s-kristallami.jpg'
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
