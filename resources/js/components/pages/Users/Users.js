import React, {useEffect, useState} from 'react';
import {toast, ToastContainer} from "react-toastify";
import UsersRow from "./UsersRow";
import {getFollowingUsersId, getUsers} from "../../../redux/selectors";
import {connect} from "react-redux";
import {requestUsers} from "../../../redux/reducers/users-reducer";
import {requestAuthUserData} from "../../../redux/reducers/auth-reducer";

const Users = ({users, followingUsersId, requestUsers, requestAuthUserData}) => {


    const [usersList, setUsersList] = useState([]);
    const [authUserFollows, setAuthUserFollows] = useState([]);

    //Get User Profile.

 /*   const getUsersList = () => {
        axios.get('/get/users/list').then((response) => {
            setUsersList(response.data);
        });
    }
    const getUserData = () => {
        axios.get('/get/user/data').then((response) => {
            console.log(response.data[0]['following_users_id'])
            setAuthUserFollows(response.data[0]['following_users_id']);
        });
    }
*/
    const setFollowUser = (id) => {
        let newAuthUserFollows = [...followingUsersId, id];
        axios.post('/update/user/data', {
            followingUserIds: newAuthUserFollows,
        }).then((response) => {
            toast.success('Users Update Successfully');
            setTimeout(() => {
            }, 1000)
        });
    }
    const setUnfollowUser = (id) => {
        let newAuthUserFollows = followingUsersId.filter((item) => item !== id)
        axios.post('/update/user/data', {
            followingUserIds: newAuthUserFollows,
        }).then((response) => {
            toast.success('Users Update Successfully');
            setTimeout(() => {
            }, 1000)
        });
    }

    //Life cycle method

    useEffect(() => {
        requestAuthUserData();
        requestUsers()
    },[followingUsersId])

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
                                                     setFollowUser={setFollowUser} setUnfollowUser={setUnfollowUser}/>
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

export default connect(mapStateToProps, {requestUsers, requestAuthUserData})(Users);

