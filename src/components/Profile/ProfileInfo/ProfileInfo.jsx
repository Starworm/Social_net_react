import s from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img width="800" src="https://www.krtmarketing.com/blog/wp-content/uploads/henry_windows_bliss.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                ava + descr
            </div>
        </div>
    );
}

export default ProfileInfo;