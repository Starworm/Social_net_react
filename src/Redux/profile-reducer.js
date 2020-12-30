import {openUserProfile} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        { id: 1, post: 'Hello world!', likesCount: 1 },
        { id: 2, post: 'Bla-bla-bla', likesCount: 10 },
        { id: 3, post: 'Post 3', likesCount: 100 },
    ],
    newPostText: 'Default text',
    profile: null,
}

// редьюсер, выполняющий определенные действия в зависимости от полученного типа экшена
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};

export const toOpenUserProfile = (userId) => {
    return (dispatch) => {
        openUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export default profileReducer;
