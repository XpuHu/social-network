import React from "react";
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/avatar.png';

class UsersClass extends React.Component {

   componentDidMount() {
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.usersCountOnPage }`)
         .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount);
         })
   }

   toggleFollowHandler(userId) {
      this.props.toggleFollow(userId);
   }

   setCurrentPageHandler(currentPage) {
      this.props.setCurrentPage(currentPage);
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ currentPage }&count=${ this.props.usersCountOnPage }`)
         .then(response => {
            this.props.setUsers(response.data.items);
         })
   }

   render() {

      let pagesCount = Math.ceil(this.props.totalUsers / this.props.usersCountOnPage)

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

      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
         pages.push(i);
      }

      let pagesToShow = [];

      switch (true) {
         case this.props.currentPage < 6:
            for (let i = 1; i <= pages.length; i++) {
               if (i <= this.props.currentPage + 2 && i >= this.props.currentPage - 4) {
                  pagesToShow.push(i);
               }
            }
            pagesToShow = [...pagesToShow, '...', pages.length];
            break;
         case this.props.currentPage >= pages.length - 3:
            pagesToShow = [...pagesToShow, 1, '...'];
            for (let i = 1; i <= pages.length; i++) {
               if (i <= this.props.currentPage + 3 && i >= this.props.currentPage - 2) {
                  pagesToShow.push(i);
               }
            }
            break;
         default:
            pagesToShow = [...pagesToShow, 1, '...'];
            for (let i = 1; i <= pages.length; i++) {
               if (i <= this.props.currentPage + 2 && i >= this.props.currentPage - 2) {
                  pagesToShow.push(i);
               }
            }
            pagesToShow = [...pagesToShow, '...', pages.length];
            break;
      }

      return (
         <div>
            <h2 className={ styles.usersHeader }>Users</h2>
            <div className={ styles.pagination }>
               { pagesToShow.map(p => {
                  return <span className={ this.props.currentPage === p && styles.selectedPage }
                               onClick={ () => {
                                  this.setCurrentPageHandler(p)
                               }
                               }>{ p }</span>
               }) }
            </div>
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
