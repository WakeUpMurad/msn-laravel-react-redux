import axios from "axios";
import {toast} from "react-toastify";

const instance = axios.create({
    withCredentials: true,
    baseURL: '/',
    headers: {}
})

export const usersAPI = {
    getUsers() {
        return instance.get('/get/users/list').then(response => {
            return response.data;
        })
    },
}
export const authAPI = {
    getAuthUserData() {
        return instance.get('/get/user/data').then(response => {
            return response.data;
        })
    },
    followUnfollow(newFollowingUsersId) {
        return instance.post('/update/user/data',{
            following_users_id: newFollowingUsersId
        }).then(response => {
            toast.success('Users Update Successfully');
            setTimeout(() => {
            }, 700)
            return response.data;
        })
    },
}


