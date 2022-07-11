import React from 'react';
import classes from "./Footer.module.css";
import github from '../../assets/img/linksIco/github.png'
import instagram from '../../assets/img/linksIco/instagram.png'
import telegram from '../../assets/img/linksIco/telegram.png'
import linkedin from '../../assets/img/linksIco/linkedin.png'
import {classNamesShape} from "react-transition-group/cjs/utils/PropTypes";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.typography}>
                Made by Murad Gakhramanov
            </div>
            <div className={classes.card}>
                <div className={`${classes.face} ${classes.faceFront}`}><img src={instagram} alt="img"/></div>
                <a href="https://www.instagram.com/murad.savage" className={`${classes.face} ${classes.faceBack}`}>
                    Instagram
                </a>
            </div>
            <div className={classes.card}>
                <div className={`${classes.face} ${classes.faceFront}`}><img src={telegram} alt="img"/></div>
                <a href="https://web.telegram.org/murad_savage" className={`${classes.face} ${classes.faceBack}`}>
                    Telegram
                </a>
            </div>
            <div className={classes.card}>
                <div className={`${classes.face} ${classes.faceFront}`}><img src={linkedin} alt="img"/></div>
                <a href="https://www.linkedin.com/in/murad-gakhramanov" className={`${classes.face} ${classes.faceBack}`}>
                    Linkedin
                </a>
            </div>
            <div className={classes.card}>
                <div className={`${classes.face} ${classes.faceFront}`}><img src={github} alt="img"/></div>
                <a href="https://github.com/WakeUpMurad" className={`${classes.face} ${classes.faceBack}`}>
                    Github
                </a>
            </div>
        </footer>
    );
};

export default Footer;
