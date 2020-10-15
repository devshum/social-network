import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
import defaultAvatar from '../../../assets/default-avatar.jpg';


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
                <button onClick={props.getUsers}>Get Users</button>
            </div> 
    }
 

export default Users;