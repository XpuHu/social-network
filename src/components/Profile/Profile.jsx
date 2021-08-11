import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import StoreContext from "../../storeContext";

const Profile = () => {
   return (
      <StoreContext.Consumer>
         {
            (store) => {

               const state = store.getState();
               const { header, info } = state.profilePage.profile;
               return (
                  <div>
                     <ProfileHeader state={ header } />
                     <ProfileInfo state={ info } />
                     <MyPostsContainer />
                  </div>
               );
            }
         }
      </StoreContext.Consumer>

   );
};

export default Profile;
