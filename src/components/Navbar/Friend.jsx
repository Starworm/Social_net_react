import s from './Friend.module.css';

const Friend = (props) => {


    return (
        <div className={s.container}>
            <div>
                <img className={s.ava} src={props.avatar} />
            </div>
            <div className={s.name}>{props.name}</div>
        </div>
    );
}

export default Friend;