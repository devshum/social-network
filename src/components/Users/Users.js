
import React from 'react';
import styles from './Users.module.css';

let Users = props => {
   
    if(props.users.length === 0) {
        props.setUsers( [
            { 
                id: 1,
                img: 'https://image.freepik.com/free-vector/young-man-cartoon-scribble-faceless_18591-25764.jpg', 
                fullName: 'Dmitry K',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                },
                status: 'I am a boss',
                followed: true
            },
    
            { 
                id: 2,
                img: 'https://image.freepik.com/free-vector/young-man-cartoon-scribble-faceless_18591-25764.jpg',  
                fullName: 'Vlad S',
                location: {
                    city: 'Kiev',
                    country: 'Ukraine'
                },
                status: 'I am a lazy guy',
                followed: true
            },
    
            { 
                id: 3,
                img: 'https://image.freepik.com/free-vector/young-man-cartoon-scribble-faceless_18591-25764.jpg', 
                fullName: 'Sanya B',
                location: {
                    city: 'Kiev',
                    country: 'Ukraine'
                },
                status: 'I am a 3d artist',
                followed: false
            },
    
            {   
                id: 4,
                img: 'https://image.freepik.com/free-vector/young-man-cartoon-scribble-faceless_18591-25764.jpg', 
                fullName: 'Denis M',
                location: {
                    city: 'Kiev',
                    country: 'Ukraine'
                },
                status: 'I love smoking',
                followed: false
            }
        ] );
    };

    return (
        <div className={styles.userPage}>
            <h3>Users</h3>
            {
                props.users.map(user => <div key={user.id} className={styles.userLabel}>
                        <div className={styles.user}>
                            <img src={user.img} />
                            
                            <button className={ user.followed ? styles.followedBtn 
                                                              : styles.unfollowedBtn } 

                                    onClick={() => props.toggleFollow(user.id)}>{ user.followed ? 'Unfollow' 
                                                                                                : 'Follow'}
                            </button>
                        </div>
                        <div className={styles.userInfo}>
                            <div>
                                <div className={styles.userTextBold}>{user.fullName}</div>
                                <div>{user.status}</div>
                            </div>
                            <div>
                                <div className={styles.userTextBold}>{user.location.country}</div>
                                <div className={styles.userTextBold}>{user.location.city}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;