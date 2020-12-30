import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({ profilePage, dispatch }) => {
   return (
      <div>
         <ProfileHeader state={profilePage.profile.header} />
         <ProfileInfo state={profilePage.profile.info} />
         <MyPostsContainer profilePage={profilePage} dispatch={dispatch} />
      </div>
   );
};

export default Profile;
