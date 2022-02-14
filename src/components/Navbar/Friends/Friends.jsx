import { NavLink } from 'react-router-dom';
import styles from './Friends.module.css';
import userPhoto from "../../../assets/images/avatar.png";

const Friends = (props) => {
   if (props.followedUsers.length === 0) {
      return null;
   }
   return (
      <div className={ styles.friendsBlock }>
         <h2>Friends</h2>
         <div className={ styles.friendsList }>
            { props.followedUsers.map((friend) => (
               <div className={ styles.friend } key={ friend.id }>
                  <NavLink to={ `/profile/${ friend.id }` } activeClassName={ styles.active }>
                     <img src={ friend.photos.small ? friend.photos.small : userPhoto } alt={ 'friend' } />
                     <p>{ friend.name }</p>
                  </NavLink>
               </div>
            )) }
         </div>
      </div>
   );
};

export default Friends;
