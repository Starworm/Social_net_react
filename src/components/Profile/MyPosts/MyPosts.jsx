import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts =
        [
            { id: 1, post: 'Hello world!', likesCount: 1 },
            { id: 2, post: 'Bla-bla-bla', likesCount: 10 },
            { id: 3, post: 'Post 3', likesCount: 100 },
        ];

    let postsElements = posts.map((el) => {
        return <Post message={el.post} likes={el.likesCount} />
    })

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea cols="30" rows="5"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;