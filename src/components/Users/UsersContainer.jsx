import { connect } from "react-redux";
import Users from "./Users";
import { getUsers, toggleFollow } from "../../redux/usersReducer";
import React from "react";
import { compose } from "redux";
import {
  selectAllUsers,
  selectCurrentPage,selectFollowingInProgress,
  selectIsFetching,
  selectPageSize,
  selectTotalUsersCount
} from "../../redux/selectors/usersSelectors";

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
      users:selectAllUsers(state),
      currentPage:selectCurrentPage(state),
      pageSize:selectPageSize(state),
      totalUsersCount:selectTotalUsersCount(state),
      isFetching:selectIsFetching(state),
      followingInProgress:selectFollowingInProgress(state)
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
