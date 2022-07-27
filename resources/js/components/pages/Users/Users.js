import React from 'react';
import {ToastContainer} from "react-toastify";
import UsersRow from "./UsersRow";

const Users = ({users, followingUsersId, follow, unfollow}) => {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <ToastContainer />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                        users.map(item => {
                            return <UsersRow key={item.id} id={item.id} name={item.name}
                                             email={item.email} followingUsersId={followingUsersId}
                                             followUser={follow} unfollowUser={unfollow}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Users;

