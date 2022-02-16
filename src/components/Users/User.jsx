import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/avatar.png';
import { NavLink } from "react-router-dom";

const User = ({ user, ...props }) => {
   return (
      <div className={ styles.userItem }>
         <div className={ styles.userInfo }>
            <NavLink to={ '/profile/' + user.id }>
               <img src={ user.photos.small ? user.photos.small : userPhoto } alt="avatar" />
            </NavLink>
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
            <button disabled={ props.followingInProgress.some(userId => userId === user.id) } onClick={ () => {
               props.toggleFollow(user.id, user.followed)
            } }>{ user.followed ? 'Unfollow' : 'Follow' }</button>
         </div>

      </div>
   )
}

export default User;
