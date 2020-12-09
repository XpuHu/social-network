import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = ({ state }) => {
   return (
      <div>
         <ProfileHeader state={state.profile.header} />
         <ProfileInfo state={state.profile.info} />
         <MyPosts posts={state.posts} avatar={state.profile.info.avatar} />
      </div>
   );
};

export default Profile;
