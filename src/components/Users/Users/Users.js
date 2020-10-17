import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
import defaultAvatar from '../../../assets/default-avatar.jpg';
import * as axios from 'axios';


const Users = props => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for(let i = 1; i <= pagesCount; i++) { pages.push(i) }

    return <div className={styles.userPage}>
                <h3>Users</h3>
                <div>
                    {pages.map(page => <span className={props.currentPage === page && styles.selectedPage}
                                            onClick={e => { props.onPageChanged(page) }}>{page}</span>)}
                </div>
                {
                    props.users.map(user => <div key={user.id} className={styles.userLabel}>
                            <div className={styles.user}>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={ user.photos.small !== null ? user.photos.small : defaultAvatar} />
                                </NavLink>
                                {/*                                 
                                <button className={ user.followed ? styles.followedBtn 
                                                                  : styles.unfollowedBtn } 
                                    
                                        onClick={() => props.toggleFollow(user.id)}>{ user.followed ? 'Unfollow' 
                                                                                                    : 'Follow'}
                                </button> */}

                                {user.followed ? <button className={user.followedBtn} 
                                                         onClick={() => {
                                                            axios
                                                            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                                                withCredentials: true,
                                                                headers: {
                                                                    'API-KEY': 'a20d3d38-d3db-493e-8dea-f02d733dfa29'
                                                                }
                                                            })
                                                            .then(response => {
                                                                if(response.data.resultCode === 0) {
                                                                    props.unfollow(user.id)
                                                                };
                                                            });
                                                         }

                                                         }>Unfollow
                                                </button>

                                               : <button className={user.unfollowedBtn} 
                                                        onClick={() => {

                                                        axios
                                                            .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                                withCredentials: true,
                                                                headers: {
                                                                    'API-KEY': 'a20d3d38-d3db-493e-8dea-f02d733dfa29'
                                                                }
                                                            })
                                                            .then(response => {
                                                                if(response.data.resultCode === 0) {
                                                                    props.follow(user.id)
                                                                };
                                                            });
                                                            
                                                        
                                                        }}>Follow
                                                </button>}
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
                <button onClick={props.getUsers}>Get Users</button>
            </div> 
    }
 

export default Users;