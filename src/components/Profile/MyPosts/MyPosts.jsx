import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <h3>MyPosts</h3>
            <div>
                <div className={s.textarea}>
                    <textarea></textarea>
                </div>
                <div className={s.button}>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='0'/>
                <Post message="It's my first post" likesCount='23'/>
            </div>
        </div>
    )
};

export default MyPosts;