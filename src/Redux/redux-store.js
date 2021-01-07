import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer
});

// добавляем дополнительный параметр applyMiddleware
// для возможности работать с функциями (в данном случае с thunk'ами)
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
