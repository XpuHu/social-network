import { connect } from "react-redux";
import Users from "./Users";
import { setCurrentPageAC, setTotalUsersAC, setUsersAC, toggleFollowAC } from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";

class UsersContainer extends React.Component {

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

   setCurrentPageHandler = (currentPage) => {
      this.props.setCurrentPage(currentPage);
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ currentPage }&count=${ this.props.usersCountOnPage }`)
         .then(response => {
            this.props.setUsers(response.data.items);
         })
   }

   render() {
      return <Users totalUsers={ this.props.totalUsers } usersCountOnPage={ this.props.usersCountOnPage }
                    users={ this.props.users } currentPage={ this.props.currentPage }
                    toggleFollowHandler={ this.toggleFollowHandler }
                    setCurrentPageHandler={ this.setCurrentPageHandler } />
   }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);;
