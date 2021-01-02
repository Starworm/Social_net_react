import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";
import React from "react";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    // данные с бэка не успевают придти до момента отрисовки компоненты
    // поэтому если их нет, то показываем спиннер
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img width="800" src="https://www.krtmarketing.com/blog/wp-content/uploads/henry_windows_bliss.jpg" />*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img className={s.imageClass} src={props.profile.photos.large || 'data:image/jpeg;base64,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'}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div className={s.userName}>{props.profile.fullName}</div>
                <div className={s.profileClass}>
                    <div>
                        {props.profile.contacts.facebook ? <img className={s.pict} title="facebook" width="16" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5c1UZ1oerKHlcDp6/M9WKHHzeHV2ulxgravt9Td4Ozl6PGDkb7ByN5YbatQZ6j29/q3v9h2hrhMY6aQnMSsAnKHAAAC70lEQVR4nO3caXLiMBRFYdoihhhsQ5jDlPT+F9mdqv7bRrYQ7z7XOQug9BUWHiQzmRARERERERERERERERERqVe0IZQPCtaDHFwo62Yz/VrP3jtbrH0Sy7rYH46/YtpV1oPtX6jCbBel+2npThjq/Taa51AYmrdTH583YdHsP/r5nAnLTa/j05+w+ezv8yRsq/MQoB9hmPeegb6E5eU2DOhFWK4G+rwIw3CgD2G4Dge6ELaboXPQi7CJu4nwK6zvKUAHwvCVBHQgrFMmoQdh4jGqL2wviUB5YRP/uMKnsJ2mAtWF9XLkwjblcs2FsDqMXZh6LpQXhn06UFtYpZ7t5YX1wEczboTF/AlAaWFYP0OovPZU9pmGt9194W79sIq/Jt2uqqrytwbcxJ4NT9e6tR7soEIk8N749E2K7zjgubEe6dAi75yOboGxwrnTQ/RvRZTwIHy6e1SccF5Yj3N4UcJjbT3MhKKEh9J6mAlFCZWvyR4WJXxDqBxChPohRKgfQoT6IUSoH0KE+iFEqB9ChPqNQ1h0vKJcxWwt/aofvelsDFzNOlpECO9dH/DT+8ZUWMYgErNdfXuB8Ga7RPwCofHy2wuE59EfpQvbH9MXCNejF65st2q8QPhtu5Mhv/BmfE2TX/hhvGMqv3BpvBslv/BuvGUqv3A2+nloff+YX3gx3rmYX2j9CCC78Ga9NzO78GS9dTG7cDv679B8c2Z24e/R/9LsRy+8Wm/kzy60nobZhdb3TvmF9u8e5hYaP0p8gfB99PPQ/l2F3MKp+StDuYXWvuxC60eJ+YXm907ZhQJ/NlA+4d9ZOrrbH6WTzbyjmL+D/Oz6BNsl/H8V/y9E7TYpOz7BGveoceyn6QohQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLs0R8aFUYEFLSeAgAAAABJRU5ErkJggg==" /> : ''}
                        {props.profile.contacts.facebook ? props.profile.contacts.facebook : '' }
                    </div>
                    <div>
                        {props.profile.contacts.github ? <img className={s.pict} title="github" width="16" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png" />: '' }
                        {props.profile.contacts.github ? props.profile.contacts.github: '' }
                    </div>
                    <div>
                        {props.profile.contacts.instagram ? <img className={s.pict} title="instagram" width="16" src="https://img2.freepng.ru/20180324/vye/kisspng-computer-icons-logo-instagram-5ab6f566c66c85.9462965815219398148128.jpg" />: '' }
                        {props.profile.contacts.instagram ? props.profile.contacts.instagram: '' }
                    </div>
                    <div>
                        {props.profile.contacts.twitter ? <img className={s.pict} title="twitter" width="16" src="https://www.iconninja.com/files/190/468/990/twitter-letter-twitter-icon.svg" />: '' }
                        {props.profile.contacts.twitter ? props.profile.contacts.twitter: '' }
                    </div>
                    <div>
                        {props.profile.contacts.vk ? <img className={s.pict} title="vk" width="16" src="https://img1.freepng.ru/20180320/pfw/kisspng-russia-social-media-marketing-vkontakte-social-net-vk-logo-png-5ab0b9c12843d2.6240689915215313291649.jpg" />: '' }
                        {props.profile.contacts.vk ? props.profile.contacts.vk: '' }
                    </div>
                    <div>
                        {props.profile.contacts.youtube ? <img className={s.pict} title="youtube" width="16" src="https://w7.pngwing.com/pngs/928/563/png-transparent-youtube-logo-computer-icons-youtube-angle-company-monochrome.png" />: '' }
                        {props.profile.contacts.youtube ? props.profile.contacts.youtube: '' }
                    </div>
                    <div>
                        {props.profile.contacts.website ? <img className={s.pict} title="web" width="16" src="https://cdn.pixabay.com/photo/2019/09/12/13/47/pictogram-4471660_1280.png" />: '' }
                        {props.profile.contacts.website ? props.profile.contacts.website: '' }
                    </div>
                </div>
            </div>
            <div className={s.statusClass}>
                <span>{props.profile.aboutMe ? 'About me: ' + props.profile.aboutMe : ''}</span>
            </div>
            <div className={s.jobClass}>
                <span>{props.profile.lookingForAJob ? 'Looking for job: ' + props.profile.lookingForAJobDescription : ''}</span>
            </div>
        </div>
    );
}

export default ProfileInfo;
