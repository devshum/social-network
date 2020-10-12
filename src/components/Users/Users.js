
import * as axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import defaultAvatar from '../../assets/default-avatar.jpg';

let Users = props => {
    const getUsers = () => {
        if(props.users.length === 0) {
                axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                props.setUsers(response.data.items);
            });   
        }
    };
   
    return (
        <div className={styles.userPage}>
            <h3>Users</h3>
            
            {
                props.users.map(user => <div key={user.id} className={styles.userLabel}>
                        <div className={styles.user}>
                            <img src={ user.photos.small !== null ? user.photos.small : defaultAvatar} />
                            
                            <button className={ user.followed ? styles.followedBtn 
                                                              : styles.unfollowedBtn } 

                                    onClick={() => props.toggleFollow(user.id)}>{ user.followed ? 'Unfollow' 
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
            <button onClick={getUsers}>Get Users</button>
        </div>
    )
}

export default Users;