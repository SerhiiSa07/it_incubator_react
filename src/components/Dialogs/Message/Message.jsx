import React from "react";
import s from './Message.module.css'
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Message = () => {
    let dialogs = [
        {id: 1, name: 'Serg'},
        {id: 2, name: 'Lex'},
        {id: 3, name: 'Maks'},
        {id: 4, name: 'Mark'},
        {id: 5, name: 'Lena'}
    ]
    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am perfectly'},
        {id: 4, message: 'Yes'},
        {id: 5, message: 'Yes'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Message;