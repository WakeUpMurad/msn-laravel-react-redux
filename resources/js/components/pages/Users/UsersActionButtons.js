import React from 'react';
import {NavLink} from "react-router-dom";

const UsersActionButtons = ({userId, followingUsersId, setFollowUser, setUnfollowUser}) => {
    return (
        <div className='btn-group' role='group'>
            <button type="button" className="btn btn-light">
                <NavLink to={`/profile/${userId}`}>
                    View Profile
                </NavLink>
            </button>
            {followingUsersId && followingUsersId.some(id => id === userId)
                ? <button type="button" className="btn btn-danger"
                            onClick={() => {setUnfollowUser(userId)}}>Unfollow</button>
                : <button type="button" className="btn btn-info"
                            onClick={() => {setFollowUser(userId)}}>Follow</button>
            }
        </div>
    );
};

export default UsersActionButtons;
