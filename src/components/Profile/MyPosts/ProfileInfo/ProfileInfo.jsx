import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
   return (
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
   );
};

export default ProfileInfo;
