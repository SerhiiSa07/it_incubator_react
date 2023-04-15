import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Serg', likesCount:'0' },
        {id: 2, message: 'Lex', likesCount:'23'}
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
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
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;