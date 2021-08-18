import React from "react";
import styles from './Users.module.css';

const Users = (props) => {


   const toggleFollowHandler = (userId) => {
      props.toggleFollow(userId);
   }

   const users = props.users.map(user => {
      return (
         <div className={ styles.userItem } key={ user.id }>
            <div className={ styles.leftColumn }>
               <img src={ user.avatar } alt="avatar" />
               <button onClick={ () => {
                  toggleFollowHandler(user.id)
               } }>{ user.followed ? `Unfollow` : `Follow` }</button>
            </div>
            <div className={ styles.userInfo }>
               <div className={ styles.userMainInfo }>
                  <div className={ styles.userName }>{ user.fullName }</div>
                  <div className={ styles.userStatus }>{ user.currentStatus }</div>
               </div>
               <div className={ styles.userLocation }>
                  <div>{ `${ user.location.cityName },` }</div>
                  <div>{ user.location.countryName }</div>
               </div>
            </div>
         </div>
      );
   });

   return (
      <div>
         <h2 className={ styles.usersHeader }>Users</h2>
         <div className={ styles.userList }>

            {users}

         </div>
         <div className={ styles.showMoreBtn }>
            <button>Show more</button>
         </div>
      </div>
   )
}

export default Users;