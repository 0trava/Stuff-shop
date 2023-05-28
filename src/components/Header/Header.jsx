import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import styles from '../../styles/Header.module.css';
import { ROUTES } from '../../utils/routes';
import LOGO from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg";
import {toggleForm} from "../../features/user/userSlice";



const  Header = () => {
    const { currentUser } = useSelector(({user}) => user);
    const [values, setValues] = useState({name: "Guest", avatar: AVATAR });
    const navigate = useNavigate();





    useEffect(() => {
        if(!currentUser) return;
        setValues(currentUser);
    }, [currentUser])


    const dispatch = useDispatch();

    const handleClick = () => {
        if (!currentUser) dispatch(toggleForm(true));
        else navigate(ROUTES.PROFILE);

    };


  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt="" />
            </Link>
        </div>
        <div className={styles.info}>
            <div className={styles.user} onClick={handleClick}>
                <div  className={styles.avatar} style={{backgroundImage: `url(${values.avatar})`}}/>
                <div className={styles.username}>{values.name}</div>
            </div>

            <form className={styles.form}>
            <div className={styles.icon}>
                <svg  className={styles["icon"]}>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}></use>
                </svg>
            </div>
            <div className={styles.input}>
                <input 
                    type="search" 
                    name="search" 
                    placeholder='Search for anything' 
                    autoComplete="off"
                    onChange={()=> {}}
                    value=""/>
            </div>

            {false && <div className={styles.box}></div>}
            </form>

            <div className={styles.account}>
                <Link to={ROUTES.HOME} className={styles.favourites}>
                <svg className={styles["icon-fav"]}>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}></use>
                </svg>
                </Link>
                <Link to={ROUTES.CART} className={styles.cart}>
                <svg className={styles["icon-cart"]}>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}></use>
                </svg>
                <span className={styles.count}>2</span>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Header
