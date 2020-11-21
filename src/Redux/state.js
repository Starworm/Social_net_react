let rerenderEntireTree

let state = {
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
        newMessage: 'Hi there!',
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
};

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMsg = {
        id: 4,
        message: state.dialogsPage.newMessage
    };

    state.dialogsPage.messages.push(newMsg);
    state.dialogsPage.newMessage = '';
    rerenderEntireTree(state);
}

export const updateNewMessage = (newM) => {
    state.dialogsPage.newMessage = newM;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;   // наблюдатель (паттерн "Observer")
}

export default state;