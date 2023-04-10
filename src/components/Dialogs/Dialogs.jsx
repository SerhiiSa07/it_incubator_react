import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Serg' id='1'/>
                <DialogItem name='Lex' id='2'/>
                <DialogItem name='Maks' id='3'/>
                <DialogItem name='Mark' id='4'/>
                <DialogItem name='Lena' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message='Hello'/>
                <Message message='How are you?'/>
                <Message message='I am perfectly'/>
            </div>
        </div>
    )
}

export default Dialogs;