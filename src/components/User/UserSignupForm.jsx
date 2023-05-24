import React, { useState } from 'react';

import styles from "../../styles/User.module.css";

const UserSignupForm = () => {
    const [values, setValues ] = useState({
        name: "",
        email: "",
        password: "",
        avatar: "",
    });

    const handleChange = ({target: {value, name}}) =>{
        setValues({...values, [name]: value});
    }

  return (
    <div className={styles.wrapper}>
        <div className={styles.close}>
            <svg className="icon">
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}/>
            </svg>
        </div>

        <h2 className={styles.title}>Sign Up</h2>
        <form  className={styles.form}>
         <div className={styles.group}>
            <input type="email" placeholder='Your email' name="email" value="" autoComplete="off" onChange={handleChange} required/>
            <input type="name" placeholder='Your name' name="name" value="" autoComplete="off" onChange={handleChange} required/>
            <input type="password" placeholder='Your password' name="password" value="" autoComplete="off" onChange={ handleChange} required/>
            <input type="avatar" placeholder='Your avatar' name="avatar" value="" autoComplete="off" onChange={handleChange} required/>
         </div>

         <div className={styles.link}>I already have an account</div>
         <button type='submit' className={styles.submit}></button>
        </form>

    </div>
  )
}

export default UserSignupForm;

