import React from 'react';
import { useSelector } from 'react-redux';
import UserSignupForm from './UserSignupForm';

import styles from "../../styles/User.module.css";

const UserForm = () => {
  const { showForm } = useSelector(({user}) => user);

  return  showForm ? (<>
        <div className={styles.overlay} />
        <UserSignupForm/> 
        </>) :  (<></>);
    

};

export default UserForm;