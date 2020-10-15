import React from 'react';
import * as axios from 'axios';
import Users from './Users/Users';
import Preloader from '../common/Preloader/Preloader';

import {connect} from "react-redux";

import { toggleFollowActionCreator,
         setUsersActionCreator,
         setCurrentPageActionCreator,
         setTotalUsersCountActionCreator,
         toggleIsFetching } from "../../redux/users-reducer";


class UsersAPIComponent extends React.Component {
        componentDidMount() {
            this.props.toggleIsFetching()
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                this.props.toggleIsFetching()
                this.props.setUsers(response.data.items);
                // this.props.setTotalUsersCount(response.data.totalCount);
            });  
        }
        
        onPageChanged = page => {
            this.props.setCurrentPage(page);
            this.props.toggleIsFetching()
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
                .then(response => {
                this.props.toggleIsFetching()
                this.props.setUsers(response.data.items);
            });  
        }
        
        render() {
            return  <>
            {this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize} 
                   currentPage={this.props.currentPage} 
                   users={this.props.users} 
                   toggleFollow={this.props.toggleFollow} 
                   onPageChanged={this.onPageChanged} 
                   getUsers={this.props.getUsers} />
            </>
        }
};

let mapStateToProps = state => ({ 
    users: state.usersPage.usersData ,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
});

let mapDispatchToProps = dispatch => ({
    toggleFollow: userID => dispatch(toggleFollowActionCreator(userID)),
    setUsers: users => dispatch(setUsersActionCreator(users)),
    setCurrentPage: page => dispatch(setCurrentPageActionCreator(page)),
    setTotalUsersCount: totalCount => dispatch(setTotalUsersCountActionCreator(totalCount)),
    toggleIsFetching: () => dispatch(toggleIsFetching())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);