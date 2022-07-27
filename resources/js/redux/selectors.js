import {createSelector} from "reselect";

const getUsersSelector  = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    users.filter(u => true);
    return users
})

export const getFollowingUsersId = (state) => {
    return state.authUserData.following_users_id;
}
export const getAuthUsersId = (state) => {
    return state.authUserData.authUserId;
}
