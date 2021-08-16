import styles from './ProfileInfo.module.css';

const ProfileInfo = ({ info }) => {
   return (
      <div className={styles.info}>
         <div className={styles.avatar}>
            <img src={info.avatar} alt='' />
         </div>
         <div className={styles.description}>
            <p>{info.description}</p>
         </div>
      </div>
   );
};

export default ProfileInfo;
