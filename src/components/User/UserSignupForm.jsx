import React from 'react';

import styles from "../../styles/User.module.css";

const UserSignupForm = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.close}>
            <svg className="icon">
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}/>
            </svg>
        </div>

        <h2 className={styles.title}>Sign Up</h2>
        <form  className={styles.form}>

        </form>

    </div>
  )
}

export default UserSignupForm;

