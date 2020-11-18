import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

let postsItem =
    [
        { id: 1, post: 'Hello world!', likesCount: 1 },
        { id: 2, post: 'Bla-bla-bla', likesCount: 10 },
        { id: 3, post: 'Post 3', likesCount: 100 },
    ];

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={postsItem} />
        </div>
    );
}

export default Profile;