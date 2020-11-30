import React from 'react';
import styles from './Post.module.css';

const Post = ({ message, likesCount }) => {
   return (
      <div className={styles.item}>
         <img
            src='https://home.quality-store.ru/img/products/68723-vyshivki-krestom-gornyj-hrustal-rukodelie-5d-almaznyj-vyshivka-sdelaj-sam-almaznyj-zhivopis-lev-fotografij-almazov-mozaika-home-decor-p997-vysokokachestvennye-vyshivka-s-kristallami.jpg'
            alt=''
         />
         {message}
         <div>
            <span>{`${likesCount} likes`}</span>
         </div>
      </div>
   );
};

export default Post;
