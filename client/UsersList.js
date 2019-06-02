import React from 'react';

import styles from './_styles.scss';

const UsersList = props => (
    <div className={styles.Users}>
        <div className={styles.Users__Online}>
            {props.users.length} people online
        </div>
        <ul className={styles.Users__List}>
            {
                props.users.map((user) => {
                    return (
                        <li key={user.id} className={styles.Users__Item}>
                            {user.name}
                        </li>
                    );
                })
            }
        </ul>
    </div>
);
  
export default UsersList;