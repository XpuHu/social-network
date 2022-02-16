import { connect } from "react-redux";
import Users from "./Users";
import { getUsers, toggleFollow } from "../../redux/usersReducer";
import React, { useEffect } from "react";
import { compose } from "redux";
import {
   selectAllUsers,
   selectCurrentPage,
   selectFollowingInProgress,
   selectIsFetching,
   selectPageSize,
   selectTotalUsersCount
} from "../../redux/selectors/usersSelectors";

const UsersContainerWithHooks = (props) => {

   const { currentPage, pageSize, getUsers } = props;

   useEffect(() => {
      getUsers(currentPage, pageSize);
   }, [currentPage, pageSize, getUsers])

   const setCurrentPageHandler = (currentPage) => {
      getUsers(currentPage, pageSize);
   }

   return <Users { ...props }
                 toggleFollow={ props.toggleFollow }
                 setCurrentPageHandler={ setCurrentPageHandler } />
}

const mapStateToProps = (state) => {
   return {
      users: selectAllUsers(state),
      currentPage: selectCurrentPage(state),
      pageSize: selectPageSize(state),
      totalUsersCount: selectTotalUsersCount(state),
      isFetching: selectIsFetching(state),
      followingInProgress: selectFollowingInProgress(state)
   }
}

// const mapDispatchToProps = (dispatch) => {
//    return {
//       toggleFollow: (userId) => {
//          dispatch(toggleFollowAC(userId))
//       },
//       setUsers: (users) => {
//          dispatch(setUsersAC(users))
//       },
//       setCurrentPage: (currentPage) => {
//          dispatch(setCurrentPageAC(currentPage))
//       },
//       setTotalUsers: (totalUsersCount) => {
//          dispatch(setTotalUsersAC(totalUsersCount))
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(toggleIsFetchingAC(isFetching))
//       }
//    }
// }

export default compose(
   connect(mapStateToProps, { getUsers, toggleFollow })
)(UsersContainerWithHooks);
