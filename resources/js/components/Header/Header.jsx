import React, {useContext} from 'react';
import classes from "./Header.module.css";
import logo from "../../assets/img/logo_192x192.png";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logOut} from "../../redux/reducers/auth-reducer";
import {AuthContext} from "../../context";
import MyButton from "../UI/MyButton/MyButton";

const Header = (props) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        props.logOut();
        setIsAuth(false);
    }

    return (
        <header className={classes.header}>
            <div className={classes.headerBody}>
                <img className={classes.headerLogo} src={logo} alt='this is top image'/>
                <div className={classes.loginBlock}>
                    { isAuth
                        ? <div>{props.login} - <MyButton onClick={logout}>Logout</MyButton></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => ({
    login: state.auth.login,
})

export default connect(mapStateToProps, {logOut})(Header);
