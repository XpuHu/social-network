import React from "react";
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/avatar.png';

class UsersClass extends React.Component {

   componentDidMount() {
      axios
         .get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }

   toggleFollowHandler(userId) {
      this.props.toggleFollow(userId);
   }

   render() {
      const users = this.props.users.map(user => {
         return (
            <div className={ styles.userItem } key={ user.id }>

               <div className={ styles.userInfo }>
                  <img src={ user.photos.small ? user.photos.small : userPhoto } alt="avatar" />
                  <div className={ styles.userMainInfo }>
                     <div className={ styles.userNameStatus }>
                        <div className={ styles.userName }>{ user.name }</div>
                        <div className={ styles.userStatus }>{ user.status }</div>
                     </div>
                     <div className={ styles.userLocation }>
                        <div>{ ( typeof user.location !== 'undefined' ) ?
                                 ( ( user.location.cityName !== 'undefined' ) ? user.location.cityName : `user.location.cityName,` )
                                 : `user.location.cityName,` }</div>
                        <div>{ typeof user.location !== 'undefined' ?
                                 ( ( user.location.countryName !== 'undefined' ) ? user.location.countryName : `user.location.countryName,` )
                                 : `user.location.countryName` }</div>
                     </div>
                  </div>
               </div>

               <div className={ styles.followBtn }>
                  <button onClick={ () => {
                     this.toggleFollowHandler(user.id)
                  } }>{ user.followed ? 'Unfollow' : 'Follow' }</button>
               </div>

            </div>
         );
      });

      return (
         <div>
            <h2 className={ styles.usersHeader }>Users</h2>
            <div className={ styles.userList }>
               { users }
            </div>
            <div className={ styles.showMoreBtn }>
               <button>Show more</button>
            </div>
         </div>
      )
   }
}

export default UsersClass;
