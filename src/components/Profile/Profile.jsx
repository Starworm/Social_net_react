import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    console.log(props);
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} />
        </div>
    );
}

export default Profile;