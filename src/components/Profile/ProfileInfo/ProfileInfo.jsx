import React from 'react';
import s from './ProfileInfo.module.css';
import imageS
    from "S:/it-kamasutra/react/first_project/src/components/Profile/ProfileInfo/IMG_20221208_162603-min-round.png"

const ProfileInfo = () => {
    return (
        <div className={s.profileBlock}>
                <div className={s.imageBlockHeader}>
                    <img
                        src="https://live.staticflickr.com/8653/16474024798_f01d7d22f8_b.jpg"
                        alt=""/>
                </div>
                <div className={s.imageBlock}>
                    <img src={imageS} alt=""/>
                </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;