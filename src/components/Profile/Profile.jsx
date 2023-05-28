import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { updateUser } from "../../features/user/userSlice";

import styles from "../../styles/Profile.module.css";

const Profile = () => {
    const dispatch = useDispatch();
    const {curentUser} = useState(({user}) => user);

    const [values, setValues] = useState({
      name: "",
      email: "",
      password: "",
      avatar: "",
    });

  
    const handleChange = ({ target: { value, name } }) => {
      setValues({ ...values, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const isNotEmpty = Object.values(values).every((val) => val);
  
      if (!isNotEmpty) return;
  
      dispatch(updateUser(values));
    };



  return (
    <div className={styles.profile}>
        {!curentUser ? <span>You need to log in</span> : (
             <form className={styles.form} onSubmit={handleSubmit}>
             <div className={styles.group}>
               <input
                 type="email"
                 placeholder="Your email"
                 name="email"
                 value={values.email}
                 autoComplete="off"
                 onChange={handleChange}
                 required
               />
             </div>
     
             <div className={styles.group}>
               <input
                 type="name"
                 placeholder="Your name"
                 name="name"
                 value={values.name}
                 autoComplete="off"
                 onChange={handleChange}
                 required
               />
             </div>
     
             <div className={styles.group}>
               <input
                 type="password"
                 placeholder="Your password"
                 name="password"
                 value={values.password}
                 autoComplete="off"
                 onChange={handleChange}
                 required
               />
             </div>
     
             <div className={styles.group}>
               <input
                 type="avatar"
                 placeholder="Your avatar"
                 name="avatar"
                 value={values.avatar}
                 autoComplete="off"
                 onChange={handleChange}
                 required
               />
             </div>
     
     
             <button type="submit" className={styles.submit}>
               Create an account
             </button>
           </form>



        )}
    </div>

  )
}

export default Profile;