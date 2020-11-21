import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

    console.log(props);
    let postsElements = props.posts.map((el) => {
        return <Post message={el.post} likes={el.likesCount} />
    });


    // создание элемента для ссылки на какой-либо элемент JSX кода
    // используется в Реакте вместо метода нативного JS document.getElementBy...()
    // или document.querySelector()
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        // .current ссылается на нативный HTML-элемент
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                        cols="30" rows="5"
                        value={props.newPostText}
                        onChange={onPostChange}>
                    </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;