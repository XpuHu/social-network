import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/avatar.png';
import Preloader from "../Common/Preloader/Preloader";
import { NavLink } from "react-router-dom";

const Users = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

   const users = props.users.map(user => {
      return (
         <div className={ styles.userItem } key={ user.id }>
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
               <button onClick={ () => {
                  props.toggleFollowHandler(user.id)
               } }>{ user.followed ? 'Unfollow' : 'Follow' }</button>
            </div>

         </div>
      );
   });

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   let pagesToShow = [];

   switch (true) {
      case pagesCount === 0:
         break;
      case props.currentPage < 6:
         for (let i = 1; i <= pages.length; i++) {
            if (i <= props.currentPage + 2 && i >= props.currentPage - 4) {
               pagesToShow.push(i);
            }
         }
         pagesToShow = [...pagesToShow, '...', pages.length];
         break;
      case props.currentPage >= pages.length - 3:
         pagesToShow = [...pagesToShow, 1, '...'];
         for (let i = 1; i <= pages.length; i++) {
            if (i <= props.currentPage + 3 && i >= props.currentPage - 2) {
               pagesToShow.push(i);
            }
         }
         break;
      default:
         pagesToShow = [...pagesToShow, 1, '...'];
         for (let i = 1; i <= pages.length; i++) {
            if (i <= props.currentPage + 2 && i >= props.currentPage - 2) {
               pagesToShow.push(i);
            }
         }
         pagesToShow = [...pagesToShow, '...', pages.length];
         break;
   }

   return (
      <>
         <h2 className={ styles.usersHeader }>Users</h2>
         <div className={ styles.pagination }>
            { pagesToShow.map(p => {
               return <span className={ props.currentPage === p && styles.selectedPage }
                            onClick={ () => {
                               props.setCurrentPageHandler(p)
                            }
                            }>{ p }</span>
            }) }
         </div>
         { props.isFetching ? <Preloader /> : null }
         <div>
            <div className={ styles.userList }>
               { users }
            </div>
            <div className={ styles.showMoreBtn }>
               <button>Show more</button>
            </div>
         </div>
      </>
   )
}

export default Users;
