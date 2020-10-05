import Users from "./Users";
import {connect} from "react-redux";

import { toggleFollowActionCreator,
         setUsersActionCreator } from "../../redux/users-reducer";

let mapStateToProps = state => ({ users: state.usersPage.usersData });

let mapDispatchToProps = dispatch => ({
    toggleFollow: userID => dispatch(toggleFollowActionCreator(userID)),
    setUsers: users => dispatch(setUsersActionCreator(users))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);