import styles from './ProfileHeader.module.css';

const ProfileHeader = ({ state }) => {
   return (
      <div className={styles.header}>
         <img src={state.image} alt={state.label} />
      </div>
   );
};

export default ProfileHeader;
