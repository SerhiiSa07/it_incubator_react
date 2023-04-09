import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Serg</div>
                <div className={s.dialog}>Lex</div>
                <div className={s.dialog}>Maks</div>
                <div className={s.dialog}>Mark</div>
                <div className={s.dialog}>Lena</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>I am perfectly</div>
            </div>
        </div>
    )
}

export default Dialogs;