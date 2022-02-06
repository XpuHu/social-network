import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from "../Common/Preloader/Preloader";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = (props) => {

   if ( !props.profile) {
      return <Preloader />
   }

   return (
      <div>
         <ProfileInfoContainer profile={ props.profile } updateUserStatus={ props.updateUserStatus } />
         <MyPostsContainer />
      </div>
   );
};

export default Profile;
