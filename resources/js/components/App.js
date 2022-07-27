import React, {useEffect} from 'react';
import Table from "./pages/Employee/Table";
import Profile from "./pages/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialogs from "./pages/Dialogs/Dialogs";
import Users from "./pages/Users/Users";
import News from "./pages/News/News";
import Music from "./pages/Music/Music";
import Settings from "./pages/Settings/Settings";
import Home from "./pages/Home/Home";
import {getAuthUsersId, getFollowingUsersId, getUsers} from "../redux/selectors";
import {connect} from "react-redux";
import {requestUsers} from "../redux/reducers/users-reducer";
import {follow, requestAuthUserData, unfollow} from "../redux/reducers/auth-reducer";

function App({authUserId, users, followingUsersId, requestUsers, requestAuthUserData, follow, unfollow}) {

    const followFunc = (userId) => {
        const newArr = [...followingUsersId, userId]
        follow(newArr)
    }
    const unfollowFunc = (userId) => {
        const newArr = [...followingUsersId.filter((u) => u !== userId)]
        unfollow(newArr)
    }

    //Life cycle method

    useEffect(() => {
        requestUsers();
        requestAuthUserData();
    }, [])

    return (
        <>
            <Routes>
                <Route path='home' element={<Home />}/>
                <Route path='profile/*' element={<Profile authUserId={authUserId} followingUsersId={followingUsersId} follow={followFunc} unfollow={unfollowFunc}/>}/>
                <Route path='dialogs/*' element={<Dialogs />}/>
                <Route path='users/*' element={<Users users={users} followingUsersId={followingUsersId} follow={followFunc} unfollow={unfollowFunc}/>}/>
                <Route path='news' element={<News/>} />
                <Route path='music' element={<Music/>} />
                <Route path='employee' element={<Table />} />
                <Route path='settings' element={<Settings/>} />
                <Route path='*' element={<Table/>} />
            </Routes>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        authUserId: getAuthUsersId(state),
        followingUsersId: getFollowingUsersId(state),
        users: getUsers(state),
    }
}

export default connect( mapStateToProps, {requestUsers, requestAuthUserData, follow,  unfollow})(App);
