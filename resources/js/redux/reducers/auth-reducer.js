import {authAPI} from "../../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    following_users_id: []
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return  {...state, following_users_id: [...action.userData[0]['following_users_id']]}

        case FOLLOW:
            return {
                ...state,
                following_users_id: [...state.following_users_id, action.userId]
            }

        case UNFOLLOW:
            return {
                ...state,
                following_users_id: [...state.following_users_id.filter(id => id !== action.userId)]
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userData) => ({ type: SET_AUTH_USER_DATA, userData })
export const followUser = (userId) => ({ type: FOLLOW, userId })
export const unfollowUser = (userId) => ({ type: UNFOLLOW, userId })

export const requestAuthUserData = () => async (dispatch) => {
    const responseData = await authAPI.getAuthUserData();
    dispatch(setAuthUserData(responseData))
}

export const follow = (userId) => async (dispatch) => {
    dispatch(followUser(userId))
    await authAPI.followUnfollow(state.following_users_id)
}

export const unfollow = (userId) => async (dispatch) => {
    dispatch(unfollowUser(userId))
    await authAPI.followUnfollow(state.following_users_id)
}

export default authReducer;
