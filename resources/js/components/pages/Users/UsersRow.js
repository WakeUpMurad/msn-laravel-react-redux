import React from 'react';
import UsersActionButtons from "./UsersActionButtons";
import {NavLink} from "react-router-dom";

const UsersRow = ({id, name, email, followingUsersId, followUser, unfollowUser}) => {
    return (
        <div className="col">
            <div className="card shadow-sm bg-gradient-light">
                <NavLink to={`/profile/${id}`}>
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: User Profile"
                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>User Profile</title>
                    <defs>
                        <linearGradient id="Gradient">
                            <stop offset="0%" stopColor="rgba(0, 109, 240, 1)"/>
                            <stop offset="100%" stopColor="#00E7F0"/>
                        </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#Gradient)"></rect>
                    <text x="30%" y="50%" fill="#eceeef" dy=".3em">{name}</text>
                    <text x="30%" y="60%" fill="#eceeef" dy=".3em">{email}</text>
                    <text x="30%" y="70%" fill="#eceeef" dy=".3em">{id}</text>
                </svg>
                </NavLink>
                <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <UsersActionButtons userId={id} followingUsersId={followingUsersId} followUser={followUser}
                                                unfollowUser={unfollowUser}/>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersRow;
