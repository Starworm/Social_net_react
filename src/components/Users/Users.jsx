import React from 'react';
import styles from './users.module.css'

let Users = (props) => {
    console.log(props.users);
if(props.users.length === 0) {
    props.setUsers(
        [{id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaJuXd05exiz7RMDHohhFRh7BySnxLAiGXA&usqp=CAU', followed: true, fullName: 'Vas', status: 'Island\'s chief', location: {country: 'Thailand', city: 'Islandville'}},
            {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXfNm71DdRde5ETp-7H0q0ApnJwQAFBWK4w&usqp=CAU', followed: false, fullName: 'Jason', status: 'Hostage', location: {country: 'Japan', city: 'Tokyo'}},
            {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaJuXd05exiz7RMDHohhFRh7BySnxLAiGXA&usqp=CAU', followed: false, fullName: 'Citra', status: 'Crazy woman', location: {country: 'USA', city: 'New York'}},
            {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXfNm71DdRde5ETp-7H0q0ApnJwQAFBWK4w&usqp=CAU', followed: true, fullName: 'Dennis', status: 'Local guy', location: {country: 'Russia', city: 'Moscow'}}]
    );
}
    return (
        <div>
            {props.users.map(u => {
                return (
                    <div key={u.id} className={styles.userField}>
                        <div className={styles.userAvatar}>
                            <div>
                                <img src={u.photoUrl} className={styles.userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.toFollow(u.id)}>Follow</button>}
                            </div>
                        </div>
                        <div className={styles.userInfo}>
                            <div className={styles.leftInfo}>
                                <div className={styles.text + ' ' + styles.userName}>{u.fullName}</div>
                                <div className={styles.text + ' ' + styles.userStatus}>{u.status}</div>
                            </div>
                            <div className={styles.rightInfo}>
                                <div className={styles.text + ' ' + styles.userCity}>{u.location.city}</div>
                                <div className={styles.text + ' ' + styles.userCountry}>{u.location.country}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users;