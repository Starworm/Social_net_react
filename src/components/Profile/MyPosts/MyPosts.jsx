import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post message="Hello world!" likes="100" />
                <Post message="Bla-bla-bla" likes="10" />
                <Post message="Post 3" likes="1" />
            </div>
        </div>
    );
}

export default MyPosts;