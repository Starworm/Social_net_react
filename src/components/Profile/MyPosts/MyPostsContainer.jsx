import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';

// const MyPostsContainer = () => {

//     // let state = props.store.getState();

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();

//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }

//                     let onPostChange = (text) => {
//                         const action = updateNewPostTextActionCreator(text);
//                         store.dispatch(action)
//                     }

//                     return (
//                         <MyPosts updateNewPostText={onPostChange}
//                             addPost={addPost}
//                             posts={state.profilePage.posts}
//                             newPostText={state.profilePage.newPostText} />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            console.log(text);
            const action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;