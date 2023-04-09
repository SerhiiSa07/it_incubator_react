import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg"
                    alt=""
                />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
};

export default Profile;