import styles from './ProfileHeader.module.css';

const ProfileHeader = ({ header }) => {
   return (
      <div className={styles.header}>
         <img src={header.image} alt={header.label} />
      </div>
   );
};

export default ProfileHeader;
