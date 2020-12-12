import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";
import React from "react";

const ProfileInfo = (props) => {
    console.log(props);
    // данные с бэка не успевают придти до момента отрисовки компоненты
    // поэтому если их нет, то показываем спиннер
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img width="800" src="https://www.krtmarketing.com/blog/wp-content/uploads/henry_windows_bliss.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || 'data:image/jpeg;base64,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'}/>
                <span>{props.profile.fullName}</span>
            </div>
        </div>
    );
}

export default ProfileInfo;