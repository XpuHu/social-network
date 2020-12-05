import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = ( {posts} ) => {
   return (
      <div>
         <ProfileHeader />
         <ProfileInfo />
         <MyPosts posts={posts} />
      </div>
   );
};

const ProfileHeader = (props) => {
   return (
      <div className={styles.header}>
         <img
            src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
            alt=''
         />
      </div>
   );
};

export default Profile;
