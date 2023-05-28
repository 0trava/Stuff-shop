import React, { useState } from 'react';

import styles from "../../styles/User.module.css";
import { useDispatch } from 'react-redux';
import { createUser } from "../../features/user/userSlice";

const UserLoginForm = ({closeForm}) => {
    const dispatch = useDispatch();

    const [values, setValues ] = useState({
        email: "",
        password: "",
    });


    // Фунція відправки форми реєстрації
    const handleSumite = (e) => {
        e.preventDefault();
        const isNotEmpty = Object.values(values).some(val => val);

        if (!isNotEmpty) return;
        
        dispatch(createUser(values));
        closeForm();
        
    }

    const handleChange = ({target: {value, name}}) =>{
        setValues({...values, [name]: value});
    }

  return (
    <div className={styles.wrapper}>
        <div className={styles.close} onClick={closeForm}>
            <svg className="icon">
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}/>
            </svg>
        </div>

        <h2 className={styles.title}>Sign Up</h2>
        <form  className={styles.form} onSubmit={handleSumite}>
         <div className={styles.group}><input type="email" placeholder='Your email' name="email" value={values.email} autoComplete="off" onChange={handleChange} required/></div>
         <div className={styles.group}><input type="password" placeholder='Your password' name="password" value={values.password} autoComplete="off" onChange={ handleChange} required/></div>
          
        
            
            
            


         <div className={styles.link}>Create an account</div>
         <button type='submit' className={styles.submit}>Login</button>
        </form>

    </div>
  )
}

export default UserLoginForm;

