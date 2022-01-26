import { connect } from "react-redux";
import Users from "./Users";
import {
   setCurrentPage,
   setTotalUsers,
   setUsers,
   toggleFollow, toggleFollowingProgress,
   toggleIsFetching
} from "../../redux/usersReducer";
import React from "react";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.setUsers([]);
      this.props.toggleIsFetching(true);
      userAPI.getUsers(this.props.currentPage, this.props.pageSize)
         .then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalUsers(data.totalCount);
            this.props.toggleIsFetching(false);
         })
   }

   setCurrentPageHandler = (currentPage) => {
      this.props.setCurrentPage(currentPage);
      this.props.setUsers([]);
      this.props.toggleIsFetching(true);
      userAPI.getUsers(currentPage, this.props.pageSize)
         .then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
         })
   }

   toggleFollowHandler = (userId) => {
      this.props.toggleFollow(userId);
   }
   toggleFollowingProgressHandler = (isFetching, userId) => {
      this.props.toggleFollowingProgress(isFetching, userId);
   }

   render() {
      return <Users { ...this.props }
                    toggleFollowHandler={ this.toggleFollowHandler }
                    setCurrentPageHandler={ this.setCurrentPageHandler }
                    toggleFollowingProgress={ this.props.toggleFollowingProgress } />
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      currentPage: state.usersPage.currentPage,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress
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

export default connect(mapStateToProps, {
   toggleFollow,
   setUsers,
   setCurrentPage,
   setTotalUsers,
   toggleIsFetching,
   toggleFollowingProgress
})(UsersContainer);
