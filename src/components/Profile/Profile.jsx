import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
   return (
      <div className={styles.content}>
         <div className={styles.header}>
            <img
               src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
               alt=''
            />
         </div>
         <div className={styles.info}>
            <div className={styles.avatar}>
               <img
                  src='https://home.quality-store.ru/img/products/68723-vyshivki-krestom-gornyj-hrustal-rukodelie-5d-almaznyj-vyshivka-sdelaj-sam-almaznyj-zhivopis-lev-fotografij-almazov-mozaika-home-decor-p997-vysokokachestvennye-vyshivka-s-kristallami.jpg'
                  alt=''
               />
            </div>
            <div className={styles.description}>
               <p>description</p>
            </div>
         </div>
         <hr />
         <MyPosts />
      </div>
   );
};

export default Profile;
