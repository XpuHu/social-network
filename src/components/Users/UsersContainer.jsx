import { connect } from "react-redux";
import Users from "./Users";
import { getUsers, toggleFollow } from "../../redux/usersReducer";
import React from "react";
import { compose } from "redux";

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   }

   setCurrentPageHandler = (currentPage) => {
      this.props.getUsers(currentPage, this.props.pageSize);
   }

   render() {
      return <Users { ...this.props }
                    toggleFollow={ this.props.toggleFollow }
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

export default compose(
   connect(mapStateToProps,{ getUsers, toggleFollow })
)(UsersContainer);
