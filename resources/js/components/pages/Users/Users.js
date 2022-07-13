import React, {useEffect} from 'react';
import {ToastContainer} from "react-toastify";
import UsersRow from "./UsersRow";
import {getFollowingUsersId, getUsers} from "../../../redux/selectors";
import {connect} from "react-redux";
import {requestUsers} from "../../../redux/reducers/users-reducer";
import {requestAuthUserData, followUser, unfollowUser} from "../../../redux/reducers/auth-reducer";

const Users = ({users, followingUsersId, requestUsers, requestAuthUserData, followUser, unfollowUser}) => {

    //Life cycle method

    useEffect(() => {
        requestUsers();

    }, [])

    useEffect(() => {
        requestAuthUserData();

    }, [followingUsersId])

    return (
        <div className="container">
            <ToastContainer />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <table className="table table-dark table-hover">
                            <thead>
                            <tr>
                                <th scope="col" width='100px'>Users</th>
                                <th scope="col" width='100px'>Name</th>
                                <th scope="col" width='100px'>Email</th>
                                <th scope="col" width='100px'>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                users.map(item => {
                                    return <UsersRow key={item.id} id={item.id} name={item.name}
                                                     email={item.email} followingUsersId={followingUsersId}
                                                     followUser={followUser} unfollowUser={unfollowUser}/>
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        followingUsersId: getFollowingUsersId(state),
    }
}

export default connect(mapStateToProps, {requestUsers, requestAuthUserData, followUser,  unfollowUser})(Users);

