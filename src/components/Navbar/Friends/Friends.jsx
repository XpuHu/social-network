import { NavLink } from 'react-router-dom';
import styles from './Friends.module.css';

const Friends = ({ friends }) => {
   return (
      <div className={styles.friendsBlock}>
         <h2>Friends</h2>
         <div className={styles.friendsList}>
            {friends.map((friend) => (
               <div className={styles.friend} key={friend.id}>
                  <NavLink to='/' activeClassName={styles.active}>
                     <img src={friend.avatar} alt={'friend'}/>
                     <p>{friend.name}</p>
                  </NavLink>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Friends;
