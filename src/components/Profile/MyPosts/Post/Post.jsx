import s from './Post.module.css';

const Post = (props) => {
    console.log(props);
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7Pjkbj6zxH7UsGUVnHTa8cn9jU3KQeicsSw&usqp=CAU" />
            {props.message}
            <div>
                <span>{props.likes}</span>
                <span> like(s)</span>
            </div>
        </div>
    );
}

export default Post;