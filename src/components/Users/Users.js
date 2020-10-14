import * as axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import defaultAvatar from '../../assets/default-avatar.jpg';

class Users extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items);
            // this.props.setTotalUsersCount(response.data.totalCount);
        });  
    }

    onPageChanged = page => {
        this.props.setCurrentPage(page);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items);
        });  
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const pages = [];
        for(let i = 1; i <= pagesCount; i++) { pages.push(i); };



        return (
            <div className={styles.userPage}>
                <h3>Users</h3>
                <div>
                    {pages.map(page => <span className={this.props.currentPage === page && styles.selectedPage}
                                             onClick={e => { this.onPageChanged(page) }}>{page}</span>)}
                </div>
                {
                    this.props.users.map(user => <div key={user.id} className={styles.userLabel}>
                            <div className={styles.user}>
                                <img src={ user.photos.small !== null ? user.photos.small : defaultAvatar} />
                                
                                <button className={ user.followed ? styles.followedBtn 
                                                                  : styles.unfollowedBtn } 
    
                                        onClick={() => this.props.toggleFollow(user.id)}>{ user.followed ? 'Unfollow' 
                                                                                                         : 'Follow'}
                                </button>
                            </div>
                            <div className={styles.userInfo}>
                                <div>
                                    <div className={styles.userTextBold}>{user.name}</div>
                                    <div>{user.status}</div>
                                </div>
                                <div>
                                    <div className={styles.userTextBold}>{'user.location.country'}</div>
                                    <div className={styles.userTextBold}>{'user.location.city'}</div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <button onClick={this.getUsers}>Get Users</button>
            </div>
        )
    }
};

// let Users = props => {
//     const getUsers = () => {
//         if(props.users.length === 0) {
//                 axios
//                 .get("https://social-network.samuraijs.com/api/1.0/users")
//                 .then(response => {
//                 props.setUsers(response.data.items);
//             });   
//         }
//     };
   
//     return (
//         <div className={styles.userPage}>
//             <h3>Users</h3>
            
//             {
//                 props.users.map(user => <div key={user.id} className={styles.userLabel}>
//                         <div className={styles.user}>
//                             <img src={ user.photos.small !== null ? user.photos.small : defaultAvatar} />
                            
//                             <button className={ user.followed ? styles.followedBtn 
//                                                               : styles.unfollowedBtn } 

//                                     onClick={() => props.toggleFollow(user.id)}>{ user.followed ? 'Unfollow' 
//                                                                                                 : 'Follow'}
//                             </button>
//                         </div>
//                         <div className={styles.userInfo}>
//                             <div>
//                                 <div className={styles.userTextBold}>{user.name}</div>
//                                 <div>{user.status}</div>
//                             </div>
//                             <div>
//                                 <div className={styles.userTextBold}>{'user.location.country'}</div>
//                                 <div className={styles.userTextBold}>{'user.location.city'}</div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             }
//             <button onClick={getUsers}>Get Users</button>
//         </div>
//     )
// }

export default Users;