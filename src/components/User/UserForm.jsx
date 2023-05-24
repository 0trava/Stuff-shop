import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserSignupForm from './UserSignupForm';

import styles from "../../styles/User.module.css";
import { toggleForm } from 'features/user/userSlice';

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm } = useSelector(({user}) => user);

  const closeForm = () => dispatch(toggleForm(false));

  return  showForm ? (<>
        <div className={styles.overlay} onClick={closeForm}/>
        <UserSignupForm closeForm={closeForm}/> 
        </>) :  (<></>);
    

};

export default UserForm;