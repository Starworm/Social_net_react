import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const GET_STATUS = 'GET_STATUS';

let initialState = {
    posts: [
        {id: 1, post: 'Hello world!', likesCount: 1},
        {id: 2, post: 'Bla-bla-bla', likesCount: 10},
        {id: 3, post: 'Post 3', likesCount: 100},
    ],
    profile: null,
    status: ''
}

// редьюсер, выполняющий определенные действия в зависимости от полученного типа экшена
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: action.newPostBody,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostBody) => {
    return {
        type: ADD_POST,
        newPostBody
    }
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data['resultCode'] === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}



export default profileReducer;
