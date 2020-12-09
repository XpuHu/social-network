import styles from './ProfileInfo.module.css';

const ProfileInfo = ({ state }) => {
   return (
      <div className={styles.info}>
         <div className={styles.avatar}>
            <img src={state.avatar} alt='' />
         </div>
         <div className={styles.description}>
            <p>{state.description}</p>
         </div>
      </div>
   );
};

export default ProfileInfo;
