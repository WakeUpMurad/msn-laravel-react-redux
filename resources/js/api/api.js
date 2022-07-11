import axios from "axios";

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
    }
}
