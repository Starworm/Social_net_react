import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: 'Hello world!', likesCount: 1 },
                { id: 2, post: 'Bla-bla-bla', likesCount: 10 },
                { id: 3, post: 'Post 3', likesCount: 100 },
            ],
            newPostText: 'Default text'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: '123' },
                { id: 3, message: 'bla-bla' },
            ],
            newMessage: '',
            dialogs: [
                { id: 1, name: 'Vaas' },
                { id: 2, name: 'Jason' },
                { id: 3, name: 'Dennis' },
                { id: 4, name: 'Citra' },
                { id: 5, name: 'Alik' }
            ]
        },
        sidebarPage: {
            friends: [
                { name: 'Vas', avatar: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' },
                { name: 'Jason', avatar: 'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg' },
                { name: 'Samamsdfa', avatar: 'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg' },
                { name: 'Ja', avatar: 'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg' },
                { name: 'Jason dfsfd', avatar: 'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg' },
                { name: 'Jason df', avatar: 'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg' },
                { name: 'C', avatar: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg' },
                { name: 'Cit dfv ra', avatar: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg' },
                { name: 'Cit', avatar: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg' },
            ]
        }
    },

    _callSubscriber() {
        console.log('plug text');
    },

    // _addPost() {
    //     let newPost = {
    //         id: 5,
    //         post: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //     };

    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },

    // _updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    // _addMessage() {
    //     let newMsg = {
    //         id: 4,
    //         message: this._state.dialogsPage.newMessage
    //     };

    //     this._state.dialogsPage.messages.push(newMsg);
    //     this._state.dialogsPage.newMessage = '';
    //     this._callSubscriber(this._state);
    // },

    // _updateNewMessage(newM) {
    //     this._state.dialogsPage.newMessage = newM;
    //     this._callSubscriber(this._state);
    // },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;   // наблюдатель (паттерн "Observer")
    },

    // action - объект, описывающий действие, которое надо совершить
    // {type: 'ADD-POST'} или {type: 'ADD-MESSAGE'}
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state)
    }
}

export default store;
window.store = store;