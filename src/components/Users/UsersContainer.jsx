import { connect } from "react-redux";
import Users from "./Users";
import {
   getUsersThunkCreator,
   toggleFollowThunkCreator,
} from "../../redux/usersReducer";
import React from "react";

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
   }

   setCurrentPageHandler = (currentPage) => {
      this.props.getUsersThunkCreator(currentPage, this.props.pageSize);
   }

   render() {
      return <Users { ...this.props }
                    toggleFollowHandler={ this.props.toggleFollowThunkCreator }
                    setCurrentPageHandler={ this.setCurrentPageHandler } />
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
   getUsersThunkCreator,
   toggleFollowThunkCreator
})(UsersContainer);
