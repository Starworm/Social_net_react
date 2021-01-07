import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profile-reducer';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements = props.posts.map((el) => {
        return <Post message={el.post} likes={el.likesCount}/>
    });


    // создание элемента для ссылки на какой-либо элемент JSX кода
    // используется в Реакте вместо метода нативного JS document.getElementBy...()
    // или document.querySelector()
    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values['newPostElement']);
    };

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <AddPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                       name={"newPostElement"}
                       cols="30" rows="5">
                </Field>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: "profileAddPostForm"
})(AddPostForm);

export default MyPosts;
