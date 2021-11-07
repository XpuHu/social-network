import { connect } from "react-redux";
import Users from "./Users";
import { setCurrentPageAC, setTotalUsersAC, setUsersAC, toggleFollowAC } from "../../redux/usersReducer";
import UsersClass from "./UsersClass";

const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      currentPage: state.usersPage.currentPage,
      usersCountOnPage: state.usersPage.usersCountOnPage,
      totalUsers: state.usersPage.totalUsers
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      toggleFollow: (userId) => {
         dispatch(toggleFollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
      setCurrentPage: (currentPage) => {
         dispatch(setCurrentPageAC(currentPage))
      },
      setTotalUsers: (totalUsers) => {
         dispatch(setTotalUsersAC(totalUsers))
      }
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;
