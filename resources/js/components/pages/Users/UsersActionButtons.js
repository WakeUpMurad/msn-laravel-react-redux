import React from 'react';
import {NavLink} from "react-router-dom";

const UsersActionButtons = ({userId, followingUsersId, followUser, unfollowUser}) => {
    return (
        <div className='btn-group' role='group'>
            <button type="button" className="btn btn-sm btn-outline-secondary">
                <NavLink to={`/profile/${userId}`}>
                    View Profile
                </NavLink>
            </button>
            {followingUsersId && followingUsersId.some(id => id === userId)
                ? <button type="button" className="btn btn-sm btn-outline-danger"
                            onClick={() => {unfollowUser(userId)}}>Unfollow</button>
                : <button type="button" className="btn btn-sm btn-outline-info"
                            onClick={() => {followUser(userId)}}>Follow</button>
            }
        </div>
    );
};

export default UsersActionButtons;
