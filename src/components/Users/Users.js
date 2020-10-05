
import React from 'react';
import styles from './Users.module.css';

let Users = props => {
   
    if(props.users.length === 0) {
        props.setUsers( [
            { 
                id: 1,
                img: '', 
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
                img: '', 
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
                img: '', 
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
                img: '', 
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
        <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        <button onClick={() => props.toggleFollow(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)
        };
    </div> )
};

export default Users;