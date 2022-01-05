import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import Preloader from "../Common/Preloader/Preloader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

   if(!props.profile) {
      return <Preloader />
   }

   return (
      <div>
         <ProfileInfo profile = {props.profile} />
         <MyPostsContainer />
      </div>
   );
};

export default Profile;
