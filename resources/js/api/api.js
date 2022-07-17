import axios from "axios";
import {toast} from "react-toastify";

export const usersAPI = {
    getUsers() {
        return axios.get('/get/users/list').then(response => {
            console.log('users')
            return response.data;
        })
    },
}

export const authAPI = {
    getAuthUserData() {
        return axios.get('/get/user/data').then(response => {
            return response.data;
        })
    },
    followUnfollow(newFollowingUsersId) {
        return axios.post('/update/user/data',{
            followingUserIds: newFollowingUsersId
        }).then(response => {
            toast.success('Users Update Successfully');
            setTimeout(() => {
            }, 700)
            return response.data;
        })
    },
}


