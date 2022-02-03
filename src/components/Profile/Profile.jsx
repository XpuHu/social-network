import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from "../Common/Preloader/Preloader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { updateUserStatus } from "../../redux/profileReducer";

const Profile = (props) => {

   if ( !props.profile) {
      return <Preloader />
   }

   return (
      <div>
         <ProfileInfo profile={ props.profile } updateUserStatus={ props.updateUserStatus } />
         <MyPostsContainer />
      </div>
   );
};

export default Profile;
