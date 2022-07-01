import React from "react";
import style from './ChatFooter.module.css'
import {sendMsgActionCreator, onTypingMsgActionCreator} from "../../../../../redux/reducers/dialogs-reducer";

const ChatFooter = (props) => {

    const input = React.createRef();

    const isEnter = (e) => e.code === 'Enter' ? sendMsg() : '';

    function sendMsg() {
        let msg = input.current.value;
        if (msg !== '')
            props.dispatch(
                sendMsgActionCreator(
                    props.path,
                    msg
                )
            );
    }
    function onTypingMsg() {
        let msg = input.current.value;
        props.dispatch(
            onTypingMsgActionCreator(
                props.path,
                msg
            )
        );
    }

    return (
        <div className={style.Main}>
            <input
                onKeyDown={isEnter}
                type="text"
                ref={input}
                onChange={onTypingMsg}
                value={props.typingMsg}
                autoFocus={true}
                placeholder="Type your message:" />
            <img onClick={sendMsg} src="https://cdn-icons-png.flaticon.com/512/736/736110.png" alt="send" />
        </div>
    )
}

export default ChatFooter;