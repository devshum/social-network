import Users from "./Users";
import {connect} from "react-redux";

import { toggleFollowActionCreator,
         setUsersActionCreator,
         setCurrentPageActionCreator,
         setTotalUsersCountActionCreator } from "../../redux/users-reducer";

let mapStateToProps = state => ({ 
    users: state.usersPage.usersData ,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
});

let mapDispatchToProps = dispatch => ({
    toggleFollow: userID => dispatch(toggleFollowActionCreator(userID)),
    setUsers: users => dispatch(setUsersActionCreator(users)),
    setCurrentPage: page => dispatch(setCurrentPageActionCreator(page)),
    setTotalUsersCount: totalCount => dispatch(setTotalUsersCountActionCreator(totalCount))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);