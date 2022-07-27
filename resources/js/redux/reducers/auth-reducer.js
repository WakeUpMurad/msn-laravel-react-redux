import {authAPI} from "../../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    authUserId: 0,
    following_users_id: []
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return  {
                ...state,
                following_users_id: [...action.userData[0]['following_users_id']],
                authUserId: action.userData[0].id,
            }

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
    console.log(responseData)
    dispatch(setAuthUserData(responseData))
}

export const follow = (followUsersIds) => async (dispatch) => {
    await authAPI.followUnfollow(followUsersIds).then( async() => {
        const responseData = await authAPI.getAuthUserData();
        dispatch(setAuthUserData(responseData))
        }
    )

}

export const unfollow = (followUsersIds) => async (dispatch) => {
    await authAPI.followUnfollow(followUsersIds).then( async() => {
            const responseData = await authAPI.getAuthUserData();
            dispatch(setAuthUserData(responseData))
        }
    )
}

export default authReducer;
