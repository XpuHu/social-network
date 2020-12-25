import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = ({ profilePage, dispatch }) => {
   return (
      <div>
         <ProfileHeader state={profilePage.profile.header} />
         <ProfileInfo state={profilePage.profile.info} />
         <MyPosts
            posts={profilePage.posts}
            avatar={profilePage.profile.info.avatar}
            newPostText={profilePage.newPostText}
            dispatch={dispatch}
         />
      </div>
   );
};

export default Profile;
