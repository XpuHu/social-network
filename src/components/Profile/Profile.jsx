import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileHeaderContainer from "./ProfileHeader/ProfileHeaderContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = () => {
   return (
      <div>
         <ProfileHeaderContainer />
         <ProfileInfoContainer />
         <MyPostsContainer />
      </div>
   );
};

export default Profile;
