import React from "react";
import styles from './Users.module.css';
import Preloader from "../Common/Preloader/Preloader";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {

   const users = props.users.map(user => {
      return (
         <User user={ user }
               followingInProgress={ props.followingInProgress }
               toggleFollow={ props.toggleFollow }
               key={ user.id } />
      );
   });

   return (
      <>
         <h2 className={ styles.usersHeader }>Users</h2>
         <Paginator totalItemsCount={ props.totalUsersCount }
                    pageSize={ props.pageSize }
                    currentPage={ props.currentPage }
                    setCurrentPageHandler={ props.setCurrentPageHandler } />
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
