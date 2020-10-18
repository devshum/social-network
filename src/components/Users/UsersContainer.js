import React from 'react';
import * as axios from 'axios';
import Users from './Users/Users';
import Preloader from '../common/Preloader/Preloader';

import {connect} from "react-redux";

import { follow,
         unfollow,
         setUsers,
         setCurrentPage,
         setTotalUsersCount,
         toggleIsFetching,
         toggleFollowInProgress } from "../../redux/users-reducer";

import { usersAPI } from '../../api/api';

class UsersAPIComponent extends React.Component {
        componentDidMount() {
            this.props.toggleIsFetching()

            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching();
                this.props.setUsers(data);
                // this.props.setTotalUsersCount(response.data.totalCount);
            });  
        }
        
        onPageChanged = page => {
            this.props.setCurrentPage(page);
            this.props.toggleIsFetching();
            usersAPI.getUsers(page, this.props.pageSize).then(data => {
                this.props.toggleIsFetching()
                this.props.setUsers(data);
            });  
        }
        
        render() {
            return  <>
            {this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize} 
                   currentPage={this.props.currentPage} 
                   users={this.props.users} 
                   follow={this.props.follow} 
                   unfollow={this.props.unfollow} 
                   onPageChanged={this.onPageChanged} 
                   getUsers={this.props.getUsers} 
                   toggleFollowInProgress={this.props.toggleFollowInProgress}
                   followingInProgress={this.props.followingInProgress} />
            </>
        }
};

let mapStateToProps = state => ({ 
    users: state.usersPage.usersData ,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
});

export default connect(mapStateToProps, 
    { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowInProgress }
)(UsersAPIComponent);